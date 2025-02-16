import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { SigninComponent } from './view/signin/signin.component';
import { ClimaPreferenciaComponent } from './view/clima-preferencia/clima-preferencia.component';
import { LoginFormComponent } from './view/login-form/login-form.component';
import { SignupPromptComponent } from './view/signup-prompt/signup-prompt.component';
import { PolaroidButtonComponent } from './view/polaroid-button/polaroid-button.component';
import { ObjetivoPreferenciaComponent } from './view/objetivo-preferencia/objetivo-preferencia.component';
import { PolaroidObjetivoComponent } from './view/polaroid-objetivo/polaroid-objetivo.component';
import { FormularioPreferenciaComponent } from './view/formulario-preferencia/formulario-preferencia.component';
import { ComoFuncionaComponent } from './view/como-funciona/como-funciona.component';
import { RoteiroComponent } from './view/roteiro/roteiro.component'; 
import { HttpClientModule } from '@angular/common/http';
import { RoteiroCardsComponent } from './view/roteiro-cards/roteiro-cards.component';
import { PerfilComponent } from './view/perfil/perfil.component';
import { EditarPerfilComponent } from './view/editar-perfil/editar-perfil.component';
import { MeusRoteirosComponent } from './view/meus-roteiros/meus-roteiros.component'; 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SigninComponent,
    ClimaPreferenciaComponent,
    LoginFormComponent,
    SignupPromptComponent,
    PolaroidButtonComponent,
    ObjetivoPreferenciaComponent,
    PolaroidObjetivoComponent,
    FormularioPreferenciaComponent,
    ComoFuncionaComponent,
    RoteiroComponent,
    RoteiroCardsComponent,
    PerfilComponent,
    EditarPerfilComponent,
    MeusRoteirosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
