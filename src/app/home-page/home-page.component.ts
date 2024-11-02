import {
  Component,
  effect,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Navbar } from '../shared/components/navbar/navbar.component';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { TopStoriesService } from '../core/services/top-stories.service';
import { Result } from '../core/models/result.model';
import { TopStoriesBig } from '../shared/components/top-stories/top-stories-big.component';
import { TopStoriesSmall } from '../shared/components/top-stories/top-stories-small.component';
import { forkJoin } from 'rxjs';
import { TimesNewswireService } from '../core/services/times-newswire.service';
import { Footer } from '../shared/components/footer/footer.component';
import { Loading } from '../shared/components/loading/loading.component';
import { Error } from '../shared/components/error/error.component';
import { HttpErrorResponse } from '@angular/common/http';
import { animate, stagger } from 'motion';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    Navbar,
    AsyncPipe,
    NgOptimizedImage,
    TopStoriesBig,
    TopStoriesSmall,
    Footer,
    Loading,
    Error,
  ],
  templateUrl: './home-page.component.html',
})
export class HomePage {
  topStoriesSectRef = viewChild.required<ElementRef>('topStoriesSection');
  latestNewsSectRef = viewChild.required<ElementRef>('latestNewsSection');

  isLoadComplete = signal(false);

  isLoading: boolean = false;
  errorMessage: string = '';
  firstStory!: Result;
  topStories!: Result[];
  latestNews!: Result[];

  constructor(
    private topStoriesService: TopStoriesService,
    private timesNewswireService: TimesNewswireService,
  ) {}

  ngOnInit(): void {
    this.isLoading = true;

    forkJoin([
      this.topStoriesService.getTopStories('home'),
      this.timesNewswireService.getTimesNews(),
    ]).subscribe({
      next: ([stories, newswire]) => {
        this.firstStory = stories.results[0];
        this.topStories = stories.results.slice(1, 4);
        this.latestNews = newswire.results
          .filter((r) => r.title !== '' && r.multimedia.length > 0)
          .slice(0, 8);
      },
      error: (err: HttpErrorResponse) => {
        this.isLoading = false;
        this.isLoadComplete.set(true);
        this.errorMessage = err.message;
      },
      complete: () => {
        this.isLoading = false;
        this.isLoadComplete.set(true);
      },
    });
  }

  animateSections = effect(() => {
    if (this.isLoadComplete()) {
      animate(
        this.topStoriesSectRef().nativeElement,
        { x: ['-100%', '0%'] },
        {
          delay: stagger(0.1),
          duration: 1,
          easing: [0.22, 0.03, 0.26, 1],
        },
      );
      animate(
        this.latestNewsSectRef().nativeElement,
        { y: ['100%', '0%'] },
        {
          delay: stagger(0.2),
          duration: 1,
          easing: [0.22, 0.03, 0.26, 1],
        },
      );
    }
  });
}
