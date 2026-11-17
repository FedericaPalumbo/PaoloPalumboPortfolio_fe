import { Component } from '@angular/core';
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
    author: 'Ballerina Carla Fracci',
    image: '/images/about-banner.jpg',
  };

  protected readonly facts: ProfileFact[] = [
    { label: 'Current base', value: 'Brno, Czech Republic' },
    { label: 'Languages', value: 'Italian · English' },
    { label: 'Height', value: '178 cm / 5′ 10″' },
    { label: 'Availability', value: 'Worldwide engagements' },
  ];
  protected readonly repertoire: RepertoireItem[] = [
    {
      year: '2024',
      title: 'Don Quixote',
      label: 'Classical · Basilio variation',
      description: 'Senior Men solo at the YAGP Finals in the United States, placing in the Top 12.',
    },
    {
      year: '2023',
      title: 'Le Corsaire',
      label: 'Classical · Pas de deux',
      description: 'With Nuria Fernandes. 1st place, Youth America Grand Prix.',
    },
    {
      year: '2022',
      title: 'Flames of Paris',
      label: 'Classical · Pas de deux',
      description: 'With Nuria Fernandes. 1st place, Youth America Grand Prix.',
    },
  ];
}