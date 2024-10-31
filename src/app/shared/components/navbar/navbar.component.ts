import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { SectionResult } from '../../../core/models/section-list.model';
import { NgClass } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, ReactiveFormsModule],
  templateUrl: './navbar.component.html',
})
export class Navbar {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  isSectionMenuOpened: boolean = false;
  isMenuMobileOpen: boolean = false;
  searchText: string = '';

  searchForm = new FormGroup({
    keyword: new FormControl(''),
  });

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

  sections: SectionResult[] = [
    {
      section: 'arts',
      display_name: 'Arts',
    },
    {
      section: 'automobiles',
      display_name: 'Automobiles',
    },
    {
      section: 'books',
      display_name: 'Books',
    },
    {
      section: 'business',
      display_name: 'Business',
    },
    {
      section: 'climate',
      display_name: 'Climate',
    },
    {
      section: 'education',
      display_name: 'Education',
    },
    {
      section: 'food',
      display_name: 'Food',
    },
    {
      section: 'health',
      display_name: 'Health',
    },
    {
      section: 'home & garden',
      display_name: 'Home & Garden',
    },
    {
      section: 'job market',
      display_name: 'Job Market',
    },
    {
      section: 'movies',
      display_name: 'Movies',
    },
    {
      section: 'multimedia/photos',
      display_name: 'Multimedia/Photos',
    },
    {
      section: 'science',
      display_name: 'Science',
    },
    {
      section: 'sports',
      display_name: 'Sports',
    },
    {
      section: 'technology',
      display_name: 'Technology',
    },
    {
      section: 'travel',
      display_name: 'Travel',
    },
    {
      section: 'u.s.',
      display_name: 'U.S.',
    },
    {
      section: 'universal',
      display_name: 'Universal',
    },
    {
      section: 'world',
      display_name: 'World',
    },
  ];

  openMenuMobile() {
    this.isMenuMobileOpen = !this.isMenuMobileOpen;
  }

  handleSubmit() {
    if (!this.searchForm.value.keyword) return;

    const keyword: string = this.searchForm.value.keyword;

    this.router.navigate(['/search', keyword]);

    this.searchForm.reset();
  }
}
