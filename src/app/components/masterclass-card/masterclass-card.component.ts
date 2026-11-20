import { Component, computed, input } from '@angular/core';
import { Masterclass } from '../../entities';

/* MasterclassCard è la card di un artista ospite: foto scura a tutta card, numero in alto, ruolo e nome in basso.
Passando il mouse la foto si schiarisce.
È un componente "stupido" (di presentazione): riceve l'artista e la sua posizione nella griglia. */
@Component({
  selector: 'app-masterclass-card',
  imports: [],
  templateUrl: './masterclass-card.component.html',
  styleUrl: './masterclass-card.component.css',
})
export class MasterclassCardComponent {
  artist = input.required<Masterclass>();
  // posizione nella griglia: decide il numero (01, 02, ...)
  index = input.required<number>();

  number = computed(() => String(this.index() + 1).padStart(2, '0'));
}
