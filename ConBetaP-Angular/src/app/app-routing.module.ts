import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesUsuarioComponent } from './detalles-usuario/detalles-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { ListaUsuarioComponent} from './lista-usuario/lista-usuario.component';
import { UpdateUsuarioComponent } from './update-usuario/update-usuario.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component : LoginComponent },
  { path: 'usuarios', component: ListaUsuarioComponent },
  { path: 'add' , component: CrearUsuarioComponent },
  { path: 'update/:id', component: UpdateUsuarioComponent },
  { path: 'details/:id', component: DetallesUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
