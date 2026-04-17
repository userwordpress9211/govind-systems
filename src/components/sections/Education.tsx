import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  { degree: "MCA", school: "Rajiv Gandhi Proudyogiki Vishwavidyalaya", year: "2019", code: "MCA-2019-RGPV" },
  { degree: "BCA", school: "Vikram University", year: "2017", code: "BCA-2017-VKM" },
];

export const Education = () => {
  return (
    <section id="education" className="relative py-24 px-4 md:px-12">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-12 bg-primary shadow-glow-amber" />
            <span className="panel-label">// SECTION_05 :: CERTIFICATION</span>
          </div>
          <h2 className="mono text-3xl md:text-4xl font-bold glow-text-amber">EDUCATION / STAMPS</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ rotate: 1, scale: 1.02 }}
              className="relative blueprint-frame bg-card/60 p-6 scan-effect"
            >
              {/* Stamp ring */}
              <div className="absolute -top-3 -right-3 h-20 w-20 border-2 border-primary/70 rounded-full flex items-center justify-center bg-background -rotate-12 shadow-glow-amber">
                <div className="h-16 w-16 border border-primary/40 rounded-full flex flex-col items-center justify-center mono text-[8px] text-primary text-center leading-tight">
                  <Award className="h-4 w-4 mb-0.5" />
                  CERTIFIED
                  <span className="text-[7px] text-muted-foreground">{c.year}</span>
                </div>
              </div>

              <div className="panel-label mb-2">// {c.code}</div>
              <div className="mono text-3xl font-bold glow-text-amber">{c.degree}</div>
              <div className="text-sm text-foreground mt-2">{c.school}</div>
              <div className="mt-4 pt-4 border-t border-dashed border-border flex justify-between mono text-[10px]">
                <span className="text-muted-foreground">YEAR.OF.ISSUE</span>
                <span className="text-secondary">{c.year}</span>
              </div>

              {/* perforated edge */}
              <div className="absolute left-0 right-0 bottom-3 flex justify-between px-3">
                {Array.from({ length: 20 }).map((_, k) => (
                  <span key={k} className="h-0.5 w-0.5 rounded-full bg-border" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
