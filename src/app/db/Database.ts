import AtividadeController from "../controllers/AtividadeController";
import Atividade from "../models/Atividade";
import Roteiro from "../models/Roteiro";
import Usuario from "../models/Usuario";
import UsuarioPremium from "../models/UsuarioPremium";

export default class Database {

    private atividades: Atividade[] = [];
    private roteiros: Roteiro[] = [];
    private usuarios: Usuario[] = [];

    public addNewActivity(atividade: Atividade) : void{
        this.atividades.push(atividade);
        console.log(this.atividades)
    }

    public addNewRoteiro(roteiro: Roteiro) : void{
        this.roteiros.push(roteiro);
        console.log(this.roteiros)
    }

    public addNewUser(usuario: Usuario) : void{
        this.usuarios.push(usuario);
        console.log(this.usuarios)
    }

}
