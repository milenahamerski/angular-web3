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
import { SignupPromptComponent } from './view/signup-prompt/signup-prompt.component'; // Corrigido o caminho aqui

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
