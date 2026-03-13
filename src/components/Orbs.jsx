export default function Orbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute rounded-full" style={{ width: 700, height: 700, background: "radial-gradient(circle, rgba(79,143,255,0.07) 0%, transparent 70%)", top: -200, left: -150 }} />
      <div className="absolute rounded-full" style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)", bottom: "5%", right: -100 }} />
      <div className="absolute rounded-full" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(62,207,142,0.05) 0%, transparent 70%)", top: "40%", left: "35%" }} />
    </div>
  );
}
