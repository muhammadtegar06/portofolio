import { Download, ExternalLink } from 'lucide-react';
import { profileData } from '../data/portfolio';

interface ResumeProps {
  darkMode: boolean;
}

export default function Resume({ darkMode }: ResumeProps) {
  return (
    <section id="resume" className={`py-20 px-4 sm:px-6 lg:px-8 ${
      darkMode ? 'bg-slate-900' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-fade-in">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Resume
          </h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-sky-500 to-sky-600"></div>
        </div>

        <div className={`rounded-xl overflow-hidden transition-all duration-300 border ${
          darkMode
            ? 'bg-slate-800/50 border-slate-700'
            : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="h-2 bg-gradient-to-r from-sky-500 to-sky-600"></div>

          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h3 className={`text-2xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Curriculum Vitae
                </h3>
                <p className={`text-lg mb-6 ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Download my complete resume in PDF format to see my full work history, qualifications, and achievements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={profileData.resumeUrl}
                    download
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-sky-500/50 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Download size={20} />
                    Download CV (PDF)
                  </a>
                  <a
                    href={profileData.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                      darkMode
                        ? 'bg-slate-700 text-white hover:bg-slate-600'
                        : 'bg-slate-200 text-slate-900 hover:bg-slate-300'
                    }`}
                  >
                    <ExternalLink size={20} />
                    View PDF
                  </a>
                </div>
              </div>

              <div className={`p-8 rounded-lg border-2 ${
                darkMode
                  ? 'bg-slate-900/50 border-sky-500/30'
                  : 'bg-sky-50 border-sky-200'
              }`}>
                <div className={`space-y-4 text-sm ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <div>
                    <p className={`font-semibold mb-1 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      Name
                    </p>
                    <p>{profileData.name}</p>
                  </div>
                  <div>
                    <p className={`font-semibold mb-1 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      Title
                    </p>
                    <p>{profileData.title}</p>
                  </div>
                  <div>
                    <p className={`font-semibold mb-1 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      Email
                    </p>
                    <p>{profileData.email}</p>
                  </div>
                  <div>
                    <p className={`font-semibold mb-1 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      Phone
                    </p>
                    <p>{profileData.phone}</p>
                  </div>
                  <div>
                    <p className={`font-semibold mb-1 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      Location
                    </p>
                    <p>{profileData.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${
              darkMode
                ? 'bg-sky-500/10 border border-sky-500/30'
                : 'bg-sky-100 border border-sky-300'
            }`}>
              <p className={`text-sm ${
                darkMode ? 'text-sky-300' : 'text-sky-700'
              }`}>
                <span className="font-semibold">Pro Tip:</span> Download the PDF to view my complete professional history, including detailed descriptions of all projects, experiences, and certifications. The PDF format provides a polished presentation perfect for sharing with recruiters and potential employers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
