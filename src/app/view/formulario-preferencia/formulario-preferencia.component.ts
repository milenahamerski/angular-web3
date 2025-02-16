import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'formulario-preferencia-viagem',
  templateUrl: './formulario-preferencia.component.html',
  styleUrls: ['./formulario-preferencia.component.scss']
})
export class FormularioPreferenciaComponent implements OnInit {
  diasViagem: number | null = null;
  budget: number | null = null;
  localViagem: string = '';
  indoTrabalho: boolean = false;
  horasTurismo: number | null = null;
  selectedSeason: string = ''; 
  selectedActivities: Set<string> = new Set(); 

  constructor(private router: Router) {}

  ngOnInit(): void {
    const viagemData = localStorage.getItem('viagemData');
    if (viagemData) {
      const parsedData = JSON.parse(viagemData);
      this.diasViagem = parsedData.diasViagem ?? null;
      this.budget = parsedData.budget ?? null;
      this.localViagem = parsedData.localViagem ?? '';
      this.indoTrabalho = parsedData.indoTrabalho ?? false;
      this.horasTurismo = parsedData.horasTurismo ?? null;
      this.selectedSeason = parsedData.selectedSeason ?? '';

      if (parsedData.selectedActivities) {
        this.selectedActivities = new Set(parsedData.selectedActivities.split(','));
      }
    }
  }

  toggleTrabalho(): void {
    if (!this.indoTrabalho) {
      this.horasTurismo = null; 
    }
  }

  gerarRoteiro(): void {
    const viagemData = {
      diasViagem: this.diasViagem,
      budget: this.budget,
      localViagem: this.localViagem,
      indoTrabalho: this.indoTrabalho,
      horasTurismo: this.horasTurismo,
      selectedSeason: this.selectedSeason,
      selectedActivities: Array.from(this.selectedActivities).join(',') 
    };

    localStorage.setItem('viagemData', JSON.stringify(viagemData));
    this.router.navigate(['/roteiro']);
  }

  onSubmit(): void {
    console.log('Preferências de Viagem:', {
      diasViagem: this.diasViagem,
      budget: this.budget,
      localViagem: this.localViagem,
      indoTrabalho: this.indoTrabalho,
      horasTurismo: this.horasTurismo
    });
  }

  // Adicionado método para validar budget
  validateBudget(): boolean {
    return this.budget !== null && this.budget > 0;
  }

  // Corrigido erro TS2531 garantindo que diasViagem seja um número válido
  isDiasViagemValid(): boolean {
    return this.diasViagem !== null && !isNaN(this.diasViagem) && this.diasViagem > 0;
  }

  // Adicionado método para validar se o formulário está completo e correto
  isFormValid(): boolean {
    return (
      this.isDiasViagemValid() &&
      this.validateBudget() &&
      this.localViagem.trim().length > 0
    );
  }
}
