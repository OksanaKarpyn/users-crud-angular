import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../models/auth';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly url = 'http://localhost:3000/login';

  constructor(private http: HttpClient) { }

  login(credential: Auth): void {
    this.http.post<Array<User>>(this.url,credential).subscribe({
      next: (user) => {
        debugger;
        // const currentUser = users[0];
        // if(currentUser && currentUser.password === credential.password){
          
        // }
      },
      error:(err)=>{
        console.error('user not found');
      }
    })

  }

}
