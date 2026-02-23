export interface Project {
  title: string;
  description: string;
  techStack: string[];
  links: {
    github?: string;
    live?: string;
  };
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface Skill {
  name: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}