export default function GridLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0"
      style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }} />
  );
}
