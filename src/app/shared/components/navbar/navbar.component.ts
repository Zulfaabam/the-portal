import {
  Component,
  effect,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SectionResult } from '../../../core/models/section-list.model';
import { NgClass } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { animate, scroll } from 'motion';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, ReactiveFormsModule],
  templateUrl: './navbar.component.html',
})
export class Navbar {
  constructor(private router: Router) {}

  navbar = viewChild.required<ElementRef>('navbar');

  isNavbarVisible = signal(true);

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
      section: 'food',
      display_name: 'Food',
    },
    {
      section: 'health',
      display_name: 'Health',
    },
    {
      section: 'home',
      display_name: 'Home',
    },
    {
      section: 'movies',
      display_name: 'Movies',
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
      section: 'us',
      display_name: 'US',
    },
    {
      section: 'world',
      display_name: 'World',
    },
  ];

  ngOnInit() {
    scroll((controls) => {
      const position = controls.y.current;
      const velocity = controls.y.velocity;

      if (Math.abs(velocity) > 50) {
        if (position < 300 || velocity < 0) {
          this.isNavbarVisible.set(true);
        } else {
          this.isNavbarVisible.set(false);
        }
      }
    });
  }

  animateNavbar = effect(() => {
    if (this.isNavbarVisible()) {
      animate(this.navbar().nativeElement, { y: '0%' }, { duration: 0.2 });
    } else {
      animate(this.navbar().nativeElement, { y: '-90%' }, { duration: 0.2 });
    }
  });

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
