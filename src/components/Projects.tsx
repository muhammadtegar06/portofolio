import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolio';

interface ProjectsProps {
  darkMode: boolean;
}

export default function Projects({ darkMode }: ProjectsProps) {
  return (
    <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 ${
      darkMode ? 'bg-slate-800' : 'bg-slate-50'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-fade-in">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Featured Projects
          </h2>
          <div className={`h-1 w-20 rounded-full bg-gradient-to-r from-sky-500 to-sky-600`}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                darkMode
                  ? 'bg-slate-900 border border-slate-700 hover:border-sky-500'
                  : 'bg-white border border-slate-200 hover:border-sky-500'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r from-sky-500 to-sky-600`}></div>

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-xl md:text-2xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {project.title}
                    </h3>
                    <div className={`text-sm ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {project.startDate} — {project.endDate}
                    </div>
                  </div>
                </div>

                <p className={`mb-6 leading-relaxed ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                        darkMode
                          ? 'bg-sky-500/20 text-sky-300 hover:bg-sky-500/30'
                          : 'bg-sky-100 text-sky-700 hover:bg-sky-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                        darkMode
                          ? 'bg-sky-500/20 text-sky-300 hover:bg-sky-500/30'
                          : 'bg-sky-100 text-sky-700 hover:bg-sky-200'
                      }`}
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                        darkMode
                          ? 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                          : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                      }`}
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
