export default function Footer() {
  return (
    <footer className="relative z-10 px-4 md:px-6 py-8 flex flex-col md:flex-row gap-4 items-center justify-between text-xs"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "#4b5563" }}>
      <span>© 2026 Frontend Developer · Ahmedabad, India</span>
      <span>Built with React · Tailwind CSS · Deployed on Vercel</span>
    </footer>
  );
}
