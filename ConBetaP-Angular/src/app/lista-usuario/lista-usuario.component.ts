import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../Usuario';
import {UsuarioService} from '../usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  usuarios: Observable<Usuario[]>;
  usuario: Usuario;
  options = [
    { name: 'Administrador'},
    { name: 'Representante'},
    { name: 'Autor'}
  ];

  constructor(private usuarioService: UsuarioService,
              private router: Router, private route: ActivatedRoute) {
    route.params.subscribe(val => this.reloadData());
    this.ngOnInit();
  }

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

  sendMail(usuario: Usuario) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: 'Enviar Solicitud de Publicacion',
      text: '¿Desea enviar Solicitud de Publicacion a ' + usuario.correo + '?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Enviar Correo',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result => {if (result.value) {
      this.usuarioService.sendMail(usuario)
        .subscribe(res => {
          console.log(res);
        })
      swalWithBootstrapButtons.fire({
        title: 'Correo Enviado',
        text: 'La Solicitud de Publicacion ha sido enviada.',
        icon: 'success',
        confirmButtonText: 'Entendido'
        }
      );
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire({
          title: 'Envio de correo cancelado',
          text: 'La Solicitud no ha sido enviada.',
          icon: 'error',
          confirmButtonText: 'Entendido'
        }
      ); } }));
  }
}
