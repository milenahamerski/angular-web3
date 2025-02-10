import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polaroid-objetivo',
  templateUrl: './polaroid-objetivo.component.html',
  styleUrls: ['./polaroid-objetivo.component.scss']
})
export class PolaroidObjetivoComponent implements OnInit {
  culturaHistoria = 'assets/images/cultura.jpg';
  aventuraAdrenalina = 'assets/images/aventura.png';
  pazTranquilidade = 'assets/images/praia.jpg';
  gastronomiaDrinks = 'assets/images/gastronomia.jpg';
  comprasSouvenirs = 'assets/images/compras.jpg';
  vidaNoturnaFestas = 'assets/images/noite.jpg';

  selectedActivities: Set<string> = new Set();
  selectedSeason: string = '';
  diasViagem: number | null = null;
  budget: number | null = null;
  localViagem: string = '';
  indoTrabalho: boolean = false;
  horasTurismo: number | null = null;

  activities = [
    'Cultura e História',
    'Aventura e Adrenalina',
    'Paz e Tranquilidade',
    'Gastronomia e Drinks',
    'Compras e Souvenirs',
    'Vida Noturna e Festas'
  ];

  nextButtonVisible = false;

  ngOnInit(): void {
    const viagemData = localStorage.getItem('viagemData');
    if (viagemData) {
      const parsedData = JSON.parse(viagemData);
      this.diasViagem = parsedData.diasViagem || null;
      this.budget = parsedData.budget || null;
      this.localViagem = parsedData.localViagem || '';
      this.indoTrabalho = parsedData.indoTrabalho || false;
      this.horasTurismo = parsedData.horasTurismo || null;
      this.selectedSeason = parsedData.season || '';

      if (parsedData.activities) {
        this.selectedActivities = new Set(parsedData.activities.split(','));
        console.log('Atividades recuperadas do localStorage:', this.selectedActivities);
      }
    }
  }

  toggleImage(activity: string) {
    if (this.selectedActivities.has(activity)) {
      this.selectedActivities.delete(activity);
    } else {
      this.selectedActivities.add(activity);
    }
    console.log('Atividades selecionadas:', this.selectedActivities);
    this.nextButtonVisible = this.selectedActivities.size > 0;
  }

  isSelected(activity: string): boolean {
    return this.selectedActivities.has(activity);
  }

  getImage(activity: string): string {
    switch (activity) {
      case 'Cultura e História': return this.culturaHistoria;
      case 'Aventura e Adrenalina': return this.aventuraAdrenalina;
      case 'Paz e Tranquilidade': return this.pazTranquilidade;
      case 'Gastronomia e Drinks': return this.gastronomiaDrinks;
      case 'Compras e Souvenirs': return this.comprasSouvenirs;
      case 'Vida Noturna e Festas': return this.vidaNoturnaFestas;
      default: return this.culturaHistoria;
    }
  }

  activitiesToQueryParams() {
    return Array.from(this.selectedActivities).join(',');
  }
}
