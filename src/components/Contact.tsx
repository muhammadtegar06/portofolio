import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { profileData } from '../data/portfolio';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 ${
      darkMode ? 'bg-slate-800' : 'bg-slate-50'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-fade-in">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Get In Touch
          </h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-sky-500 to-sky-600"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                I'm always interested in hearing about new opportunities and projects. Whether you have a question or just want to say hi, feel free to get in touch!
              </p>
            </div>

            <div className="space-y-6">
              <a
                href={`mailto:${profileData.email}`}
                className={`flex items-start gap-4 p-4 rounded-lg transition-all duration-200 hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-slate-900/50 hover:bg-slate-900'
                    : 'bg-white hover:bg-slate-100'
                }`}
              >
                <div className={`p-3 rounded-lg flex-shrink-0 ${
                  darkMode ? 'bg-sky-500/20' : 'bg-sky-100'
                }`}>
                  <Mail className={`${
                    darkMode ? 'text-sky-400' : 'text-sky-600'
                  }`} size={24} />
                </div>
                <div>
                  <p className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    Email
                  </p>
                  <p className={`text-sm ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {profileData.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${profileData.phone}`}
                className={`flex items-start gap-4 p-4 rounded-lg transition-all duration-200 hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-slate-900/50 hover:bg-slate-900'
                    : 'bg-white hover:bg-slate-100'
                }`}
              >
                <div className={`p-3 rounded-lg flex-shrink-0 ${
                  darkMode ? 'bg-sky-500/20' : 'bg-sky-100'
                }`}>
                  <Phone className={`${
                    darkMode ? 'text-sky-400' : 'text-sky-600'
                  }`} size={24} />
                </div>
                <div>
                  <p className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    Phone
                  </p>
                  <p className={`text-sm ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {profileData.phone}
                  </p>
                </div>
              </a>

              <div className={`flex items-start gap-4 p-4 rounded-lg ${
                darkMode ? 'bg-slate-900/50' : 'bg-white'
              }`}>
                <div className={`p-3 rounded-lg flex-shrink-0 ${
                  darkMode ? 'bg-sky-500/20' : 'bg-sky-100'
                }`}>
                  <MapPin className={`${
                    darkMode ? 'text-sky-400' : 'text-sky-600'
                  }`} size={24} />
                </div>
                <div>
                  <p className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    Location
                  </p>
                  <p className={`text-sm ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {profileData.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <p className={`text-sm font-semibold mb-4 ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                Follow me on social media
              </p>
              <div className="flex gap-4">
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-all duration-200 hover:-translate-y-1 ${
                    darkMode
                      ? 'bg-slate-900 hover:bg-slate-800 text-sky-400'
                      : 'bg-white hover:bg-slate-100 text-sky-600'
                  }`}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-all duration-200 hover:-translate-y-1 ${
                    darkMode
                      ? 'bg-slate-900 hover:bg-slate-800 text-slate-300'
                      : 'bg-white hover:bg-slate-100 text-slate-700'
                  }`}
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className={`block text-sm font-semibold mb-2 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Name
              </label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                  darkMode
                    ? 'bg-slate-900 border border-slate-700 text-white placeholder-slate-500'
                    : 'bg-white border border-slate-200 text-slate-900 placeholder-slate-400'
                }`}
                placeholder="Your name"
              />
            </div>

            <div>
              <label className={`block text-sm font-semibold mb-2 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Email
              </label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                  darkMode
                    ? 'bg-slate-900 border border-slate-700 text-white placeholder-slate-500'
                    : 'bg-white border border-slate-200 text-slate-900 placeholder-slate-400'
                }`}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className={`block text-sm font-semibold mb-2 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Message
              </label>
              <textarea
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none ${
                  darkMode
                    ? 'bg-slate-900 border border-slate-700 text-white placeholder-slate-500'
                    : 'bg-white border border-slate-200 text-slate-900 placeholder-slate-400'
                }`}
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-sky-500/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Send size={20} />
              Send Message
            </button>

            {submitted && (
              <div className={`p-4 rounded-lg text-center ${
                darkMode
                  ? 'bg-sky-500/20 border border-sky-500/50 text-sky-300'
                  : 'bg-sky-100 border border-sky-200 text-sky-700'
              }`}>
                Thanks for your message! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
