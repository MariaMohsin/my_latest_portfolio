"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    label: "AI & LLM",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    text: "text-violet-300",
    skills: ["OpenAI API", "Gemini API", "Claude API", "LangChain", "RAG", "MCP", "Vector DBs", "Prompt Engineering"],
  },
  {
    label: "Backend",
    color: "from-indigo-500 to-blue-600",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    text: "text-indigo-300",
    skills: ["Python", "FastAPI", "REST APIs", "WebSockets", "PostgreSQL", "Celery", "Docker", "JSON-RPC"],
  },
  {
    label: "Frontend",
    color: "from-cyan-500 to-indigo-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-300",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS", "Responsive Design"],
  },
  {
    label: "Automation & DevOps",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-300",
    skills: ["Playwright", "Meta API", "Twitter API", "Docker", "GitHub Actions", "Vercel", "EC2", "CI/CD"],
  },
];

const proficiencies = [
  { skill: "Agentic AI Development", level: 92 },
  { skill: "Python / FastAPI", level: 90 },
  { skill: "LLM API Integration", level: 95 },
  { skill: "Next.js / TypeScript", level: 85 },
  { skill: "Automation & Playwright", level: 88 },
  { skill: "Docker & Deployment", level: 78 },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute left-0 top-1/4 w-60 h-60 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3 block">
            Technical Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Skill categories */}
          <div className="space-y-5">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + ci * 0.1 }}
                className="rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm p-5 hover:border-white/12 hover:bg-white/5 transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className={`h-1 w-8 rounded-full bg-gradient-to-r ${cat.color}`}
                  />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    {cat.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s, si) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.3 + ci * 0.1 + si * 0.04,
                      }}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg ${cat.bg} border ${cat.border} ${cat.text}`}
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Proficiency bars */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-sm font-semibold text-slate-400 uppercase tracking-widest"
            >
              Core Proficiencies
            </motion.h3>
            {proficiencies.map((p, i) => (
              <motion.div
                key={p.skill}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-300">
                    {p.skill}
                  </span>
                  <span className="text-xs font-semibold text-indigo-400">
                    {p.level}%
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${p.level}%` } : {}}
                    transition={{
                      duration: 1,
                      delay: 0.5 + i * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94] as const,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                  />
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-8 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">
                Currently Learning
              </p>
              <div className="flex flex-wrap gap-2">
                {["Kubernetes", "AWS Bedrock", "LangGraph", "Crew AI"].map(
                  (s) => (
                    <span
                      key={s}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                      {s}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
