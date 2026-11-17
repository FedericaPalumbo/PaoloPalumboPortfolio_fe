import { Component, computed, input } from '@angular/core';
import { RepertoireItem } from '../../entities';

/* RepertoireItemComponent mostra un pezzo del repertorio: numero, anno, titolo e dettagli.
Non sa nulla della pagina: riceve il pezzo e la sua posizione nella lista, quindi si può riusare dove serve. */
@Component({
  selector: 'app-repertoire-item',
  imports: [],
  templateUrl: './repertoire-item.component.html',
  styleUrl: './repertoire-item.component.css',
})
export class RepertoireItemComponent {
  item = input.required<RepertoireItem>();
  // posizione del pezzo nella lista: decide il numero (01, 02, ...)
  index = input.required<number>();

  number = computed(() => String(this.index() + 1).padStart(2, '0'));
}