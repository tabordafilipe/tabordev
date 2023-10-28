export interface IconInfo {
  href: string;
  name: string;
  title: string;
}

export interface Info {
  name: string;
  descriptionSequence: Array<string | number>;
  summary: string;
  icons: IconInfo[];
}
