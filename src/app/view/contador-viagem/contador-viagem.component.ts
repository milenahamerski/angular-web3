import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador-viagem',
  templateUrl: './contador-viagem.component.html',
  styleUrls: ['./contador-viagem.component.scss']
})
export class ContadorViagemComponent implements OnInit {
  dataViagem: Date = new Date('2024-12-25'); // Data da próxima viagem
  diasFaltando: number = 0;

  ngOnInit() {
    this.atualizarContagem();
  }

  atualizarContagem() {
    const hoje = new Date();
    const diffTime = Math.abs(this.dataViagem.getTime() - hoje.getTime());
    this.diasFaltando = Math.ceil(diffTime / (1000 * 3600 * 24)); // Calcula os dias restantes
  }
}
