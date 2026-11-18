import { Component, computed, input, output } from '@angular/core';
import { RepertoireItem } from '../../entities';
import { RepertoireWorkListComponent } from '../repertoire-work-list/repertoire-work-list.component';

/* RepertoireItemComponent è la card di un teatro o di una scuola: foto, periodo, nome, luogo e ruolo ricoperto.
Se ci sono ruoli danzati, un pulsante apre sotto la card la lista (RepertoireWorkListComponent).
Non sa nulla della pagina: riceve l'elemento e la sua posizione, dice se è aperta e avvisa quando viene premuta.
Lo stato (quale card è aperta) lo decide la pagina, così ne resta aperta una sola. */
@Component({
  selector: 'app-repertoire-item',
  imports: [RepertoireWorkListComponent],
  templateUrl: './repertoire-item.component.html',
  styleUrl: './repertoire-item.component.css',
})
export class RepertoireItemComponent {
  item = input.required<RepertoireItem>();
  // posizione dell'elemento nella lista: decide il numero (01, 02, ...)
  index = input.required<number>();
  // la card è aperta e mostra i ruoli. Lo decide la pagina
  open = input(false);

  onToggle = output<void>();

  number = computed(() => String(this.index() + 1).padStart(2, '0'));

  // senza ruoli non c'è niente da aprire
  expandable = computed(() => this.item().works.length > 0);

  toggle() {
    if (this.expandable()) {
      this.onToggle.emit();
    }
  }
}