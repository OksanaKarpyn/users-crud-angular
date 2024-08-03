import { Component } from '@angular/core';
import { UnderNavbarComponent } from '../under-navbar/under-navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [UnderNavbarComponent, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {}
