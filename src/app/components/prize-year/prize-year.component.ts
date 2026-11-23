import { Component, computed, input } from '@angular/core';
import { PrizeYear } from '../../entities';

/* PrizeYearComponent è il blocco di un anno nella sezione Prizes & distinctions: a sinistra l'anno e quanti riconoscimenti ha,
a destra l'elenco, una riga per riconoscimento (piazzamento, categoria danzata, concorso).
È un componente "stupido" (di presentazione): riceve l'anno già raggruppato e lo stampa. */
@Component({
  selector: 'app-prize-year',
  imports: [],
  templateUrl: './prize-year.component.html',
  styleUrl: './prize-year.component.css',
})
export class PrizeYearComponent {
  group = input.required<PrizeYear>();

  // es. '06 distinctions', '01 distinction'
  count = computed(() => {
    const total = this.group().distinctions.length;
    return `${String(total).padStart(2, '0')} ${total === 1 ? 'distinction' : 'distinctions'}`;
  });
}
