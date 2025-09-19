import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { personalInfo } from '../../data/personal';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const fullText = personalInfo.name;
  const typingSpeed = 100; // milliseconds per character

  // Typing animation effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
      return () => {}; // Empty cleanup function
    }
  }, [currentIndex, fullText]);

  // Scroll to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Download resume
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



  return (
    <section id="hero" className="min-h-screen flex items-center section-padding relative overflow-hidden smooth-scroll-section">
      {/* Animated Background Particles - Reduced for mobile performance */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
            }}
            animate={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="flex items-center justify-center min-h-[80vh] w-full">
          <motion.div 
            className="space-y-6 sm:space-y-8 text-center max-w-5xl mx-auto px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4 sm:space-y-6">
              {/* Animated Name */}
              <motion.h1 
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="block">
                  {displayedText}
                  <motion.span
                    className="inline-block w-0.5 sm:w-1 h-8 sm:h-12 md:h-16 bg-blue-400 ml-1 sm:ml-2"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                  />
                </span>
                <motion.span 
                  className="block text-blue-400 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isTypingComplete ? 1 : 0, x: isTypingComplete ? 0 : -20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {personalInfo.title}
                </motion.span>
              </motion.h1>

              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isTypingComplete ? 1 : 0, y: isTypingComplete ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {personalInfo.summary}
              </motion.p>
            </div>

            {/* Call-to-Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isTypingComplete ? 1 : 0, y: isTypingComplete ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.button 
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 relative overflow-hidden group w-full sm:w-auto min-w-[180px]"
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <motion.button 
                className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 relative overflow-hidden group w-full sm:w-auto min-w-[180px]"
                onClick={downloadResume}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Download Resume</span>
                <motion.div
                  className="absolute inset-0 bg-slate-700"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>

            {/* Status and Experience */}
            <motion.div 
              className="flex flex-col xs:flex-row items-center justify-center space-y-2 xs:space-y-0 xs:space-x-4 sm:space-x-6 text-slate-400 text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isTypingComplete ? 1 : 0, y: isTypingComplete ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex items-center space-x-2">
                <motion.div 
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>Available for opportunities</span>
              </div>
              <div className="hidden xs:block w-px h-6 bg-slate-600"></div>
              <span>{personalInfo.yearsOfExperience}+ Years Experience</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.div
          className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-slate-400 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-0.5 sm:w-1 h-2 sm:h-3 bg-slate-400 rounded-full mt-1.5 sm:mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;