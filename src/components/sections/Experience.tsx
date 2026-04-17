import { motion } from "framer-motion";

const logs = [
  {
    company: "IBN Technologies Ltd",
    period: "MAY 2024 — PRESENT",
    status: "ACTIVE",
    role: "WordPress Developer",
    entries: [
      "[INFO] Developed and maintained enterprise-level WordPress websites",
      "[PERF] Implemented optimization best practices :: improved Core Web Vitals",
      "[TEAM] Collaborated with cross-functional teams (design, QA, backend)",
    ],
  },
  {
    company: "Newtechfusion Cyber Tech Pvt Ltd",
    period: "JAN 2021 — FEB 2024",
    status: "COMPLETED",
    role: "WordPress Developer",
    entries: [
      "[BUILD] Shipped 15+ WordPress websites with custom features",
      "[DEV] Engineered custom themes and plugins from scratch",
      "[OPT] Improved site performance and user experience metrics",
      "[MENTOR] Trained and onboarded junior developers",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="relative py-24 px-4 md:px-12 bg-terminal/40">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-12 bg-primary shadow-glow-amber" />
            <span className="panel-label">// SECTION_04 :: SYSTEM.LOGS</span>
          </div>
          <h2 className="mono text-3xl md:text-4xl font-bold glow-text-amber">EXPERIENCE / LOGS</h2>
        </div>

        <div className="space-y-6">
          {logs.map((log, idx) => (
            <motion.div
              key={log.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="blueprint-frame bg-terminal scan-lines"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2 border-b border-border bg-muted/30">
                <div className="flex items-center gap-3">
                  <span className={`h-2 w-2 rounded-full ${log.status === "ACTIVE" ? "bg-secondary shadow-glow-green animate-pulse" : "bg-muted-foreground"}`} />
                  <span className="mono text-xs text-foreground font-bold">{log.company}</span>
                </div>
                <div className="flex items-center gap-3 mono text-[10px]">
                  <span className="text-muted-foreground">{log.period}</span>
                  <span className={log.status === "ACTIVE" ? "text-secondary" : "text-muted-foreground"}>● {log.status}</span>
                </div>
              </div>

              <div className="px-4 py-4 font-mono text-xs space-y-1.5">
                <div className="text-accent mb-2">$ cat ./role.txt</div>
                <div className="text-foreground pl-4">{log.role}</div>
                <div className="text-accent mt-3 mb-2">$ tail -f ./activity.log</div>
                {log.entries.map((e, i) => {
                  const tag = e.match(/\[(\w+)\]/)?.[1];
                  const tagColor =
                    tag === "INFO" ? "text-accent" :
                    tag === "PERF" ? "text-primary" :
                    tag === "BUILD" ? "text-secondary" :
                    tag === "OPT" ? "text-primary" :
                    tag === "DEV" ? "text-accent" :
                    "text-muted-foreground";
                  const rest = e.replace(/^\[\w+\]\s*/, "");
                  return (
                    <div key={i} className="pl-4 flex gap-2">
                      <span className="text-muted-foreground shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span className={`${tagColor} shrink-0`}>[{tag}]</span>
                      <span className="text-foreground/90">{rest}</span>
                    </div>
                  );
                })}
                <div className="text-secondary pt-2">[exit 0] :: process completed</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
