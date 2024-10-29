import { Component, Input } from '@angular/core';
import { Result } from '../../../core/models/result.model';

@Component({
  selector: 'top-stories-small',
  standalone: true,
  templateUrl: './top-stories-small.component.html',
})
export class TopStoriesSmall {
  @Input() story!: Result;
}
