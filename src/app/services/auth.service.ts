import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Auth, AuthResponse } from '../models/auth';
import { User } from '../models/user';
import { DOCUMENT } from '@angular/common';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly url = 'http://localhost:3000/login';

  constructor(private http: HttpClient, @Inject(DOCUMENT) private document: Document, private userService:UsersService) { }

  login(credential: Auth): void {
    this.http.post<AuthResponse>(this.url, credential).subscribe({
      next: (response) => {
        if(response.accessToken){
          this.setCookie('token',response.accessToken,1);
        }
        if(response.user){
          this.userService.user$.next(response.user)
          
        }
      },
      error: (err) => {
        console.error('user not found');

      }
    })
  }
  logout(){
    this.setCookie('token','',-1);
    this.userService.user$.next(null);
  }
   
  private deleteCookie(name: string) {
    this.setCookie(name, '', -1);
  }

  private setCookie(name: string, value: string, expireDays: number, path: string = '') {
    let d: Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires: string = `expires=${d.toUTCString()}`;
    let cpath: string = path ? `; path=${path}` : '';
    this.document.cookie = `${name}=${value}; ${expires}${cpath}`;
  }


}
