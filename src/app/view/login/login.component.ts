import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor, preencha todos os campos.';
      this.successMessage = '';
      return;
    }

    this.authService.login(this.email, this.password).subscribe(response => {
      if (response) {
        this.successMessage = 'Login realizado com sucesso!';
        this.errorMessage = '';
        this.email = '';
        this.password = '';

        setTimeout(() => {
          this.router.navigate(['/perfil']);
        }, 2000); 
      } else {
        this.errorMessage = 'Credenciais inválidas. Tente novamente.';
        this.successMessage = '';
      }
    }, error => {
      this.errorMessage = 'Erro ao realizar login. Tente novamente.';
      this.successMessage = '';
    });
  }
}
