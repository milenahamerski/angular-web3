import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component'; 
import { LoginComponent } from './view/login/login.component'; 
import { SigninComponent } from './view/signin/signin.component'; 
import { ClimaPreferenciaComponent } from './view/clima-preferencia/clima-preferencia.component'; // Corrigido o nome aqui

const routes: Routes = [
  { path: '', component: HomeComponent },      
  { path: 'login', component: LoginComponent }, 
  { path: 'signin', component: SigninComponent }, 
  { path: 'climapreferencia', component: ClimaPreferenciaComponent }, // Corrigido o nome aqui
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
