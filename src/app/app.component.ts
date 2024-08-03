import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@Component({//decoratore x decorare le classi
  selector: 'app-root',//radire del app
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,

  ],
  templateUrl: './app.component.html',
  styleUrls:['./app.component.scss' ] 
})
export class AppComponent {
  title = 'nome-del-progetto';
}
