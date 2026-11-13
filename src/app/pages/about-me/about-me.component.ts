import { Component } from '@angular/core';
import { ProfileFact } from '../../entities';

@Component({
  imports: [],
  selector: 'app-about-me',
  styleUrl: './about-me.component.css',
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent {
  protected readonly tags: string[] = ['Classical Ballet', 'Contemporary', 'Pas de deux'];

  protected readonly facts: ProfileFact[] = [
    { label: 'Current base', value: 'Brno, Czech Republic' },
    { label: 'Languages', value: 'Italian · English' },
    { label: 'Height', value: '182 cm / 5′ 11½″' },
    { label: 'Availability', value: 'Worldwide engagements' },
  ];
}