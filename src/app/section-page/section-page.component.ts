import {
  Component,
  effect,
  ElementRef,
  Input,
  viewChildren,
} from '@angular/core';
import { TopStoriesService } from '../core/services/top-stories.service';
import { Result } from '../core/models/result.model';
import { TopStoriesSmall } from '../shared/components/top-stories/top-stories-small.component';
import { Loading } from '../shared/components/loading/loading.component';
import { Error } from '../shared/components/error/error.component';
import { HttpErrorResponse } from '@angular/common/http';
import { animate, scroll } from 'motion';

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

  sectionNews = viewChildren<ElementRef>('sectionNews');

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
        error: (err: HttpErrorResponse) => {
          this.isLoading = false;
          this.errorMessage = err.message;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
  }

  fadeInFadeOut = effect(() => {
    this.sectionNews().forEach((item) => {
      scroll(animate(item.nativeElement, { opacity: [0, 1, 1, 0] }), {
        target: item.nativeElement,
        offset: ['start end', 'end end', 'start start', 'end start'],
      });
    });
  });
}
