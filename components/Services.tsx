"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bot, Layers, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Agentic AI Development",
    desc: "Design and build multi-agent systems with autonomous task delegation, human-in-the-loop approval gates, scheduling engines, and fault-recovery mechanisms using MCP protocol.",
    features: ["Multi-Agent Orchestration", "MCP Integration", "Human-in-the-Loop", "Fault Recovery"],
    gradient: "from-teal-500 to-cyan-600",
    glow: "bg-teal-500/10",
    border: "border-teal-500/25",
    tag: "bg-teal-500/10 border-teal-500/20 text-teal-300",
  },
  {
    icon: Layers,
    title: "Full-Stack AI Platforms",
    desc: "End-to-end web applications with Next.js frontends, FastAPI backends, PostgreSQL databases, and embedded AI chatbots powered by Retrieval-Augmented Generation.",
    features: ["Next.js + FastAPI", "RAG Chatbots", "Vector Search", "REST & WebSockets"],
    gradient: "from-emerald-500 to-teal-600",
    glow: "bg-emerald-500/10",
    border: "border-emerald-500/25",
    tag: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
  },
  {
    icon: Zap,
    title: "AI Automation Pipelines",
    desc: "Browser-driven content automation with Playwright, social media management integrating Meta & Twitter APIs, Odoo ERP automation, and AI-generated content pipelines at scale.",
    features: ["Playwright Automation", "Social Media APIs", "Odoo ERP (JSON-RPC)", "AI Content Generation"],
    gradient: "from-green-500 to-emerald-600",
    glow: "bg-green-500/10",
    border: "border-green-500/25",
    tag: "bg-green-500/10 border-green-500/20 text-green-300",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-20 w-[700px] h-[400px] bg-teal-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-teal-400 mb-3 block">
            What I Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base mt-3">
            From concept to deployment — I build AI-powered products that solve real problems.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className={`relative rounded-2xl border ${s.border} ${s.glow} backdrop-blur-sm p-7 flex flex-col hover:scale-[1.02] transition-all duration-300 group overflow-hidden`}
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br opacity-10 blur-2xl" />

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-lg mb-5 flex-shrink-0`}>
                <s.icon size={26} className="text-white" />
              </div>

              <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">{s.desc}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {s.features.map((f) => (
                  <span
                    key={f}
                    className={`px-2.5 py-1 text-xs font-medium rounded-lg border ${s.tag}`}
                  >
                    {f}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="flex items-center gap-1.5 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors group-hover:gap-3"
              >
                Let&apos;s discuss <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
