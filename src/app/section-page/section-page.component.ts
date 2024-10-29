import { Component, Input } from '@angular/core';

@Component({
  selector: 'section-page',
  standalone: true,
  templateUrl: './section-page.component.html',
})
export class SectionPage {
  @Input()
  set section(section: string) {
    console.log(section);
  }
}
