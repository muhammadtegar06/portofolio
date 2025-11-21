import { skills, education } from '../data/portfolio';
import { BookOpen, Award } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

export default function Skills({ darkMode }: SkillsProps) {
  return (
    <section id="skills" className={`py-20 px-4 sm:px-6 lg:px-8 ${
      darkMode ? 'bg-slate-800' : 'bg-slate-50'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-fade-in">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-sky-500 to-sky-600"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className={`p-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${
                darkMode
                  ? 'bg-slate-900/50 border border-slate-700 hover:border-sky-500'
                  : 'bg-white border border-slate-200 hover:border-sky-500'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className={`text-lg md:text-xl font-bold mb-4 flex items-center gap-2 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                <Award className="text-sky-500" size={20} />
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:-translate-y-1 ${
                      darkMode
                        ? 'bg-sky-500/20 text-sky-300 hover:bg-sky-500/30'
                        : 'bg-sky-100 text-sky-700 hover:bg-sky-200'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`rounded-xl overflow-hidden transition-all duration-300 ${
          darkMode
            ? 'bg-slate-900/50 border border-slate-700'
            : 'bg-white border border-slate-200'
        }`}>
          <div className={`h-2 bg-gradient-to-r from-sky-500 to-sky-600`}></div>
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-sky-500" size={24} />
              <h3 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Education
              </h3>
            </div>

            <div className={`space-y-4 ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              <div>
                <div className={`font-bold text-lg mb-1 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {education.school}
                </div>
                <div className="text-sky-500 font-semibold mb-3">{education.degree}</div>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold">Duration:</span> {education.startDate} — {education.endDate}
                  </p>
                  <p>
                    <span className="font-semibold">GPA:</span> {education.gpa}
                  </p>
                  <p>
                    <span className="font-semibold">Concentration:</span> {education.concentration}
                  </p>
                </div>
              </div>

              <div className={`pt-4 border-t ${
                darkMode ? 'border-slate-700' : 'border-slate-200'
              }`}>
                <p className="font-semibold mb-3 text-sm">Relevant Courses:</p>
                <div className="flex flex-wrap gap-2">
                  {education.relevantCourses.map((course) => (
                    <span
                      key={course}
                      className={`px-3 py-1 rounded text-xs font-medium ${
                        darkMode
                          ? 'bg-slate-800 text-slate-300'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
