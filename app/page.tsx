export default function LandingPage() {
  return (
    <>
      {/* MAIN CANVAS - Full height landing */}
      <div className="relative flex-1 overflow-hidden blueprint-grid">
        {/* DECORATIVE SKELETAL LINES */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-0 w-full h-[1px] bg-secondary/10" />
          <div className="absolute top-[80%] left-0 w-full h-[1px] bg-secondary/10" />
          <div className="absolute left-[15%] top-0 h-full w-[1px] bg-secondary/10" />
          <div className="absolute left-[85%] top-0 h-full w-[1px] bg-secondary/10" />
          {/* CORNER ACCENTS */}
          <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-primary" />
          <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-primary" />
          <div className="absolute bottom-24 left-8 w-4 h-4 border-b border-l border-primary" />
          <div className="absolute bottom-24 right-8 w-4 h-4 border-b border-r border-primary" />
        </div>

        {/* CENTERED CONTENT */}
        <div className="h-full min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center px-6 relative z-10">
          <div className="mb-12 flex flex-col items-center">
            <div className="font-headline text-[10px] tracking-[0.4em] text-secondary/60 mb-6 uppercase">
              ENVIRONMENT_READY // 0.00ms
            </div>
            <h1 className="font-headline text-6xl md:text-8xl font-black text-on-surface tracking-tighter mb-2 text-center">
              SYSTEM_CORE
            </h1>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-primary/40" />
              <p className="font-headline text-primary text-sm tracking-[0.3em] font-medium">
                INITIALIZING...
              </p>
              <div className="h-[1px] w-12 bg-primary/40" />
            </div>
          </div>

          {/* CTA SECTION */}
          <div className="relative group">
            <div className="absolute -inset-2 border border-primary/20 scale-105 group-hover:scale-110 transition-transform duration-500" />
            <button className="relative bg-primary text-on-primary font-headline font-bold text-xs tracking-[0.2em] px-12 py-5 flex items-center gap-4 group-hover:bg-primary-fixed transition-colors">
              START_BUILD
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </button>
          </div>

          {/* METADATA FOOTER */}
          <div className="absolute bottom-12 left-8 right-8 flex justify-between items-end border-t border-secondary/5 pt-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-secondary animate-pulse" />
                <span className="font-headline text-[9px] text-secondary tracking-widest uppercase">
                  LATENCY: 12ms
                </span>
              </div>
              <div className="font-headline text-[9px] text-on-surface-variant/40 tracking-widest">
                BUILD_REF: D8-992-PORTFOLIO
              </div>
            </div>
            <div className="text-right flex flex-col items-end gap-1">
              <div className="font-headline text-[9px] text-on-surface-variant/40 uppercase">
                Architecture Version
              </div>
              <div className="font-headline text-xs text-secondary font-bold tracking-tighter">
                V2.04_STABLE
              </div>
            </div>
          </div>
        </div>

        {/* STATUS HUD PANEL */}
        <div className="fixed top-24 right-8 w-48 bg-surface-container-highest/40 backdrop-blur-xl border border-secondary/10 p-4 hidden xl:block z-30">
          <div className="font-headline text-[10px] text-secondary mb-4 tracking-widest flex justify-between">
            <span>SYSTEM_LOG</span>
            <span className="animate-pulse">●</span>
          </div>
          <div className="space-y-3">
            <div className="h-1 bg-surface-container-low w-full relative">
              <div className="absolute top-0 left-0 h-full w-[65%] bg-secondary" />
            </div>
            <div className="flex justify-between font-headline text-[8px] text-on-surface-variant/60 tracking-tighter">
              <span>CPU_LOAD</span>
              <span>65%</span>
            </div>
            <div className="h-1 bg-surface-container-low w-full relative">
              <div className="absolute top-0 left-0 h-full w-[22%] bg-primary" />
            </div>
            <div className="flex justify-between font-headline text-[8px] text-on-surface-variant/60 tracking-tighter">
              <span>MEM_STATIC</span>
              <span>22%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
