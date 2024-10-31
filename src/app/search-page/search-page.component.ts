import { Component } from '@angular/core';
import { TopStoriesSmall } from '../shared/components/top-stories/top-stories-small.component';
import { Loading } from '../shared/components/loading/loading.component';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../core/services/search.service';
import { Doc } from '../core/models/article-search.model';
import { Error } from '../shared/components/error/error.component';

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
  ) {}

  ngOnInit() {
    const keyword = this.route.snapshot.paramMap.get('keyword');

    if (!keyword) return;

    this.isLoading = true;

    this.searchKeyword = keyword;

    this.searchService.searchArticles(keyword).subscribe({
      next: (data) => {
        this.searchResult = data.response.docs;
      },
      error: (err) => {
        this.errorMessage = err;
      },
      complete: () => (this.isLoading = false),
    });
  }
}
