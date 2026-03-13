
import { useState,useEffect } from "react";
import useInView from "../hooks/useInView";



export default function SkillCard({ skill, index }) {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView) setTimeout(() => setAnimated(true), index * 80);
  }, [inView, index]);

  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)",
      transition: `opacity 0.5s ease ${index * 0.06}s, transform 0.5s ease ${index * 0.06}s`,
    }}>
      <div
        className="p-5 rounded-2xl transition-all duration-300 cursor-default"
        style={{
          background: hovered ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.02)",
          border: `1px solid ${hovered ? skill.color + "30" : "rgba(255,255,255,0.06)"}`,
          boxShadow: hovered ? `0 0 30px ${skill.color}10` : "none",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-base"
            style={{ background: skill.color + "15", border: `1px solid ${skill.color}25` }}>
            {skill.icon}
          </div>
          <span className="text-xs font-semibold tabular-nums" style={{ color: skill.color }}>
            {animated ? skill.level : 0}%
          </span>
        </div>
        <div className="text-sm font-bold mb-1" style={{ fontFamily: "'Syne',sans-serif", color: "#f0f2f8" }}>
          {skill.name}
        </div>
        <div className="text-xs mb-3" style={{ color: "#cfcccc" }}>{skill.desc}</div>
        <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
          <div className="h-full rounded-full transition-all duration-1000"
            style={{
              width: animated ? `${skill.level}%` : "0%",
              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
              transitionDelay: `${index * 0.06}s`,
            }} />
        </div>
      </div>
    </div>
  );
}