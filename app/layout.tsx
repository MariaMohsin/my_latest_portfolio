import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maria Murad — AI Engineer & Full-Stack Developer",
  description:
    "Portfolio of Maria Murad, AI Engineer and Full-Stack Developer specialising in Agentic AI, LLM integrations, and production-grade web applications.",
  keywords: [
    "AI Engineer",
    "Full-Stack Developer",
    "Agentic AI",
    "OpenAI",
    "Next.js",
    "FastAPI",
    "Maria Murad",
  ],
  openGraph: {
    title: "Maria Murad — AI Engineer & Full-Stack Developer",
    description:
      "Building production-grade Agentic AI systems, LLM-powered apps, and full-stack platforms. Based in Karachi, Pakistan.",
    url: "https://my-latest-maria-murad-portfolio.vercel.app",
    siteName: "Maria Murad Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maria Murad — AI Engineer & Full-Stack Developer",
    description:
      "Building production-grade Agentic AI systems, LLM-powered apps, and full-stack platforms.",
  },
  metadataBase: new URL("https://my-latest-maria-murad-portfolio.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#020817] text-slate-200">{children}</body>
    </html>
  );
}
