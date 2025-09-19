import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Hero from '../Hero';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    img: ({ children, ...props }: any) => <img {...props}>{children}</img>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
}));

// Mock personal data
vi.mock('../../../data/personal', () => ({
  personalInfo: {
    name: 'Alex Johnson',
    title: 'Senior Data Engineer',
    email: 'alex.johnson@email.com',
    location: 'San Francisco, CA',
    yearsOfExperience: 6,
    summary: 'Passionate data engineer with 6+ years of experience building scalable data infrastructure and machine learning systems.',
    profileImage: '/images/profile_image.png',
    resumeUrl: '/resume/alex-johnson-resume.pdf',
    socialLinks: []
  }
}));

describe('Hero Component', () => {
  it('renders the hero section with correct content', () => {
    render(<Hero />);
    
    // Check if the main elements are present
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('Senior Data Engineer')).toBeInTheDocument();
    expect(screen.getByText(/Passionate data engineer/)).toBeInTheDocument();
    expect(screen.getByText('View My Work')).toBeInTheDocument();
    expect(screen.getByText('Download Resume')).toBeInTheDocument();
    expect(screen.getByText('Available for opportunities')).toBeInTheDocument();
    expect(screen.getByText('6+ Years Experience')).toBeInTheDocument();
  });

  it('has correct accessibility attributes', () => {
    render(<Hero />);
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', 'Alex Johnson - Senior Data Engineer');
  });

  it('renders call-to-action buttons', () => {
    render(<Hero />);
    
    const viewWorkButton = screen.getByText('View My Work');
    const downloadResumeButton = screen.getByText('Download Resume');
    
    expect(viewWorkButton).toBeInTheDocument();
    expect(downloadResumeButton).toBeInTheDocument();
  });
});