import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importando o Router

interface RoteiroDia {
  dia: number;
  manha: string;
  tarde: string;
  noite: string;
}

@Component({
  selector: 'app-roteiro-cards',
  templateUrl: './roteiro-cards.component.html',
})
export class RoteiroCardsComponent implements OnInit {
  roteiro: RoteiroDia[] = [];

  constructor(private router: Router) {} 

  ngOnInit(): void {
    const dadosSalvos = localStorage.getItem('roteiro');
    
    if (dadosSalvos) {
      const dados = JSON.parse(dadosSalvos);
      this.roteiro = dados.roteiro || [];
    }
  }

  gerarRoteiro(): void {
    console.log('Gerar roteiro novamente');
  }

  salvarRoteiro(): void {
    localStorage.setItem('roteiro', JSON.stringify({ roteiro: this.roteiro }));
    alert('Roteiro salvo com sucesso!');

    this.router.navigate(['/meus-roteiros']);
  }
}
