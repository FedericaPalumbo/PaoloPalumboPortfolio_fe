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
      image: 'images/hero.jpg',
      credit: 'Studio Archive',
      shape: 'tall',
    },
    {
      title: 'Quiet Geometry',
      category: 'Studio',
      image: 'images/gallery/gallery15.jpg',
      credit: 'Elena Rossi',
      shape: 'wide',
    },
    {
      title: 'Flight Study',
      category: 'Movement',
      image: 'images/gallery/gallery14.jpg',
      credit: 'Martin Kovář',
      shape: 'square',
    },
    {
      title: 'Backstage, Brno',
      category: 'Backstage',
      image: 'images/gallery/gallery13.jpg',
      credit: 'Company Archive',
      shape: 'tall',
    },
    {
      title: 'Pas de Deux',
      category: 'Stage',
      image: 'images/gallery/gallery12.jpg',
      credit: 'Luca Ferretti',
      shape: 'wide',
    },
    {
      title: 'Portrait No. 01',
      category: 'Portraits',
      image: 'images/gallery/gallery11.jpg',
      credit: 'Placeholder credit',
      shape: 'square',
    },
    {
      title: 'Quiet Geometry',
      category: 'Studio',
      image: 'images/gallery/gallery10.jpg',
      credit: 'Elena Rossi',
      shape: 'wide',
    },
    {
      title: 'Backstage, Brno',
      category: 'Backstage',
      image: 'images/gallery/gallery8.jpg',
      credit: 'Company Archive',
      shape: 'tall',
    },
    {
      title: 'Pas de Deux',
      category: 'Stage',
      image: 'images/gallery/gallery7.jpg',
      credit: 'Luca Ferretti',
      shape: 'wide',
    },
    {
      title: 'Portrait No. 01',
      category: 'Portraits',
      image: 'images/gallery/gallery6.jpg',
      credit: 'Placeholder credit',
      shape: 'square',
    },
    {
      title: 'Quiet Geometry',
      category: 'Studio',
      image: 'images/gallery/gallery5.jpg',
      credit: 'Elena Rossi',
      shape: 'wide',
    },
    {
      title: 'Flight Study',
      category: 'Movement',
      image: 'images/gallery/gallery4.jpg',
      credit: 'Martin Kovář',
      shape: 'square',
    },
    {
      title: 'Backstage, Brno',
      category: 'Backstage',
      image: 'images/gallery/gallery3.jpg',
      credit: 'Company Archive',
      shape: 'tall',
    },
    {
      title: 'Pas de Deux',
      category: 'Stage',
      image: 'images/gallery/gallery2.jpg',
      credit: 'Luca Ferretti',
      shape: 'wide',
    },
    {
      title: 'Portrait No. 01',
      category: 'Portraits',
      image: 'images/gallery/gallery1.jpg',
      credit: 'Placeholder credit',
      shape: 'square',
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