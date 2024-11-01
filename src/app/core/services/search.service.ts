import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleSearch } from '../models/article-search.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchArticles(keyword: string): Observable<ArticleSearch> {
    return this.http.get<ArticleSearch>(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json`,
      {
        params: {
          q: keyword.trim(),
          'api-key': process.env.NG_APP_NYT_API_KEY,
        },
      },
    );
  }
}
