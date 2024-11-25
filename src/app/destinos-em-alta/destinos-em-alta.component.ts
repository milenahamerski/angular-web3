import { Component } from '@angular/core';

@Component({
  selector: 'app-destinos-em-alta',
  templateUrl: './destinos-em-alta.component.html',
  styleUrls: ['./destinos-em-alta.component.css']
})
export class DestinosEmAltaComponent {
  destinos = ['Paris', 'Tokyo', 'Nova York', 'Barcelona', 'Rio de Janeiro'];
}
