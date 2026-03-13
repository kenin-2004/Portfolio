export default function MoviePreview() {
  const cards = [
    { title: "Dune", rating: "8.4", bg: "linear-gradient(160deg,#2d1b69,#11998e)" },
    { title: "Oppenheimer", rating: "8.9", bg: "linear-gradient(160deg,#4b134f,#c94b4b)" },
    { title: "Interstellar", rating: "9.1", bg: "linear-gradient(160deg,#1e3c72,#2a5298)" },
    { title: "The Batman", rating: "7.8", bg: "linear-gradient(160deg,#373b44,#4286f4)" },
  ];
  return (
    <div className="p-4">
      <div className="rounded-xl p-3 mb-3" style={{ background: "linear-gradient(135deg,#1a1035,#0d1b40)", borderTop: "2px solid #4f8fff" }}>
        <div className="text-xs font-bold text-white mb-0.5" style={{ fontFamily: "'Syne',sans-serif" }}>QuickShow</div>
        <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.45)" }}>Discover movies & TV shows</div>
        <div className="flex gap-1.5 mt-2.5">
          {["Action","Thriller","Sci-Fi","Drama"].map(g => (
            <span key={g} className="text-[8px] px-2 py-0.5 rounded-full"
              style={{ background: "rgba(79,143,255,0.2)", color: "#93c5fd" }}>{g}</span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {cards.map(c => (
          <div key={c.title} className="relative rounded-lg h-16 flex flex-col justify-end p-2 overflow-hidden"
            style={{ background: c.bg }}>
            <div className="absolute top-1.5 right-1.5 text-[7px] font-bold px-1.5 py-0.5 rounded"
              style={{ background: "rgba(250,204,21,0.9)", color: "#000" }}>★ {c.rating}</div>
            <div className="text-[8px] font-semibold text-white">{c.title}</div>
          </div>
        ))}
      </div>
      <div className="text-[9px] mt-2.5" style={{ color: "#4b5563" }}>Trending this week · 1,200+ titles</div>
    </div>
  );
}
