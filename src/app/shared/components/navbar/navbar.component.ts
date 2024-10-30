import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SectionResult } from '../../../core/models/section-list.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './navbar.component.html',
})
export class Navbar {
  isSectionMenuOpened: boolean = false;

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
}
