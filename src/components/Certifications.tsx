import { certifications } from '../data/portfolio';
import { Trophy } from 'lucide-react';

interface CertificationsProps {
  darkMode: boolean;
}

export default function Certifications({ darkMode }: CertificationsProps) {
  const certsByYear = certifications.reduce((acc, cert) => {
    if (!acc[cert.year]) acc[cert.year] = [];
    acc[cert.year].push(cert);
    return acc;
  }, {} as Record<number, typeof certifications>);

  const sortedYears = Object.keys(certsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <section id="certifications" className={`py-20 px-4 sm:px-6 lg:px-8 ${
      darkMode ? 'bg-slate-900' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-fade-in">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Certifications & Awards
          </h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-sky-500 to-sky-600"></div>
        </div>

        <div className="space-y-12">
          {sortedYears.map((year) => (
            <div key={year}>
              <div className={`flex items-center gap-4 mb-8 pb-4 border-b ${
                darkMode ? 'border-slate-700' : 'border-slate-200'
              }`}>
                <div className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-6 py-3 rounded-lg font-bold text-lg">
                  {year}
                </div>
                <div className={`text-lg font-semibold ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {certsByYear[year].length} Certification{certsByYear[year].length > 1 ? 's' : ''}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {certsByYear[year].map((cert, index) => (
                  <div
                    key={cert.id}
                    className={`group rounded-xl p-6 md:p-8 transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-sky-500 ${
                      darkMode
                        ? 'bg-slate-800/50 hover:bg-slate-800'
                        : 'bg-slate-50 hover:bg-slate-100'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${
                        darkMode
                          ? 'bg-sky-500/20'
                          : 'bg-sky-100'
                      }`}>
                        <Trophy className={`${
                          darkMode ? 'text-sky-400' : 'text-sky-600'
                        }`} size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold mb-2 ${
                          darkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                          {cert.name}
                        </h3>
                        <p className={`text-sm md:text-base ${
                          darkMode ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 p-8 rounded-xl text-center ${
          darkMode
            ? 'bg-sky-500/10 border border-sky-500/30'
            : 'bg-sky-50 border border-sky-200'
        }`}>
          <Trophy className={`mx-auto mb-4 ${
            darkMode ? 'text-sky-400' : 'text-sky-600'
          }`} size={32} />
          <p className={`text-lg font-semibold ${
            darkMode ? 'text-slate-200' : 'text-slate-700'
          }`}>
            Actively pursuing continuous learning and industry-recognized certifications
          </p>
        </div>
      </div>
    </section>
  );
}
