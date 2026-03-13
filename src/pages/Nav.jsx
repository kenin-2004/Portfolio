import { useState,useEffect } from "react";


const NAV_LINKS = ["Projects", "Skills", "About", "Contact"];
export default function Nav({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(7,9,14,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-bold text-2xl tracking-tight" style={{ fontFamily: "'Syne', sans-serif", color: "#f0f2f8" }}>
          kenin<span style={{ color: "#4f8fff" }}>.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {NAV_LINKS.map(l => (
            <li key={l}>
              <button onClick={() => scrollTo(l)}
                className="text-sm transition-colors duration-200"
                style={{ color: active === l.toLowerCase() ? "#f0f2f8" : "#cfcccc" }}
                onMouseEnter={e => e.currentTarget.style.color = "#f0f2f8"}
                onMouseLeave={e => e.currentTarget.style.color = active === l.toLowerCase() ? "#f0f2f8" : "#6b7494"}>
                {l}
              </button>
            </li>
          ))}
        </ul>

        <button onClick={() => scrollTo("Contact")}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200"
          style={{ background: "#4f8fff" }}
          onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = ""; }}>
          Hire me ↗
        </button>

        {/* Mobile */}
        <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(o => !o)}>
          <div className="w-5 h-0.5 bg-white mb-1 transition-all" style={{ transform: menuOpen ? "rotate(45deg) translateY(6px)" : "" }} />
          <div className="w-5 h-0.5 bg-white mb-1 transition-all" style={{ opacity: menuOpen ? 0 : 1 }} />
          <div className="w-5 h-0.5 bg-white transition-all" style={{ transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "" }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2" style={{ background: "rgba(7,9,14,0.95)", backdropFilter: "blur(24px)" }}>
          {NAV_LINKS.map(l => (
            <button key={l} onClick={() => scrollTo(l)}
              className="block w-full text-left py-3 text-sm border-b"
              style={{ color: "#8b93b8", borderColor: "rgba(255,255,255,0.06)" }}>
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
