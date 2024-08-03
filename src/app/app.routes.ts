import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { AddEditUserComponent } from './pages/add-edit-user/add-edit-user.component';
import { DetailsUserComponent } from './pages/details-user/details-user.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'users',
    component: UsersComponent,
    title: 'List of Users',
  },
  {
    path: 'users/add-edit',
    component: AddEditUserComponent,
    title: 'Add Edit User',
  },
  {
    path: 'users/:id',
    component: DetailsUserComponent,
    title: 'User Details',
  },
];
