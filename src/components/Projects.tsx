import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData, ProjectType } from '../data/projects';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);
    
  const categories = ['all', ...new Set(projectsData.map(project => project.category))];
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="section-title">Mis Proyectos</h2>
          <p className="section-subtitle">Showcasing my recent work</p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full capitalize transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-56 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex gap-4">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-gray-900 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                aria-label={`View ${project.title} GitHub repository`}
              >
                <Github size={20} />
              </a>
            )}
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-gray-900 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                aria-label={`Visit ${project.title} live site`}
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
          <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-xs px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span 
              key={tech} 
              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;