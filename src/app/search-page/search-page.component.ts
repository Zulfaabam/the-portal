import { Component } from '@angular/core';
import { TopStoriesSmall } from '../shared/components/top-stories/top-stories-small.component';
import { Loading } from '../shared/components/loading/loading.component';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../core/services/search.service';
import { Doc } from '../core/models/article-search.model';

@Component({
  selector: 'search-page',
  standalone: true,
  templateUrl: './search-page.component.html',
  imports: [TopStoriesSmall, Loading],
})
export class SearchPage {
  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
  ) {}

  searchKeyword: string = 'Search';
  searchResult!: Doc[];

  ngOnInit() {
    const keyword = this.route.snapshot.paramMap.get('keyword');

    if (!keyword) return;

    this.searchKeyword = keyword;

    this.searchService.searchArticles(keyword).subscribe((data) => {
      this.searchResult = data.response.docs;
    });
  }
}
