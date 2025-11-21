import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  onThemeToggle: () => void;
}

export default function Header({ darkMode, onThemeToggle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
      darkMode
        ? 'bg-slate-900/95 border-slate-800'
        : 'bg-white/95 border-slate-200'
    } border-b backdrop-blur-sm`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent">
            MTW
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['about', 'projects', 'experience', 'skills', 'certifications', 'resume', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors duration-200 hover:text-sky-500 ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onThemeToggle}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode
                  ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden mt-4 space-y-2 animate-slide-down ${
            darkMode ? 'bg-slate-800' : 'bg-slate-50'
          } -mx-4 px-4 py-4 rounded-lg`}>
            {['about', 'projects', 'experience', 'skills', 'certifications', 'resume', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left py-2 capitalize transition-colors duration-200 hover:text-sky-500 ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
