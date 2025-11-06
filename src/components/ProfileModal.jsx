import React from 'react';
import { X, Briefcase, MapPin, Star } from 'lucide-react';

export default function ProfileModal({ open, onClose, candidate }) {
  if (!open || !candidate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-white/80 backdrop-blur-xl dark:bg-black/60">
        <div className="flex items-center justify-between border-b border-black/10 p-4 dark:border-white/10">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Candidate Profile</h3>
          <button
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-white text-gray-800 transition hover:bg-gray-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4">
            <img src={candidate.avatar} alt={candidate.name} className="h-16 w-16 rounded-full ring-2 ring-violet-500/40" />
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">{candidate.name}</h4>
              <p className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <Briefcase size={16} /> {candidate.role}
              </p>
              <p className="mt-1 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <MapPin size={16} /> {candidate.location}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h5 className="text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">Key Skills</h5>
            <div className="mt-2 flex flex-wrap gap-2">
              {candidate.skills.map((s) => (
                <span key={s} className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2 py-1 text-xs text-violet-700 dark:text-violet-300">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-black/10 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
              <h6 className="mb-2 text-sm font-semibold text-gray-800 dark:text-white">Experience Highlights</h6>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2"><Star className="mt-0.5 text-violet-500" size={16} /> Led critical initiatives improving performance by 30%.</li>
                <li className="flex items-start gap-2"><Star className="mt-0.5 text-violet-500" size={16} /> Shipped features used by millions of users globally.</li>
                <li className="flex items-start gap-2"><Star className="mt-0.5 text-violet-500" size={16} /> Mentored teams and established best practices.</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
              <h6 className="mb-2 text-sm font-semibold text-gray-800 dark:text-white">Culture & Values</h6>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Values craftsmanship, thoughtful collaboration, and a bias for impact. Passionate about inclusive teams and continuous learning.
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-2">
            <button onClick={onClose} className="rounded-md border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
              Close
            </button>
            <button className="rounded-md bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow shadow-violet-600/30 hover:bg-violet-500">
              Shortlist Candidate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
