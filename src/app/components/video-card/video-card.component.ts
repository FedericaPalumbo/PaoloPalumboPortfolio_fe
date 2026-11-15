import { Component, computed, input, output } from '@angular/core';
import { Video } from '../../entities';
import { VideoPosterComponent } from '../video-poster/video-poster.component';

/* VideoCard è un video della griglia: copertina con sotto numero, titolo e dati.
È un componente "stupido" (di presentazione): non apre il lettore, avvisa la pagina con onPlay. */
@Component({
  selector: 'app-video-card',
  imports: [VideoPosterComponent],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.css',
})
export class VideoCardComponent {
  video = input.required<Video>();
  // posizione del video nella lista completa: decide il numero (01, 02, ...) della card
  index = input.required<number>();

  onPlay = output<void>();

  number = computed(() => String(this.index() + 1).padStart(2, '0'));

  play() {
    this.onPlay.emit();
  }
}