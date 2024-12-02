import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';

  onLogin() {
    console.log('Login:', this.email, this.password);
  }
}
