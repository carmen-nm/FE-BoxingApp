import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class BoxingUserService {

  private readonly API_URL = "http://localhost:8080/api";

  // variables
  users: User[] = [];
  userLoggedId?: any = localStorage.getItem("userId");

  constructor(private http:HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.API_URL + "/users")
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.API_URL}/users/${id}`);
  }

  postUser(body: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/users`, body)
  }

  putUser(id: number, body: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/users/${id}`, body)
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/users/${id}`)
  }

  LoginUser(body: any): Observable<any>{
    return this.http.patch<any>(`${this.API_URL}/users/login`, body)
  }

  addUserRoutines(id: number, routineId: number): Observable<any> {
    return this.http.patch<any>(`${this.API_URL}/users/${id}/${routineId}`, null)
  }

  deleteUserRoutines(id: number, routineId: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/users/${id}/${routineId}`)
  }
}
