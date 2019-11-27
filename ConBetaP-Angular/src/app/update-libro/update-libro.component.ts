import { Component, OnInit } from '@angular/core';
import { LibroService } from '../libro.service';
import { Libro } from '../Libro';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {CotizacionService} from '../cotizacion.service';
import {Cotizacion} from '../Cotizacion';
import {EstadoService} from '../estado.service';
import {Estado} from '../Estado';

@Component({
  selector: 'app-update-libro',
  templateUrl: './update-libro.component.html',
  styleUrls: ['./update-libro.component.css']
})
export class UpdateLibroComponent implements OnInit {

  submitted: boolean;
  libro: Libro;
  id: number;
  estado: string;
  usr: string;
  currentState: number;
  estado1 = new Estado();
  options = [
    { name: 'Solicitado', value: 1, rep: false },
    { name: 'En revisión', value: 2, rep: false },
    { name: 'Revisado', value: 3, rep: false },
    { name: 'En corrección', value: 4, rep: false },
    { name: 'Corregido', value: 5, rep: false },
    { name: 'Autorizado', value: 6, rep: false },
    { name: 'Rechazado', value: 7, rep: false },
    { name: 'Con ISBN', value: 8, rep: false },
    { name: 'En formación', value: 9, rep: false },
    { name: 'En imprenta', value: 10, rep: false },
    { name: 'A la venta', value: 11, rep: false },
    { name: 'Cotizacion', value: 12, rep: false }
  ];
  constructor(private route: ActivatedRoute,
              private libroService: LibroService,
              private estadoService: EstadoService,
              private router: Router) { }

  ngOnInit() {
    this.libro = new Libro();

    this.id = this.route.snapshot.params.id;

    this.libroService.getLibro(this.id)
      .subscribe(data => {
        console.log(data);
        this.libro = data;
        this.estadoService.getEstado(this.libro.estado)
          .subscribe(res => {
            console.log(res);
            this.estado1 = res;
          });
      });
  }

  updateLibro() {
    switch (this.estado) {
      case 'Solicitado':
        this.libro.estado = 1;
        break;
      case 'En revisión':
        this.libro.estado = 2;
        break;
      case 'Revisado':
        this.libro.estado = 3;
        break;
      case 'En corrección':
        this.libro.estado = 4;
        break;
      case 'Corregido':
        this.libro.estado = 5;
        break;
      case 'Autorizado':
        this.libro.estado = 6;
        break;
      case 'Rechazado':
        this.libro.estado = 7;
        break;
      case 'Con ISBN':
        this.libro.estado = 8;
        break;
      case 'En formación':
        this.libro.estado = 9;
        break;
      case 'En imprenta':
        this.libro.estado = 10;
        break;
      case 'A la venta':
        this.libro.estado = 11;
        break;
      case 'Cotizacion':
        this.libro.estado = 12;
        break;
    }
    this.libroService.updateLibro(this.id, this.libro)
      .subscribe( data => {
        console.log(data);
      });
    this.libro = new Libro();
  }

  onSubmit() {
    this.updateLibro();
    Swal.fire({
      title: 'Actualizar Información',
      text: '¡Información actualizada con Exito!',
      icon: 'success',
      confirmButtonText: 'Entendido'
    }).then(() => {
      this.router.navigate(['libros']);
    });
    // this.router.navigate(['libros']);
  }

}
