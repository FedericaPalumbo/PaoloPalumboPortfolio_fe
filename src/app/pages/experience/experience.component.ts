import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Milestone } from '../../entities';

@Component({
  imports: [DecimalPipe],
  selector: 'app-experience',
  styleUrl: './experience.component.css',
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  protected readonly milestones: Milestone[] = [
    {
      year: '2024—Present',
      title: 'Brno Theatre',
      label: 'Professional · Company Artist',
      description: 'Repertory, creation, and daily company practice across classical and contemporary productions.',
      featured: true,
    },
    {
      year: '2024',
      title: 'Youth America Grand Prix Finals',
      label: 'Recognition · Top 12, Senior Men',
      description: 'Don Quixote — Basilio variation, presented at the international finals in the United States.',
    },
    {
      year: '2024',
      title: 'YAGP European Semi-Finals',
      label: 'Recognition · 1st Place',
      description: 'Awarded across classical solo and pas de deux categories.',
    },
    {
      year: '2023',
      title: 'Youth America Grand Prix',
      label: 'Recognition · 1st Place, Pas de Deux',
      description: 'Le Corsaire with Nuria Fernandes.',
    },
    {
      year: '2022',
      title: 'Youth America Grand Prix',
      label: 'Recognition · 1st Place, Pas de Deux',
      description: 'Flames of Paris with Nuria Fernandes.',
    },
    {
      year: '2020—2024',
      title: 'Annarella Sanchez International Conservatory',
      label: 'Training · Leiria, PT',
      description: 'Advanced classical training, repertoire, contemporary practice, and extensive pas de deux coaching.',
      featured: true,
    },
    {
      year: '2016—2020',
      title: 'Domus Danza School',
      label: 'Training · Schio, IT',
      description: 'Classical and contemporary foundations under the guidance of Enrica Marcucci.',
      featured: true,
    },
  ];
}