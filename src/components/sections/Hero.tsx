import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Terminal } from "lucide-react";

const phrases = ["ENGINEER.", "DEVELOPER.", "OPERATOR."];

const Teletype = () => {
  const [text, setText] = useState("");
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    if (phaseIdx >= phrases.length) return;
    const target = phrases[phaseIdx];
    if (text.length < target.length) {
      const t = setTimeout(() => setText(target.slice(0, text.length + 1)), 70);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setCompleted((c) => [...c, target]);
        setText("");
        setPhaseIdx((i) => i + 1);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [text, phaseIdx]);

  return (
    <div className="space-y-1">
      {completed.map((c, i) => (
        <div key={i} className="mono text-3xl md:text-5xl font-bold glow-text-amber animate-fade-in">{c}</div>
      ))}
      {phaseIdx < phrases.length && (
        <div className="mono text-3xl md:text-5xl font-bold glow-text-amber cursor-blink">{text}</div>
      )}
    </div>
  );
};

const NodeMap = () => {
  const nodes = [
    { x: 50, y: 20, label: "CORE", size: 8 },
    { x: 20, y: 50, label: "WP", size: 5 },
    { x: 80, y: 45, label: "PHP", size: 5 },
    { x: 30, y: 80, label: "DB", size: 5 },
    { x: 75, y: 80, label: "API", size: 5 },
    { x: 50, y: 55, label: "HUB", size: 6 },
  ];
  const links: [number, number][] = [[0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [0, 1], [0, 2]];

  return (
    <div className="relative aspect-square w-full max-w-md blueprint-frame scan-lines p-4">
      <div className="absolute top-2 left-3 panel-label">// NETWORK.LIVE</div>
      <div className="absolute top-2 right-3 mono text-[10px] text-secondary animate-pulse">● TX/RX</div>
      <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
        <defs>
          <linearGradient id="line-gradient" x1="0" x2="1">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {links.map(([a, b], i) => (
          <g key={i}>
            <line
              x1={nodes[a].x} y1={nodes[a].y}
              x2={nodes[b].x} y2={nodes[b].y}
              stroke="hsl(var(--border))"
              strokeWidth="0.3"
              strokeDasharray="1 1"
            />
            <motion.circle
              r="0.8"
              fill="hsl(var(--primary))"
              initial={{ offsetDistance: "0%" }}
              style={{ filter: "drop-shadow(0 0 3px hsl(var(--primary)))" }}
            >
              <animateMotion
                dur={`${2 + i * 0.4}s`}
                repeatCount="indefinite"
                path={`M${nodes[a].x},${nodes[a].y} L${nodes[b].x},${nodes[b].y}`}
              />
            </motion.circle>
          </g>
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={n.size} fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="0.5" />
            <circle cx={n.x} cy={n.y} r={n.size + 2} fill="none" stroke="hsl(var(--primary))" strokeWidth="0.2" opacity="0.4">
              <animate attributeName="r" values={`${n.size + 2};${n.size + 5};${n.size + 2}`} dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x={n.x} y={n.y + 1} textAnchor="middle" className="mono" fontSize="2.2" fill="hsl(var(--primary))">{n.label}</text>
          </g>
        ))}
      </svg>
      <div className="absolute bottom-2 left-3 right-3 flex justify-between mono text-[9px] text-muted-foreground">
        <span>NODES: 06</span>
        <span>LATENCY: 12ms</span>
        <span className="text-secondary">STATUS: OK</span>
      </div>
    </div>
  );
};

export const Hero = () => {
  const [cmd, setCmd] = useState("");
  const init = () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="overview" className="relative min-h-screen flex items-center pt-16 md:pt-0 px-4 md:px-12">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary shadow-glow-amber" />
            <span className="panel-label">// CHANNEL_01 :: HERO</span>
          </div>

          <Teletype />

          <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
            Building modern WordPress, React, headless CMS, Shopify and no-code commerce experiences with
            <span className="text-foreground font-medium"> performance-first delivery</span>.
          </p>

          <div className="grid grid-cols-3 gap-3 max-w-md">
            {[
              { v: "5Y+", l: "EXP" },
              { v: "25+", l: "PROJECTS" },
              { v: "100", l: "CWV TARGET" },
            ].map((s) => (
              <div key={s.l} className="blueprint-frame p-3">
                <div className="mono text-xl font-bold glow-text-amber">{s.v}</div>
                <div className="panel-label mt-1">{s.l}</div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); init(); }}
            className="blueprint-frame max-w-md flex items-center gap-2 px-3 py-2.5 bg-terminal scan-effect"
          >
            <Terminal className="h-4 w-4 text-secondary" />
            <span className="mono text-sm text-secondary">$</span>
            <input
              value={cmd}
              onChange={(e) => setCmd(e.target.value)}
              placeholder="Initialize Portfolio"
              className="flex-1 bg-transparent border-none outline-none mono text-sm text-foreground placeholder:text-muted-foreground"
            />
            <button type="submit" className="flex items-center gap-1 mono text-[10px] text-primary hover:text-primary-foreground hover:bg-primary px-2 py-1 transition-colors">
              EXEC <ArrowRight className="h-3 w-3" />
            </button>
          </form>
        </div>

        <div className="flex justify-center md:justify-end">
          <NodeMap />
        </div>
      </div>
    </section>
  );
};
