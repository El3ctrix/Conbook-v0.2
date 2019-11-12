import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../Usuario';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  usuarios: Observable<Usuario[]>;
  constructor(private usuarioService: UsuarioService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.usuarios = this.usuarioService.getUsuariosList();
  }

  deleteUsuario(id: number) {
    if (id === 1) {
      alert('¡No se puede Eliminar al Administrador!');
    } else {
      this.usuarioService.deleteUsuario(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
  }

  usuarioDetails(idusuario: number) {
    // localStorage.setItem('id', id.toString());
    this.router.navigate(['details', idusuario]);
  }

  updateUsuario(idusuario: number) {
    this.router.navigate(['update', idusuario]);
  }
}
