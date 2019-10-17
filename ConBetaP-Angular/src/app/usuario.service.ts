import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Usuario} from './Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:8080/api/v1/usuarios';
  private mailUrl = 'http://localhost:8080/api/v1/login';
  constructor(private http: HttpClient) { }

  getUsuario(id: number) {
    return this.http.get<Usuario>(this.baseUrl + '/' + id);
  }

  getByCorreo(correo: string) {
    return this.http.get<Usuario>(this.mailUrl + '/' + correo);
  }
  createUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, usuario);
  }

  updateUsuario(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getUsuariosList() {
    return this.http.get<Usuario[]>(`${this.baseUrl}`);
  }
}
