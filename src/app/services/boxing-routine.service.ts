import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Routine } from '../interfaces/routine'; 

@Injectable({
  providedIn: 'root'
})
export class BoxingRoutineService {
  private readonly API_URL = "http://localhost:8080/api";

  // variables
  routines: Routine[] = [];

  constructor(private http:HttpClient) { }

  getAllRoutines(): Observable<Routine[]>{
    return this.http.get<Routine[]>(this.API_URL + "/routines")
  }

  getRoutine(id: number): Observable<Routine> {
    return this.http.get<Routine>(`${this.API_URL}/routines/${id}`);
  }

  postRoutine(body: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/routines`, body)
  }

  putRoutine(id: number, body: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/routines/${id}`, body)
  }

  deleteRoutine(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/routines/${id}`)
  }
}
