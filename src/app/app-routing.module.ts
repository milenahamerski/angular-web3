import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component'; 
import { LoginComponent } from './view/login/login.component'; 
import { SigninComponent } from './view/signin/signin.component'; 
import { ClimaPreferenciaComponent } from './view/clima-preferencia/clima-preferencia.component'; 
import { ObjetivoPreferenciaComponent } from './view/objetivo-preferencia/objetivo-preferencia.component'; 
import { FormularioPreferenciaComponent } from './view/formulario-preferencia/formulario-preferencia.component';
import { ComoFuncionaComponent } from './view/como-funciona/como-funciona.component';
import { RoteiroComponent } from './view/roteiro/roteiro.component';


const routes: Routes = [
  { path: '', component: HomeComponent },      
  { path: 'login', component: LoginComponent }, 
  { path: 'signin', component: SigninComponent }, 
  { path: 'clima-preferencia', component: ClimaPreferenciaComponent },
  { path: 'objetivo-preferencia', component: ObjetivoPreferenciaComponent },
  { path: 'formulario-preferencia', component: FormularioPreferenciaComponent },
  { path: 'como-funciona', component: ComoFuncionaComponent },
  { path: 'roteiro', component: RoteiroComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
