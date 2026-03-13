import { useState } from "react";
import useInView from "../hooks/useInView";
import GlowButton from "./GlowButton";
import ChatPreview from "./ChatPreview";
import MoviePreview from "./MoviePreview";


export default function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView(0.1);
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(40px)",
      transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
    }}>
      <div
        className="rounded-2xl overflow-hidden grid md:grid-cols-2 transition-all duration-300"
        style={{
          background: "#0f1219",
          border: `1px solid ${hovered ? project.accent + "40" : "rgba(255,255,255,0.07)"}`,
          boxShadow: hovered ? `0 0 60px ${project.accent}15` : "none",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Info */}
        <div className={`p-10 flex flex-col justify-center ${!isEven ? "md:order-2" : ""}`}>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full w-fit mb-5"
            style={{ background: project.accentBg, color: project.accent, border: `1px solid ${project.accent}30` }}>
            {project.tag}
          </div>
          <h3 className="text-3xl font-black tracking-tight mb-4" style={{ fontFamily: "'Syne',sans-serif", color: "#f0f2f8" }}>
            {project.name}
          </h3>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#6b7494", fontWeight: 300 }}>
            {project.desc}
          </p>
          <div className="flex flex-wrap gap-2 mb-7">
            {project.stack.map(s => (
              <span key={s} className="text-xs px-3 py-1 rounded-lg"
                style={{ background: "rgba(255,255,255,0.04)", color: "#6b7494", border: "1px solid rgba(255,255,255,0.07)" }}>
                {s}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <GlowButton href={project.live} variant={project.id === 2 ? "purple" : "primary"}>
              Live demo ↗
            </GlowButton>
            <GlowButton href={project.github} variant="ghost">
              GitHub
            </GlowButton>
          </div>
        </div>

        {/* Preview */}
        <div className={`relative flex items-center justify-center min-h-[280px] overflow-hidden ${!isEven ? "md:order-1" : ""}`}
          style={{ background: "rgba(255,255,255,0.02)", borderLeft: isEven ? `1px solid rgba(255,255,255,0.06)` : "none", borderRight: !isEven ? `1px solid rgba(255,255,255,0.06)` : "none" }}>

          {/* Decorative glow */}
          <div className="absolute rounded-full pointer-events-none"
            style={{ width: 300, height: 300, background: `radial-gradient(circle, ${project.accent}10 0%, transparent 70%)`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

          <div className="w-[80%] max-w-[300px] rounded-xl overflow-hidden transition-transform duration-500"
            style={{
              background: "#0d1117",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: `0 24px 60px rgba(0,0,0,0.5), 0 0 40px ${project.accent}15`,
              transform: hovered ? "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1.02)" : `perspective(800px) rotateY(${isEven ? "-5deg" : "5deg"}) rotateX(2deg)`,
            }}>
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-3 py-2.5" style={{ background: "#070b10", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28ca41" }} />
              </div>
              <div className="flex-1 ml-2 rounded text-[10px] px-2 h-5 flex items-center overflow-hidden"
                style={{ background: "rgba(255,255,255,0.04)", color: "#4b5563" }}>
                {project.live !== "#" ? project.live.replace("https://", "") : "ai-chat.vercel.app"}
              </div>
            </div>
            {project.previewType === "movie" ? <MoviePreview /> : <ChatPreview />}
          </div>
        </div>
      </div>
    </div>
  );
}