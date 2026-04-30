'use client';
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div>
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center overflow-hidden relative px-6">
        {/* Ambient background blobs */}
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-violet-700/20 rounded-full blur-3xl pointer-events-none" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 text-center max-w-2xl w-full">
          {/* Giant 404 */}
          <div className="relative select-none mb-2">
            <span
              className="text-[clamp(7rem,25vw,14rem)] font-black leading-none tracking-tighter text-transparent"
              style={{
                WebkitTextStroke: "1.5px rgba(99,102,241,0.4)",
              }}
            >
              404
            </span>
            <span
              className="absolute inset-0 text-[clamp(7rem,25vw,14rem)] font-black leading-none tracking-tighter text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #6366f1 0%, #a78bfa 50%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "blur(18px)",
                opacity: 0.6,
              }}
              aria-hidden="true"
            >
              404
            </span>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-indigo-500/60" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-indigo-400/80">
              Page Not Found
            </span>
            <div className="h-px w-16 bg-linear-to-l from-transparent to-indigo-500/60" />
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4 leading-tight tracking-tight">
            You wandered off the map.
          </h1>

          {/* Subtext */}
          <p className="text-zinc-400 text-base sm:text-lg mb-10 leading-relaxed max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist, was moved, or
            perhaps never existed at all.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-indigo-900/40 hover:shadow-indigo-700/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H15.75a.75.75 0 01-.75-.75v-4.5h-6V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z"
                />
              </svg>
              Go Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-zinc-800/60 hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Go Back
            </button>
          </div>

          {/* Status badge */}
          <div className="mt-12 inline-flex items-center gap-2 text-xs font-mono text-zinc-600">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 animate-pulse" />
            HTTP 404 · Resource not found
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
