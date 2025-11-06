import React, { useRef, useState, useMemo } from 'react';
import { UploadCloud, Search, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const sampleCandidates = [
  {
    id: 1,
    name: 'Ava Thompson',
    role: 'Senior Frontend Engineer',
    location: 'Remote • US',
    skills: ['React', 'TypeScript', 'Tailwind', 'GraphQL'],
    avatar: 'https://i.pravatar.cc/120?img=1',
  },
  {
    id: 2,
    name: 'Noah Patel',
    role: 'Machine Learning Engineer',
    location: 'San Francisco, CA',
    skills: ['Python', 'PyTorch', 'NLP', 'MLOps'],
    avatar: 'https://i.pravatar.cc/120?img=2',
  },
  {
    id: 3,
    name: 'Mia Rodriguez',
    role: 'Product Designer',
    location: 'New York, NY',
    skills: ['Figma', 'Prototyping', 'Design Systems', 'UX Research'],
    avatar: 'https://i.pravatar.cc/120?img=3',
  },
  {
    id: 4,
    name: 'Liam Chen',
    role: 'Backend Engineer',
    location: 'Remote • APAC',
    skills: ['Go', 'PostgreSQL', 'gRPC', 'AWS'],
    avatar: 'https://i.pravatar.cc/120?img=4',
  },
];

export default function TalentGrid({ onViewProfile }) {
  const fileInputRef = useRef(null);
  const [query, setQuery] = useState('');

  const handleUploadClick = () => fileInputRef.current?.click();

  const filtered = useMemo(() => {
    return sampleCandidates.filter(
      (c) =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.role.toLowerCase().includes(query.toLowerCase()) ||
        c.skills.some((s) => s.toLowerCase().includes(query.toLowerCase()))
    );
  }, [query]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { ease: 'easeOut', duration: 0.4 } },
  };

  return (
    <section id="talent" className="relative mx-auto mt-12 max-w-6xl px-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Hire Talent</h2>
        <div className="flex w-full max-w-xl items-center gap-2">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, role, or skill..."
              className="w-full rounded-md border border-black/10 bg-white/70 py-2 pl-9 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-200 dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder:text-white/50 dark:focus:border-violet-500 dark:focus:ring-violet-500/20"
            />
          </div>
          <input ref={fileInputRef} type="file" multiple accept=".pdf,.doc,.docx" className="hidden" />
          <button
            onClick={handleUploadClick}
            className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow shadow-violet-600/30 transition hover:-translate-y-0.5 hover:bg-violet-500"
          >
            <UploadCloud size={18} /> Upload Resumes
          </button>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((c, idx) => (
          <motion.article
            key={c.id}
            variants={item}
            whileHover={{ y: -6, rotateX: 0.6, rotateY: -0.6 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            className="group relative overflow-hidden rounded-xl border border-violet-500/20 bg-gradient-to-br from-white/80 to-white/60 p-4 shadow-sm backdrop-blur-md transition dark:from-white/10 dark:to-white/5"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute -right-24 -top-24 h-48 w-48 rotate-12 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-48 w-48 -rotate-12 rounded-full bg-blue-500/20 blur-3xl" />
            </div>

            <div className="flex items-center gap-3">
              <img src={c.avatar} alt={c.name} className="h-12 w-12 rounded-full ring-2 ring-violet-500/30" />
              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">{c.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{c.role}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{c.location}</p>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {c.skills.map((s) => (
                <span key={s} className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2 py-1 text-xs text-violet-600 transition group-hover:border-violet-400/50 group-hover:bg-violet-500/20 dark:text-violet-300">
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-end">
              <button
                onClick={() => onViewProfile(c)}
                className="inline-flex items-center gap-2 rounded-md border border-violet-500/30 bg-white/50 px-3 py-2 text-sm font-semibold text-violet-700 shadow-sm transition hover:translate-y-[-2px] hover:bg-violet-50 hover:shadow dark:bg-white/5 dark:text-violet-300 dark:hover:bg-white/10"
              >
                <Eye size={16} /> View Profile
              </button>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-blue-500 transition-transform duration-300 group-hover:scale-x-100" />
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
