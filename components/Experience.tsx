"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";

const achievements = [
  "Architected multi-agent AI systems with autonomous task delegation and human-in-the-loop approval gates",
  "Built AI Content Automation pipelines using Playwright for browser-driven content creation at scale",
  "Developed social media automation systems integrating Meta API and Twitter API with AI-generated copy",
  "Engineered full-stack AI applications with RAG pipelines, vector search, and FastAPI backends",
  "Integrated OpenAI, Gemini, and Claude APIs for diverse LLM-powered workflows",
  "Implemented MCP (Model Context Protocol) for structured agent-to-tool communication",
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/3 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-teal-400 mb-3 block">
            Work History
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-emerald-500/30 to-transparent hidden sm:block" />

          <div className="sm:pl-24 relative">
            <div className="hidden sm:flex absolute left-5 top-8 w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 items-center justify-center shadow-lg shadow-teal-500/30 ring-4 ring-[#020817]">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>

            <div className="rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm p-8 hover:border-teal-500/30 hover:bg-white/5 transition-all">
              <div className="flex flex-wrap items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/20 to-emerald-600/20 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <Briefcase size={24} className="text-teal-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-white">
                    AI Engineer
                  </h3>
                  <p className="text-teal-400 font-semibold text-sm mt-0.5">
                    Freelance / Self-Directed Projects
                  </p>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <span className="flex items-center gap-1.5 text-xs text-slate-500">
                      <MapPin size={12} className="text-emerald-400" />
                      Karachi, Pakistan
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Calendar size={12} className="text-emerald-400" />
                      2023 – Present
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  Active
                </span>
              </div>

              <div className="space-y-3">
                {achievements.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-teal-400 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-slate-400 leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                {[
                  "Python",
                  "FastAPI",
                  "OpenAI",
                  "Gemini",
                  "Claude",
                  "MCP",
                  "Playwright",
                  "Next.js",
                  "TypeScript",
                  "Docker",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg bg-teal-500/10 border border-teal-500/15 text-teal-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
