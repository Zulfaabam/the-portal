import { Result } from './result.model';

export type TimesNewswire = {
  status: string;
  copyright: string;
  num_results: number;
  results: Result[];
};
