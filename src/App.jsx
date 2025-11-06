import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import TalentGrid from './components/TalentGrid';
import ProfileModal from './components/ProfileModal';

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(null);

  const onViewProfile = (candidate) => {
    setSelected(candidate);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 dark:from-[#0a0a0b] dark:to-black dark:text-white">
      {/* Decorative background accents */}
      <div className="pointer-events-none fixed inset-0 opacity-60 mix-blend-screen">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <NavBar />
      <Hero />

      <main className="relative z-10">
        <section id="hire" className="mx-auto mt-10 max-w-6xl px-6">
          <div className="rounded-xl border border-black/10 bg-white/70 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">How it works</h2>
            <ol className="mt-4 grid grid-cols-1 gap-4 text-sm text-gray-700 dark:text-gray-300 sm:grid-cols-3">
              <li className="rounded-lg border border-violet-500/30 bg-violet-500/10 p-4">
                1. Upload a batch of resumes in PDF or DOCX format.
              </li>
              <li className="rounded-lg border border-violet-500/30 bg-violet-500/10 p-4">
                2. Our engine parses, enriches, and indexes candidates.
              </li>
              <li className="rounded-lg border border-violet-500/30 bg-violet-500/10 p-4">
                3. Search, filter, and view beautiful candidate profiles.
              </li>
            </ol>
          </div>
        </section>

        <TalentGrid onViewProfile={onViewProfile} />
      </main>

      <footer className="mx-auto mt-16 max-w-6xl px-6 py-10 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 dark:border-white/10 sm:flex-row">
          <p>© {new Date().getFullYear()} Recruitify. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-violet-500">Privacy</a>
            <a href="#" className="hover:text-violet-500">Terms</a>
            <a href="#faq" className="hover:text-violet-500">Support</a>
          </div>
        </div>
      </footer>

      <ProfileModal open={open} onClose={() => setOpen(false)} candidate={selected} />
    </div>
  );
}
