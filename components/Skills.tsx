"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const techStack = [
  // AI & LLM
  { name: "OpenAI", abbr: "OAI", cat: "AI & LLM", color: "bg-teal-500/15 border-teal-500/30 text-teal-300" },
  { name: "Gemini", abbr: "GEM", cat: "AI & LLM", color: "bg-teal-500/15 border-teal-500/30 text-teal-300" },
  { name: "Claude API", abbr: "ANT", cat: "AI & LLM", color: "bg-teal-500/15 border-teal-500/30 text-teal-300" },
  { name: "LangChain", abbr: "LC", cat: "AI & LLM", color: "bg-teal-500/15 border-teal-500/30 text-teal-300" },
  { name: "RAG", abbr: "RAG", cat: "AI & LLM", color: "bg-teal-500/15 border-teal-500/30 text-teal-300" },
  { name: "MCP", abbr: "MCP", cat: "AI & LLM", color: "bg-teal-500/15 border-teal-500/30 text-teal-300" },
  { name: "Vector DB", abbr: "VDB", cat: "AI & LLM", color: "bg-teal-500/15 border-teal-500/30 text-teal-300" },
  { name: "Prompt Eng.", abbr: "PE", cat: "AI & LLM", color: "bg-teal-500/15 border-teal-500/30 text-teal-300" },
  // Backend
  { name: "Python", abbr: "PY", cat: "Backend", color: "bg-blue-500/15 border-blue-500/30 text-blue-300" },
  { name: "FastAPI", abbr: "FA", cat: "Backend", color: "bg-blue-500/15 border-blue-500/30 text-blue-300" },
  { name: "PostgreSQL", abbr: "PG", cat: "Backend", color: "bg-blue-500/15 border-blue-500/30 text-blue-300" },
  { name: "Docker", abbr: "DK", cat: "Backend", color: "bg-blue-500/15 border-blue-500/30 text-blue-300" },
  { name: "Celery", abbr: "CL", cat: "Backend", color: "bg-blue-500/15 border-blue-500/30 text-blue-300" },
  { name: "WebSockets", abbr: "WS", cat: "Backend", color: "bg-blue-500/15 border-blue-500/30 text-blue-300" },
  { name: "REST APIs", abbr: "API", cat: "Backend", color: "bg-blue-500/15 border-blue-500/30 text-blue-300" },
  { name: "JSON-RPC", abbr: "RPC", cat: "Backend", color: "bg-blue-500/15 border-blue-500/30 text-blue-300" },
  // Frontend
  { name: "Next.js", abbr: "NX", cat: "Frontend", color: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300" },
  { name: "React", abbr: "RE", cat: "Frontend", color: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300" },
  { name: "TypeScript", abbr: "TS", cat: "Frontend", color: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300" },
  { name: "Tailwind CSS", abbr: "TW", cat: "Frontend", color: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300" },
  { name: "Framer Motion", abbr: "FM", cat: "Frontend", color: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300" },
  { name: "HTML / CSS", abbr: "HTML", cat: "Frontend", color: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300" },
  // Automation & DevOps
  { name: "Playwright", abbr: "PW", cat: "DevOps", color: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300" },
  { name: "Meta API", abbr: "MT", cat: "DevOps", color: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300" },
  { name: "Twitter API", abbr: "TW", cat: "DevOps", color: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300" },
  { name: "GitHub Actions", abbr: "GH", cat: "DevOps", color: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300" },
  { name: "Vercel", abbr: "VC", cat: "DevOps", color: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300" },
  { name: "EC2 / AWS", abbr: "EC2", cat: "DevOps", color: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300" },
  { name: "CI / CD", abbr: "CI", cat: "DevOps", color: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300" },
];

const categories = [
  { label: "AI & LLM", color: "from-teal-500 to-cyan-600", dot: "bg-teal-400" },
  { label: "Backend", color: "from-blue-500 to-blue-600", dot: "bg-blue-400" },
  { label: "Frontend", color: "from-cyan-500 to-teal-600", dot: "bg-cyan-400" },
  { label: "DevOps", color: "from-emerald-500 to-green-600", dot: "bg-emerald-400" },
];

const learning = ["Kubernetes", "AWS Bedrock", "LangGraph", "Crew AI"];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute left-0 top-1/4 w-60 h-60 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-teal-400 mb-3 block">
            Technical Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full mx-auto" />
        </motion.div>

        {/* Category legend */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {categories.map((cat) => (
            <div key={cat.label} className="flex items-center gap-2">
              <div className={`w-2.5 h-2.5 rounded-full ${cat.dot}`} />
              <span className="text-xs text-slate-400 font-medium">{cat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Tech icon grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3 mb-10">
          {techStack.map((tech, i) => (
            <motion.div
              key={`${tech.name}-${i}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.03 }}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl border ${tech.color} hover:scale-105 transition-all cursor-default`}
            >
              <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                <span className="text-[10px] font-black tracking-tight">{tech.abbr}</span>
              </div>
              <span className="text-[10px] text-slate-400 text-center leading-tight font-medium">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-6 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">
            Currently Learning
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {learning.map((s) => (
              <span
                key={s}
                className="px-4 py-1.5 text-xs font-medium rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-300 flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
