import { Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${
      darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-900 border-slate-800'
    } border-t py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent mb-2">
              MTW
            </div>
            <p className="text-slate-400 text-sm">
              Fresh Graduate in Informatics Engineering specializing in Machine Learning and Data Analysis.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Experience', 'Skills', 'Certifications', 'Resume', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <p>
                <a href="mailto:muhammadtegar980@gmail.com" className="hover:text-sky-400 transition-colors">
                  muhammadtegar980@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+6282272710141" className="hover:text-sky-400 transition-colors">
                  +62 822 2727 10141
                </a>
              </p>
              <p>Jakarta, Indonesia</p>
            </div>
          </div>
        </div>

        <div className={`border-t ${darkMode ? 'border-slate-800' : 'border-slate-700'} pt-8`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Muhammad Tegar Wiratama Pohan. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm flex items-center gap-1">
              Made with
              <Heart size={16} className="text-sky-500 fill-sky-500" />
              and passion for technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
