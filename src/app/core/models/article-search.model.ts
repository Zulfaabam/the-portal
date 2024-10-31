export type ArticleSearch = {
  status: string;
  copyright: string;
  response: Response;
};

export type Response = {
  docs: Doc[];
};

export type Doc = {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
  multimedia: SearchMultimedia[];
  headline: Headline;
  keywords: Keyword[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  byline: Byline;
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
};

export type Byline = {
  original: string;
  person: Person[];
  organization: string;
};

export type Person = {
  firstname: string;
  middlename: string;
  lastname: string;
  qualifier: string;
  title: string;
  role: string;
  organization: string;
  rank: number;
};

export type Headline = {
  main: string;
  kicker: string;
  content_kicker: string;
  print_headline: string;
  name: string;
  seo: string;
  sub: string;
};

export type Keyword = {
  name: string;
  value: string;
  rank: number;
  major: string;
};

export type SearchMultimedia = {
  rank: number;
  subtype: string;
  caption: string;
  credit: string;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy: Legacy;
  subType: string;
  crop_name: string;
};

export type Legacy = {
  xlarge: string;
  xlargewidth: number;
  xlargeheight: number;
};
