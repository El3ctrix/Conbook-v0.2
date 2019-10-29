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
  report: string;
  finalidades: string;
  finalidadesTipoC: string;
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
    this.finalidades = 'Finalidades: ';
    this.finalidadesTipoC = 'Tipo de Texto para Docencia: ';
    this.report = 'Nombre de la Obra: ' + this.libro.nombrelibro + '\n';
    if (this.dataFinalidad[0].checked) {
      this.finalidades += this.dataFinalidad[0].name + '\n';
    } else {
      if (this.dataFinalidad[1].checked){
        this.finalidades += this.dataFinalidad[1].name + '\n';
      } else {
        if (this.dataFinalidad[2].checked){
          this.finalidades += this.dataFinalidad[2].name + '\n';
        }
      }
    }
    if (this.dataFinalidad[0].checked){
      if (this.finalidadTipo[0].checked) {
        this.finalidadesTipoC += this.finalidadTipo[0].name + '\n';
      } else {
        if (this.finalidadTipo[1].checked) {
          this.finalidadesTipoC += this.finalidadTipo[1].name + '\n';
        } else {
          if (this.finalidadTipo[2].checked) {
            this.finalidadesTipoC += this.finalidadTipo[2].name + '\n';
          } else {
            if (this.finalidadTipo[3].checked) {
              this.finalidadesTipoC += this.finalidadTipo[3].name + '\n';
            }
          }
        }
      }
    }
    this.report += this.finalidades + '\n';
    alert(this.report);
  }
}

