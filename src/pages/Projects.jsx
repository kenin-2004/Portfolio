import FadeIn from "../components/FadeIn";
import SectionTag from "../components/SectionTag";
import ProjectCard from "../components/ProjectCard";



const PROJECTS = [
  {
    id: 1,
    tag: "🎬 Movie Discovery",
    name: "QuickShow",
    desc: "A full-featured movie discovery platform with real-time search, trending titles, genre filters, and cinematic UI — powered by TMDB API. Built for film lovers who want speed and beauty.",
    stack: ["React", "Tailwind CSS", "nodejs","mongodb", "TMDB API", "Vercel"],
    live: "https://quickshow-seven-lovat.vercel.app/",
    github: "https://github.com/kenin-2004/QUICKSHOW",
    accent: "#4f8fff",
    accentBg: "rgba(79,143,255,0.08)",
    previewType: "movie",
  },
  {
    id: 2,
    tag: "🤖 AI Powered",
    name: "AI Chat App",
    desc: "A conversational AI assistant with real-time streaming responses, persistent chat history, code highlighting, and a sleek modern interface. Built with cutting-edge AI API integration.",
    stack: ["React","Tailwind CSS", "JavaScript", "gemini API",  "Vercel"],
    live: "https://hyperion-eosin.vercel.app/",
    github: "https://github.com/kenin-2004/Hyperion",
    accent: "#a78bfa",
    accentBg: "rgba(167,139,250,0.08)",
    previewType: "chat",
  },
];
export default function Projects() {
  return (
    <section id="projects" className="py-28 relative z-10" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="mb-16">
          <SectionTag>Projects</SectionTag>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-4" style={{ fontFamily: "'Syne',sans-serif", color: "#f0f2f8" }}>
            Things I've built
          </h2>
          <p className="text-base max-w-xl" style={{ color: "#cfcccc", fontWeight: 300 }}>
            Real-world apps deployed and live — built with modern frontend technologies.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-8">
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}