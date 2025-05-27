import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent {
}
