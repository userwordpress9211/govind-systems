import { ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  { id: "M-01", name: "Nektar.ai", url: "https://nektar.ai/", domain: "SaaS", stack: ["WordPress", "PHP", "REST API", "Custom Theme"], impact: "Custom integrations + performance optimization for SaaS marketing site." },
  { id: "M-02", name: "Hinckley Club", url: "https://hinckleyclub.com/", domain: "Lifestyle", stack: ["WordPress", "Elementor", "CSS3"], impact: "Premium UI with responsive layouts and custom components." },
  { id: "M-03", name: "Tunestock", url: "https://tunestock.com/", domain: "Platform", stack: ["WordPress", "PHP", "MySQL", "JS"], impact: "Dynamic platform with scalable WordPress architecture." },
  { id: "M-04", name: "TJ Gymnastics Boston", url: "https://www.tjgymnasticsboston.co.uk/", domain: "Business", stack: ["WordPress", "jQuery", "CSS3"], impact: "Cross-browser business site with responsive design." },
  { id: "M-05", name: "World Travel Clinic", url: "https://worldtravelclinic.co.uk/", domain: "Healthcare", stack: ["WordPress", "Custom Plugin", "PHP"], impact: "Usability-focused healthcare site with structured content." },
  { id: "M-06", name: "72 Hour Golf", url: "https://72hourgolf.com/", domain: "Sports", stack: ["WordPress", "Elementor", "JS"], impact: "Clean UI with optimized Core Web Vitals." },
  { id: "M-07", name: "Gupta Tech Web", url: "https://guptatechweb.com/", domain: "Business", stack: ["WordPress", "SEO", "PHP"], impact: "SEO-friendly architecture and structured business site." },
  { id: "M-08", name: "IBN Tech", url: "https://ibntech.com/", domain: "Enterprise", stack: ["WordPress", "PHP", "MySQL"], impact: "Enterprise-grade contributions and ongoing maintenance." },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-4 md:px-12">
      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-12 bg-primary shadow-glow-amber" />
              <span className="panel-label">// SECTION_02 :: ASSEMBLY.LINE</span>
            </div>
            <h2 className="mono text-3xl md:text-4xl font-bold glow-text-amber">PROJECTS / SYSTEM MODULES</h2>
            <p className="text-muted-foreground mt-2 max-w-xl">Modules deployed across SaaS, healthcare, fitness and business domains.</p>
          </div>
          <div className="mono text-xs text-muted-foreground">
            <span className="text-secondary">●</span> {projects.length} MODULES :: HORIZONTAL FEED
          </div>
        </div>

        {/* Conveyor strip */}
        <div className="relative">
          <div className="absolute -top-4 left-0 right-0 h-px data-stream" />
          <div className="absolute -bottom-4 left-0 right-0 h-px data-stream" />

          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 md:-mx-12 md:px-12">
            {projects.map((p, idx) => (
              <motion.a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noreferrer noopener"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="snap-start shrink-0 w-[300px] md:w-[340px] blueprint-frame bg-card/60 p-5 scan-effect hover:border-primary transition-colors group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="mono text-[10px] text-primary tracking-widest">{p.id}</span>
                  <span className="mono text-[9px] px-1.5 py-0.5 border border-border text-muted-foreground uppercase">{p.domain}</span>
                </div>

                {/* Module schematic */}
                <div className="relative h-24 mb-4 border border-border bg-terminal flex items-center justify-center overflow-hidden">
                  <svg viewBox="0 0 200 80" className="w-full h-full opacity-70">
                    <defs>
                      <pattern id={`grid-${idx}`} width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="hsl(var(--border))" strokeWidth="0.3" />
                      </pattern>
                    </defs>
                    <rect width="200" height="80" fill={`url(#grid-${idx})`} />
                    <rect x="60" y="20" width="80" height="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" />
                    <circle cx="100" cy="40" r="6" fill="hsl(var(--primary))" opacity="0.8" />
                    <circle cx="100" cy="40" r="10" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5">
                      <animate attributeName="r" values="10;18;10" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="1;0;1" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <line x1="0" y1="40" x2="60" y2="40" stroke="hsl(var(--accent))" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="140" y1="40" x2="200" y2="40" stroke="hsl(var(--accent))" strokeWidth="0.5" strokeDasharray="2 2" />
                  </svg>
                  <div className="absolute top-1 left-2 mono text-[8px] text-muted-foreground">SCHEMATIC.{p.id}</div>
                </div>

                <h3 className="mono text-lg font-bold text-foreground group-hover:glow-text-amber transition-all">{p.name}</h3>
                <div className="mono text-[10px] text-accent break-all mt-1 flex items-center gap-1">
                  <ExternalLink className="h-2.5 w-2.5 shrink-0" />
                  {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </div>

                <p className="text-xs text-muted-foreground mt-3 leading-relaxed h-12">{p.impact}</p>

                <div className="mt-4 flex flex-wrap gap-1">
                  {p.stack.map((s) => (
                    <span key={s} className="mono text-[9px] px-1.5 py-0.5 bg-muted/60 border border-border text-foreground">{s}</span>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-border flex justify-between items-center mono text-[10px]">
                  <span className="text-secondary">● DEPLOYED</span>
                  <span className="text-primary flex items-center gap-1 group-hover:gap-2 transition-all">VIEW <ArrowRight className="h-3 w-3" /></span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
