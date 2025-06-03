import { Component, inject, signal } from '@angular/core';
import {CardModule} from 'primeng/card'
import { FloatLabelModule } from 'primeng/floatlabel'
import { InputText } from 'primeng/inputtext'
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api'

@Component({
  selector: 'app-add',
  imports: [CardModule, FloatLabelModule, InputText, SelectModule, FloatLabelModule, ButtonModule, FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  messageService = inject(MessageService);

  types = signal(['plin', 'plin', 'plom']);

  description = signal('');
  type = signal<any>(null);

  isInvalidButton(){
    return !this.description() || !this.type()
  }

  save() {
    const task = {
      description: this.description,
      type: this.type,
      id: new Date().getTime(),
      CreatedAt: new Date(),
    }

    console.log(task);

    this.description.set('');
    this.type.set(null)

    this.messageService.add({
      severity: 'success',
      summary: 'Salvo',
      detail: 'Task salva!!'
    })
  }
}