import { Component, OnInit } from '@angular/core';
import { Libro } from '../Libro';
import { LibroService } from '../libro.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles-libro',
  templateUrl: './detalles-libro.component.html',
  styleUrls: ['./detalles-libro.component.css']
})
export class DetallesLibroComponent implements OnInit {

  libro: Libro;
  id: number;

  constructor(private route: ActivatedRoute, private router: Router,
              private libroService: LibroService) { }

  ngOnInit() {
    this.libro = new Libro();
    this.id = this.route.snapshot.params.id;

    this.libroService.getLibro(this.id)
      .subscribe(data => {
        console.log(data);
        this.libro = data;
      });
  }

  list() {
    this.router.navigate(['libros']);
  }

}
