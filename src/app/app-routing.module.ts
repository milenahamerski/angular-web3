import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component'; 
import { LoginComponent } from './view/login/login.component'; 
import { SigninComponent } from './view/signin/signin.component'; 


const routes: Routes = [
  { path: '', component: HomeComponent },      
  { path: 'login', component: LoginComponent }, 
  { path: 'signin', component: SigninComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
