// Utility functions for the portfolio

export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const debounce = <T extends (...args: unknown[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// Export data validation utilities
export {
  validateProject,
  validateExperience,
  validateSkill,
  validatePersonalInfo,
  validateAllData
} from './dataValidation';

export { testDataIntegrity } from './testData';

// Utility function for merging class names
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Export resume service utilities
export {
  downloadResume,
  previewResume,
  getAvailableFormats,
  validateResumeSync,
  RESUME_FORMATS,
  type ResumeFormat,
  type DownloadResult
} from './resumeService';
