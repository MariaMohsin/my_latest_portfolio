"use client";

import { motion } from "framer-motion";
import { Download, FolderOpen, Mail, GitBranch, MapPin } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const TAGS = [
  "Agentic AI",
  "OpenAI",
  "Gemini",
  "Claude API",
  "FastAPI",
  "Next.js",
  "MCP",
  "Playwright",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-teal-600/10 via-emerald-600/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#14b8a6 1px, transparent 1px), linear-gradient(90deg, #14b8a6 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Badge */}
        <motion.div {...fadeUp(0.1)}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border border-teal-500/30 bg-teal-500/10 text-teal-300 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Full-Time Roles
          </span>
        </motion.div>

        {/* Name */}
        <motion.div {...fadeUp(0.2)} className="space-y-2">
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white">
            Maria{" "}
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
              Murad
            </span>
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-slate-300">
            AI Engineer
          </p>
          <p className="text-base sm:text-lg text-slate-500">
            Full-Stack Developer{" "}
            <span className="text-teal-400 mx-2">·</span> Agentic AI
            Specialist
          </p>
        </motion.div>

        {/* Summary */}
        <motion.p
          {...fadeUp(0.35)}
          className="max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed"
        >
          Results-driven AI Engineer building production-grade{" "}
          <span className="text-teal-300 font-medium">Agentic AI systems</span>,
          LLM-powered applications, and full-stack platforms. Deep expertise in
          OpenAI, Gemini, and Claude APIs — turning ambitious ideas into
          scalable, intelligent products.
        </motion.p>

        {/* Location */}
        <motion.div
          {...fadeUp(0.42)}
          className="flex items-center gap-1.5 text-slate-500 text-sm"
        >
          <MapPin size={14} className="text-teal-400" />
          Karachi, Pakistan
          <span className="mx-2 text-slate-700">·</span>
          <a
            href="https://github.com/MariaMohsin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-slate-400 hover:text-teal-300 transition-colors"
          >
            <GitBranch size={14} />
            MariaMohsin
          </a>
        </motion.div>

        {/* Tech tags */}
        <motion.div
          {...fadeUp(0.48)}
          className="flex flex-wrap justify-center gap-2 mt-2"
        >
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-teal-500/20 text-slate-400 hover:border-teal-500/40 hover:text-teal-300 transition-colors"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.55)}
          className="flex flex-wrap justify-center gap-4 mt-4"
        >
          <a
            href="/Maria_Murad_Resume.pdf"
            download
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-105 transition-all duration-200"
          >
            <Download size={16} />
            Download Resume
          </a>
          <a
            href="#projects"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 hover:border-teal-500/40 hover:text-white transition-all duration-200"
          >
            <FolderOpen size={16} />
            View Projects
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 hover:border-teal-500/40 hover:text-white transition-all duration-200"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-600 tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
            className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-teal-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
