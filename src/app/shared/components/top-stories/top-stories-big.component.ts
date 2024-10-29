import { Component, Input } from '@angular/core';
import { Result } from '../../../core/models/result.model';

@Component({
  selector: 'top-stories-big',
  standalone: true,
  templateUrl: './top-stories-big.component.html',
})
export class TopStoriesBig {
  @Input() story!: Result;
}
