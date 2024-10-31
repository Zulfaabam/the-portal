import { Component } from '@angular/core';
import { TopStoriesSmall } from '../shared/components/top-stories/top-stories-small.component';
import { Loading } from '../shared/components/loading/loading.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SearchService } from '../core/services/search.service';
import { Doc } from '../core/models/article-search.model';
import { Error } from '../shared/components/error/error.component';
import { filter } from 'rxjs';

@Component({
  selector: 'search-page',
  standalone: true,
  templateUrl: './search-page.component.html',
  imports: [TopStoriesSmall, Loading, Error],
})
export class SearchPage {
  searchKeyword: string = 'Search';
  searchResult!: Doc[];
  errorMessage!: string;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private router: Router,
  ) {
    router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((val) => {
        const keyword = val.url.split('/')[2];

        if (!keyword) return;

        this.isLoading = true;

        searchService.searchArticles(keyword).subscribe({
          next: (data) => {
            this.searchResult = data.response.docs;
          },
          error: (err) => {
            this.isLoading = false;
            this.errorMessage = err;
          },
          complete: () => (this.isLoading = false),
        });
      });
  }
}
