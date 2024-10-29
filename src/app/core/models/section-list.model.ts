export type SectionList = {
  status: string;
  copyright: string;
  num_results: number;
  results: SectionResult[];
};

export type SectionResult = {
  section: string;
  display_name: string;
};
