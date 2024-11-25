export default class Usuario {
    private id: number | undefined;  
    private nome!: string;
    private email!: string;
    private senha!: string;

 constructor (id: number, nome: string, email: string, senha: string){
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
 }
 public getId(): number | undefined {
    return this.id;
}

  public getNome(): string {
      return this.nome;
  }

  public getEmail(): string {
      return this.email;
  }

  public getSenha(): string {
      return this.senha;
  }

  public setId(id: number): void {
      this.id = id;
  }

  public setNome(nome: string): void {
      this.nome = nome;
  }

  public setEmail(email: string): void {
      this.email = email;
  }

  public setSenha(senha: string): void {
      this.senha = senha;
  }
}
