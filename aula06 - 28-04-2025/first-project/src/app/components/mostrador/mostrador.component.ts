import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-mostrador',
  imports: [],
  templateUrl: './mostrador.component.html',
  styleUrl: './mostrador.component.css'
})
export class MostradorComponent {
  imagensList = signal([
    'img_0.jpg',
    'img_1.jpg',
    'img_2.jpg',
    'img_3.jpg'
  ])
  imgIndex = signal(0);

  proximo() {
    this.imgIndex.update(value => ++value)
    if (this.imgIndex() >= this.imagensList().length) {
      this.imgIndex.set(0)
    }
  }

  anterior() {
    this.imgIndex.update(value => --value)
    if (this.imgIndex() <= this.imagensList.length) {
      this.imgIndex.set(this.imagensList().length - 1)
    }
  }
}
