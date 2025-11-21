import { experiences } from '../data/portfolio';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

export default function Experience({ darkMode }: ExperienceProps) {
  const getTypeLabel = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  const getTypeColor = (type: string, isDark: boolean) => {
    switch (type) {
      case 'internship':
        return isDark ? 'bg-sky-500/20 text-sky-300' : 'bg-sky-100 text-sky-700';
      case 'job':
        return isDark ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700';
      case 'contract':
        return isDark ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700';
      default:
        return isDark ? 'bg-slate-500/20 text-slate-300' : 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <section id="experience" className={`py-20 px-4 sm:px-6 lg:px-8 ${
      darkMode ? 'bg-slate-900' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-fade-in">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Work Experience
          </h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-sky-500 to-sky-600"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`group rounded-xl overflow-hidden transition-all duration-300 border-l-4 border-sky-500 ${
                darkMode
                  ? 'bg-slate-800/50 hover:bg-slate-800'
                  : 'bg-slate-50 hover:bg-slate-100'
              } p-6 md:p-8`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className={`text-xl md:text-2xl font-bold ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {exp.position}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      getTypeColor(exp.type, darkMode)
                    }`}>
                      {getTypeLabel(exp.type)}
                    </span>
                  </div>
                  <div className={`text-lg font-semibold ${
                    darkMode ? 'text-sky-400' : 'text-sky-600'
                  }`}>
                    {exp.company}
                  </div>
                </div>
              </div>

              <div className={`flex flex-wrap gap-4 mb-6 text-sm ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{exp.startDate} — {exp.endDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>

              <ul className={`space-y-3 ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {exp.description.map((desc, idx) => (
                  <li key={idx} className="flex gap-3 leading-relaxed">
                    <span className="text-sky-500 font-bold mt-1">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
