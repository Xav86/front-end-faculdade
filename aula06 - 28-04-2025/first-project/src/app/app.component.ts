import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContadorComponent } from './components/contador/contador.component';
import { MostradorComponent } from './components/mostrador/mostrador.component';
import { TodoComponent } from './components/todo/todo.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, ContadorComponent, MostradorComponent, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
