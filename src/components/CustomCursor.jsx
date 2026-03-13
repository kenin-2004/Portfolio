import useMousePosition from "../hooks/useMousePosition";
import { useState,useEffect } from "react";

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    const d = () => { setClicked(true); setTimeout(() => setClicked(false), 200); };
    window.addEventListener("mousedown", d);
    return () => window.removeEventListener("mousedown", d);
  }, []);
  return (
    <>
      <div className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: x - 4, top: y - 4, width: 8, height: 8,
          background: "#4f8fff",
          transform: clicked ? "scale(2)" : "scale(1)",
          transition: "transform 0.15s",
        }} />
      <div className="fixed pointer-events-none z-[9998] rounded-full border"
        style={{
          left: x - 20, top: y - 20, width: 40, height: 40,
          borderColor: "rgba(79,143,255,0.35)",
          transition: "left 0.12s, top 0.12s",
        }} />
    </>
  );
}