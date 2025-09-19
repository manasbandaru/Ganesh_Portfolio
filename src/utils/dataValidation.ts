import type { Project, Experience, Skill, PersonalInfo } from '../types';

// Validation functions for data integrity
export const validateProject = (project: Project): boolean => {
  return !!(
    project.id &&
    project.title &&
    project.description &&
    project.longDescription &&
    project.technologies.length > 0 &&
    project.category &&
    project.achievements.length > 0 &&
    project.timeline &&
    project.status
  );
};

export const validateExperience = (experience: Experience): boolean => {
  return !!(
    experience.id &&
    experience.company &&
    experience.role &&
    experience.duration &&
    experience.startDate &&
    experience.location &&
    experience.description &&
    experience.achievements.length > 0 &&
    experience.technologies.length > 0
  );
};

export const validateSkill = (skill: Skill): boolean => {
  return !!(
    skill.name &&
    skill.category &&
    skill.proficiency >= 1 &&
    skill.proficiency <= 5 &&
    skill.icon
  );
};

export const validatePersonalInfo = (info: PersonalInfo): boolean => {
  return !!(
    info.name &&
    info.title &&
    info.email &&
    info.location &&
    info.yearsOfExperience > 0 &&
    info.summary &&
    info.socialLinks.length > 0
  );
};

// Utility function to validate all data
export const validateAllData = (
  projects: Project[],
  experience: Experience[],
  skills: Skill[],
  personalInfo: PersonalInfo
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // Validate projects
  projects.forEach((project, index) => {
    if (!validateProject(project)) {
      errors.push(`Invalid project at index ${index}: ${project.title || 'Unknown'}`);
    }
  });

  // Validate experience
  experience.forEach((exp, index) => {
    if (!validateExperience(exp)) {
      errors.push(`Invalid experience at index ${index}: ${exp.company || 'Unknown'}`);
    }
  });

  // Validate skills
  skills.forEach((skill, index) => {
    if (!validateSkill(skill)) {
      errors.push(`Invalid skill at index ${index}: ${skill.name || 'Unknown'}`);
    }
  });

  // Validate personal info
  if (!validatePersonalInfo(personalInfo)) {
    errors.push('Invalid personal information');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};