export interface ImageInfo {
  href: string;
  src: string;
  alt: string;
  title: string;
}

export interface Info {
  name: string;
  description: string;
  clickableImages: ImageInfo[];
}
