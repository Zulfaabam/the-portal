import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar.component';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { TopStoriesService } from './core/services/top-stories.service';
import { Result, TopStories } from './core/models/top-stories.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, AsyncPipe, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  topStories!: Result[];
  firstStory!: Result;

  constructor(private TopStoriesService: TopStoriesService) {}

  ngOnInit(): void {
    this.TopStoriesService.getTopStories('home').subscribe((data) => {
      this.firstStory = data.results[0];
      this.topStories = data.results.slice(1, 4);
    });
  }
}
