import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa o Router para redirecionamentos

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent {

  usuario = {
    nome: 'Nome Usuario',
    email: 'Usuario@email.com',
    localizacao: 'Brasil',
    dataCriacao: new Date(),
    notificacoes: true,
    temaEscuro: false,
    viagens: ['Rio de Janeiro', 'São Paulo', 'Florianópolis']
  };

  constructor(private router: Router) { } // Injeta o Router para navegação

  editarPerfil() {
    console.log('Editar perfil clicado!');
    this.router.navigate(['/editar-perfil']);
  }

  meusRoteiros() {
    console.log('Meus roteiros clicado!');
    this.router.navigate(['/roteiro']); // Redireciona para a página de roteiros
  }

  redirecionarObjetivoPreferencias() {
    console.log('Redirecionando para Objetivo e Preferências!');
    this.router.navigate(['/objetivo-preferencia']); // Redireciona para a página de Objetivo e Preferências
  }

  logout() {
    console.log('Logout realizado');
    // Adicione aqui a lógica para logout (excluir token, redirecionar, etc.)
  }
}
