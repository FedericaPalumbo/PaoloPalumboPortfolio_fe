import { Component, input, output } from '@angular/core';

/* VideoPoster è la copertina cliccabile di un video: foto scurita, titolo, tasto play e una riga di testo.
Non sa nulla della pagina: riceve i dati e, quando si clicca, emette onPlay. Lo usano sia lo showreel
sia le card della griglia. */
@Component({
  selector: 'app-video-poster',
  imports: [],
  templateUrl: './video-poster.component.html',
  styleUrl: './video-poster.component.css',
})
export class VideoPosterComponent {
  image = input.required<string>();
  title = input.required<string>();
  label = input.required<string>();
  // true per lo showreel: titolo più grande
  featured = input(false);

  onPlay = output<void>();

  play() {
    this.onPlay.emit();
  }
}