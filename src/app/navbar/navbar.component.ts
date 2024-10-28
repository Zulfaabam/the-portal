import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
})
export class Navbar {
  sections = [
    {
      id: 1,
      path: '/',
      title: 'home',
    },
    {
      id: 2,
      path: '/technology',
      title: 'technology',
    },
    {
      id: 3,
      path: '/world',
      title: 'world',
    },
  ];
}
