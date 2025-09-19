import { motion } from 'framer-motion';
import { personalInfo, certifications } from '../../data/personal';

const About = () => {
  // Key metrics and achievements
  const metrics = [
    {
      label: 'Years Experience',
      value: '5+',
      description: 'Building scalable data systems'
    },
    {
      label: 'Data Processed',
      value: '10TB+',
      description: 'Daily data pipeline throughput'
    },
    {
      label: 'Projects Delivered',
      value: '25+',
      description: 'End-to-end data solutions'
    },
    {
      label: 'Team Members',
      value: '15+',
      description: 'Engineers mentored and led'
    }
  ];

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    }
  };

  return (
    <section id="about" data-testid="about-section" className="section-padding bg-slate-800 smooth-scroll-section">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2, duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center"
        >
          {/* Professional Image */}
          <motion.div 
            variants={imageVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-1"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/images/profile_image.png"
                    alt={`${personalInfo.name} - ${personalInfo.title}`}
                    className="w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
              
              {/* Floating elements - Reduced for mobile */}
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 sm:w-16 h-12 sm:h-16 bg-blue-500/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ 
                  y: [0, 8, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 w-16 sm:w-20 h-16 sm:h-20 bg-cyan-500/20 rounded-full blur-xl"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-1 lg:order-2 space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            <div>
              <motion.h2 
                variants={itemVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-3xl xs:text-4xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent"
              >
                About Me
              </motion.h2>
              
              <motion.div 
                variants={itemVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-4 sm:space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed"
              >
                <p>
                  I'm a passionate data engineer with over {personalInfo.yearsOfExperience} years of experience 
                  transforming raw data into actionable insights. My journey began with a curiosity about 
                  how data could drive better decisions, and it has evolved into a career dedicated to 
                  building robust, scalable data infrastructure.
                </p>
                
                <p>
                  {personalInfo.summary}
                </p>
                
                <p>
                  When I'm not architecting data pipelines, you'll find me contributing to open-source 
                  projects, mentoring junior engineers, or exploring the latest developments in machine 
                  learning and cloud technologies. I believe in the power of data to solve complex 
                  problems and drive innovation.
                </p>
              </motion.div>
            </div>

            {/* Certifications Preview */}
            <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }} className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white">Recent Certifications</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                {certifications.slice(0, 3).map((cert) => (
                  <motion.div
                    key={cert.id}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-slate-700/50 rounded-lg px-3 py-2 border border-slate-600/50"
                  >
                    <div className="w-5 sm:w-6 h-5 sm:h-6 bg-slate-600 rounded flex items-center justify-center text-xs font-bold">
                      {cert.issuer.charAt(0)}
                    </div>
                    <span className="text-xs sm:text-sm text-slate-300">{cert.name.split(' - ')[0]}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Metrics Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1, duration: 0.6 }}
          className="mt-16 sm:mt-20"
        >
          <motion.h3 
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xl xs:text-2xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-12 text-white"
          >
            Key Achievements
          </motion.h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                variants={itemVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.02,
                  y: -3
                }}
                className="bg-slate-700/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 10
                  }}
                  viewport={{ once: true }}
                  className="text-2xl xs:text-3xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-1 sm:mb-2"
                >
                  {metric.value}
                </motion.div>
                <div className="text-sm sm:text-base text-white font-semibold mb-1">{metric.label}</div>
                <div className="text-xs sm:text-sm text-slate-400 leading-tight">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;