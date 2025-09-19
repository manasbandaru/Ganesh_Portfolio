import { personalInfo } from '../data/personal';

export interface ResumeFormat {
  format: 'pdf' | 'docx';
  label: string;
  mimeType: string;
  extension: string;
}

export const RESUME_FORMATS: ResumeFormat[] = [
  {
    format: 'pdf',
    label: 'PDF',
    mimeType: 'application/pdf',
    extension: 'pdf'
  },
  {
    format: 'docx',
    label: 'Word Document',
    mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    extension: 'docx'
  }
];

export interface DownloadResult {
  success: boolean;
  error?: string;
}

/**
 * Downloads the resume in the specified format
 * @param format - The format to download (pdf or docx)
 * @returns Promise with download result
 */
export const downloadResume = async (format: 'pdf' | 'docx' = 'pdf'): Promise<DownloadResult> => {
  try {
    const resumeFormat = RESUME_FORMATS.find(f => f.format === format);
    if (!resumeFormat) {
      throw new Error(`Unsupported format: ${format}`);
    }

    // Construct the file path based on format
    const fileName = format === 'pdf' 
      ? 'Venkata_Data_Engineer.pdf'
      : 'Venkata_Data_Engineer.docx';
    
    const filePath = `/resume/${fileName}`;
    
    // Check if file exists by attempting to fetch it
    const response = await fetch(filePath, { method: 'HEAD' });
    
    if (!response.ok) {
      // If specific format doesn't exist, fall back to PDF
      if (format === 'docx') {
        console.warn('DOCX format not available, falling back to PDF');
        return downloadResume('pdf');
      }
      throw new Error(`Resume file not found: ${filePath}`);
    }

    // Create download link
    const link = document.createElement('a');
    link.href = filePath;
    link.download = `${personalInfo.name.replace(/\s+/g, '-')}-Resume.${resumeFormat.extension}`;
    link.style.display = 'none';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Track download analytics (if needed)
    trackResumeDownload(format);

    return { success: true };
  } catch (error) {
    console.error('Resume download failed:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Download failed' 
    };
  }
};

/**
 * Gets the available resume formats
 * @returns Array of available resume formats
 */
export const getAvailableFormats = async (): Promise<ResumeFormat[]> => {
  const availableFormats: ResumeFormat[] = [];
  
  for (const format of RESUME_FORMATS) {
    try {
      const fileName = format.format === 'pdf' 
        ? 'Venkata_Data_Engineer.pdf'
        : 'Venkata_Data_Engineer.docx';
      
      const response = await fetch(`/resume/${fileName}`, { method: 'HEAD' });
      
      if (response.ok) {
        availableFormats.push(format);
      }
    } catch (error) {
      console.warn(`Format ${format.format} not available:`, error);
    }
  }
  
  // Ensure PDF is always available as fallback
  if (availableFormats.length === 0) {
    availableFormats.push(RESUME_FORMATS[0]); // PDF format
  }
  
  return availableFormats;
};

/**
 * Opens resume in a new tab for preview
 * @param format - The format to preview (defaults to pdf)
 */
export const previewResume = (format: 'pdf' | 'docx' = 'pdf'): void => {
  const fileName = format === 'pdf' 
    ? 'Venkata_Data_Engineer.pdf'
    : 'Venkata_Data_Engineer.docx';
  
  const filePath = `/resume/${fileName}`;
  window.open(filePath, '_blank', 'noopener,noreferrer');
};

/**
 * Tracks resume download for analytics
 * @param format - The format that was downloaded
 */
const trackResumeDownload = (format: string): void => {
  // Analytics tracking can be implemented here
  // For example: Google Analytics, Mixpanel, etc.
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'resume_download', {
      event_category: 'engagement',
      event_label: format,
      value: 1
    });
  }
  
  console.log(`Resume downloaded in ${format} format`);
};

/**
 * Validates if resume content is synchronized with portfolio
 * This checks basic information consistency
 */
export const validateResumeSync = (): { isValid: boolean; issues: string[] } => {
  const issues: string[] = [];
  
  // Check if resume URL is configured
  if (!personalInfo.resumeUrl) {
    issues.push('Resume URL not configured in personal info');
  }
  
  // Check if resume file exists (basic validation)
  if (personalInfo.resumeUrl && !personalInfo.resumeUrl.includes('.pdf')) {
    issues.push('Resume URL should point to a PDF file');
  }
  
  // Check if personal info is complete
  if (!personalInfo.name || !personalInfo.title || !personalInfo.email) {
    issues.push('Personal information is incomplete');
  }
  
  // Check if years of experience is reasonable
  if (personalInfo.yearsOfExperience < 0 || personalInfo.yearsOfExperience > 50) {
    issues.push('Years of experience seems unrealistic');
  }
  
  // Additional validations can be added here:
  // - Check if experience dates match resume
  // - Validate skill consistency
  // - Ensure contact information matches
  
  return {
    isValid: issues.length === 0,
    issues
  };
};