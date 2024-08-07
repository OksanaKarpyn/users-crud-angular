import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  readonly url = 'http://localhost:3000/users';
  
  user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.url);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/register', user);
  }
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/${user.id}`, user);
  }
  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(`${this.url}/${id}`);
  }
 

}
