import { Multimedia } from './multimedia.model';

export type Result = {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  uri: string;
  byline: string;
  item_type: string;
  updated_date: Date;
  created_date: Date;
  published_date: Date;
  material_type_facet: string;
  kicker: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  multimedia: Multimedia[];
  short_url?: string;
  source?: string;
  slug_name?: string;
  first_published_date?: Date;
  subheadline?: string;
  related_urls?: string[];
};
