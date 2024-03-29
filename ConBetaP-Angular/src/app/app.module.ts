import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { DetallesUsuarioComponent } from './detalles-usuario/detalles-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateUsuarioComponent } from './update-usuario/update-usuario.component';
import { LoginComponent } from './login/login.component';
import { ListaLibroComponent } from './lista-libro/lista-libro.component';
import { DetallesLibroComponent } from './detalles-libro/detalles-libro.component';
import { CrearLibroComponent } from './crear-libro/crear-libro.component';
import { UpdateLibroComponent } from './update-libro/update-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearUsuarioComponent,
    DetallesUsuarioComponent,
    ListaUsuarioComponent,
    UpdateUsuarioComponent,
    LoginComponent,
    ListaLibroComponent,
    DetallesLibroComponent,
    CrearLibroComponent,
    UpdateLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
