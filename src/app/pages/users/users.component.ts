import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [JsonPipe, RouterLink],
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

  deleteUser(id?: string) {
    //service.delete user by id
    console.log('delete', id);
    if (id) {
      this.usersService.deleteUser(id).subscribe({
        next: () => {
          this.users = this.users.filter((user) => user.id !== id);
        },
        error: (err) => {
          console.error('Error deleting user', err);
        },
      });
    }
    // users find by index
    //if index exist
    //user.splice(idx,1);
  }
}
