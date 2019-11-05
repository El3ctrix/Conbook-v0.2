import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesUsuarioComponent } from './detalles-usuario/detalles-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { ListaUsuarioComponent} from './lista-usuario/lista-usuario.component';
import { UpdateUsuarioComponent } from './update-usuario/update-usuario.component';
import { LoginComponent } from './login/login.component';
import {ListaLibroComponent} from './lista-libro/lista-libro.component';
import { DetallesLibroComponent } from './detalles-libro/detalles-libro.component';
import {CrearLibroComponent} from './crear-libro/crear-libro.component';
import {UpdateLibroComponent} from './update-libro/update-libro.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component : LoginComponent },
  { path: 'usuarios', component: ListaUsuarioComponent },
  { path: 'add' , component: CrearUsuarioComponent },
  { path: 'update/:id', component: UpdateUsuarioComponent },
  { path: 'details/:id', component: DetallesUsuarioComponent },
  { path: 'libros', component: ListaLibroComponent },
  { path: 'detailsl/:id', component: DetallesLibroComponent },
  { path: 'addLibro', component: CrearLibroComponent },
  { path: 'updateL/:id', component: UpdateLibroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
