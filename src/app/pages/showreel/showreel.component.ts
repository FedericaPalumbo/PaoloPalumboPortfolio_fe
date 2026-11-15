import { Component, computed, signal } from '@angular/core';
import { Playable, Showreel, Video, VideoFilter } from '../../entities';
import { VideoPosterComponent } from '../../components/video-poster/video-poster.component';
import { VideoCardComponent } from '../../components/video-card/video-card.component';
import { VideoModalComponent } from '../../components/video-modal/video-modal.component';

@Component({
  imports: [VideoPosterComponent, VideoCardComponent, VideoModalComponent],
  selector: 'app-showreel',
  styleUrl: './showreel.component.css',
  templateUrl: './showreel.component.html',
})
export class ShowreelComponent {
  // per ora le foto fanno da copertina; quando i video sono pronti basta aggiungere src (es. '/videos/showreel-2025.mp4')
  protected readonly showreel: Showreel = {
    title: 'Showreel 2025',
    duration: '01:42',
    tags: 'Classical, contemporary & partnering',
    poster: '/images/hero.jpg',
  };

  protected readonly videos: Video[] = [
    {
      title: 'Don Quixote — Basilio',
      category: 'Performances',
      meta: '2024 · YAGP Finals, USA',
      role: 'Senior Men Solo',
      poster: '/images/about-action.jpg',
    },
    {
      title: 'Between Two Breaths',
      category: 'Contemporary',
      meta: '2025 · Studio Film',
      role: 'Contemporary Solo',
      poster: '/images/about-portrait.jpg',
    },
    {
      title: 'Le Corsaire — Pas de deux',
      category: 'Classical',
      meta: '2023 · Youth America Grand Prix',
      role: 'Partnering with Nuria Fernandes',
      poster: '/images/hero.jpg',
    },
    {
      title: 'Rehearsal Room',
      category: 'Behind the scenes',
      meta: '2025 · Brno Theatre',
      role: 'Company Artist',
      poster: '/images/about-banner.jpg',
    },
  ];

  protected readonly filters: VideoFilter[] = ['All', 'Classical', 'Contemporary', 'Performances', 'Behind the scenes'];

  // filtro scelto
  protected filter = signal<VideoFilter>('All');

  // video del filtro scelto. L'indice è quello nella lista completa:
  // così il numero delle card non cambia mentre si filtra
  protected visibleVideos = computed(() =>
    this.videos
      .map((video, index) => ({ video, index }))
      .filter(item => this.filter() === 'All' || item.video.category === this.filter())
  );

  // video aperto nel lettore (null = lettore chiuso)
  protected selected = signal<Playable | null>(null);
}