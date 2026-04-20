export default function GlowButton({ href, children, variant = "primary", onClick }) {
  const base = "inline-flex items-center gap-2 px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer";
  const styles = {
    primary: { background: "#4f8fff", color: "#fff" },
    ghost: { background: "transparent", color: "#e2e8f0", border: "1px solid rgba(255,255,255,0.12)" },
    purple: { background: "#7c3aed", color: "#fff" },
  };
  const Tag = href && href !== "#" ? "a" : "button";
  return (
    <Tag
      href={href}
      target={href && href !== "#" ? "_blank" : undefined}
      rel="noreferrer"
      onClick={onClick}
      className={base}
      style={styles[variant]}
      onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      {children}
    </Tag>
  );
}