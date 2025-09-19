import { projects, experience, skills, personalInfo } from '../data';
import { validateAllData } from './dataValidation';

// Test function to validate all data
export const testDataIntegrity = (): void => {
  console.log('Testing data integrity...');
  
  const validation = validateAllData(projects, experience, skills, personalInfo);
  
  if (validation.isValid) {
    console.log('✅ All data validation passed!');
    console.log(`📊 Data summary:
    - Projects: ${projects.length}
    - Experience entries: ${experience.length}
    - Skills: ${skills.length}
    - Personal info: Valid`);
  } else {
    console.error('❌ Data validation failed:');
    validation.errors.forEach(error => console.error(`  - ${error}`));
  }
};

// Run the test if this file is executed directly
if (typeof window === 'undefined') {
  testDataIntegrity();
}