import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jsonUrl = 'http://localhost:3001/users'; // ? URL do JSON Server

  constructor(private http: HttpClient) {}

  // Login: verifica credenciais e salva no localStorage
  login(email: string, password: string): Observable<User | null> {
    return this.http.get<User[]>(this.jsonUrl).pipe(
      map(users => users.find(u => u.email === email && u.password === password) || null),
      tap(user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user)); // ? Salvar usuário logado
        }
      })
    );
  }

  // Cadastro de usuário
  register(newUser: User): Observable<User> {
    return this.http.post<User>(this.jsonUrl, newUser);
  }

  // Verifica se o usuário está logado
  getLoggedUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // Logout: remove usuário do localStorage
  logout(): void {
    localStorage.removeItem('user');
  }
}