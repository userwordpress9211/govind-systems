import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest('a, button, [data-cursor="hover"]'));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] hidden md:block transition-transform duration-100"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      >
        <div className={`relative -translate-x-1/2 -translate-y-1/2 ${hovering ? "scale-150" : "scale-100"} transition-transform duration-200`}>
          {/* crosshair */}
          <div className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 bg-primary" />
          <div className="absolute left-1/2 top-1/2 h-6 w-px -translate-x-1/2 -translate-y-1/2 bg-primary" />
          <div className={`h-4 w-4 -translate-x-0 -translate-y-0 rounded-full border ${hovering ? "border-primary bg-primary/20" : "border-primary/60"}`} />
        </div>
      </div>
      <div
        className="pointer-events-none fixed z-[9998] hidden md:block"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      >
        <div className="h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-glow-amber" />
      </div>
    </>
  );
};
