import { Component, input } from '@angular/core';
import { RepertoireWork } from '../../entities';

/* RepertoireWorkListComponent è la lista dei ruoli che si apre sotto la card di un teatro o di una scuola.
È un componente "stupido" (di presentazione): riceve i ruoli e li stampa, numerati. */
@Component({
  selector: 'app-repertoire-work-list',
  imports: [],
  templateUrl: './repertoire-work-list.component.html',
  styleUrl: './repertoire-work-list.component.css',
})
export class RepertoireWorkListComponent {
  works = input.required<RepertoireWork[]>();
}