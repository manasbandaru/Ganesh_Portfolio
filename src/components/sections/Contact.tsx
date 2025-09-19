import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiMapPin, 
  FiSend, 
  FiCheck,
  FiAlertCircle,
  FiDownload
} from 'react-icons/fi';
import { 
  SiLinkedin
} from 'react-icons/si';
import { personalInfo } from '../../data/personal';
import { validateEmail } from '../../utils';
import type { ContactForm } from '../../types';
import Button from '../ui/Button';
import { Card, CardContent } from '../ui/Card';

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Social media icon mapping
  const socialIcons = {
    SiLinkedin: SiLinkedin
  };

  // Download resume function
  const downloadResume = () => {
    if (personalInfo.resumeUrl) {
      const link = document.createElement('a');
      link.href = personalInfo.resumeUrl;
      link.download = `${personalInfo.name.replace(/\s+/g, '-')}-Resume.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, we'll just show success
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-slate-800 smooth-scroll-section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-4">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white text-center lg:text-left">Get in Touch</h3>
              <div className="space-y-4 sm:space-y-6">
                {/* Email */}
                <motion.div 
                  className="flex items-center space-x-3 sm:space-x-4 group"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                    <FiMail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-slate-300 text-xs sm:text-sm">Email</p>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-white hover:text-blue-400 active:text-blue-300 transition-colors font-medium text-sm sm:text-base break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div 
                  className="flex items-center space-x-3 sm:space-x-4 group"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-600/20 rounded-lg flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
                    <FiMapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-xs sm:text-sm">Location</p>
                    <p className="text-white font-medium text-sm sm:text-base">{personalInfo.location}</p>
                  </div>
                </motion.div>

                {/* Availability */}
                <motion.div 
                  className="flex items-center space-x-3 sm:space-x-4 group"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                    <motion.div 
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div>
                    <p className="text-slate-300 text-xs sm:text-sm">Availability</p>
                    <p className="text-white font-medium text-sm sm:text-base">Available for opportunities</p>
                  </div>
                </motion.div>

                {/* Download Resume */}
                <motion.div 
                  className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                  onClick={downloadResume}
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-orange-600/20 rounded-lg flex items-center justify-center group-hover:bg-orange-600/30 transition-colors">
                    <FiDownload className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-xs sm:text-sm">Resume</p>
                    <p className="text-white font-medium text-sm sm:text-base hover:text-orange-400 transition-colors">Download PDF</p>
                  </div>
                </motion.div>
              </div>
            </div>



            {/* Social Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white text-center lg:text-left">Connect with me</h4>
              <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4">
                {personalInfo.socialLinks.map((social, index) => {
                    const IconComponent = socialIcons[social.icon as keyof typeof socialIcons];
                    
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 active:bg-blue-700 transition-all duration-300 group touch-target"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {IconComponent && <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />}
                        <span className="sr-only">{social.name}</span>
                      </motion.a>
                    );
                  })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="p-4 sm:p-6 lg:p-8">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-700 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-sm sm:text-base ${
                        errors.name ? 'border-red-500' : 'border-slate-600 focus:border-blue-500'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <motion.p 
                        className="mt-2 text-sm text-red-400 flex items-center space-x-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <FiAlertCircle className="w-4 h-4" />
                        <span>{errors.name}</span>
                      </motion.p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-700 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-sm sm:text-base ${
                        errors.email ? 'border-red-500' : 'border-slate-600 focus:border-blue-500'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <motion.p 
                        className="mt-2 text-sm text-red-400 flex items-center space-x-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <FiAlertCircle className="w-4 h-4" />
                        <span>{errors.email}</span>
                      </motion.p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-700 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none text-sm sm:text-base ${
                        errors.message ? 'border-red-500' : 'border-slate-600 focus:border-blue-500'
                      }`}
                      placeholder="Tell me about your project or just say hello..."
                    />
                    {errors.message && (
                      <motion.p 
                        className="mt-2 text-sm text-red-400 flex items-center space-x-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <FiAlertCircle className="w-4 h-4" />
                        <span>{errors.message}</span>
                      </motion.p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden group touch-target"
                    size="lg"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          />
                          <span className="text-sm sm:text-base">Sending...</span>
                        </>
                      ) : (
                        <>
                          <FiSend className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="text-sm sm:text-base">Send Message</span>
                        </>
                      )}
                    </span>
                  </Button>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      className="p-4 bg-green-600/20 border border-green-600/50 rounded-lg flex items-center space-x-2 text-green-400"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <FiCheck className="w-5 h-5" />
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      className="p-4 bg-red-600/20 border border-red-600/50 rounded-lg flex items-center space-x-2 text-red-400"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <FiAlertCircle className="w-5 h-5" />
                      <span>Something went wrong. Please try again or email me directly.</span>
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;