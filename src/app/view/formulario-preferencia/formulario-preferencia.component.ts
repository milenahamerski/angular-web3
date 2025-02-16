import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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

  loading: boolean = false;  
  loadingContent: boolean = false; 

  constructor(private router: Router, private http: HttpClient) {}

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
        this.selectedActivities = new Set(parsedData.selectedActivities);
      }
      
      localStorage.removeItem('viagemData');
    }
  }

  toggleTrabalho(): void {
    if (!this.indoTrabalho) {
      this.horasTurismo = null; 
    }
  }

  gerarRoteiro(): void {
    const viagemData = {
      diasDeViagem: this.diasViagem,
      budget: this.budget,
      local: this.localViagem,
      viagemTrabalho: this.indoTrabalho,
      horasLivresTurismo: this.horasTurismo,
      clima: this.selectedSeason,
      atividades: Array.from(this.selectedActivities)
    };

    this.loading = true;

    this.http.post('http://127.0.0.1:8000/gerar-roteiro', viagemData).subscribe({
      next: (response) => {
        console.log('Roteiro gerado pela API:', response);
        localStorage.setItem('roteiro', JSON.stringify(response)); 

        this.loadingContent = true;

        setTimeout(() => {
          this.loadingContent = false; 
          this.loading = false; 
          this.router.navigate(['/roteiro']); 
        }, 2000);
      },
      error: (error) => {
        console.error('Erro ao gerar roteiro:', error);
        this.loading = false; 
      }
    });
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

  validateBudget(): boolean {
    return this.budget !== null && this.budget > 0;
  }

  isDiasViagemValid(): boolean {
    return this.diasViagem !== null && !isNaN(this.diasViagem) && this.diasViagem > 0;
  }

  isFormValid(): boolean {
    return (
      this.isDiasViagemValid() &&
      this.validateBudget() &&
      this.localViagem.trim().length > 0
    );
  }
}
