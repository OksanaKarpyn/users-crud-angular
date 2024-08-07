import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {

  user!:User | null;
  constructor(private userService:UsersService,private authService: AuthService){
    this.userService.user$.subscribe({
      next: (user)=>{
        this.user = user;
      }
    })
  }
  logout(){
    this.authService.logout();
  }
}
