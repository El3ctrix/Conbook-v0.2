import {Component, OnInit} from '@angular/core';
import {Usuario} from './Usuario';
import Swal from 'sweetalert2';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Conbook BETA v0.2';
  usuario = new Usuario();
  rol = localStorage.getItem('rol');

  ngOnInit(): void {

  }

  constructor(private router: Router,
              private route: ActivatedRoute) {
    route.params.subscribe(val => this.ngOnInit());
  }

  refresh() {

  }

  logout() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: '¿Cerrar Sesión?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result => {if (result.value) {
      this.rol = '4';
      localStorage.removeItem('count');
      this.router.navigate(['login']);
    } }));
  }

}
