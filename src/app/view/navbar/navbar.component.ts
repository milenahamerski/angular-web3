import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  rotaAtual: string = '';
  menuOpen: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.rotaAtual = this.router.url;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
