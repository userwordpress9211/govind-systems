import { motion } from "framer-motion";

const rows = [
  { metric: "PAGE LOAD", before: "5.8s", after: "1.2s", beforeBar: 95, afterBar: 20 },
  { metric: "ARCHITECTURE", before: "Static / Hardcoded", after: "Dynamic / Modular", beforeBar: 30, afterBar: 95 },
  { metric: "USER EXPERIENCE", before: "Cluttered, Confusing", after: "Clean, Intuitive", beforeBar: 35, afterBar: 92 },
  { metric: "CORE WEB VITALS", before: "Failing", after: "All Green", beforeBar: 25, afterBar: 98 },
  { metric: "MAINTAINABILITY", before: "Spaghetti Code", after: "Hooks + Filters", beforeBar: 28, afterBar: 90 },
];

export const BeforeAfter = () => {
  return (
    <section className="relative py-24 px-4 md:px-12 bg-terminal/40">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="panel-label">// DIFF.LOG :: SYSTEM_DELTA</span>
          <h2 className="mono text-3xl md:text-5xl font-bold mt-3">
            <span className="text-destructive">BEFORE</span>
            <span className="text-muted-foreground mx-3">/</span>
            <span className="glow-text-amber">AFTER</span>
            <span className="text-muted-foreground"> GOVIND</span>
          </h2>
        </div>

        <div className="blueprint-frame bg-card/40 p-4 md:p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-12 gap-2 mb-4 panel-label">
            <div className="col-span-3">METRIC</div>
            <div className="col-span-4 text-destructive">// BEFORE</div>
            <div className="col-span-1 text-center">→</div>
            <div className="col-span-4 text-secondary">// AFTER</div>
          </div>

          <div className="space-y-4">
            {rows.map((r, i) => (
              <motion.div
                key={r.metric}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="grid grid-cols-12 gap-2 items-center border-t border-border pt-4"
              >
                <div className="col-span-12 md:col-span-3 mono text-xs text-foreground">{r.metric}</div>

                <div className="col-span-12 md:col-span-4">
                  <div className="mono text-xs text-destructive mb-1">{r.before}</div>
                  <div className="h-1.5 bg-muted overflow-hidden">
                    <motion.div
                      className="h-full bg-destructive/70"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${r.beforeBar}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.08 }}
                    />
                  </div>
                </div>

                <div className="col-span-12 md:col-span-1 text-center text-primary mono text-lg hidden md:block">→</div>

                <div className="col-span-12 md:col-span-4">
                  <div className="mono text-xs text-secondary mb-1">{r.after}</div>
                  <div className="h-1.5 bg-muted overflow-hidden">
                    <motion.div
                      className="h-full bg-secondary shadow-glow-green"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${r.afterBar}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.08 + 0.3 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
