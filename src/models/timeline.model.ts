import { CSSProperties } from "react";

export interface TimelineStyle {
  content: CSSProperties;
  arrow: CSSProperties;
  icon: CSSProperties;
}

export interface TimelineStyles {
  line: string;
  timelines: Record<string, TimelineStyle>;
}

export enum TimelineStepType {
  Work = "work",
  Education = "education",
}

export interface TimelineStep {
  id: string;
  type: TimelineStepType;
  date: string;
  image?: string;
  imageDark?: string;
  title: string;
  subtitle?: string;
  description: string;
  chips: string[];
}
