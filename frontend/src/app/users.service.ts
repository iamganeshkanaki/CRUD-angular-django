import { Injectable } from '@angular/core';
import User from './User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url: string = 'http://127.0.0.1:12345/api/';
  constructor(private http: HttpClient) {}

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}+users/`,user);
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.url}+users/`);
  }

  getUserByID(id:number):Observable<User>{
    return this.http.get<User>(`${this.url}+users/${id}`);
  }

  updateUser(id:number,user:User):Observable<User>{
    return this.http.put<User>(`${this.url}user/${id}`,user);
  }

  deleteUser(id:number):Observable<User>{
    return this.http.delete<User>(`${this.url}user/${id}`)
  }
}
