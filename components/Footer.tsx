"use client";

import { motion } from "framer-motion";
import { BrainCircuit, GitBranch, Mail, Phone, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#020817] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
                <BrainCircuit size={15} className="text-white" />
              </div>
              <span className="font-bold text-white">
                Maria<span className="text-teal-400">.</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              AI Engineer & Full-Stack Developer specialising in Agentic AI
              systems and LLM-powered applications.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
              Quick Links
            </p>
            <div className="flex flex-col gap-2">
              {["About", "Services", "Experience", "Projects", "Skills", "Education", "Contact"].map(
                (l) => (
                  <a
                    key={l}
                    href={`#${l.toLowerCase()}`}
                    className="text-xs text-slate-500 hover:text-teal-400 transition-colors"
                  >
                    {l}
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
              Contact
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:mariamohsinchanna@gmail.com"
                className="flex items-center gap-2 text-xs text-slate-500 hover:text-teal-400 transition-colors"
              >
                <Mail size={12} />
                mariamohsinchanna@gmail.com
              </a>
              <a
                href="tel:+923333141777"
                className="flex items-center gap-2 text-xs text-slate-500 hover:text-teal-400 transition-colors"
              >
                <Phone size={12} />
                +92 333 3141777
              </a>
              <a
                href="https://github.com/MariaMohsin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-500 hover:text-teal-400 transition-colors"
              >
                <GitBranch size={12} />
                github.com/MariaMohsin
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-600">
            © {year} Maria Murad. All rights reserved.
          </p>
          <p className="text-xs text-slate-600 flex items-center gap-1">
            Built with <Heart size={10} className="text-teal-500 mx-0.5" /> using Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
