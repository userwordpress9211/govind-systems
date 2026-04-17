import { Mail, Phone, MapPin, Linkedin, Terminal, ArrowRight, AlertTriangle } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [cmd, setCmd] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "mailto:govindkewat120@gmail.com";
  };

  return (
    <section id="contact" className="relative py-24 px-4 md:px-12 bg-terminal/40">
      <div className="container mx-auto max-w-5xl">
        {/* Alert banner */}
        <div className="blueprint-frame bg-primary/5 border-primary/40 p-3 mb-8 flex items-center gap-3">
          <AlertTriangle className="h-4 w-4 text-primary animate-flicker shrink-0" />
          <span className="mono text-xs text-primary uppercase tracking-wider">SYSTEM ALERT // OPEN.CHANNEL.REQUESTED</span>
          <span className="ml-auto mono text-[10px] text-muted-foreground hidden md:block">PRIORITY: HIGH</span>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-12 bg-primary shadow-glow-amber" />
            <span className="panel-label">// SECTION_06 :: TRANSMISSION</span>
          </div>
          <h2 className="mono text-3xl md:text-5xl font-bold glow-text-amber">INITIATE / CONTACT</h2>
          <p className="text-muted-foreground mt-3 max-w-xl">Open a channel for engineering work, collaborations, or WordPress system audits.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Terminal */}
          <div className="blueprint-frame bg-terminal scan-lines p-5">
            <div className="panel-label mb-3">// CONTACT.TERMINAL</div>
            <div className="font-mono text-xs space-y-2 mb-5">
              <div><span className="text-secondary">user@govind.sys</span><span className="text-muted-foreground">:</span><span className="text-accent">~</span><span className="text-muted-foreground">$</span> whoami</div>
              <div className="text-foreground pl-4">Govind Kewat — WordPress Engineer</div>
              <div><span className="text-secondary">user@govind.sys</span><span className="text-muted-foreground">:</span><span className="text-accent">~</span><span className="text-muted-foreground">$</span> ping --status</div>
              <div className="text-secondary pl-4">● ONLINE :: accepting new transmissions</div>
            </div>

            <form onSubmit={submit} className="flex items-center gap-2 border border-primary/50 bg-background px-3 py-2.5 scan-effect">
              <Terminal className="h-4 w-4 text-primary" />
              <span className="mono text-sm text-primary">$</span>
              <input
                value={cmd}
                onChange={(e) => setCmd(e.target.value)}
                placeholder="Initialize Contact"
                className="flex-1 bg-transparent border-none outline-none mono text-sm text-foreground placeholder:text-muted-foreground"
              />
              <button type="submit" className="flex items-center gap-1 mono text-[10px] bg-primary text-primary-foreground px-3 py-1.5 hover:shadow-glow-amber transition-shadow">
                EXEC <ArrowRight className="h-3 w-3" />
              </button>
            </form>
            <div className="mt-3 mono text-[10px] text-muted-foreground">↳ executes mailto://govindkewat120@gmail.com</div>
          </div>

          {/* Channels */}
          <div className="blueprint-frame bg-card/60 p-5">
            <div className="panel-label mb-4">// OPEN.CHANNELS</div>
            <ul className="space-y-3">
              {[
                { Icon: Mail, label: "EMAIL", value: "govindkewat120@gmail.com", href: "mailto:govindkewat120@gmail.com" },
                { Icon: Phone, label: "VOICE", value: "+91 8370044120", href: "tel:+918370044120" },
                { Icon: Linkedin, label: "LINKEDIN", value: "linkedin.com/in/govind-kewat", href: "https://linkedin.com/in/govind-kewat" },
                { Icon: MapPin, label: "GEO", value: "Indore, Madhya Pradesh, IN", href: null as string | null },
              ].map(({ Icon, label, value, href }) => {
                const Tag = href ? "a" : "div";
                return (
                  <li key={label}>
                    <Tag
                      {...(href ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {})}
                      className="group flex items-center gap-3 px-3 py-2.5 border border-border hover:border-primary scan-effect transition-colors"
                    >
                      <Icon className="h-4 w-4 text-primary shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="panel-label">{label}</div>
                        <div className="mono text-xs text-foreground truncate group-hover:glow-text-amber transition-all">{value}</div>
                      </div>
                      {href && <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />}
                    </Tag>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <footer className="mt-12 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-3 mono text-[10px] text-muted-foreground">
          <div>© {new Date().getFullYear()} GOVIND.SYS // ALL SIGNALS RESERVED</div>
          <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" /> SYSTEM.STATUS :: NOMINAL</div>
        </footer>
      </div>
    </section>
  );
};
