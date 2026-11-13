import { Component } from '@angular/core';
import { ProfileFact, QuoteBanner } from '../../entities';
import { QuoteBannerComponent } from '../../components/quote-banner/quote-banner.component';

@Component({
  imports: [QuoteBannerComponent],
  selector: 'app-about-me',
  styleUrl: './about-me.component.css',
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent {
  protected readonly tags: string[] = ['Classical Ballet', 'Contemporary', 'Pas de deux'];

  protected readonly quote: QuoteBanner = {
    text: 'Meravigliosa performance, uno dei 10 talenti italiani.',
    author: 'Ballerina Carla Fracci',
    image: '/images/about-banner.jpg',
  };

  protected readonly facts: ProfileFact[] = [
    { label: 'Current base', value: 'Brno, Czech Republic' },
    { label: 'Languages', value: 'Italian · English' },
    { label: 'Height', value: '178 cm / 5′ 10″' },
    { label: 'Availability', value: 'Worldwide engagements' },
  ];
}