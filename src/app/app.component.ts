import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './conponents/footer/footer.component';
import { DOCUMENT } from '@angular/common';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent,FooterComponent],
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor( @Inject(DOCUMENT) private document: Document,private userService:UsersService){
    const token = this.getCookie('token');
    if(token){
      // this.userService.getProfile(token).subscribe({
      //   next: (userValue)=>{
      //     debugger;
      //   }
      // })
    }
}

  private getCookie(name: string):string {
    let ca: Array<string> = this.document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s+/g, '');
        if (c.indexOf(cookieName) == 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    return '';
}
}
