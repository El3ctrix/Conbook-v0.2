import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { DetallesUsuarioComponent } from './detalles-usuario/detalles-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateUsuarioComponent } from './update-usuario/update-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearUsuarioComponent,
    DetallesUsuarioComponent,
    ListaUsuarioComponent,
    UpdateUsuarioComponent
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
