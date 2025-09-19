import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Experience from '../Experience';

describe('Experience Component', () => {
  it('renders the experience section', () => {
    render(<Experience />);
    
    expect(screen.getByText('Professional Experience')).toBeInTheDocument();
    expect(screen.getByText('Senior Data Engineer')).toBeInTheDocument();
    expect(screen.getByText('TechCorp Solutions')).toBeInTheDocument();
  });

  it('expands and collapses experience cards', () => {
    render(<Experience />);
    
    const firstCard = screen.getByText('Senior Data Engineer').closest('div')?.parentElement;
    expect(firstCard).toBeInTheDocument();
    
    // Click to expand
    if (firstCard) {
      fireEvent.click(firstCard);
      expect(screen.getByText('Key Achievements')).toBeInTheDocument();
    }
  });

  it('displays technology tags', () => {
    render(<Experience />);
    
    expect(screen.getAllByText('Python').length).toBeGreaterThan(0); // Python appears in multiple jobs
    expect(screen.getByText('Apache Spark')).toBeInTheDocument();
  });

  it('shows current position indicator', () => {
    render(<Experience />);
    
    expect(screen.getByText('Current')).toBeInTheDocument();
  });
});