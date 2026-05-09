"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Zap, Target, Globe } from "lucide-react";

const stats = [
  { label: "Years Building", value: "3+" },
  { label: "AI Projects", value: "15+" },
  { label: "APIs Integrated", value: "10+" },
  { label: "LLM Providers", value: "4" },
];

const highlights = [
  {
    icon: Sparkles,
    title: "Agentic AI Systems",
    desc: "Multi-agent orchestration with human-in-the-loop workflows, scheduling, and fault recovery.",
  },
  {
    icon: Zap,
    title: "LLM Engineering",
    desc: "Deep experience with OpenAI, Gemini, Claude, and MCP protocols for production AI apps.",
  },
  {
    icon: Globe,
    title: "Full-Stack Platforms",
    desc: "End-to-end applications with Next.js frontends, FastAPI backends, and vector databases.",
  },
  {
    icon: Target,
    title: "Automation Pipelines",
    desc: "Playwright-driven browser automation, social media APIs, and AI content generation.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3 block">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Summary
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Results-driven{" "}
              <span className="text-indigo-300 font-semibold">
                AI Engineer and Full-Stack Developer
              </span>{" "}
              with hands-on experience building production-grade Agentic AI
              systems, LLM-powered applications, and full-stack web platforms.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              Proficient in{" "}
              <span className="text-violet-300 font-medium">
                Python, FastAPI, TypeScript, and Next.js
              </span>{" "}
              with deep expertise in OpenAI, Gemini, and Claude API integrations.
              I design autonomous systems that combine multiple AI agents,
              browser automation, and real-time data pipelines.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Seeking a full-time role to deliver intelligent, scalable solutions
              that push the boundaries of what AI can automate and create.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm p-6 text-center hover:border-indigo-500/30 hover:bg-white/5 transition-all"
              >
                <div className="text-4xl font-black bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-1">
                  {s.value}
                </div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm p-6 hover:border-indigo-500/30 hover:bg-white/5 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                <h.icon size={18} className="text-indigo-400" />
              </div>
              <h3 className="font-semibold text-white text-sm mb-2">
                {h.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
