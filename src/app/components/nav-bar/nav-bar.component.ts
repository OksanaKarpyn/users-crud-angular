import { Component } from '@angular/core';
import { UnderNavbarComponent } from '../under-navbar/under-navbar.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [UnderNavbarComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}
