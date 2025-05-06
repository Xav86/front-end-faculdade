import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  currentTask = signal('');
  listTask = signal<string[]>([]);

  enviar() {
    const task = this.currentTask();
    if (!task.trim()) return;
    this.listTask.update(value => [task, ...value])
    this.currentTask.set('')
  }
}
