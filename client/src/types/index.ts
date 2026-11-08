export type SkillCategory = 'all' | 'java-backend' | 'frontend' | 'realtime-backend' | 'databases' | 'tools-ai';

export interface Skill {
  name: string;
  level: 'Advanced' | 'Intermediate';
  category: SkillCategory;
  icon: string;
  highlight: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  tags: string[];
  summary: string;
  features: string[];
  metrics: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
