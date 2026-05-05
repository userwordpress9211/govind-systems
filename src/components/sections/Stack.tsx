import { motion } from "framer-motion";

type Node = { id: string; x: number; y: number; group: string; size?: number };

const nodes: Node[] = [
  { id: "WordPress", x: 50, y: 50, group: "core", size: 12 },
  { id: "PHP", x: 22, y: 30, group: "core", size: 9 },
  { id: "Shopify", x: 80, y: 40, group: "core", size: 8 },
  { id: "Elementor", x: 78, y: 30, group: "core", size: 8 },
  { id: "React", x: 65, y: 55, group: "fe", size: 9 },
  { id: "Headless", x: 50, y: 15, group: "tool", size: 7 },
  { id: "No-Code", x: 30, y: 18, group: "tool", size: 7 },
  { id: "HTML5", x: 12, y: 60, group: "fe", size: 7 },
  { id: "CSS3", x: 22, y: 78, group: "fe", size: 7 },
  { id: "JavaScript", x: 45, y: 88, group: "fe", size: 8 },
  { id: "jQuery", x: 65, y: 85, group: "fe", size: 7 },
  { id: "MySQL", x: 88, y: 60, group: "be", size: 8 },
  { id: "WP-CLI", x: 80, y: 78, group: "tool", size: 6 },
  { id: "Git", x: 12, y: 38, group: "tool", size: 6 },
  { id: "cPanel", x: 90, y: 18, group: "tool", size: 6 },
  { id: "CWV", x: 35, y: 14, group: "perf", size: 7 },
  { id: "SEO", x: 60, y: 14, group: "perf", size: 7 },
];

const links: [string, string][] = [
  ["WordPress", "PHP"], ["WordPress", "Elementor"], ["WordPress", "MySQL"],
  ["WordPress", "React"], ["WordPress", "Shopify"], ["WordPress", "Headless"],
  ["React", "Headless"], ["React", "JavaScript"], ["Shopify", "PHP"],
  ["Shopify", "Headless"], ["HTML5", "CSS3"], ["JavaScript", "jQuery"],
  ["WordPress", "CWV"], ["WordPress", "SEO"], ["WordPress", "Git"],
  ["PHP", "MySQL"], ["WordPress", "WP-CLI"], ["WordPress", "cPanel"],
  ["No-Code", "Shopify"], ["No-Code", "Headless"],
];

const groupColor: Record<string, string> = {
  core: "hsl(var(--primary))",
  fe: "hsl(var(--accent))",
  be: "hsl(var(--secondary))",
  tool: "hsl(var(--muted-foreground))",
  perf: "hsl(var(--primary))",
};

export const Stack = () => {
  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <section id="stack" className="relative py-24 px-4 md:px-12">
      <div className="container mx-auto">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-12 bg-primary shadow-glow-amber" />
            <span className="panel-label">// SECTION_03 :: NETWORK.MAP</span>
          </div>
          <h2 className="mono text-3xl md:text-4xl font-bold glow-text-amber">TECH STACK / SIGNAL GRAPH</h2>
        </div>

        <div className="blueprint-frame scan-lines bg-card/40 p-4 md:p-6 relative">
          <div className="flex justify-between mb-3 mono text-[10px] text-muted-foreground">
            <span>NODE.MAP // FREQ 2.4GHz</span>
            <span className="text-secondary animate-pulse">● SIGNAL.ACTIVE</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_240px] gap-6">
            <div className="aspect-[4/3] w-full">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <pattern id="stack-grid" width="5" height="5" patternUnits="userSpaceOnUse">
                    <path d="M 5 0 L 0 0 0 5" fill="none" stroke="hsl(var(--border))" strokeWidth="0.1" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#stack-grid)" />

                {links.map(([a, b], i) => (
                  <g key={i}>
                    <line
                      x1={nodeMap[a].x} y1={nodeMap[a].y}
                      x2={nodeMap[b].x} y2={nodeMap[b].y}
                      stroke="hsl(var(--border))" strokeWidth="0.25"
                    />
                    <circle r="0.6" fill="hsl(var(--primary))" style={{ filter: "drop-shadow(0 0 2px hsl(var(--primary)))" }}>
                      <animateMotion dur={`${2 + (i % 4)}s`} repeatCount="indefinite"
                        path={`M${nodeMap[a].x},${nodeMap[a].y} L${nodeMap[b].x},${nodeMap[b].y}`} />
                    </circle>
                  </g>
                ))}

                {nodes.map((n) => (
                  <g key={n.id}>
                    <circle cx={n.x} cy={n.y} r={(n.size ?? 6) / 2 + 2} fill="none" stroke={groupColor[n.group]} strokeWidth="0.15" opacity="0.6">
                      <animate attributeName="r" values={`${(n.size ?? 6) / 2 + 2};${(n.size ?? 6) / 2 + 4};${(n.size ?? 6) / 2 + 2}`} dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={n.x} cy={n.y} r={(n.size ?? 6) / 2} fill="hsl(var(--background))" stroke={groupColor[n.group]} strokeWidth="0.4" />
                    <text x={n.x} y={n.y + (n.size ?? 6) / 2 + 3} textAnchor="middle" fontSize="2.2" fill="hsl(var(--foreground))" className="mono font-medium">{n.id}</text>
                  </g>
                ))}
              </svg>
            </div>

            <div className="space-y-3 mono text-xs">
              <div className="panel-label">// LEGEND</div>
              {[
                { c: "hsl(var(--primary))", l: "CORE — WordPress, PHP, Shopify" },
                { c: "hsl(var(--accent))", l: "FRONTEND — React, HTML, CSS, JS" },
                { c: "hsl(var(--secondary))", l: "DATA — MySQL" },
                { c: "hsl(var(--muted-foreground))", l: "TOOLS — Headless CMS, No-Code, Git" },
              ].map((it) => (
                <div key={it.l} className="flex items-start gap-2">
                  <span className="h-2 w-2 mt-1.5 rounded-full shrink-0" style={{ background: it.c, boxShadow: `0 0 8px ${it.c}` }} />
                  <span className="text-muted-foreground">{it.l}</span>
                </div>
              ))}

              <div className="border-t border-border pt-4 mt-4 space-y-2">
                <div className="panel-label mb-2">// PROTOCOLS</div>
                {["Core Web Vitals", "SEO Best Practices", "Cross-browser QA", "REST API", "Custom Hooks"].map((t, i) => (
                  <motion.div
                    key={t}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2 text-foreground"
                  >
                    <span className="text-secondary">▸</span>{t}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
