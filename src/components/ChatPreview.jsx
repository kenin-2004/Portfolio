 export default function ChatPreview() {
  const messages = [
    { role: "ai", text: "Hello! How can I help you today?" },
    { role: "user", text: "Explain React hooks in simple terms." },
    { role: "ai", text: "React hooks let you use state and other features in functional components without writing a class. The most common are useState and useEffect..." },
  ];
  return (
    <div className="p-4">
      <div className="flex items-center gap-2 pb-2.5 mb-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
          style={{ background: "linear-gradient(135deg,#4f8fff,#7c3aed)" }}>AI</div>
        <span className="text-xs font-semibold" style={{ color: "#f0f2f8" }}>AI Assistant</span>
        <div className="w-1.5 h-1.5 rounded-full ml-0.5" style={{ background: "#3ecf8e" }} />
      </div>
      <div className="flex flex-col gap-2">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "items-end gap-1.5"}`}>
            {m.role === "ai" && <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ background: "linear-gradient(135deg,#4f8fff,#7c3aed)" }} />}
            <div className="text-[9px] leading-relaxed rounded-xl px-2.5 py-1.5 max-w-[78%]"
              style={m.role === "user"
                ? { background: "#4f8fff", color: "#fff", borderBottomRightRadius: 3 }
                : { background: "rgba(255,255,255,0.06)", color: "#8b93b8", borderBottomLeftRadius: 3, border: "1px solid rgba(255,255,255,0.06)" }}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-xl"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
        <span className="text-[9px] flex-1" style={{ color: "#4b5563" }}>Type a message...</span>
        <div className="w-5 h-5 rounded-md flex items-center justify-center text-[9px] text-white"
          style={{ background: "#4f8fff" }}>↑</div>
      </div>
    </div>
  );
}