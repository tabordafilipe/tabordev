export interface CurriculumInfo {
  name: string;
  role: string;
  contacts: {
    email: string;
    phone: string;
    linkedin: string;
    website: string;
  };
}

export interface CurriculumJob {
  id: string;
  company: string;
  date: string;
  role: string;
  project: string;
  description: string;
  descriptionPDF: string;
  skills: string[];
}

export interface CurriculumExperience {
  title: string;
  jobs: CurriculumJob[];
}

export interface CurriculumAbout {
  title: string;
  description: string;
  descriptionPDF: string;
}

export interface CurriculumSkillsGroup {
  group: string;
  skills: string[];
}

export interface CurriculumSkills {
  title: string;
  skillsGroups: CurriculumSkillsGroup[];
}

export interface CurriculumEducation {
  title: string;
  university: string;
  course: string;
  degree: string;
}

export interface CurriculumInterests {
  title: string;
  description: string;
  descriptionPDF: string;
}

export interface CurriculumModel {
  info: CurriculumInfo;
  experience: CurriculumExperience;
  about: CurriculumAbout;
  skills: CurriculumSkills;
  education: CurriculumEducation;
  interests: CurriculumInterests;
}
