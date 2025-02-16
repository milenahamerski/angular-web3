import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-polaroid-button',
  templateUrl: './polaroid-button.component.html',
  styleUrls: ['./polaroid-button.component.scss'],
})
export class PolaroidButtonComponent {
  pri = 'assets/images/spring.jpg'; 
  image2 = 'assets/images/summer.jpg'; 
  image3 = 'assets/images/fall.jpg';
  image4 = 'assets/images/winter.jpg';  

  currentImage = this.pri; 
  currentSeason: string = ''; 

  constructor(private router: Router) {
    const storedSeason = localStorage.getItem('selectedSeason');
    if (storedSeason) {
      this.currentSeason = storedSeason;
      this.toggleImage(storedSeason); 
    }
  }

  toggleImage(season: string) {
    this.currentSeason = season;
    switch(season) {
      case 'Primavera':
        this.currentImage = this.pri;
        break;
      case 'Verão':
        this.currentImage = this.image2;
        break;
      case 'Outono':
        this.currentImage = this.image3;
        break;
      case 'Inverno':
        this.currentImage = this.image4;
        break;
      default:
        this.currentImage = this.pri;
        break;
    }
    localStorage.setItem('selectedSeason', season);
  }

  getImage(season: string): string {
    switch(season) {
      case 'Primavera':
        return this.pri;
      case 'Verão':
        return this.image2;
      case 'Outono':
        return this.image3;
      case 'Inverno':
        return this.image4;
      default:
        return this.pri;  
    }
  }

  goToNextSeason() {
    const seasons = ['Primavera', 'Verão', 'Outono', 'Inverno'];
    const currentIndex = seasons.indexOf(this.currentSeason);
    const nextSeason = seasons[(currentIndex + 1) % seasons.length];
    this.toggleImage(nextSeason); 
  }

  navigateToNext() {
    if (this.currentSeason) {
      this.router.navigate(['/objetivo-preferencia'], {
        queryParams: { season: this.currentSeason }
      }).then(() => {
        localStorage.setItem('selectedSeason', this.currentSeason);
      });
    }
  }
}
