"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, BookOpen, Calendar, Sparkles } from "lucide-react";

const education = [
  {
    icon: Sparkles,
    degree: "Diploma in AI Engineering",
    institution: "Governor House Karachi",
    period: "2024 – Present",
    status: "In Progress",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    description:
      "Intensive program covering Agentic AI systems, LLM engineering, cloud deployment, and full-stack AI application development. Hands-on projects with real-world industry relevance.",
    highlights: [
      "Agentic AI & Multi-Agent Systems",
      "LLM Integration & Prompt Engineering",
      "Cloud & DevOps (AWS, Docker)",
      "Full-Stack Web Development",
    ],
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    icon: BookOpen,
    degree: "Master of Arts — English",
    institution: "Shah Abdul Latif University",
    period: "2015",
    status: "Completed",
    statusColor: "text-slate-400 bg-slate-500/10 border-slate-500/20",
    description:
      "Advanced studies in English language and literature, developing strong analytical, research, and communication skills that complement technical expertise.",
    highlights: [
      "Research & Analytical Thinking",
      "Written Communication",
      "Critical Analysis",
    ],
    gradient: "from-slate-500 to-slate-600",
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 bottom-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3 block">
            Academic Background
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full mx-auto" />
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm p-8 hover:border-indigo-500/25 hover:bg-white/5 transition-all"
            >
              <div className="flex flex-wrap gap-4 items-start mb-5">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                >
                  <edu.icon size={24} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <span
                      className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${edu.statusColor}`}
                    >
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-indigo-400 font-semibold text-sm">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <Calendar size={12} className="text-slate-500" />
                    <span className="text-xs text-slate-500">{edu.period}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {edu.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {edu.highlights.map((h) => (
                  <span
                    key={h}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 border border-white/8 text-slate-400"
                  >
                    <GraduationCap size={11} className="text-indigo-400" />
                    {h}
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
