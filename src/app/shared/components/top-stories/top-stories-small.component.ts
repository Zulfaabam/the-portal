import { Component, Input } from '@angular/core';
import { Result } from '../../../core/models/result.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'top-stories-small',
  standalone: true,
  templateUrl: './top-stories-small.component.html',
  imports: [NgOptimizedImage],
})
export class TopStoriesSmall {
  @Input() story!: Result;
}
