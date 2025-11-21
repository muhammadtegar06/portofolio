export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  startDate: string;
  endDate: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
  type: 'internship' | 'job' | 'contract';
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: number;
  url?: string;
}

export interface Skill {
  category: string;
  items: string[];
}
