import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimesNewswire } from '../models/times-newswire.model';

@Injectable({
  providedIn: 'root',
})
export class TimesNewswireService {
  constructor(private http: HttpClient) {}

  getTimesNews(): Observable<TimesNewswire> {
    return this.http.get<TimesNewswire>(
      `https://api.nytimes.com/svc/news/v3/content/all/all.json`,
      {
        params: {
          'api-key': process.env.NG_APP_NYT_API_KEY,
        },
      },
    );
  }
}
