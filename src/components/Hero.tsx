import { Mail, Download, ExternalLink } from 'lucide-react';
import { profileData } from '../data/portfolio';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  return (
    <section id="about" className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${
      darkMode ? 'bg-slate-900' : 'bg-gradient-to-b from-white via-sky-50 to-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
          <div>
            <div className="space-y-6">
              <div>
                <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${
                  darkMode
                    ? 'text-white'
                    : 'bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent'
                }`}>
                  {profileData.name}
                </h1>
                <div className={`text-lg font-medium mb-2 ${
                  darkMode ? 'text-sky-400' : 'text-sky-600'
                }`}>
                  {profileData.title}
                </div>
                <p className={`text-lg mb-4 ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {profileData.role}
                </p>
              </div>

              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {profileData.bio}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-sky-500/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Mail size={20} />
                  Get In Touch
                </button>
                <a
                  href={profileData.resumeUrl}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                    darkMode
                      ? 'bg-slate-800 text-white hover:bg-slate-700'
                      : 'bg-slate-200 text-slate-900 hover:bg-slate-300'
                  }`}
                >
                  <Download size={20} />
                  Download CV
                </a>
              </div>

              <div className={`flex gap-6 pt-4 text-sm ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                <a
                  href={`mailto:${profileData.email}`}
                  className="hover:text-sky-500 transition-colors inline-flex items-center gap-2"
                >
                  <span>{profileData.email}</span>
                </a>
                <span>•</span>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-500 transition-colors inline-flex items-center gap-2"
                >
                  LinkedIn
                  <ExternalLink size={16} />
                </a>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-500 transition-colors inline-flex items-center gap-2"
                >
                  GitHub
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className={`absolute inset-0 rounded-2xl blur-3xl ${
              darkMode
                ? 'bg-sky-500/10'
                : 'bg-sky-500/20'
            }`}></div>
            <div className={`relative rounded-2xl overflow-hidden backdrop-blur-sm ${
              darkMode
                ? 'bg-slate-800/50 border border-slate-700'
                : 'bg-white/50 border border-sky-200'
            }`}>
              <img
                src={profileData.profileImage}
                alt={profileData.name}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className={`grid grid-cols-3 gap-4 md:gap-8 mt-20 ${
          darkMode ? 'bg-slate-800/30' : 'bg-white'
        } rounded-2xl p-8 md:p-12 border ${
          darkMode ? 'border-slate-700' : 'border-slate-200'
        }`}>
          {[
            { label: 'Projects', value: '4+' },
            { label: 'Experience', value: '4+' },
            { label: 'Certifications', value: '8+' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className={`text-sm md:text-base mt-2 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
