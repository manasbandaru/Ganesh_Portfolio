import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import * as Icons from 'react-icons/si';
import { skills, getSkillsWithCertifications } from '../../data/skills';
import type { SkillCategory } from '../../types';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories: { key: SkillCategory | 'all'; label: string; icon: string }[] = [
    { key: 'all', label: 'All Skills', icon: 'SiCodersrank' },
    { key: 'programming', label: 'Programming', icon: 'SiPython' },
    { key: 'databases', label: 'Databases', icon: 'SiPostgresql' },
    { key: 'cloud', label: 'Cloud', icon: 'SiAmazonaws' },
    { key: 'frameworks', label: 'Frameworks', icon: 'SiApachespark' },
    { key: 'tools', label: 'Tools', icon: 'SiDocker' }
  ];

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'all') {
      return skills;
    }
    return skills.filter(skill => skill.category === activeCategory);
  }, [activeCategory]);

  const certifiedSkills = useMemo(() => getSkillsWithCertifications(), []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    }
  };



  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 5) return 'from-green-500 to-emerald-500';
    if (proficiency >= 4) return 'from-blue-500 to-cyan-500';
    if (proficiency >= 3) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  const getProficiencyLabel = (proficiency: number) => {
    if (proficiency >= 5) return 'Expert';
    if (proficiency >= 4) return 'Advanced';
    if (proficiency >= 3) return 'Intermediate';
    return 'Beginner';
  };

  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? (
      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
    ) : (
      // Fallback icon for missing icons
      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-slate-600 rounded flex items-center justify-center text-xs font-bold text-white">
        {iconName.replace('Si', '').slice(0, 2).toUpperCase()}
      </div>
    );
  };

  return (
    <section id="skills" className="section-padding bg-slate-900 smooth-scroll-section">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1, duration: 0.6 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-4">
              A comprehensive overview of my technical expertise across programming languages, 
              databases, cloud platforms, and modern data engineering tools.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }} className="mb-8 sm:mb-12">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((category) => {
                const IconComponent = (Icons as any)[category.icon];
                return (
                  <motion.button
                    key={category.key}
                    onClick={() => setActiveCategory(category.key)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base touch-manipulation ${
                      activeCategory === category.key
                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-white'
                    }`}
                  >
                    {IconComponent && <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />}
                    <span className="hidden xs:inline">{category.label}</span>
                    <span className="xs:hidden">{category.label.split(' ')[0]}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="mb-16">
            {!filteredSkills || filteredSkills.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-slate-400 text-base sm:text-lg">
                  {skills.length === 0 ? 'Loading skills...' : `No skills found for ${activeCategory === 'all' ? 'this' : activeCategory} category.`}
                </p>
                <p className="text-slate-500 text-sm mt-2">
                  Total skills available: {skills.length}
                </p>
              </motion.div>
            ) : (
              <motion.div 
                className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatePresence>
                  {filteredSkills.map((skill, index) => (
                <motion.div
                  key={`${activeCategory}-${skill.name}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -3
                  }}
                  onTouchStart={() => setHoveredSkill(skill.name)}
                  onTouchEnd={() => setHoveredSkill(null)}
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden group touch-manipulation min-h-[140px] sm:min-h-[160px]"
                >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Skill Header */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                      <div className="p-1.5 sm:p-2 bg-slate-700/50 rounded-lg group-hover:bg-slate-600/50 transition-colors duration-300 flex-shrink-0">
                        {renderIcon(skill.icon)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-white text-sm sm:text-base leading-tight">{skill.name}</h3>
                        <p className="text-xs sm:text-sm text-slate-400">
                          {getProficiencyLabel(skill.proficiency)}
                        </p>
                      </div>
                    </div>
                    
                    {/* Certification Badge */}
                    {skill.certifications && skill.certifications.length > 0 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.02, type: "spring", stiffness: 200 }}
                        className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0"
                        title={`${skill.certifications.length} certification(s)`}
                      >
                        <span className="text-xs font-bold text-white">
                          {skill.certifications.length}
                        </span>
                      </motion.div>
                    )}
                  </div>

                  {/* Proficiency Bar */}
                  <div className="mb-3 sm:mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs sm:text-sm text-slate-400">Proficiency</span>
                      <span className="text-xs sm:text-sm font-medium text-white">
                        {skill.proficiency}/5
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-1.5 sm:h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(skill.proficiency / 5) * 100}%` }}
                        transition={{ 
                          duration: 0.8,
                          delay: index * 0.05,
                          ease: "easeOut"
                        }}
                        className={`h-full bg-gradient-to-r ${getProficiencyColor(skill.proficiency)} rounded-full`}
                      />
                    </div>
                  </div>

                  {/* Years of Experience */}
                  {skill.yearsOfExperience && (
                    <div className="mb-3 sm:mb-4">
                      <span className="text-xs sm:text-sm text-slate-400">
                        {skill.yearsOfExperience} year{skill.yearsOfExperience !== 1 ? 's' : ''} experience
                      </span>
                    </div>
                  )}

                  {/* Description (shown on hover/touch) */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: hoveredSkill === skill.name ? 1 : 0,
                      height: hoveredSkill === skill.name ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {skill.description && (
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-2">
                        {skill.description}
                      </p>
                    )}
                    
                    {/* Certifications List */}
                    {skill.certifications && skill.certifications.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-slate-700/50">
                        <p className="text-xs text-slate-400 mb-1">Certifications:</p>
                        <div className="space-y-1">
                          {skill.certifications.map((cert, certIndex) => (
                            <div key={certIndex} className="text-xs text-slate-300 flex items-center gap-1">
                              <div className="w-1 h-1 bg-yellow-500 rounded-full flex-shrink-0" />
                              <span className="leading-tight">{cert}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>

          {/* Certifications Highlight */}
          {certifiedSkills.length > 0 && (
            <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }} className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Professional Certifications
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {certifiedSkills.map((skill) => (
                  <motion.div
                    key={`cert-${skill.name}`}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg px-4 py-2"
                  >
                    <div className="p-1 bg-yellow-500/20 rounded">
                      {renderIcon(skill.icon)}
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-medium text-white">{skill.name}</div>
                      <div className="text-xs text-slate-400">
                        {skill.certifications?.length} certification{skill.certifications?.length !== 1 ? 's' : ''}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;