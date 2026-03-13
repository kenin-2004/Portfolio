import { useState } from "react";

import FadeIn from "../components/FadeIn";
import SectionTag from "../components/SectionTag";
import GlowButton from "../components/GlowButton";

export default function About() {
  const [tab, setTab] = useState("story");
  const tabs = [
    { id: "story", label: "My story" },
    { id: "services", label: "Services" },
    { id: "process", label: "My process" },
  ];
  const content = {
    story: (
      <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#cfcccc", fontWeight: 300 }}>
        <p>I'm a self-taught frontend developer based in Ahmedabad, India, specializing in building modern web applications with React and Next.js.</p>
        <p>I started coding because I loved creating things — and haven't stopped since. My focus is the intersection of great design and clean code.</p>
        <p>I'm now taking on freelance projects for international clients. If you need a reliable developer who communicates clearly and delivers on time, let's talk.</p>
      </div>
    ),
    services: (
      <div className="space-y-3">
        {["Custom web applications", "Landing page development", "API integration & data fetching", "UI/UX implementation from Figma", "Performance optimization", "AI-powered features"].map(s => (
          <div key={s} className="flex items-center gap-3 text-sm" style={{ color: "#8b93b8" }}>
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#4f8fff" }} />
            {s}
          </div>
        ))}
      </div>
    ),
    process: (
      <div className="space-y-4">
        {[
          { step: "01", title: "Discovery", desc: "We discuss your goals, requirements, and timeline." },
          { step: "02", title: "Design & Plan", desc: "I plan the architecture and confirm the tech stack." },
          { step: "03", title: "Build & Update", desc: "Daily updates and regular check-ins throughout." },
          { step: "04", title: "Launch", desc: "Deploy, test, and hand over with clean documentation." },
        ].map(p => (
          <div key={p.step} className="flex gap-4 items-start">
            <div className="text-xs font-black" style={{ color: "#4f8fff", fontFamily: "'Syne',sans-serif", minWidth: 24 }}>{p.step}</div>
            <div>
              <div className="text-sm font-semibold mb-0.5" style={{ color: "#f0f2f8" }}>{p.title}</div>
              <div className="text-sm" style={{ color: "#4b5563", fontWeight: 300 }}>{p.desc}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  };

  return (
    <section id="about" className="py-28 relative z-10" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Card */}
          <FadeIn>
            <div className="rounded-2xl p-8" style={{ background: "#0f1219", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black text-white mb-6"
                style={{ background: "linear-gradient(135deg,#4f8fff,#7c3aed)", fontFamily: "'Syne',sans-serif" }}>
                SK
              </div>
              <div className="text-xl font-black mb-1" style={{ fontFamily: "'Syne',sans-serif", color: "#f0f2f8" }}>
                Sakhiya Kenin
              </div>
              <div className="text-sm mb-6" style={{ color: "#4f8fff" }}>React · Next.js · TypeScript</div>
              <div className="space-y-3 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                {[
                  { k: "Location", v: "Ahmedabad, India 🇮🇳" },
                  { k: "Time zone", v: "IST (UTC +5:30)" },
                  { k: "Rate", v: "From $25/hr" },
                  { k: "Platforms", v: "Upwork · Fiverr" },
                  { k: "Availability", v: "● Open to work", green: true },
                ].map(r => (
                  <div key={r.k} className="flex justify-between text-sm">
                    <span style={{ color: "#4b5563" }}>{r.k}</span>
                    <span style={{ color: r.green ? "#3ecf8e" : "#8b93b8", fontWeight: 500 }}>{r.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.15}>
            <SectionTag>About me</SectionTag>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight mb-8"
              style={{ fontFamily: "'Syne',sans-serif", color: "#f0f2f8", lineHeight: 1.15 }}>
              I turn ideas into fast, beautiful web apps.
            </h2>

            {/* Tabs */}
            <div className="flex gap-1 p-1 rounded-xl mb-6 w-fit" style={{ background: "rgba(255,255,255,0.04)" }}>
              {tabs.map(t => (
                <button key={t.id} onClick={() => setTab(t.id)}
                  className="px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200"
                  style={{
                    background: tab === t.id ? "#4f8fff" : "transparent",
                    color: tab === t.id ? "#fff" : "#4b5563",
                  }}>
                  {t.label}
                </button>
              ))}
            </div>

            <div className="min-h-[160px]">{content[tab]}</div>

            <div className="mt-8">
              <GlowButton onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Start a project together
              </GlowButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
