import { useEffect, useState } from "react";

const lines = [
  "> INITIALIZING GOVIND SYSTEM...",
  "> LOADING WORDPRESS MODULES...",
  "> MOUNTING PHP RUNTIME [v8.2]",
  "> CONNECTING MYSQL CLUSTER...",
  "> CALIBRATING CORE WEB VITALS...",
  "> SYSTEM READY",
];

export const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [shown, setShown] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setShown((s) => [...s, lines[i]]);
      setProgress(((i + 1) / lines.length) * 100);
      i++;
      if (i >= lines.length) {
        clearInterval(interval);
        setTimeout(onComplete, 600);
      }
    }, 280);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-terminal scan-lines">
      <div className="w-full max-w-2xl px-6 font-mono text-sm">
        <div className="mb-6 flex items-center justify-between border-b border-border pb-2">
          <span className="panel-label">SYS://BOOT.SEQUENCE</span>
          <span className="text-secondary text-xs animate-flicker">● LIVE</span>
        </div>
        <div className="space-y-1.5 min-h-[200px]">
          {shown.map((l, i) => (
            <div key={i} className="terminal-text animate-fade-in flex">
              <span className="text-muted-foreground mr-2">[{String(i + 1).padStart(2, "0")}]</span>
              <span className={i === shown.length - 1 ? "cursor-blink" : ""}>{l}</span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
            <span>BOOT PROGRESS</span>
            <span className="glow-text-amber">{Math.round(progress)}%</span>
          </div>
          <div className="h-1 bg-muted overflow-hidden">
            <div className="h-full bg-primary shadow-glow-amber transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
};
