import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import About from '../About';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }: any) => <h3 {...props}>{children}</h3>,
    img: ({ children, ...props }: any) => <img {...props}>{children}</img>,
  },
}));

describe('About Component', () => {
  it('renders the About section with correct heading', () => {
    render(<About />);
    
    const heading = screen.getByRole('heading', { name: /about me/i });
    expect(heading).toBeInTheDocument();
  });

  it('displays personal information and summary', () => {
    render(<About />);
    
    // Check for specific unique text that appears only once
    expect(screen.getByText(/I'm a passionate data engineer with over/i)).toBeInTheDocument();
    expect(screen.getByText(/transforming raw data into actionable insights/i)).toBeInTheDocument();
  });

  it('renders key achievement metrics', () => {
    render(<About />);
    
    // Check for metrics section
    expect(screen.getByRole('heading', { name: /key achievements/i })).toBeInTheDocument();
    
    // Check for specific metrics
    expect(screen.getByText('6+')).toBeInTheDocument();
    expect(screen.getByText('Years Experience')).toBeInTheDocument();
    expect(screen.getByText('10TB+')).toBeInTheDocument();
    expect(screen.getByText('Data Processed')).toBeInTheDocument();
    expect(screen.getByText('25+')).toBeInTheDocument();
    expect(screen.getByText('Projects Delivered')).toBeInTheDocument();
    expect(screen.getByText('15+')).toBeInTheDocument();
    expect(screen.getByText('Team Members')).toBeInTheDocument();
  });

  it('displays recent certifications', () => {
    render(<About />);
    
    expect(screen.getByRole('heading', { name: /recent certifications/i })).toBeInTheDocument();
    
    // Check for certification content (should show first 3)
    expect(screen.getByText(/AWS Certified Solutions Architect/i)).toBeInTheDocument();
  });

  it('renders professional image with correct alt text', () => {
    render(<About />);
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', 'Alex Johnson - Senior Data Engineer');
  });

  it('has proper section structure and accessibility', () => {
    render(<About />);
    
    const section = screen.getByTestId('about-section');
    expect(section).toHaveAttribute('id', 'about');
  });
});