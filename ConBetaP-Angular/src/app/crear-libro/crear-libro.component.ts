import { Component, OnInit } from '@angular/core';
import { LibroService } from '../libro.service';
import { Libro } from '../Libro';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as jsPDF from 'jspdf';


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
  tipoF: string;
  template1: string;
  selectedFile: File = null;
  flag = false;
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
              private router: Router,
              private http: HttpClient) {
  }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.flag = true;
    this.selectedFile = event.target.files[0] as File;
  }

  onUpload() {
    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:8080/api/v1/upload/', formData ,{
      reportProgress: true,
      responseType: 'text'
    })
      .subscribe(res => {
        console.log(res);
      });
  }

  missingData(){}

  onSubmit() {
    this.submitted = false;
    this.libro.aprobado = false;
    this.libro.codigoisbn = 'Sin Codigo';
    this.libro.fechadecreacion = this.fecha;
    this.libro.responsable = localStorage.getItem('nombre');
    this.libro.estado = 1;
    this.libroService.createLibro(this.libro)
      .subscribe(data => console.log(data), error => console.log(error));
    const doc = new jsPDF('p', 'mm', 'a4');
    this.tipoF = 'Tipo: ';
    this.template1 = 'SOLICITUD DE PUBLICACIÓN\n' +
      '\nCOMITÉ EDITORIAL DE LA FACULTAD DE CIENCIAS\n' +
      'Presente\n' + 'Por este conducto someto (sometemos) a consideración la obra "' +
      this.libro.nombrelibro + '" \npara ser publicada por esta Facultad.\n' +
      '\nA continuación presento la justificación y argumentación para la publicación \nde la obra:\n' +
      this.justificacion + '\nPor lo que su finalidad es: ';
    let i = 0;
    if (this.dataFinalidad[0].checked) {
      i += 1;
      this.template1 += '\n' + i + '. ' + this.dataFinalidad[0].name + '\n';
      for (let n = 0; n < 5; n++) {
        if (this.finalidadTipo[n].checked) {
          this.tipoF += this.finalidadTipo[n].name + '\n';
        }
      }
      this.template1 += this.tipoF;
      this.template1 += 'Justifique a qué programa (s) y asignatura (s) apoyará la propuesta: ' +
        this.apoyo;
    }
    if (this.dataFinalidad[1].checked) {
      i += 1;
      this.template1 += i + '. ' + this.dataFinalidad[1].name + '\n';
    }
    if (this.dataFinalidad[2].checked) {
      i += 1;
      this.template1 += i + '. ' + this.dataFinalidad[2].name + '\n';
    }
    if (this.dataFinalidad[1].checked || this.dataFinalidad[2].checked) {
      this.template1 += 'Publico al que va dirigido: ' + this.publico + '\n';
    }
    this.template1 += '\nEl mercado potencial es de (cuántos grupos, alumnos y/o instituciones) ' +
      this.mercado + ', \npor lo que se propone un tiraje de ' + this.ejemplares + ' ejemplares.\n' +
    '\nFinanciamiento: \n';
    if (this.financiamiento[0].checked) {
      this.template1 += this.financiamiento[0].name + '\n';
    }
    if (this.financiamiento[1].checked) {
      this.template1 += this.financiamiento[1].name + '\n';
    }
    this.template1 += 'Declaro que el manuscrito propuesto no se encuentra sometido a' +
      '\nconsideración de otra institución o editorial para su publicación, y que no ha' +
      '\nsido publicado por ningún otro medio incluyendo publicaciones electrónicas o ' +
      '\nbase de datos de naturaleza pública.\n' +
      'Si el material no está completo o presenta deficiencias gramaticales o de len-' +
      '\nguaje aceptaré que se me devuelva para su reescritura antes de ser enviado' +
      '\na los revisores o antes de ser aceptado.\n' + '\nFecha: ' + this.fecha;
    doc.text(this.template1, 10, 10);
    doc.save('Solicitud' + this.libro.nombrelibro + '.pdf');
  }
}

