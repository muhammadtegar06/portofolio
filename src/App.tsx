import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved !== null ? JSON.parse(saved) : true;
    }
    return true;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className={`transition-colors duration-300 ${
        darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
      }`}>
        <Header darkMode={darkMode} onThemeToggle={toggleTheme} />
        <main>
          <Hero darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Experience darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Certifications darkMode={darkMode} />
          <Resume darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
