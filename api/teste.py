from fastapi import FastAPI
from pydantic import BaseModel
import requests
import json
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

link = 'https://api.openai.com/v1/chat/completions'

class RoteiroRequest(BaseModel):
    diasDeViagem: int
    local: str
    viagemTrabalho: bool
    horasLivresTurismo: int
    atividades: list
    clima: str


@app.post("/gerar-roteiro")
async def gerar_roteiro(viagem_data: RoteiroRequest):
    print(f'Recebendo os dados: {viagem_data}')
    try:
        body_mensagem = {
            "model": "gpt-4",
            "messages": [
                {
                    "role": "user",
                    "content": f"""chat, gostaria que voce fizesse um roteiro de viagem com as seguintes infos: 
                    {{
                      "diasDeViagem": {viagem_data.diasDeViagem},
                      "local": "{viagem_data.local}",
                      "viagemTrabalho": {viagem_data.viagemTrabalho},
                      "horasLivresTurismo": {viagem_data.horasLivresTurismo},
                      "atividades": {json.dumps(viagem_data.atividades)},
                      "clima": "{viagem_data.clima}"
                    }} e devolvesse algo assim porem sem comentario, somente json: 
                    {{
                      "roteiro": [
                        {{ "dia": 1, "manha": "Chegada e check-in no hotel", "tarde": "Compromissos de trabalho", "noite": "Passeio pelo Centro Histórico e jantar em um restaurante típico" }},
                        {{ "dia": 2, "manha": "Compromissos de trabalho", "tarde": "Visita à Galleria degli Uffizi para apreciar arte renascentista", "noite": "Caminhada na Ponte Vecchio" }}
                      ]
                    }}
                    """
                }
            ]
        }

        print("Body da mensagem para a OpenAI:", json.dumps(body_mensagem, indent=2))

        body_mensagem = json.dumps(body_mensagem)
        response = requests.post(link, headers=headers, data=body_mensagem)
        print(response)
        print(response.text)
        if response.status_code == 200:
            resposta = response.json()
            
            try:
                content_str = resposta["choices"][0]["message"]["content"]
                content_json = json.loads(content_str)  
                
                return JSONResponse(content=content_json, status_code=200)
            except json.JSONDecodeError as e:
                return JSONResponse(content={"error": "Erro ao processar a resposta da OpenAI", "message": str(e)}, status_code=500)
        else:
            return JSONResponse(content={"error": "Erro ao obter dados da OpenAI", "message": response.text}, status_code=500)

    except Exception as e:
        return JSONResponse(content={"error": "Erro interno no servidor", "message": str(e)}, status_code=500)
