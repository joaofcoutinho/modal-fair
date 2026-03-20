"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  className?: string;
}

export default function Reveal({ children, delay = 0, direction = "up", className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const initial: Record<string, string> = {
    up:    "opacity:0; transform:translateY(32px)",
    down:  "opacity:0; transform:translateY(-32px)",
    left:  "opacity:0; transform:translateX(32px)",
    right: "opacity:0; transform:translateX(-32px)",
    scale: "opacity:0; transform:scale(0.88)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        ...(visible
          ? { opacity: 1, transform: "none" }
          : Object.fromEntries(initial[direction].split(";").map((s) => s.trim().split(":").map((v) => v.trim()))) as React.CSSProperties
        ),
      }}
    >
      {children}
    </div>
  );
}
