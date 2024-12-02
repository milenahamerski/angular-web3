import { Component } from '@angular/core';

@Component({
  selector: 'app-clima-preferencia',
  templateUrl: './clima-preferencia.component.html',
  styleUrls: ['./clima-preferencia.component.scss']
})
export class ClimaPreferenciaComponent {
  onButtonClick(clima: string): void {
    console.log(`Preferência de clima: ${clima}`);
  }
}
