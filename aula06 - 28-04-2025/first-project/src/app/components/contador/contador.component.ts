import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  contador = signal(0);

  Incrementar() {
    let valorAtual = this.contador();
    this.contador.set(++valorAtual)
  }

  Decrementar() {
    this.contador.update(value => --value)
  }

}
