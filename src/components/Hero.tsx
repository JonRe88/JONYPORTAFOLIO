import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, FileText, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo to-white dark:from-gray-900 dark:to-gray-800 z-0" />
      
      {/* Background text animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="background-text line1">JONY REYES</div>
        <div className="background-text line2">FRONTEND DEVELOPER</div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-indigo-300 dark:bg-indigo-700 rounded-full filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-300 dark:bg-purple-700 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 overflow-hidden">
            <p className="text-indigo-600 dark:text-indigo-400 font-medium tracking-wide mb-2 animate-slide-up">
              ¡HOLA, SOY!
            </p>
            <h1 
              ref={titleRef}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 opacity-0 transition-all duration-1000"
            >
              Jony<span className="text-indigo-600 dark:text-indigo-400">Reyes</span>
            </h1>
          <h2 className="text-xl md:text-3xl font-thin mb-8 text-indigo-500 dark:text-indigo-300 ">
            <span className="inline-block typing-animation">Frontend Developer & UI/UX Enthusiast
</span>
          </h2>
          </div>
          
          <p className="max-w-2xl text-gray-600 dark:text-gray-300 mb-10 animate-fade-in animation-delay-600">
           Creo experiencias digitales atractivas con código limpio y un diseño meticuloso. Me especializo en tecnologías frontend modernas para crear aplicaciones web responsivas, accesibles y de alto rendimiento.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in animation-delay-900">
            <a 
              href="#contact" 
              className="btn-primary"
            >
              ¡Contáctame!
            </a>
            <a 
              href="#projects" 
              className="btn-secondary"
            >
              Ver mi trabajo
            </a>
          </div>
          
          <div className="flex items-center space-x-6 animate-fade-in animation-delay-1200">
            <a 
              href="https://github.com/JonRe88" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/jony-reyes-developer/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:jreyesturismo@hotmail.com" 
              className="social-icon"
              aria-label="Email Me"
            >
              <Mail size={20} />
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Download Resume"
            >
              <FileText size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;