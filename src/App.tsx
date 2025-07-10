import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    // Default to user's system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Update class on document for Tailwind dark mode
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${darkMode 
      ? 'from-gray-900 to-indigo-950 text-gray-200' 
      : 'from-gray-50 to-indigo-50 text-gray-900'} transition-colors duration-400 relative overflow-hidden`}>
      {/* Background text animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="background-text line1">JONY REYES</div>
        <div className="background-text line2">FRONTEND DEVELOPER</div>
      </div>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;