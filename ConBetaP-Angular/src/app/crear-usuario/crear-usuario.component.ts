import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../Usuario';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    if (this.usuario.nombre === undefined || this.usuario.correo === undefined
      || this.usuario.contraseña === undefined || this.usuario.rol === undefined) {
      Swal.fire({
        title: '¡Información incompleta!',
        text: 'Todos los campos son obligatorios.',
        icon: 'error',
        confirmButtonText: 'Entendido'
      }).then(() => {
        this.submitted = false;
      });
    } else {
      this.usuarioService.createUsuario(this.usuario)
        .subscribe(data => console.log(data), error => console.log(error));
      this.gotoList();
    }
  }

  onSubmit() {
    this.save();
  }

  gotoList() {
    this.submitted = true;
    this.router.navigate(['/usuarios']);
  }
}
