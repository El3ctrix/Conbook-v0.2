import { Component, OnInit } from '@angular/core';
import { LibroService } from '../libro.service';
import { Libro } from '../Libro';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

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
              private router: Router) { }

  ngOnInit() {
    let temp = localStorage.getItem('nombre');
    this.usr = temp.valueOf();
    this.libro = new Libro();
    this.id = this.route.snapshot.params.id;
    this.libroService.getLibro(this.id)
      .subscribe(data => {
        console.log(data);
        this.libro = data;
      });
    this.currentState = this.libro.estado;
  }

  onSubmit() {
    /*
    if (this.libro.codigoisbn !== 'Sin Codigo') {
      this.libro.aprobado = true;
    }
    */
    Swal.fire(
      'Actualizar Información',
      '¡Información actializada con Exito!',
      'success'
    )
    // this.router.navigate(['libros']);
  }

}
