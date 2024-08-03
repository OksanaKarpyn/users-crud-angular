import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-details-user',
  standalone: true,
  imports: [],
  templateUrl: './details-user.component.html',
  styleUrl: './details-user.component.scss',
})
export class DetailsUserComponent {
  user!: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService
  ) {
    const id = route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUser(id).subscribe({
        next: (userData) => {
          this.user=userData;
        },
      });
    }
  }
}
