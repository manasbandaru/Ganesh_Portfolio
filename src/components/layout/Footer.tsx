import { motion } from 'framer-motion';
import { 
  SiLinkedin
} from 'react-icons/si';
import { 
  FaEnvelope, 
  FaHeart,
  FaArrowUp,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { personalInfo } from '../../data/personal';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIconMap = {
    SiLinkedin: SiLinkedin
  };

  const socialColorMap = {
    SiLinkedin: 'hover:text-blue-500'
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div 
          className="py-8 sm:py-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Brand Section */}
            <motion.div 
              className="space-y-4 text-center sm:text-left sm:col-span-2 md:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-white">{personalInfo.name}</h3>
              <p className="text-slate-400 max-w-md mx-auto sm:mx-0 text-sm sm:text-base">
                {personalInfo.title} with {personalInfo.yearsOfExperience}+ years of experience building scalable data solutions. 
                Let's connect and explore opportunities to work together.
              </p>
              <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
                {personalInfo.socialLinks.map((link, index) => {
                    const IconComponent = socialIconMap[link.icon as keyof typeof socialIconMap];
                    const colorClass = socialColorMap[link.icon as keyof typeof socialColorMap];
                    return (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-slate-500 ${colorClass} transition-all duration-200 touch-target`}
                        aria-label={link.name}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.3 + index * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ 
                          scale: 1.2,
                          y: -2
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {IconComponent && <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />}
                      </motion.a>
                    );
                  })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="space-y-4 text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <h4 className="text-base sm:text-lg font-semibold text-white">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {footerLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-blue-400 active:text-blue-300 transition-colors duration-200 text-sm sm:text-base touch-target text-left"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.4 + index * 0.05,
                      ease: "easeOut"
                    }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="space-y-4 text-center sm:text-left"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <h4 className="text-base sm:text-lg font-semibold text-white">Get In Touch</h4>
              <div className="space-y-3">
                <motion.div 
                  className="flex items-center justify-center sm:justify-start space-x-2 text-slate-400 text-sm sm:text-base"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <FaEnvelope className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-blue-400 hover:text-blue-300 active:text-blue-200 transition-colors duration-200 break-all"
                  >
                    {personalInfo.email}
                  </a>
                </motion.div>
                
                <motion.div 
                  className="flex items-center justify-center sm:justify-start space-x-2 text-slate-400 text-sm sm:text-base"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <FaPhone className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>206-424-6482</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center justify-center sm:justify-start space-x-2 text-slate-400 text-sm sm:text-base"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <FaMapMarkerAlt className="h-4 w-4 text-purple-400 flex-shrink-0" />
                  <span>{personalInfo.location}</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center justify-center sm:justify-start space-x-2 text-slate-400 text-sm sm:text-base"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-green-400">Open to opportunities</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div 
          className="border-t border-slate-800 py-4 sm:py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <motion.div 
              className="flex flex-col xs:flex-row items-center xs:space-x-1 text-slate-400 text-xs sm:text-sm text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <span>© {currentYear} {personalInfo.name}.</span>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaHeart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
                </motion.div>
                <span>and React + TypeScript</span>
              </div>
            </motion.div>
            
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-slate-400 hover:text-blue-400 active:text-blue-300 transition-colors duration-200 group touch-target"
              aria-label="Scroll to top"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xs sm:text-sm">Back to top</span>
              <motion.div
                className="h-3 w-3 sm:h-4 sm:w-4"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <FaArrowUp />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
