import { Component } from '@angular/core';

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

  editarPerfil() {
    console.log('Editar perfil clicado!');
    // Aqui você pode adicionar lógica para abrir um modal de edição ou redirecionar para outra página
  }

  minhasViagens() {
    console.log('Minhas viagens clicado!');
    // Aqui você pode redirecionar para uma página de viagens
  }

  logout() {
    console.log('Logout realizado');
    // Adicione aqui a lógica para logout (excluir token, redirecionar, etc.)
  }
}

