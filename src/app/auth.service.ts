import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definindo o tipo User para a resposta da API
export interface User {
  id: number;
  email: string;
  // Adicione outros campos conforme necessário
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users'; // Altere para o endpoint correto

  constructor(private http: HttpClient) {}

  // Alterando para o método POST para enviar email e senha
  login(email: string, password: string): Observable<User[]> {
    return this.http.post<User[]>(`${this.apiUrl}/login`, { email, password });
  }
}
