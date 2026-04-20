import { useState } from "react";
import FadeIn from "../components/FadeIn";
import SectionTag from "../components/SectionTag";
import GlowButton from "../components/GlowButton";
export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "keninpatel1234@gmail.com";

  const copy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-16 md:py-28 relative z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="rounded-3xl p-6 md:p-12 lg:p-20 text-center relative overflow-hidden"
            style={{ background: "#0f1219", border: "1px solid rgba(255,255,255,0.07)" }}>

            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #4f8fff, #a78bfa, transparent)" }} />

            {/* Glow */}
            <div className="absolute pointer-events-none"
              style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(79,143,255,0.06) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

            <div className="relative z-10">
              <SectionTag>Contact</SectionTag>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tight mb-5"
                style={{ fontFamily: "'Syne',sans-serif", color: "#f0f2f8" }}>
                Let's build something<br />
                <span style={{ background: "linear-gradient(135deg,#4f8fff,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  great together.
                </span>
              </h2>
              <p className="text-sm md:text-base mb-10 max-w-lg mx-auto" style={{ color: "#6b7494", fontWeight: 300 }}>
                I'm currently available for freelance projects — landing pages, web apps, AI-powered products. Let's talk.
              </p>

              <div className="flex gap-3 md:gap-4 justify-center flex-wrap mb-10">
                <GlowButton href={`mailto:${email}`}>
                  Send an email
                </GlowButton>
                <GlowButton variant="ghost" onClick={copy}>
                  {copied ? "✓ Copied!" : "Copy email"}
                </GlowButton>
              </div>

              <div className="flex gap-4 md:gap-8 justify-center flex-wrap">
                {[
                  { label: "GitHub", href: "https://github.com/kenin-2004" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/kenin-sakhiya/" },
                  { label: "Upwork", href: "https://upwork.com" },
                  { label: "Fiverr", href: "https://fiverr.com" },
                ].map(l => (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                    className="text-xs md:text-sm transition-colors duration-200"
                    style={{ color: "#4b5563" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#f0f2f8"}
                    onMouseLeave={e => e.currentTarget.style.color = "#4b5563"}>
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}