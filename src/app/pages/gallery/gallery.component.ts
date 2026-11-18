import { Component, computed, signal } from '@angular/core';
import { GalleryFilter, Photo } from '../../entities';
import { PhotoCardComponent } from '../../components/photo-card/photo-card.component';

@Component({
  imports: [PhotoCardComponent],
  selector: 'app-gallery',
  styleUrl: './gallery.component.css',
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  // per ora si riusano le foto già in public/images; con le foto vere basta cambiare image
  protected readonly photos: Photo[] = [
    {
      title: 'Don Quixote',
      category: 'Stage',
      image: '/images/hero.jpg',
      credit: 'Studio Archive',
    },
    {
      title: 'Quiet Geometry',
      category: 'Studio',
      image: '/images/about-portrait.jpg',
      credit: 'Elena Rossi',
    },
    {
      title: 'Flight Study',
      category: 'Movement',
      image: '/images/about-action.jpg',
      credit: 'Martin Kovář',
    },
    {
      title: 'Backstage, Brno',
      category: 'Backstage',
      image: '/images/about-banner.jpg',
      credit: 'Company Archive',
    },
    {
      title: 'Pas de Deux',
      category: 'Stage',
      image: '/images/hero.jpg',
      credit: 'Luca Ferretti',
    },
    {
      title: 'Portrait No. 01',
      category: 'Portraits',
      image: '/images/about-portrait.jpg',
      credit: 'Placeholder credit',
    },
  ];

  protected readonly filters: GalleryFilter[] = ['All', 'Stage', 'Studio', 'Movement', 'Backstage', 'Portraits'];

  // filtro scelto
  protected filter = signal<GalleryFilter>('All');

  // foto del filtro scelto
  protected visiblePhotos = computed(() =>
    this.photos.filter(photo => this.filter() === 'All' || photo.category === this.filter())
  );
}