export interface Section {
  id: string;
  name: string;
  href: string;
}

export type Sections = Record<string, Section>;
