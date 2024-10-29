import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SectionListService } from '../../../core/services/section-list.service';
import { SectionResult } from '../../../core/models/section-list.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class Navbar {
  menuItems = [
    {
      id: 1,
      path: '/',
      title: 'home',
    },
    {
      id: 2,
      path: '/section',
      title: 'sections',
    },
  ];

  sections!: SectionResult[];

  constructor(private sectionListService: SectionListService) {}

  ngOnInit() {
    this.sectionListService.getSectionList().subscribe((data) => {
      console.log(data);
      this.sections = data.results;
    });
  }
}
