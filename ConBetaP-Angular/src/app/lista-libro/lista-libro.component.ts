import { Component, OnInit } from '@angular/core';
import {LibroService} from '../libro.service';
import { Libro } from '../Libro';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-lista-libro',
  templateUrl: './lista-libro.component.html',
  styleUrls: ['./lista-libro.component.css']
})
export class ListaLibroComponent implements OnInit {

  libros: Observable<Libro[]>;
  constructor(private serviceLibro: LibroService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.libros = this.serviceLibro.getLibrosList();
  }

  detailsLibro(id: number){
    this.router.navigate(['detailsl', id]);
  }

}
