import { useState,useEffect } from "react";
import useInView from "../hooks/useInView";


export default function StatCounter({ value, label, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  const target = parseInt(value);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 40);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-black tracking-tight mb-1" style={{ fontFamily: "'Syne',sans-serif", color: "#fcfafa" }}>
        {count}{suffix}
      </div>
      <div className="text-xs" style={{ color: "#cfcccc" }}>{label}</div>
    </div>
  );
}