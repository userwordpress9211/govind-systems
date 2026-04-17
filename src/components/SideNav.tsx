import { Activity, Briefcase, Cpu, GraduationCap, LayoutGrid, Radio } from "lucide-react";
import { useEffect, useState } from "react";

const items = [
  { id: "overview", label: "OVERVIEW", icon: Activity, code: "00" },
  { id: "projects", label: "PROJECTS", icon: LayoutGrid, code: "01" },
  { id: "stack", label: "STACK", icon: Cpu, code: "02" },
  { id: "experience", label: "EXPERIENCE", icon: Briefcase, code: "03" },
  { id: "education", label: "EDUCATION", icon: GraduationCap, code: "04" },
  { id: "contact", label: "CONTACT", icon: Radio, code: "05" },
];

export const SideNav = () => {
  const [active, setActive] = useState("overview");
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(d.toUTCString().split(" ")[4] + " UTC");
    };
    update();
    const t = setInterval(update, 1000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) observer.observe(el);
    });
    return () => { clearInterval(t); observer.disconnect(); };
  }, []);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[220px] border-r border-border bg-sidebar/80 backdrop-blur-md md:flex md:flex-col">
        <div className="border-b border-border p-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-secondary shadow-glow-green animate-pulse" />
            <span className="mono text-[10px] tracking-[0.2em] text-muted-foreground">SYS.ONLINE</span>
          </div>
          <div className="mt-3 mono text-sm font-bold glow-text-amber">GOVIND.SYS</div>
          <div className="mono text-[10px] text-muted-foreground">v4.0.1 // wp-engineer</div>
        </div>

        <nav className="flex-1 p-3">
          <div className="panel-label mb-3 px-2">// NAVIGATION</div>
          <ul className="space-y-0.5">
            {items.map((it) => {
              const Icon = it.icon;
              const isActive = active === it.id;
              return (
                <li key={it.id}>
                  <button
                    onClick={() => go(it.id)}
                    className={`group relative w-full flex items-center gap-3 px-3 py-2.5 mono text-[11px] tracking-wider transition-all scan-effect ${
                      isActive
                        ? "bg-primary/10 text-primary border-l-2 border-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/40 border-l-2 border-transparent"
                    }`}
                  >
                    <span className="text-[9px] opacity-50">{it.code}</span>
                    <Icon className="h-3.5 w-3.5" />
                    <span>{it.label}</span>
                    {isActive && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary shadow-glow-amber animate-pulse" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-border p-4 space-y-2">
          <div className="flex justify-between mono text-[10px]">
            <span className="text-muted-foreground">UPTIME</span>
            <span className="text-secondary">4Y+</span>
          </div>
          <div className="flex justify-between mono text-[10px]">
            <span className="text-muted-foreground">CLOCK</span>
            <span className="glow-text-cyan">{time}</span>
          </div>
          <div className="flex justify-between mono text-[10px]">
            <span className="text-muted-foreground">LOC</span>
            <span className="text-foreground">IND/MP</span>
          </div>
        </div>
      </aside>

      {/* Mobile bottom dock */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-sidebar/95 backdrop-blur-md md:hidden">
        <ul className="flex items-center justify-around px-1 py-2">
          {items.map((it) => {
            const Icon = it.icon;
            const isActive = active === it.id;
            return (
              <li key={it.id}>
                <button
                  onClick={() => go(it.id)}
                  className={`flex flex-col items-center gap-1 px-2 py-1 mono text-[8px] tracking-wider ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "drop-shadow-[0_0_6px_hsl(var(--primary))]" : ""}`} />
                  <span>{it.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
