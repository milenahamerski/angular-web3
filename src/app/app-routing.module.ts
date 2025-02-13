import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component'; 
import { PerfilComponent } from './view/perfil/perfil.component';
import { EditarPerfilComponent } from './view/editar-perfil/editar-perfil.component';
const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'perfil', component: PerfilComponent }, 
  { path: '', redirectTo: '/perfil', pathMatch: 'full' } ,
  { path: 'editar-perfil', component: EditarPerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
