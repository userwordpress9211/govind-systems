import { Mail, Phone, MapPin, Linkedin, Terminal, ArrowRight, AlertTriangle } from "lucide-react";
import { useState } from "react";

const WhatsAppIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.28-1.38a9.86 9.86 0 0 0 4.71 1.2h.01c5.46 0 9.9-4.45 9.9-9.91S17.5 2 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.08l-.3-.16-3.1.81.83-3.04-.2-.32a8.2 8.2 0 0 1 1.26-6.33c.7-1.04 1.62-1.97 2.7-2.7 1.08-.73 2.3-1.16 3.58-1.16 4.16 0 7.54 3.38 7.54 7.54 0 2.01-.8 3.9-2.25 5.32-1.45 1.42-3.4 2.2-5.29 2.2Z" />
  </svg>
);

export const Contact = () => {
  const [cmd, setCmd] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "mailto:govindkewat019@gmail.com";
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
          <p className="text-muted-foreground mt-3 max-w-xl">Open a channel for modern engineering work, Shopify commerce, headless CMS, no-code automation, or chat support.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Terminal */}
          <div className="blueprint-frame bg-terminal scan-lines p-5">
            <div className="panel-label mb-3">// CONTACT.TERMINAL</div>
            <div className="font-mono text-xs space-y-2 mb-5">
              <div><span className="text-secondary">user@govind.sys</span><span className="text-muted-foreground">:</span><span className="text-accent">~</span><span className="text-muted-foreground">$</span> cat contact.txt</div>
              <div className="text-foreground pl-4">Govind Kewat — React, Headless CMS & Shopify Engineer</div>
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
            <div className="mt-3 mono text-[10px] text-muted-foreground">↳ executes mailto://govindkewat019@gmail.com</div>
          </div>

          {/* Channels */}
          <div className="blueprint-frame bg-card/60 p-5">
            <div className="panel-label mb-4">// OPEN.CHANNELS</div>
            <ul className="space-y-3">
              {[
                { Icon: Mail, label: "EMAIL", value: "govindkewat019@gmail.com", href: "mailto:govindkewat019@gmail.com" },
                { Icon: Phone, label: "VOICE", value: "+91 8370044120", href: "tel:+918370044120" },
                { Icon: WhatsAppIcon, label: "WHATSAPP", value: "+91 8370044120", href: "https://wa.me/918370044120?text=Hi%20Govind" },
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
                      <Icon className={`h-4 w-4 shrink-0 ${label === "WHATSAPP" ? "text-emerald-400" : "text-primary"}`} />
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

        <a
          href="https://wa.me/918370044120?text=Hi%20Govind%2C%20I%20would%20like%20to%20talk%20about%20a%20project"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-icon fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-xs font-semibold uppercase text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="h-5 w-5" />
      
        </a>
      </div>
    </section>
  );
};
