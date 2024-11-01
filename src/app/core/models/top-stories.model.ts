import { Result } from './result.model';

export type TopStories = {
  status: string;
  copyright: string;
  section: string;
  last_updated: Date;
  num_results: number;
  results: Result[];
};
