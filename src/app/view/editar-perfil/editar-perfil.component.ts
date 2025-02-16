import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: []
})
export class EditarPerfilComponent {

  usuario = {
    nome: 'Nome Usuário',
    email: 'usuario@email.com',
    localizacao: 'Brasil',
    senha: '',
    fotoPerfil: '/assets/images/default-avatar.png'  
  };

  constructor(private router: Router) { }

  onSubmit() {
    console.log('Perfil atualizado:', this.usuario);
    this.router.navigate(['/perfil']);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.usuario.fotoPerfil = e.target.result; 
      };
      reader.readAsDataURL(file); 
    }
  }
}
