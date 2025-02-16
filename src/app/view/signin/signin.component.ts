import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '', 
  };

  onSubmit() {
    console.log('Formulário enviado!', this.user);
  }

  // ? MÉTODO PARA VERIFICAR SE AS SENHAS COINCIDEM
  passwordsMatch(): boolean {
    return this.user.password === this.user.confirmPassword;
  }
}
