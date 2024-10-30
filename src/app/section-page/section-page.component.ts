import { Component, Input } from '@angular/core';
import { TopStoriesService } from '../core/services/top-stories.service';
import { Result } from '../core/models/result.model';
import { TopStoriesSmall } from '../shared/components/top-stories/top-stories-small.component';
import { Loading } from '../shared/components/loading/loading.component';

@Component({
  selector: 'section-page',
  standalone: true,
  templateUrl: './section-page.component.html',
  imports: [TopStoriesSmall, Loading],
})
export class SectionPage {
  newsResult!: Result[];
  sectionTitle: string = '';

  constructor(private topStoriesService: TopStoriesService) {}

  @Input()
  set section(section: string) {
    if (!section) return;
    this.sectionTitle = section;
    this.newsResult = [];
    this.topStoriesService.getTopStories(section).subscribe((data) => {
      this.newsResult = data.results;
    });
  }
}
