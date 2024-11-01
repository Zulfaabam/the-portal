import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TopStories } from '../models/top-stories.model';

@Injectable({
  providedIn: 'root',
})
export class TopStoriesService {
  constructor(private http: HttpClient) {}

  getTopStories(section: string): Observable<TopStories> {
    return this.http.get<TopStories>(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json`,
      {
        params: {
          'api-key': process.env.NG_APP_NYT_API_KEY,
        },
      },
    );
  }
}
