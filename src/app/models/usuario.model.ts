export class Usuario {
    constructor(
      public nome: string,
      public email: string,
      public preferencias: string[]
    ) {}
  
    // Método para obter detalhes do usuário
    obterDetalhes(): string {
      return `Usuário: ${this.nome} - Email: ${this.email}`;
    }
  
    // Método para obter recomendações básicas (sem IA)
    obterRecomendacoes(): string[] {
      return ["Destino A", "Destino B", "Destino C"];
    }
  }