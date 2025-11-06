import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient and grain overlay to blend with UI while keeping interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 dark:via-black/40 dark:to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6 text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md dark:border-white/10">
          <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
          Recruiting SaaS • Purple tech aesthetic
        </div>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          Hire world‑class talent, faster
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Upload resumes in bulk, search intelligently, and view rich candidate profiles — all in a beautiful, responsive interface.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <a
            href="#hire"
            className="rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400"
          >
            Get Started
          </a>
          <a
            href="#talent"
            className="rounded-lg bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Browse Talent
          </a>
        </div>
      </div>
    </section>
  );
}
