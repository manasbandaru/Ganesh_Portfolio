import { useState } from 'react';
import { motion } from 'framer-motion';
import { experience } from '../../data/experience';
import type { Experience as ExperienceType } from '../../types';

interface ExperienceCardProps {
  exp: ExperienceType;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

const ExperienceCard = ({ exp, isExpanded, onToggle, index }: ExperienceCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      className="relative mb-8 sm:mb-12 lg:mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
    >
      {/* Timeline dot */}
      <motion.div 
        className="absolute z-20 top-6 timeline-dot"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.4, 
          delay: index * 0.1 + 0.3,
          type: "spring",
          stiffness: 200
        }}
      >
        <motion.div 
          className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 sm:border-4 border-slate-900 transition-colors duration-300 ${
            exp.current ? 'bg-blue-500' : 'bg-slate-600'
          }`}
          whileHover={{ scale: 1.2 }}
          animate={exp.current ? { 
            boxShadow: [
              '0 0 0 0 rgba(59, 130, 246, 0.4)',
              '0 0 0 10px rgba(59, 130, 246, 0)',
              '0 0 0 0 rgba(59, 130, 246, 0)'
            ]
          } : {}}
          transition={exp.current ? { 
            duration: 2, 
            repeat: Infinity 
          } : { duration: 0.2 }}
        />
      </motion.div>

      {/* Content card - Mobile: simple left-aligned, Desktop: alternating sides */}
      <div className="pl-12 sm:pl-0 sm:flex sm:justify-center">
        <div className={`w-full sm:w-10/12 md:w-8/12 lg:w-6/12 ${
          isEven 
            ? 'lg:mr-auto lg:pr-4 xl:pr-8' 
            : 'lg:ml-auto lg:pl-4 xl:pl-8'
        }`}>
          <motion.div 
            className={`bg-slate-800 rounded-lg p-4 sm:p-6 cursor-pointer transition-all duration-300 hover:bg-slate-750 hover:shadow-lg hover:shadow-blue-500/10 touch-manipulation ${
              isExpanded ? 'ring-2 ring-blue-500/50' : ''
            }`}
            onClick={onToggle}
            whileHover={{ 
              scale: 1.02,
              y: -3
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
          {/* Date badge */}
          <div className="flex flex-col xs:flex-row xs:justify-between xs:items-start mb-4 space-y-2 xs:space-y-0">
            <div className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs sm:text-sm font-medium w-fit">
              {exp.duration}
            </div>
            {exp.current && (
              <span className="px-2 py-1 bg-green-600/20 text-green-400 text-xs rounded-full w-fit">
                Current
              </span>
            )}
          </div>

          {/* Company logo and header */}
          <div className="flex items-start mb-4 space-x-3 sm:space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
              <img 
                src={exp.logo} 
                alt={`${exp.company} logo`}
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling!.classList.remove('hidden');
                }}
              />
              <div className="hidden w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded text-white text-xs sm:text-sm font-bold flex items-center justify-center">
                {exp.company.charAt(0)}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight">{exp.role}</h3>
              <p className="text-blue-400 font-medium text-sm sm:text-base">{exp.company}</p>
              <p className="text-slate-400 text-xs sm:text-sm">{exp.location}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-300 mb-4 leading-relaxed text-sm sm:text-base">
            {exp.description}
          </p>

          {/* Technology tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
            {exp.technologies.slice(0, isExpanded ? exp.technologies.length : 3).map((tech) => (
              <span 
                key={tech}
                className="px-2 sm:px-3 py-1 bg-slate-700 text-slate-300 text-xs sm:text-sm rounded-full hover:bg-blue-600/20 hover:text-blue-400 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
            {!isExpanded && exp.technologies.length > 3 && (
              <span className="px-2 sm:px-3 py-1 bg-slate-600 text-slate-400 text-xs sm:text-sm rounded-full">
                +{exp.technologies.length - 3} more
              </span>
            )}
          </div>

          {/* Expand/Collapse indicator */}
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm text-slate-400">
              {isExpanded ? 'Tap to collapse' : 'Tap to expand'}
            </span>
            <div className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Expanded content */}
          {isExpanded && (
            <motion.div 
              className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-700"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Key Achievements</h4>
              <ul className="space-y-2 sm:space-y-3">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-slate-300 leading-relaxed text-sm sm:text-base">{achievement}</span>
                  </li>
                ))}
              </ul>
              
              {exp.companyUrl && (
                <div className="mt-4 sm:mt-6">
                  <a 
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 active:text-blue-200 transition-colors duration-200 text-sm sm:text-base touch-target"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Company Website
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </motion.div>
          )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const handleCardToggle = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="experience" className="section-padding bg-slate-900 smooth-scroll-section">
      <div className="container-custom">
        {/* Section header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Professional Experience
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            A journey through 5 years of data engineering excellence, 
            building scalable systems and driving data-driven innovation across diverse industries.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line - Left aligned on mobile, centered on desktop */}
          <motion.div 
            className="absolute w-0.5 bg-slate-700 z-10 timeline-line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          
          {/* Experience cards */}
          <div className="relative">
            {experience.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                isExpanded={expandedCard === exp.id}
                onToggle={() => handleCardToggle(exp.id)}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Summary stats */}
        <motion.div 
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {[
            { value: '5+', label: 'Years of Experience' },
            { value: experience.length.toString(), label: 'Companies' },
            { value: '20+', label: 'Technologies Mastered' }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center p-4 sm:p-6 bg-slate-800 rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 + 0.4,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.05,
                y: -3
              }}
            >
              <motion.div 
                className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm sm:text-base text-slate-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;