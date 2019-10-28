import { Component, OnInit } from '@angular/core';
import { LibroService } from '../libro.service';
import { Libro } from '../Libro';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.css']
})
export class CrearLibroComponent implements OnInit {

  libro = new Libro();
  submitted: boolean;
  justificacion: string;
  apoyo: string;
  publico: string;
  mercado: string;
  ejemplares: string;
  fecha: string;
  dataFinalidad = [
    { id: 1, name: 'Docencia', checked: false },
    { id: 2, name: 'Investigacion', checked: false },
    { id: 3, name: 'Difusion', checked: false }
  ];
  finalidadTipo = [
    { id: 1, name: 'Texto', checked: false },
    { id: 2, name: 'Manual', checked: false },
    { id: 3, name: 'Antología', checked: false },
    { id: 4, name: 'Consulta', checked: false },
    { id: 5, name: 'Otro', checked: false }
  ];
  financiamiento = [
    { id: 1, name: 'Recursos Externos (PAPIME, PAPIIT, CONACYT, SEP, otros)', checked: false },
    { id: 2, name: 'Sin recursos', checked: false }
  ];

  constructor(private libroService: LibroService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = false;
    alert(this.dataFinalidad[0].checked);
  }
}

