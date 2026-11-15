import { afterNextRender, Component, ElementRef, input, output, viewChild } from '@angular/core';
import { Playable } from '../../entities';

/* VideoModal è il lettore a tutto schermo. Usa il <dialog> del browser: sfondo scuro, tasto Esc e focus
tenuto dentro la finestra sono già inclusi. Se il video ha un file (src) lo riproduce, altrimenti mostra
la copertina con un avviso. Non conosce la pagina: quando si chiude emette onClose. */
@Component({
  selector: 'app-video-modal',
  imports: [],
  templateUrl: './video-modal.component.html',
  styleUrl: './video-modal.component.css',
})
export class VideoModalComponent {
  video = input.required<Playable>();

  onClose = output<void>();

  private dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  constructor() {
    // showModal va chiamato a rendering fatto, quando il <dialog> esiste nella pagina
    afterNextRender(() => this.dialog().nativeElement.showModal());
  }

  // il <dialog> emette (close) sia con il pulsante sia con Esc: la pagina viene avvisata in entrambi i casi
  close() {
    this.dialog().nativeElement.close();
  }

  // il click sullo sfondo scuro arriva al <dialog> stesso, quello dentro al pannello no
  closeOnBackdrop(event: MouseEvent) {
    if (event.target === this.dialog().nativeElement) {
      this.close();
    }
  }
}