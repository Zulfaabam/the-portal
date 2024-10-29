import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SectionList } from '../models/section-list.model';

@Injectable({
  providedIn: 'root',
})
export class SectionListService {
  constructor(private http: HttpClient) {}

  getSectionList(): Observable<SectionList> {
    return this.http.get<SectionList>(
      `https://api.nytimes.com/svc/news/v3/content/section-list.json`,
      {
        params: {
          'api-key': import.meta.env.NG_APP_NYT_API_KEY,
        },
      },
    );
  }
}
