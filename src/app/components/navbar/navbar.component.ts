import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.component.css',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  private router = inject(Router);

  // url corrente senza query string (es. /?x=1 -> /)
  private currentPath = toSignal(
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => event.urlAfterRedirects.split('?')[0])
    ),
    { initialValue: this.router.url.split('?')[0] }
  );

  // sulla home la navbar è trasparente e sta sopra l'immagine di sfondo
  isHome = computed(() => this.currentPath() === '/');
}