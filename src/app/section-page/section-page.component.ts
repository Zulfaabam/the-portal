import { Component, Input } from '@angular/core';
import { TopStoriesService } from '../core/services/top-stories.service';

@Component({
  selector: 'section-page',
  standalone: true,
  templateUrl: './section-page.component.html',
})
export class SectionPage {
  constructor(private topStoriesService: TopStoriesService) {}

  @Input()
  set section(section: string) {
    console.log(section);

    if (!section) return;

    this.topStoriesService.getTopStories(section).subscribe((data) => {
      console.log(data);
    });
  }
}
