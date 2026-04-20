import { useState,useEffect } from "react";
import useTypewriter from "../hooks/useTypewriter";
import GlowButton from "../components/GlowButton";
import StatCounter from "../components/StatCounter";


export default function Hero() {
  const words = ["React Developer", "Next.js", "UI Engineer", "Frontend Dev"];
  const typed = useTypewriter(words);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  const chips = [
    { label: "React.js", color: "#61dafb" }, { label: "Next.js", color: "#fff" },
    { label: "TypeScript", color: "#3178c6" }, { label: "Tailwind", color: "#38bdf8" },
    { label: "REST APIs", color: "#4f8fff" }, { label: "AI APIs", color: "#a78bfa" },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 relative z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Left */}
          <div>
            <div style={{
              opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}>
              <div className="inline-flex items-center gap-2 text-xs font-medium px-3 md:px-4 py-2 rounded-full mb-8"
                style={{ background: "rgba(62,207,142,0.1)", border: "1px solid rgba(62,207,142,0.2)", color: "#3ecf8e" }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#3ecf8e" }} />
                Available for freelance work
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.02] tracking-tight mb-6"
                style={{ fontFamily: "'Syne',sans-serif", color: "#f0f2f8" }}>
                Frontend<br />
                <span style={{ background: "linear-gradient(135deg,#4f8fff,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Developer
                </span>
                <br />
              </h1>

              <div className="flex items-center gap-2 mb-6 h-7 flex-wrap">
                <span className="text-xs sm:text-sm font-medium" style={{ color: "#cfcccc" }}>I specialize in</span>
                <span className="text-xs sm:text-sm font-semibold" style={{ color: "#4f8fff" }}>{typed}</span>
                <span className="w-0.5 h-4 animate-pulse rounded-full" style={{ background: "#4f8fff" }} />
              </div>

              <p className="text-sm sm:text-base leading-relaxed mb-10 max-w-lg" style={{ color: "#cfcccc", fontWeight: 300 }}>
                I build fast, pixel-perfect web experiences using React, Next.js & TypeScript — for startups and businesses worldwide. Based in Ahmedabad, India.
              </p>

              <div className="flex gap-4 flex-wrap">
                <GlowButton onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                  View my work ↓
                </GlowButton>
                <GlowButton onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} variant="ghost">
                  Let's talk
                </GlowButton>
              </div>
            </div>
          </div>

          {/* Right */}
          <div style={{
            opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
          }} className="overflow-hidden">
            {/* Chip grid */}
            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              {chips.map(c => (
                <div key={c.label} className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-xs md:text-sm transition-all duration-200 cursor-default"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "#8b93b8" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = c.color + "50"; e.currentTarget.style.color = "#f0f2f8"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#8b93b8"; }}>
                  <div className="w-2 h-2 rounded-full" style={{ background: c.color }} />
                  {c.label}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
              {[
                { value: "2", label: "Years coding", suffix: "+" },
                { value: "5", label: "Projects built", suffix: "+" },
                { value: "25", label: "Starting $/hr", suffix: "" },
              ].map(s => (
                <div key={s.label} className="rounded-2xl p-3 md:p-5 text-center text-xs md:text-base"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <StatCounter value={s.value} label={s.label} suffix={s.suffix} />
                </div>
              ))}
            </div>

            {/* Mini project preview card */}
            <div className="rounded-2xl p-3 md:p-4 flex items-center gap-3 md:gap-4"
              style={{ background: "rgba(79,143,255,0.06)", border: "1px solid rgba(79,143,255,0.15)" }}>
              <div className="w-8 md:w-10 h-8 md:h-10 rounded-xl flex items-center justify-center text-base md:text-lg flex-shrink-0"
                style={{ background: "rgba(79,143,255,0.15)" }}>🎬</div>
              <div className="flex-1 min-w-0">
                <div className="text-xs md:text-sm font-semibold mb-0.5" style={{ color: "#f0f2f8" }}>QuickShow is live</div>
                <div className="text-xs truncate" style={{ color: "#4b5563" }}>quickshow-seven-lovat.vercel.app</div>
              </div>
              <a href="https://quickshow-seven-lovat.vercel.app/" target="_blank" rel="noreferrer"
                className="text-xs px-2 md:px-3 py-1 md:py-1.5 rounded-lg font-medium flex-shrink-0 transition-all whitespace-nowrap"
                style={{ background: "#4f8fff", color: "#fff" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                Visit ↗
              </a>
              
            </div>
            <div className="rounded-2xl p-3 md:p-4 flex items-center gap-3 md:gap-4"
              style={{ background: "rgba(79,143,255,0.06)", border: "1px solid rgba(79,143,255,0.15)" }}>
              <div className="w-8 md:w-10 h-8 md:h-10 rounded-xl flex items-center justify-center text-base md:text-lg flex-shrink-0"
                style={{ background: "rgba(79,143,255,0.15)" }}>🤖</div>
              <div className="flex-1 min-w-0">
                <div className="text-xs md:text-sm font-semibold mb-0.5" style={{ color: "#f0f2f8" }}>hyperion is live</div>
                <div className="text-xs truncate" style={{ color: "#4b5563" }}>hyperion-eosin.vercel.app</div>
              </div>
              <a href="https://hyperion-eosin.vercel.app/" target="_blank" rel="noreferrer"
                className="text-xs px-2 md:px-3 py-1 md:py-1.5 rounded-lg font-medium flex-shrink-0 transition-all whitespace-nowrap"
                style={{ background: "#a78bfa", color: "#fff" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                Visit ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
