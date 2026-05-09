"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, GitBranch, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mariamohsinchanna@gmail.com",
    href: "mailto:mariamohsinchanna@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 333 3141777",
    href: "tel:+923333141777",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Karachi, Pakistan",
    href: null,
  },
  {
    icon: GitBranch,
    label: "GitHub",
    value: "github.com/MariaMohsin",
    href: "https://github.com/MariaMohsin",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:mariamohsinchanna@gmail.com?subject=${encodeURIComponent(
      form.subject || "Portfolio Inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.open(mailtoLink, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[700px] h-[400px] bg-gradient-to-t from-teal-600/8 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-teal-400 mb-3 block">
            Let&apos;s Connect
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Get in{" "}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Open to full-time AI Engineer and Full-Stack Developer roles.
            Let&apos;s discuss how I can contribute to your team.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm p-8">
              <h3 className="text-lg font-bold text-white mb-2">
                Ready to Collaborate
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Whether you&apos;re building an AI-powered product, need a
                full-stack developer, or looking for an Agentic AI specialist,
                I&apos;d love to hear from you.
              </p>
              <div className="space-y-4">
                {contactInfo.map((c, i) => (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, x: -15 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                      <c.icon size={16} className="text-teal-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">{c.label}</p>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-sm text-slate-300 hover:text-teal-300 transition-colors"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-sm text-slate-300">{c.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">
                Availability
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-slate-300 font-medium">
                  Available for Full-Time Roles
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Open to on-site, hybrid, or remote positions globally.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm p-8"
          >
            <h3 className="text-lg font-bold text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-500/50 focus:bg-white/8 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-500/50 focus:bg-white/8 transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-500/50 focus:bg-white/8 transition-all"
                  placeholder="Job Opportunity / Collaboration"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-500/50 focus:bg-white/8 transition-all resize-none"
                  placeholder="Tell me about the role or project..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-[1.02] active:scale-100 transition-all"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
