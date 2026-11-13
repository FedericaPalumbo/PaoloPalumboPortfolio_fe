import { Component, input } from '@angular/core';
import { QuoteBanner } from '../../entities';

/* QuoteBanner mostra una citazione bianca sopra una foto orizzontale a tutta larghezza.
Non sa nulla della pagina: riceve testo, autore e immagine, quindi si può riusare dove serve. */
@Component({
  selector: 'app-quote-banner',
  imports: [],
  templateUrl: './quote-banner.component.html',
  styleUrl: './quote-banner.component.css',
})
export class QuoteBannerComponent {
  quote = input.required<QuoteBanner>();
}