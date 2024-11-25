export default class Atividade {

    private id!: number;
    private prefEstacao!: string; 
    private prefAtividade!: string; 
    private horasExtra?: number; 

    public getId(): number {
        return this.id;
    }

    public getprefEstacao(): string {
        return this.prefEstacao;
    }

    public getprefAtividade(): string {
        return this.prefAtividade;
    }

    public gethorasExtra(): number | undefined {
        return this.horasExtra;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public setprefEstacao(prefEstacao: string): void {
        this.prefEstacao = prefEstacao;
    }

    public setprefAtividade(prefAtividade: string): void {
        this.prefAtividade = prefAtividade;
    }

    public sethorasExtra(horasExtra: number): void {
        this.horasExtra = horasExtra;
    }
}
