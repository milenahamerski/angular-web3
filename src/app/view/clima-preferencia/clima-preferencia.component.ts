import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima-preferencia',
  templateUrl: './clima-preferencia.component.html',
})
export class ClimaPreferenciaComponent implements OnInit {
  seasons = [
    { name: 'Primavera', image: 'src/assets/images/spring.jpg' },
    { name: 'Verão', image: 'src/assets/images/summer.jpg' },
    { name: 'Outono', image: 'src/assets/images/fall.jpg' },
    { name: 'Inverno', image: 'src/assets/images/winter.jpg' }
  ];

  selectedSeason: string | null = null;

  ngOnInit(): void {
    //? upd localStorage
    const savedSeason = localStorage.getItem('selectedSeason');
    if (savedSeason) {
      this.selectedSeason = savedSeason;
    }
  }

  selectSeason(season: string): void {
    if (this.selectedSeason === season) {
      this.selectedSeason = null;
      localStorage.removeItem('selectedSeason');
    } else {
      this.selectedSeason = season;
      localStorage.setItem('selectedSeason', this.selectedSeason);
    }
  }
}
