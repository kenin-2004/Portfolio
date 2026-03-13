import { useState, useEffect } from "react";
//components
import CustomCursor from "./components/CustomCursor";
import Noise from "./components/Noise";
import Orbs from "./components/Orbs";
import GridLines from "./components/GridLines";
import Nav from "./pages/Nav";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "projects", "skills", "about", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        background: "#07090e",
        fontFamily: "'Cabinet Grotesk', 'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        * { cursor: none !important; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #07090e; }
        ::-webkit-scrollbar-thumb { background: rgba(79,143,255,0.3); border-radius: 2px; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.3)} }
        .animate-pulse { animation: pulse 2s infinite; }
      `}</style>

      <CustomCursor />
      <Noise />
      <GridLines />
      <Orbs />

      <Nav active={activeSection} />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
