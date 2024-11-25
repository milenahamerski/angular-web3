export default class PrimaryScreen {
  private router: any;

  constructor(router?: any) {
    this.router = router;
  }

  getFirstScreen(): void {
    console.log('Bem-vindo ao Sistema de Roteiros de Viagem!');
    console.log('1. Criar Atividade');
    console.log('2. Criar Roteiro');
    console.log('3. Criar Usuário');
  }
}
