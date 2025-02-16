import { Component } from '@angular/core';

@Component({
  selector: 'app-meus-roteiros',
  templateUrl: './meus-roteiros.component.html',
  styleUrls: ['./meus-roteiros.component.scss'],
})
export class MeusRoteirosComponent {
  roteiros = [
    { id: 1, nome: 'Roteiro 1' },
    { id: 2, nome: 'Roteiro 2' },
    { id: 3, nome: 'Roteiro 3' },
  ];

  deleteRoteiro(id: number): void {
    this.roteiros = this.roteiros.filter((roteiro) => roteiro.id !== id);
  }
}
