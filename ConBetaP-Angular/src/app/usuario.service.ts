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
  private updateUrl = 'http://localhost:8080/api/v1/update';
  private mailSendUrl = 'http://localhost:8080/api/v1/sendMail';
  constructor(private http: HttpClient) { }

  getUsuario(id: number) {
    return this.http.get<Usuario>(this.baseUrl + '/' + id);
  }

  getByCorreo(correo: string) {
    return this.http.get<Usuario>(this.mailUrl + '/' + correo);
  }

  createUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.baseUrl, usuario);
  }

  updateUsuario(id: number, usuario: Usuario) {
    return this.http.put(this.updateUrl + '/' + id, usuario);
  }

  deleteUsuario(id: number) {
    return this.http.delete<Usuario>(this.baseUrl + '/' + id);
  }

  getUsuariosList() {
    return this.http.get<Usuario[]>(`${this.baseUrl}`);
  }

  sendMail(usuario: Usuario) {
    return this.http.post(this.mailSendUrl, usuario);
  }
}
