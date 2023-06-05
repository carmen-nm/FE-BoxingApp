import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Exercise } from '../interfaces/exercise';


@Injectable({
  providedIn: 'root'
})
export class Boxing1Service {
  private readonly API_URL = "http://localhost:8080/api";

  // variables
  exercises: Exercise[] = [];

 

  constructor(private http:HttpClient) { }

  getAllExercises(): Observable<Exercise[]>{
    return this.http.get<Exercise[]>(this.API_URL + "/exercises")
  }

  getExercise(id: number): Observable<Exercise> {
    return this.http.get<Exercise>(`${this.API_URL}/exercises/${id}`);
  }

  postExercise(body: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/exercises`, body)
  }

  putExercise(id: number, body: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/exercises/${id}`, body)
  }

  deleteExercise(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/exercises/${id}`)
  }
}
