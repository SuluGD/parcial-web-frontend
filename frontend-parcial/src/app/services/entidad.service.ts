import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entidad } from '../models/entidad.model';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {
  private apiUrl = 'http://localhost:8080/api/entidades'; // Adjust this URL to match your backend

  constructor(private http: HttpClient) { }

  getAll(): Observable<Entidad[]> {
    return this.http.get<Entidad[]>(this.apiUrl);
  }

  getById(id: number): Observable<Entidad> {
    return this.http.get<Entidad>(`${this.apiUrl}/${id}`);
  }

  create(entidad: Entidad): Observable<Entidad> {
    return this.http.post<Entidad>(this.apiUrl, entidad);
  }

  update(id: number, entidad: Entidad): Observable<Entidad> {
    return this.http.put<Entidad>(`${this.apiUrl}/${id}`, entidad);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
} 