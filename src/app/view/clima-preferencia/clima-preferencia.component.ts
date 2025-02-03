import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-clima-preferencia',
  templateUrl: './clima-preferencia.component.html',
  styleUrls: ['./clima-preferencia.component.scss']
})
export class ClimaPreferenciaComponent {
  seasons = ['Primavera', 'Verão', 'Outono', 'Inverno']; // Estações
  selectedSeason: string | null = null; // Estação selecionada

  @Output() seasonSelected = new EventEmitter<string>(); // Emite o evento quando uma estação é selecionada

  // Definindo o tipo de objeto para garantir que as chaves são corretamente tipadas
  seasonImages: { [key in 'Primavera' | 'Verão' | 'Outono' | 'Inverno']: string } = {
    Primavera: '/assets/images/spring.jpg',
    Verão: '/assets/images/summer.jpg',
    Outono: '/assets/images/fall.jpg',
    Inverno: '/assets/images/winter.jpg'
  };

  selectSeason(season: string): void {
    this.selectedSeason = season;
    this.seasonSelected.emit(season); // Emite o nome da estação
  }

  getSeasonDate(season: string): string {
    switch(season) {
      case 'Primavera': return '21 MAR';
      case 'Verão': return '21 JUN';
      case 'Outono': return '23 SET';
      case 'Inverno': return '21 DEZ';
      default: return '';
    }
  }

  // Função para pegar a imagem da estação
  getSeasonImage(season: string): string {
    return this.seasonImages[season as 'Primavera' | 'Verão' | 'Outono' | 'Inverno'] || '/assets/images/default.jpg'; 
  }
}
