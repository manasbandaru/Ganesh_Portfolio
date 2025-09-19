import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Contact from '../Contact';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}));

// Mock personal info data
vi.mock('../../../data/personal', () => ({
  personalInfo: {
    name: 'Alex Johnson',
    title: 'Senior Data Engineer',
    email: 'alex.johnson@email.com',
    location: 'San Francisco, CA',
    socialLinks: [
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/alexjohnson',
        icon: 'SiLinkedin'
      },
      {
        name: 'GitHub',
        url: 'https://github.com/alexjohnson',
        icon: 'SiGithub'
      }
    ]
  }
}));

describe('Contact Component', () => {
  it('renders contact section with all elements', () => {
    render(<Contact />);
    
    // Check main heading
    expect(screen.getByText("Let's Work Together")).toBeInTheDocument();
    
    // Check contact information
    expect(screen.getByText('alex.johnson@email.com')).toBeInTheDocument();
    expect(screen.getByText('San Francisco, CA')).toBeInTheDocument();
    expect(screen.getByText('Available for opportunities')).toBeInTheDocument();
    
    // Check form fields
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    
    // Check submit button
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    
    // Try to submit empty form
    await user.click(submitButton);
    
    // Check for validation errors
    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Message is required')).toBeInTheDocument();
    });
  });

  it('validates email format', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });
    
    // Fill valid name and message, but invalid email
    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'invalid-email');
    await user.type(messageInput, 'This is a valid message with enough characters.');
    await user.click(submitButton);
    
    // Check that the form doesn't submit successfully (no success message)
    await waitFor(() => {
      expect(screen.queryByText(/message sent successfully/i)).not.toBeInTheDocument();
    });
  });

  it('validates minimum field lengths', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const nameInput = screen.getByLabelText(/name/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });
    
    // Enter too short values
    await user.type(nameInput, 'A');
    await user.type(messageInput, 'Hi');
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Name must be at least 2 characters')).toBeInTheDocument();
      expect(screen.getByText('Message must be at least 10 characters')).toBeInTheDocument();
    });
  });

  it('clears errors when user starts typing', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const nameInput = screen.getByLabelText(/name/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });
    
    // Trigger validation error
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
    });
    
    // Start typing to clear error
    await user.type(nameInput, 'John');
    
    await waitFor(() => {
      expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });
    
    // Fill form with valid data
    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(messageInput, 'This is a test message with enough characters.');
    
    // Submit form
    await user.click(submitButton);
    
    // Check for loading state
    expect(screen.getByText('Sending...')).toBeInTheDocument();
    
    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
    }, { timeout: 3000 });
    
    // Check that form is cleared
    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(messageInput).toHaveValue('');
  });

  it('renders social media links', () => {
    render(<Contact />);
    
    // Check for social links (they should be rendered as links)
    const socialLinks = screen.getAllByRole('link');
    const externalLinks = socialLinks.filter(link => 
      link.getAttribute('target') === '_blank'
    );
    
    expect(externalLinks.length).toBeGreaterThan(0);
  });

  it('has proper accessibility attributes', () => {
    render(<Contact />);
    
    // Check form labels
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    
    // Check required field indicators
    expect(screen.getByText('Name *')).toBeInTheDocument();
    expect(screen.getByText('Email *')).toBeInTheDocument();
    expect(screen.getByText('Message *')).toBeInTheDocument();
  });
});