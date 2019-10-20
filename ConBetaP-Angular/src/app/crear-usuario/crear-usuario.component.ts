import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  submitted: boolean;
  password: string;
  rol: string;
  rol1: number;

  options = [
    { name: 'Representante', value: 2 }
  ];

  constructor(private usuarioService: UsuarioService,
              private router: Router) { }

  ngOnInit() {
  }


  prueba() {
    switch (this.rol) {
      case 'Representante':
        this.rol1 = 2;
        break;
      case 'Autor':
        this.rol1 = 3;
        break;
    }
    alert('El Rol es ' + this.rol + ' y el id del rol es ' + this.rol1);
  }

  save() {
    this.usuario.contraseña = this.password;
    switch (this.rol) {
      case 'Representante':
        this.usuario.rol = 2;
        break;
      case 'Autor':
        this.usuario.rol = 3;
        break;
    }
    this.usuarioService.createUsuario(this.usuario)
      .subscribe(data => console.log(data), error => console.log(error));
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/usuarios']);
  }
}
