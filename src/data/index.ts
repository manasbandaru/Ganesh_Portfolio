// Export all data modules for easy importing
export { projects } from './projects';
export { experience } from './experience';
export { skills, getSkillsByCategory, getFeaturedSkills, getSkillsWithCertifications } from './skills';
export { personalInfo, certifications } from './personal';

// Export types for convenience
export type {
  Project,
  Experience,
  Skill,
  PersonalInfo,
  SocialLink,
  Certification,
  ContactForm,
  SkillCategory,
  ProjectCategory,
  ProjectStatus
} from '../types';