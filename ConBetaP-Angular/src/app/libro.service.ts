import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from './Libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private baseUrl = 'http://localhost:8080/api/v1/libros';
  constructor(private http: HttpClient) { }

  getLibrosList() {
    return this.http.get<Libro[]>(`${this.baseUrl}`);
  }

  getLibro(id: number) {
    return this.http.get<Libro>(this.baseUrl + '/' + id);
  }
}
