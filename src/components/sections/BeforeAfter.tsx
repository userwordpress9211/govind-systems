import { motion } from "framer-motion";

const rows = [
  { traditional: "Paper records", qcflow: "Digital records" },
  { traditional: "Manual workflows", qcflow: "Automated workflows" },
  { traditional: "Disconnected systems", qcflow: "Unified platform" },
  { traditional: "Limited visibility", qcflow: "Full traceability" },
  { traditional: "Manual approvals", qcflow: "eSignatures" },
  { traditional: "Audit stress", qcflow: "Audit support" },
  { traditional: "Local access", qcflow: "Cloud access" },
  { traditional: "Difficult integration", qcflow: "Integration via API" },
  { traditional: "Static reporting", qcflow: "Live dashboards" },
  { traditional: "Hard to scale", qcflow: "Enterprise scalability" },
];

export const BeforeAfter = () => {
  return (
    <section className="relative py-20 px-4 md:px-12 bg-terminal/40">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto overflow-hidden border border-[#3ca9e8] bg-white text-black">
          <table className="w-full border-collapse text-center font-sans text-lg md:text-xl">
            <thead>
              <tr className="bg-[#156780] text-white">
                <th className="w-1/2 border-r border-white/70 px-3 py-1 font-serif text-xl md:text-2xl font-semibold">
                  Traditional QMS
                </th>
                <th className="w-1/2 px-3 py-1 font-serif text-xl md:text-2xl font-semibold underline decoration-wavy decoration-white/80 underline-offset-2">
                  BizPortals QCFlow
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <motion.tr
                  key={row.traditional}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="border-t border-[#3ca9e8]"
                >
                  <td className="border-r border-[#3ca9e8] px-3 py-1 leading-tight">{row.traditional}</td>
                  <td className="px-3 py-1 font-bold leading-tight">{row.qcflow}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
