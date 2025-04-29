import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  contador = signal(0);
  imagensList = signal([
    'img_0.jpg',
    'img_1.jpg',
    'img_2.jpg',
    'img_3.jpg'
  ])
  imgIndex = signal(0);

  Incrementar() {
    let valorAtual = this.contador();
    this.contador.set(++valorAtual)
  }

  Decrementar() {
    this.contador.update(value => --value)
  }

  proximo() {
    this.imgIndex.update(value => ++value)
    if (this.imgIndex() >= this.imagensList().length - 1) {
      this.imgIndex.set(0)
    }
  }

  anterior() {
    this.imgIndex.update(value => --value)
    if (this.imgIndex() > this.imagensList.length) {
      this.imgIndex.set(this.imagensList().length - 1)
    }
  }
}
