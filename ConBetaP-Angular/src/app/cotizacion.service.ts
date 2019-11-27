import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cotizacion } from './Cotizacion';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {
  private cotUrl = 'http://localhost:8080/api/v1/cotizacionID';
  private cot1Url = 'http://localhost:8080/api/v1/cotizacion';
  constructor(private http: HttpClient) { }

  getCotizacion(id: number) {
    return this.http.get<Cotizacion>(this.cotUrl + '/' + id);
  }

  createCotizacion(cotizacion: Cotizacion) {
    return this.http.post<Cotizacion>(this.cot1Url, cotizacion);
  }
}
