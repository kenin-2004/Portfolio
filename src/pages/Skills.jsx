import FadeIn from "../components/FadeIn";
import SectionTag from "../components/SectionTag";
import SkillCard from "../components/SkillCard";

const SERVICES = [
  "Pixel-perfect UI from Figma designs",
  "Mobile-responsive across all devices",
  "Fast load times & Core Web Vitals",
  "Clean, well-documented GitHub code",
  "Clear communication & daily updates",
  "Deployed & live on Vercel",
];
const SKILLS = [
  { name: "React.js", level: 95, color: "#61dafb", icon: "⚛️", desc: "Hooks, Context, Router" },
  { name: "Next.js", level: 85, color: "#ffffff", icon: "▲", desc: "SSR, SSG, API routes" },
  { name: "TypeScript", level: 88, color: "#3178c6", icon: "TS", desc: "Types, generics, utility" },
  { name: "Tailwind CSS", level: 94, color: "#38bdf8", icon: "🌊", desc: "Utility-first, responsive" },
  { name: "JavaScript", level: 96, color: "#f7df1e", icon: "JS", desc: "ES6+, async/await, DOM" },
  { name: "REST APIs", level: 85, color: "#4f8fff", icon: "🔗", desc: "Fetch, Axios, integration" },
  { name: "AI APIs", level: 80, color: "#a78bfa", icon: "🤖", desc: "OpenAI / Claude APIs" },
  { name: "Figma → Code", level: 88, color: "#f97316", icon: "🎨", desc: "Pixel-perfect conversion" },
];
export default function Skills() {
  return (
    <section id="skills" className="py-28 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <SectionTag>Skills</SectionTag>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-6" style={{ fontFamily: "'Syne',sans-serif", color: "#f0f2f8" }}>
              My tech stack
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#cfcccc", fontWeight: 300 }}>
              I've worked with these technologies every day for years. I don't just know the syntax — I know the patterns, the pitfalls, and the best practices.
            </p>
            <div className="space-y-4">
              {SERVICES.map(s => (
                <div key={s} className="flex items-center gap-3 text-sm" style={{ color: "#cfcccc" }}>
                  <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 text-xs"
                    style={{ background: "rgba(62,207,142,0.12)", border: "1px solid rgba(62,207,142,0.25)", color: "#3ecf8e" }}>✓</div>
                  {s}
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-3">
            {SKILLS.map((s, i) => <SkillCard key={s.name} skill={s} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
