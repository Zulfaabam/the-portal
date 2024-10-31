import { Component, Input } from '@angular/core';
import { Result } from '../../../core/models/result.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'top-stories-big',
  standalone: true,
  templateUrl: './top-stories-big.component.html',
  imports: [NgOptimizedImage],
})
export class TopStoriesBig {
  @Input() story!: Result;
}
