import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, Calendar, TrendingUp } from 'lucide-react';
import { projects } from '../../data/projects';
import type { Project, ProjectCategory } from '../../types';
import { Card, CardContent, CardHeader } from '../ui/Card';
import Button from '../ui/Button';
import Modal from '../ui/Modal';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');
  const [selectedTechnology, setSelectedTechnology] = useState<string>('all');

  // Get unique technologies from all projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects based on selected category and technology
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
      const technologyMatch = selectedTechnology === 'all' || project.technologies.includes(selectedTechnology);
      return categoryMatch && technologyMatch;
    });
  }, [selectedCategory, selectedTechnology]);

  const categoryLabels: Record<ProjectCategory | 'all', string> = {
    'all': 'All Projects',
    'data-pipeline': 'Data Pipelines',
    'analytics': 'Analytics',
    'ml-ops': 'ML & AI',
    'infrastructure': 'Infrastructure'
  };

  const categoryColors: Record<ProjectCategory, string> = {
    'data-pipeline': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'analytics': 'bg-green-500/20 text-green-400 border-green-500/30',
    'ml-ops': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    'infrastructure': 'bg-orange-500/20 text-orange-400 border-orange-500/30'
  };

  const statusColors: Record<string, string> = {
    'completed': 'bg-green-500/20 text-green-400',
    'in-progress': 'bg-yellow-500/20 text-yellow-400',
    'planned': 'bg-gray-500/20 text-gray-400'
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedTechnology('all');
  };

  return (
    <section id="projects" className="section-padding bg-slate-800 smooth-scroll-section">
      <div className="container-custom">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Explore my portfolio of data engineering projects, from real-time pipelines 
            to machine learning systems and cloud infrastructure solutions.
          </motion.p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:items-center sm:justify-between mb-6">
            <motion.div 
              className="flex items-center gap-2 text-slate-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium text-sm sm:text-base">Filter by:</span>
            </motion.div>
            
            {(selectedCategory !== 'all' || selectedTechnology !== 'all') && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-slate-400 hover:text-white w-fit"
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>

          {/* Category Filter */}
          <motion.div 
            className="mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Category
            </label>
            <div className="flex flex-wrap gap-2">
              {Object.entries(categoryLabels).map(([category, label], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                >
                  <Button
                    variant={selectedCategory === category ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category as ProjectCategory | 'all')}
                    className="text-xs sm:text-sm"
                  >
                    {label}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technology Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Technology
            </label>
            <div className="flex flex-wrap gap-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <Button
                  variant={selectedTechnology === 'all' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedTechnology('all')}
                  className="text-xs sm:text-sm"
                >
                  All Technologies
                </Button>
              </motion.div>
              {allTechnologies.slice(0, 6).map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.75 + index * 0.05 }}
                >
                  <Button
                    variant={selectedTechnology === tech ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedTechnology(tech)}
                    className="text-xs sm:text-sm"
                  >
                    {tech}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${selectedCategory}-${selectedTechnology}-${project.id}`}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                layout
              >
                <Card
                  hover
                  className="cursor-pointer group h-full"
                  onClick={() => handleProjectClick(project)}
                >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder-project.svg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200 leading-tight">
                    {project.title}
                  </h3>
                </div>
                
                {/* Category Badge */}
                <div className="mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${categoryColors[project.category]}`}>
                    {categoryLabels[project.category]}
                  </span>
                </div>

                <p className="text-slate-300 text-sm line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent>
                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-700 text-slate-400 text-xs rounded-md">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.metrics.slice(0, 2).map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-base sm:text-lg font-bold text-blue-400">{metric.value}</div>
                        <div className="text-xs text-slate-400 leading-tight">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}


              </CardContent>
            </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div 
              className="text-slate-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
              >
                <Filter className="w-16 h-16 mx-auto mb-4 opacity-50" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p>Try adjusting your filters to see more projects.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Button onClick={clearFilters} variant="outline">
                Clear All Filters
              </Button>
            </motion.div>
          </motion.div>
        )}

        {/* Project Detail Modal */}
        <Modal
          isOpen={!!selectedProject}
          onClose={closeModal}
          title={selectedProject?.title || ''}
        >
          {selectedProject && (
            <div className="p-6">
              {/* Project Image */}
              <div className="relative mb-6 rounded-lg overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder-project.svg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>

              {/* Project Info */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Project Overview</h3>
                    <p className="text-slate-300 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Key Achievements</h3>
                    <ul className="space-y-2">
                      {selectedProject.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3 text-slate-300">
                          <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  {/* Project Details */}
                  <div className="bg-slate-700/50 rounded-lg p-4 mb-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>
                    
                    <div className="space-y-3">
                      <div>
                        <span className="text-slate-400 text-sm">Category</span>
                        <div className="mt-1">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${categoryColors[selectedProject.category]}`}>
                            {categoryLabels[selectedProject.category]}
                          </span>
                        </div>
                      </div>

                      <div>
                        <span className="text-slate-400 text-sm">Status</span>
                        <div className="mt-1">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[selectedProject.status]}`}>
                            {selectedProject.status.charAt(0).toUpperCase() + selectedProject.status.slice(1)}
                          </span>
                        </div>
                      </div>

                      <div>
                        <span className="text-slate-400 text-sm flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Timeline
                        </span>
                        <div className="mt-1 text-white font-medium">
                          {selectedProject.timeline}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  {selectedProject.metrics && selectedProject.metrics.length > 0 && (
                    <div className="bg-slate-700/50 rounded-lg p-4 mb-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Key Metrics</h3>
                      <div className="space-y-3">
                        {selectedProject.metrics.map((metric, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-slate-400 text-sm">{metric.label}</span>
                            <span className="text-blue-400 font-bold">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}


                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default Projects;