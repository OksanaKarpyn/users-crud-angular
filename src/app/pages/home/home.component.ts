import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JsonPipe,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  //<Users> si riferisce da interfaccia ogetto definito nel modelss
  users:Array<User> = []
  constructor( private userservices:UsersService){
    userservices.getUsers().subscribe({
      next: (dataUsers)=>{
        this.users = dataUsers;
      },
      error: (err) => {
        console.error(err.massege);
      },
    })
  }

}
