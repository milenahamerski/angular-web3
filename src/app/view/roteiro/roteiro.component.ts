import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roteiro',
  templateUrl: './roteiro.component.html',
})
export class RoteiroComponent implements OnInit {
  viagemData: any;
  selectedActivities: Set<string> = new Set();
  selectedSeason: string = '';
  formattedData: any;

  ngOnInit(): void {
    const viagemData = localStorage.getItem('viagemData');
    if (viagemData) {
      this.viagemData = JSON.parse(viagemData);

      if (this.viagemData.selectedActivities) {
        this.selectedActivities = new Set(this.viagemData.selectedActivities);
      }

      this.selectedSeason = this.viagemData.selectedSeason || 'Nenhuma estação selecionada';
      
      this.formattedData = {
        diasDeViagem: this.viagemData.diasViagem || null,
        local: this.viagemData.localViagem || '',
        viagemTrabalho: this.viagemData.indoTrabalho !== undefined ? this.viagemData.indoTrabalho : false,
        horasLivresTurismo: this.viagemData.horasTurismo || null,
        atividades: Array.from(this.selectedActivities),
        clima: this.selectedSeason
      };

      console.log('Dados formatados:', this.formattedData);
    }
  }
}
