import { Component } from '@angular/core';
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
  ],
  templateUrl: './home-page.component.html',
})
export class HomePage {
  firstStory!: Result;
  topStories!: Result[];
  latestNews!: Result[];

  constructor(
    private topStoriesService: TopStoriesService,
    private timesNewswireService: TimesNewswireService,
  ) {}

  ngOnInit(): void {
    forkJoin([
      this.topStoriesService.getTopStories('home'),
      this.timesNewswireService.getTimesNews(),
    ]).subscribe(([stories, newswire]) => {
      this.firstStory = stories.results[0];
      this.topStories = stories.results.slice(1, 4);
      this.latestNews = newswire.results
        .filter((r) => r.multimedia.length > 0)
        .slice(0, 8);
    });
  }
}
