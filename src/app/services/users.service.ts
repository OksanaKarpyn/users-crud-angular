import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  readonly url = 'http://127.0.0.1:8000/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.url);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, { body: user });
  }
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.url, { body: user });
  }
  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.url}/${id}`);
  }
}
