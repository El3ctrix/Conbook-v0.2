import { Component, OnInit } from '@angular/core';
import {LibroService} from '../libro.service';
import { Libro } from '../Libro';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-lista-libro',
  templateUrl: './lista-libro.component.html',
  styleUrls: ['./lista-libro.component.css']
})
export class ListaLibroComponent implements OnInit {

  libros: Observable<Libro[]>;
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
  constructor(private serviceLibro: LibroService,
              private router: Router,
              private route: ActivatedRoute) {
    route.params.subscribe(val => this.reloadData());
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    if (localStorage.getItem('count') !== '1' && localStorage.getItem('count') !== '2' && localStorage.getItem('count') !== '3') {
      location.reload(false);
      localStorage.setItem('count', '1');
    }
  }

  reloadData() {
    this.libros = this.serviceLibro.getLibrosList();
  }

  detailsLibro(id: number){
    this.router.navigate(['detailsl', id]);
  }

  updateLibro(id: number){
    this.router.navigate(['updateL', id]);
  }

}
