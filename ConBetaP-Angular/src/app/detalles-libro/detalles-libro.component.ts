import { Component, OnInit } from '@angular/core';
import { Libro } from '../Libro';
import { LibroService } from '../libro.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AreaService} from '../area.service';
import {Area} from '../Area';
import {CotizacionService} from '../cotizacion.service';
import {Cotizacion} from '../Cotizacion';
import {EstadoService} from '../estado.service';
import {Estado} from '../Estado';

@Component({
  selector: 'app-detalles-libro',
  templateUrl: './detalles-libro.component.html',
  styleUrls: ['./detalles-libro.component.css']
})
export class DetallesLibroComponent implements OnInit {

  libro: Libro;
  area: Area;
  estado : Estado;
  id: number;
  cotizacion = new Cotizacion();
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
    { name: 'A la venta', value: 11, rep: false }
  ];

  constructor(private route: ActivatedRoute, private router: Router,
              private libroService: LibroService,
              private areaService: AreaService,
              private estadoService: EstadoService) { }

  ngOnInit() {
    this.libro = new Libro();
    this.area = new Area();
    this.estado = new Estado();
    this.id = this.route.snapshot.params.id;

    this.libroService.getLibro(this.id)
      .subscribe(data => {
        console.log(data);
        this.libro = data;
        this.areaService.getArea(this.libro.idarea)
          .subscribe(res => {
            console.log(res);
            this.area = res;
          });
        this.estadoService.getEstado(this.libro.estado)
          .subscribe(res1 => {
            console.log(res1);
            this.estado = res1;
          });
      });
  }

  list() {
    this.router.navigate(['libros']);
  }

}
