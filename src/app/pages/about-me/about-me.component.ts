import { Component, signal } from '@angular/core';
import { ProfileFact, QuoteBanner, RepertoireItem } from '../../entities';
import { QuoteBannerComponent } from '../../components/quote-banner/quote-banner.component';
import { RepertoireItemComponent } from '../../components/repertoire-item/repertoire-item.component';
@Component({
  imports: [QuoteBannerComponent, RepertoireItemComponent],
  selector: 'app-about-me',
  styleUrl: './about-me.component.css',
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent {
  protected readonly tags: string[] = ['Classical Ballet', 'Contemporary', 'Pas de deux'];

  protected readonly quote: QuoteBanner = {
    text: 'Meravigliosa performance, uno dei dieci giovani talenti italiani.',
    author: 'Carla Fracci',
    image: '/images/about-banner.jpg',
  };

  protected readonly facts: ProfileFact[] = [
    { label: 'Current base', value: 'Brno, Czech Republic' },
    { label: 'Languages', value: 'Italian · English' },
    { label: 'Height', value: '178 cm / 5′ 10″' },
    { label: 'Availability', value: 'Worldwide engagements' },
  ];

  // per ora si riusano le foto già in public/images; con le foto ufficiali dei teatri basta cambiare image
  protected readonly repertoire: RepertoireItem[] = [
    {
      name: 'Brno Theatre',
      period: '2024 — Present',
      location: 'Brno, Czech Republic',
      role: 'Company artist',
      image: '/images/about-action.jpg',
      // finché la lista è vuota la card non ha il pulsante per aprirsi: qui vanno i ruoli danzati a Brno
      works: [],
    },
    {
      name: 'Annarella Sanchez',
      period: '2020 — 2024',
      location: 'Leiria, Portugal',
      role: 'Advanced student',
      image: '/images/about-banner.jpg',
      works: [
        { title: 'Don Quixote', role: 'Basilio variation', stagedBy: 'Marius Petipa' },
        { title: 'Le Corsaire', role: 'Pas de deux', stagedBy: 'Marius Petipa' },
        { title: 'Flames of Paris', role: 'Pas de deux', stagedBy: 'Vasily Vainonen' },
      ],
    },
  ];

  // card aperta (una sola alla volta): null = tutte chiuse
  protected openIndex = signal<number | null>(null);

  // apre la card premuta (chiudendo quella aperta prima) o richiude quella già aperta
  protected toggle(index: number) {
    this.openIndex.set(this.openIndex() === index ? null : index);
  }
}