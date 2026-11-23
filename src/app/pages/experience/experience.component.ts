import { DecimalPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Masterclass, Milestone, PrizeYear, RepertoireItem } from '../../entities';
import { MasterclassCardComponent } from '../../components/masterclass-card/masterclass-card.component';
import { PrizeYearComponent } from '../../components/prize-year/prize-year.component';
import { RepertoireItemComponent } from '../../components/repertoire-item/repertoire-item.component';

@Component({
  imports: [DecimalPipe, MasterclassCardComponent, PrizeYearComponent, RepertoireItemComponent],
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
  // riconoscimenti raggruppati per anno, dal più recente al più vecchio: per aggiungerne uno basta una riga nell'anno giusto
  // (o un nuovo anno in cima)
  protected readonly prizes: PrizeYear[] = [
    {
      year: '2024',
      distinctions: [
        { recognition: 'Top 12', category: 'Senior Soloist', competition: 'YGP Finals · New York' },
      ],
    },
    {
      year: '2023',
      distinctions: [
        { recognition: '1st Place', category: 'Classical Soloist', competition: 'YGP · Paris' },
        { recognition: 'Top 6', category: 'Classical Soloist', competition: 'YGP · Paris' },
        { recognition: 'Top 6', category: 'Contemporary Soloist', competition: 'YGP · Paris' },
        { recognition: '2nd Place', category: 'Classical Pas de Deux', competition: 'YGP · Paris' },
        { recognition: '2nd Place', category: 'Neoclassical Pas de Deux', competition: 'YGP · Paris' },
        { recognition: 'Invitation', category: 'YGP Finals', competition: 'Tampa, USA' },
      ],
    },
    {
      year: '2022',
      distinctions: [
        { recognition: '3rd Place', category: 'Classical Pas de Deux', competition: 'YGP · Paris' },
        { recognition: 'Top 6', category: 'Classical Soloist', competition: 'YGP · Paris' },
      ],
    },
    {
      year: '2019',
      distinctions: [
        { recognition: '3rd Place', category: 'Classical Soloist', competition: 'YGP · Italy' },
        { recognition: 'Top 6', category: 'Classical Soloist', competition: 'YGP · Italy' },
      ],
    },
    {
      year: '2018',
      distinctions: [
        { recognition: '3rd Place', category: 'Classical Soloist', competition: 'YGP · Paris' },
        // categoria da verificare: nello screenshot di riferimento la riga è tagliata dopo 'Classical'
        { recognition: 'Top 6', category: 'Classical Soloist', competition: 'YGP · Paris' },
      ],
    },
  ];

  // per ora si riusano le foto già in public/images; con le foto ufficiali dei teatri basta cambiare image
  protected readonly repertoire: RepertoireItem[] = [
    {
      name: 'Brno Theatre',
      period: '2024 — Present',
      location: 'Brno, Czech Republic',
      role: 'Company artist',
      image: '/images/brno.jpg',
      // finché la lista è vuota la card non ha il pulsante per aprirsi: qui vanno i ruoli danzati a Brno
      works: [],
    },
    {
      name: 'Annarella Sanchez',
      period: '2020 — 2024',
      location: 'Leiria, Portugal',
      role: 'Advanced student',
      image: '/images/leiria.jpg',
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

  // artisti ospiti: il numero nell'eyebrow della sezione segue la lunghezza di questa lista.
  // Foto provvisorie già in public/images: con le foto vere basta cambiare image. Per aggiungere un artista basta una riga
  protected readonly masterclasses: Masterclass[] = [
    { name: 'Alexander Sambart', role: 'Guest artist' },
    { name: 'David Makhateli', role: 'Guest artist' },
    { name: 'Javier Amo', role: 'Guest artist', image: '/images/masterclasses/amo.jpg' },
    { name: 'Julio Bocca', role: 'Guest artist', image: '/images/masterclasses/julio.jpg' },
    { name: 'Lienz Chang', role: 'Guest artist', image: '/images/masterclasses/lienz.jpg' },
    { name: 'Maina Gielgud', role: 'Guest artist', image: '/images/masterclasses/maina.jpg' },
    { name: 'Marco Laudani', role: 'Guest artist', image: '/images/masterclasses/marco.jpg' },
    { name: 'Osiel Gouneo', role: 'Guest artist', image: '/images/masterclasses/osiel.jpg' },
    { name: 'Martha Iris Fernandes', role: 'Guest artist'},
    { name: 'Misha Tchoupakov', role: 'Guest artist', image: '/images/masterclasses/misha.jpg' },
    { name: 'Misha Zavilov', role: 'Guest artist'},
    { name: 'Oliver Matz', role: 'Guest artist', image: '/images/masterclasses/oliver.jpg' },
    { name: 'Roberta Ferrara', role: 'Guest artist'},
    { name: 'Sinner Boquin', role: 'Guest artist'},
    { name: 'Yannik Boquin', role: 'Guest artist', image: '/images/masterclasses/yannick.jpg' },
    { name: 'Jose Carlos Martinez', role: 'Guest artist', image: '/images/masterclasses/jose.jpg' },
  ];
}