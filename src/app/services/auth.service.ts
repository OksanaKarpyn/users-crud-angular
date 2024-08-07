import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../models/auth';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  login(credential: Auth): void {
    this.http.get<Array<User>>(this.url, { params: { email: credential.email } }).subscribe({
      next: (users) => {
        const currentUser = users[0];
        if(currentUser && currentUser.password === credential.password){
          
        }
      },
      error:(err)=>{
        console.error('user not found');
      }
    })

  }

}
