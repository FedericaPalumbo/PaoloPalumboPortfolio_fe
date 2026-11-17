import { Component, input } from '@angular/core';
import { Photo } from '../../entities';

/* PhotoCard è una foto della griglia: immagine con sotto titolo e crediti.
È un componente "stupido" (di presentazione): riceve la foto e basta. */
@Component({
  selector: 'app-photo-card',
  imports: [],
  templateUrl: './photo-card.component.html',
  styleUrl: './photo-card.component.css',
})
export class PhotoCardComponent {
  photo = input.required<Photo>();
}