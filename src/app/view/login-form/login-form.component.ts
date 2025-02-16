import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Router } from '@angular/router';  

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';
  apiUrl: string = 'http://localhost:3001/users';  //?JSON Server

  constructor(private http: HttpClient, private router: Router) {}  // 

  onLogin() {
    this.http.get<any[]>(this.apiUrl).subscribe(
      users => {
        const user = users.find(u => u.email === this.email && u.password === this.password);

        if (user) {
          console.log('Login bem-sucedido:', this.email);
          this.router.navigate(['/home']); 
        } else {
          console.log('Credenciais inválidas');
          alert('Credenciais inválidas');
        }
      },
      error => {
        console.error('Erro ao conectar com o servidor:', error);
        alert('Erro ao tentar fazer login. Por favor, tente novamente mais tarde.');
      }
    );
  }
}
