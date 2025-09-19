export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'data-pipeline' | 'analytics' | 'ml-ops' | 'infrastructure';
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  achievements: string[];
  timeline: string;
  featured?: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate?: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo: string;
  companyUrl?: string;
  current?: boolean;
}

export interface Skill {
  name: string;
  category: 'programming' | 'databases' | 'cloud' | 'tools' | 'frameworks';
  proficiency: number; // 1-5 scale
  icon: string;
  description?: string;
  yearsOfExperience?: number;
  certifications?: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  yearsOfExperience: number;
  summary: string;
  profileImage: string;
  resumeUrl?: string;
  socialLinks: SocialLink[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  logo: string;
}

export type SkillCategory = 'programming' | 'databases' | 'cloud' | 'tools' | 'frameworks';
export type ProjectCategory = 'data-pipeline' | 'analytics' | 'ml-ops' | 'infrastructure';
export type ProjectStatus = 'completed' | 'in-progress' | 'planned';
