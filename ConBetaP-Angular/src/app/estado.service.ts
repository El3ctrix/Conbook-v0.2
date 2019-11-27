import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estado } from './Estado';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private estadoUrl = 'http://localhost:8080/api/v1/estadoID';

  constructor(private http: HttpClient) { }

  getEstado(id: number) {
    return this.http.get<Estado>(this.estadoUrl + '/' + id);
  }
}
