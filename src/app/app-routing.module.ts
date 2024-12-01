import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component'; 
import { DestinosEmAltaComponent } from './view/destinos-em-alta/destinos-em-alta.component'; 
import { ContadorViagemComponent } from './view/contador-viagem/contador-viagem.component'; 


const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'destinos', component: DestinosEmAltaComponent }, 
  { path: 'contador', component: ContadorViagemComponent }, 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
