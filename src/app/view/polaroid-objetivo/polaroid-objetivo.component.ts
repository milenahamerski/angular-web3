import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polaroid-objetivo',
  templateUrl: './polaroid-objetivo.component.html',
  styleUrls: ['./polaroid-objetivo.component.scss']
})
export class PolaroidObjetivoComponent implements OnInit {
  // Caminhos das imagens
  culturaHistoria = 'assets/images/cultura.jpg';
  aventuraAdrenalina = 'assets/images/aventura.png';
  pazTranquilidade = 'assets/images/praia.jpg';
  gastronomiaDrinks = 'assets/images/gastronomia.jpg';
  comprasSouvenirs = 'assets/images/compras.jpg';
  vidaNoturnaFestas = 'assets/images/noite.jpg';

  // Atividades selecionadas e lista de todas as atividades
  selectedActivities: Set<string> = new Set();
  activities = [
    'Cultura e História',
    'Aventura e Adrenalina',
    'Paz e Tranquilidade',
    'Gastronomia e Drinks',
    'Compras e Souvenirs',
    'Vida Noturna e Festas'
  ];

  // Mapeamento de atividades para suas imagens
  activityImages: { [key: string]: string } = {
    'Cultura e História': this.culturaHistoria,
    'Aventura e Adrenalina': this.aventuraAdrenalina,
    'Paz e Tranquilidade': this.pazTranquilidade,
    'Gastronomia e Drinks': this.gastronomiaDrinks,
    'Compras e Souvenirs': this.comprasSouvenirs,
    'Vida Noturna e Festas': this.vidaNoturnaFestas
  };

  nextButtonVisible = false;

  ngOnInit(): void {
    this.loadActivitiesFromLocalStorage();
  }

  loadActivitiesFromLocalStorage(): void {
    const activity = localStorage.getItem('activity');
    if (activity) {
      const parsedData = JSON.parse(activity);
      if (Array.isArray(parsedData.activities)) {
        this.selectedActivities = new Set(parsedData.activities);
        console.log('Atividades recuperadas do localStorage:', Array.from(this.selectedActivities));
      } else {
        console.log('Nenhuma atividade encontrada no localStorage.');
      }
    } else {
      console.log('Nenhum dado encontrado no localStorage.');
    }
  }

  // Função para listar as atividades
  getActivityList(): string[] {
    return this.activities;
  }

  // Função para alternar as atividades selecionadas
  toggleActivity(activity: string): void {
    console.log('Clicando na atividade:', activity); // Log para ver a atividade clicada
    if (this.selectedActivities.has(activity)) {
      this.selectedActivities.delete(activity);
    } else {
      this.selectedActivities.add(activity);
    }
    console.log('Atividades selecionadas:', Array.from(this.selectedActivities)); // Ver atividades selecionadas
    this.nextButtonVisible = this.selectedActivities.size > 0;

    // Salvando as atividades no localStorage após a modificação
    this.saveActivitiesToLocalStorage();
  }

  // Verifica se a atividade está selecionada
  isSelected(activity: string): boolean {
    return this.selectedActivities.has(activity);
  }

  // Obter a imagem associada a cada atividade
  getImage(activity: string): string {
    return this.activityImages[activity] || this.culturaHistoria;
  }

  // Função para salvar as atividades no localStorage
  saveActivitiesToLocalStorage(): void {
    const activity = { activities: Array.from(this.selectedActivities) };
    console.log('Salvando atividades no localStorage:', activity.activities); // Ver dados antes de salvar
    localStorage.setItem('activity', JSON.stringify(activity));
  }

  activitiesToQueryParams() {
    return Array.from(this.selectedActivities).join(',');
  }
}
