import { Component, Input } from '@angular/core';
import { TopStoriesService } from '../core/services/top-stories.service';
import { Result } from '../core/models/result.model';
import { TopStoriesSmall } from '../shared/components/top-stories/top-stories-small.component';
import { Loading } from '../shared/components/loading/loading.component';
import { Error } from '../shared/components/error/error.component';

@Component({
  selector: 'section-page',
  standalone: true,
  templateUrl: './section-page.component.html',
  imports: [TopStoriesSmall, Loading, Error],
})
export class SectionPage {
  isLoading: boolean = false;
  errorMessage: string = '';
  newsResult!: Result[];
  sectionTitle: string = '';

  constructor(private topStoriesService: TopStoriesService) {}

  @Input()
  set section(section: string) {
    if (!section) return;

    this.isLoading = true;

    this.sectionTitle = section;

    this.topStoriesService
      .getTopStories(section)
      .pipe()
      .subscribe({
        next: (data) => {
          this.newsResult = data.results;
        },
        error: (err) => {
          this.isLoading = false;
          this.errorMessage = err;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
  }
}
