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

  constructor(private router: Router) { } 

  editarPerfil() {
    console.log('Editar perfil clicado!');
    this.router.navigate(['/editar-perfil']);
  }

  meusRoteiros() {
    console.log('Meus roteiros clicado!');
    this.router.navigate(['/meus-roteiros']); 
  }

  redirecionarObjetivoPreferencias() {
    console.log('Redirecionando para Objetivo e Preferências!');
    this.router.navigate(['/clima-preferencia']); 
  }

  logout() {
    console.log('Logout realizado');
  }
}
