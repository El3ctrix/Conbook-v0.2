import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Area } from './Area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  private areaUrl = 'http://localhost:8080/api/v1/areaID';
  constructor(private http: HttpClient) { }

  getArea(id: number) {
    return this.http.get<Area>(this.areaUrl + '/' + id);
  }
}
