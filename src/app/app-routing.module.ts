import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component'; 
import { NavbarComponent } from './view/navbar/navbar.component'; 
import { LoginComponent } from './view/login/login.component'; 
import { SigninComponent } from './view/signin/signin.component'; 
import { ClimaPreferenciaComponent } from './view/clima-preferencia/clima-preferencia.component'; 
import { ObjetivoPreferenciaComponent } from './view/objetivo-preferencia/objetivo-preferencia.component'; 
import { FormularioPreferenciaComponent } from './view/formulario-preferencia/formulario-preferencia.component';
import { ComoFuncionaComponent } from './view/como-funciona/como-funciona.component';
import { RoteiroComponent } from './view/roteiro/roteiro.component';
import { RoteiroCardsComponent } from './view/roteiro-cards/roteiro-cards.component';
import { PerfilComponent } from './view/perfil/perfil.component';
import { EditarPerfilComponent } from './view/editar-perfil/editar-perfil.component'; 
import { MeusRoteirosComponent } from './view/meus-roteiros/meus-roteiros.component';



const routes: Routes = [
  { path: '', component: HomeComponent },      
  { path: 'login', component: LoginComponent }, 
  { path: 'signin', component: SigninComponent }, 
  { path: 'clima-preferencia', component: ClimaPreferenciaComponent },
  { path: 'objetivo-preferencia', component: ObjetivoPreferenciaComponent },
  { path: 'formulario-preferencia', component: FormularioPreferenciaComponent },
  { path: 'como-funciona', component: ComoFuncionaComponent },
  { path: 'roteiro', component: RoteiroComponent },
  { path: 'roteiro-formulario', component: RoteiroCardsComponent },
  { path: 'perfil', component: PerfilComponent }, 
  { path: '', redirectTo: '/perfil', pathMatch: 'full' } ,
  { path: 'editar-perfil', component: EditarPerfilComponent },
  { path: 'meus-roteiros', component: MeusRoteirosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
