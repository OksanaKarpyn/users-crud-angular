import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users: Array<User> = [];

  constructor(private usersService: UsersService) {
    usersService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error(err.massege);
      },
    });
  }
}
