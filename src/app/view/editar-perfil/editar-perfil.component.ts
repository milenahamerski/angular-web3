import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: []
})
export class EditarPerfilComponent {

  // Modelo de usuário, com a propriedade para foto de perfil
  usuario = {
    nome: 'Nome Usuário',
    email: 'usuario@email.com',
    localizacao: 'Brasil',
    senha: '',
    fotoPerfil: '/assets/images/default-avatar.png'  // Imagem padrão
  };

  constructor(private router: Router) { }

  // Método para salvar as alterações e redirecionar para o perfil
  onSubmit() {
    console.log('Perfil atualizado:', this.usuario);
    this.router.navigate(['/perfil']);
  }

  // Método para lidar com a alteração da foto de perfil
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.usuario.fotoPerfil = e.target.result; // Definindo a imagem carregada no modelo
      };
      reader.readAsDataURL(file); // Converte a imagem para um formato que pode ser exibido
    }
  }
}
