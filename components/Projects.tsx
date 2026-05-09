"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Star, Bot, ShoppingCart, Share2, Layers, BookOpen } from "lucide-react";

const projects = [
  {
    featured: true,
    icon: Layers,
    title: "Live Frontend Project",
    subtitle: "Featured Deployed Application",
    description:
      "Fully functional frontend project deployed on Vercel, showcasing modern UI/UX design with responsive layouts and real-world frontend development skills. Built with Next.js and Tailwind CSS for a polished, production-ready user experience.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://frontend-maria-murads-projects.vercel.app/",
    highlights: [
      "Deployed and live on Vercel",
      "Modern responsive UI",
      "Production-grade code quality",
      "Real-world frontend development",
    ],
  },
  {
    featured: false,
    icon: Bot,
    title: "AI Autonomous Employee System",
    subtitle: "Multi-Agent AI Platform",
    description:
      "Enterprise-grade multi-agent automation system with autonomous task delegation, human-in-the-loop approval workflows, scheduling engine, and fault-recovery mechanisms. Agents communicate via MCP protocol with full logging and recovery.",
    tags: ["Python", "OpenAI", "Gemini", "MCP", "Playwright"],
  },
  {
    featured: false,
    icon: ShoppingCart,
    title: "E-Commerce & RAG Chatbot App",
    subtitle: "Full-Stack AI Platform",
    description:
      "Full-stack e-commerce platform with an embedded AI chatbot powered by Retrieval-Augmented Generation. Vector search enables accurate product Q&A and personalised recommendations with a modern, responsive UI.",
    tags: ["Next.js", "FastAPI", "Vector DB", "OpenAI"],
  },
  {
    featured: false,
    icon: Share2,
    title: "Social Media & Odoo Automation",
    subtitle: "API Automation System",
    description:
      "Automated multi-platform social media posting system with AI-generated content summaries, plus Odoo ERP financial automation via JSON-RPC for streamlined business operations across departments.",
    tags: ["Meta API", "Twitter API", "Python", "JSON-RPC", "Odoo"],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-20 w-[600px] h-[400px] bg-teal-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-teal-400 mb-3 block">
            What I&apos;ve Built
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Key{" "}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full mx-auto" />
        </motion.div>

        {/* Featured project */}
        {projects
          .filter((p) => p.featured)
          .map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-8 relative rounded-3xl border border-teal-500/30 bg-gradient-to-br from-teal-500/10 via-emerald-600/5 to-transparent backdrop-blur-sm p-8 overflow-hidden group hover:border-teal-500/50 transition-all"
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />

              <div className="relative flex flex-wrap items-start gap-4 mb-6">
                <span className="flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400">
                  <Star size={11} fill="currentColor" />
                  Featured Live Project
                </span>
              </div>

              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-teal-500/25">
                      <p.icon size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                      <p className="text-teal-400 text-sm font-medium">{p.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-semibold rounded-lg bg-teal-500/15 border border-teal-500/25 text-teal-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-105 transition-all"
                  >
                    <ExternalLink size={14} />
                    View Live Demo
                  </a>
                </div>

                <div className="space-y-3">
                  {p.highlights!.map((h, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + j * 0.1 }}
                      className="flex items-center gap-3 rounded-xl bg-white/3 border border-teal-500/10 px-4 py-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                      <span className="text-sm text-slate-300">{h}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

        {/* Case study cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects
            .filter((p) => !p.featured)
            .map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                className="rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm p-6 flex flex-col hover:border-teal-500/30 hover:bg-white/5 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                    <p.icon size={20} className="text-teal-400" />
                  </div>
                  <span className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <BookOpen size={10} />
                    Case Study
                  </span>
                </div>

                <h3 className="font-bold text-white mb-1">{p.title}</h3>
                <p className="text-xs text-teal-400 font-medium mb-3">{p.subtitle}</p>
                <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-4">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs rounded-md bg-white/5 border border-white/8 text-slate-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
