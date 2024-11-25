import Usuario from "./Usuario";

export default class UsuarioPremium extends Usuario {
    
    private beneficios!: string[];

    constructor(id: number, nome: string, email: string, senha: string, beneficios: string[]) {
        super(id, nome, email, senha); 
        this.beneficios = beneficios;
    }

    public getBeneficios(): string[] {
        return this.beneficios;
    }

    public setBeneficios(beneficios: string[]): void {
        this.beneficios = beneficios;
    }
}
