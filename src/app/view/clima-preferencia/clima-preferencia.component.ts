import { Component } from '@angular/core';

@Component({
  selector: 'app-clima-preferencia',
  templateUrl: './clima-preferencia.component.html',
})
export class ClimaPreferenciaComponent {
  seasons = [
    { name: 'Primavera', image: 'src/assets/images/spring.jpg' },
    { name: 'Verão', image: 'src/assets/images/summer.jpg' },
    { name: 'Outono', image: 'src/assets/images/fall.jpg' },
    { name: 'Inverno', image: 'src/assets/images/winter.jpg' }
  ];

  selectedSeason: string | null = null;

  selectSeason(season: string): void {
    if (this.selectedSeason === season) {
      this.selectedSeason = null; 
    } else {
      this.selectedSeason = season; 
    }
  }
}
