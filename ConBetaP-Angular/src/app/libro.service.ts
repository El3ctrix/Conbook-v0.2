import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from './Libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private baseUrl = 'http://localhost:8080/api/v1/libros';
  private detailsUrl = 'http://localhost:8080/api/v1/details';
  private updatesUrl = 'http://localhost:8080/api/v1/updateLibro';
  constructor(private http: HttpClient) { }

  getLibrosList() {
    return this.http.get<Libro[]>(`${this.baseUrl}`);
  }

  getLibro(id: number) {
    return this.http.get<Libro>(this.detailsUrl + '/' + id);
  }

  createLibro(libro: Libro) {
    return this.http.post<Libro>(this.baseUrl, libro);
  }

  updateLibro(id: number, libro: Libro) {
    return this.http.put<Libro>(this.updatesUrl + '/' + id, libro);
  }
}
