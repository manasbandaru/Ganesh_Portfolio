import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const isScrollingRef = useRef(false);

  const navigationItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Don't update active section if we're programmatically scrolling
      if (isScrollingRef.current) return;
      
      const sections = navigationItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Set flag to prevent scroll tracking interference
      isScrollingRef.current = true;
      
      // Get the element's position and account for header height
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      // Use window.scrollTo for consistent scrolling
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      // Re-enable scroll tracking after scrolling is likely complete
      setTimeout(() => {
        isScrollingRef.current = false;
        setActiveSection(sectionId); // Manually set the active section
      }, 1000); // Give enough time for smooth scroll to complete
    }
  };

  return (
    <motion.nav 
      className="fixed right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div className="flex flex-col space-y-3 lg:space-y-4">
        {navigationItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`group relative w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 touch-manipulation ${
              activeSection === item.id
                ? 'bg-blue-500 scale-125'
                : 'bg-slate-600 hover:bg-slate-400'
            }`}
            aria-label={`Navigate to ${item.label}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.4, 
              delay: 1.2 + index * 0.1,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{ 
              scale: activeSection === item.id ? 1.4 : 1.2,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className={`absolute right-5 lg:right-6 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-slate-800 text-slate-200 text-xs lg:text-sm rounded whitespace-nowrap transition-all duration-200 ${
                activeSection === item.id
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
              }`}
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              {item.label}
            </motion.span>
            
            {/* Active indicator pulse */}
            {activeSection === item.id && (
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-400"
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 0, 0.6]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;
