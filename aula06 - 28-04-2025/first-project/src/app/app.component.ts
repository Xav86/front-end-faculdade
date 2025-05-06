import { Component } from '@angular/core';
import { ContadorComponent } from './components/contador/contador.component';
import { MostradorComponent } from './components/mostrador/mostrador.component';
import { TodoComponent } from './components/todo/todo.component';

@Component({
  selector: 'app-root',
  imports: [ContadorComponent, MostradorComponent, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
