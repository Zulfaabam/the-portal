import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
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
      path: '/section',
      title: 'sections',
    },
  ];
}
