import React from 'react';
import { Moon, Sun, User, Upload } from 'lucide-react';

export default function NavBar() {
  const [dark, setDark] = React.useState(() => {
    if (typeof window === 'undefined') return true;
    return document.documentElement.classList.contains('dark');
  });

  React.useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-black/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-violet-500 to-blue-500 text-white font-bold">R</div>
          <span className="text-lg font-semibold text-gray-900 dark:text-white">Recruitify</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-gray-700 dark:text-gray-200 md:flex">
          <a href="#talent" className="hover:text-violet-500">Hire Talent</a>
          <a href="#hire" className="hover:text-violet-500">How it works</a>
          <a href="#faq" className="hover:text-violet-500">FAQ</a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark((v) => !v)}
            aria-label="Toggle theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-white text-gray-800 transition hover:bg-gray-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#talent"
            className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow shadow-violet-600/30 transition hover:bg-violet-500"
          >
            <Upload size={16} /> Upload Resumes
          </a>
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-white text-gray-800 transition hover:bg-gray-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
            <User size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
