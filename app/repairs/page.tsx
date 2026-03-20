import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SYS_PORTFOLIO_V2.04 // SYSTEM_REPAIRS",
  description:
    "Documentation of architectural recovery and technical debt resolution.",
};

export default function RepairsPage() {
  return (
    <div className="flex-1 pb-12 px-6 md:px-12 blueprint-grid-dot">
      {/* Header Section */}
      <header className="mb-16 pt-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[1px] w-12 bg-primary" />
          <span className="font-label text-primary text-[10px] tracking-[0.3em]">
            MAINTENANCE_LOG // V4.0
          </span>
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-background mb-4">
          SYSTEM_REPAIRS{" "}
          <span className="text-outline-variant font-light">//</span> BUG_LOG
        </h1>
        <p className="font-body text-on-surface-variant max-w-xl leading-relaxed">
          Documentation of architectural recovery and technical debt resolution.
          Tracking the transition from fragmented skeletal structures to
          high-fidelity stability.
        </p>
      </header>

      {/* Repairs List */}
      <section className="space-y-20 mb-24">
        {/* Repair Entry 01 */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          <div className="xl:col-span-3">
            <div className="font-label text-xs text-primary mb-2">
              ENTRY_001
            </div>
            <h3 className="font-headline text-2xl font-bold text-secondary mb-4 tracking-tight">
              NEURAL_RENDERER_ASYNC
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-label text-slate-500 border-b border-white/5 pb-1">
                <span>SEVERITY</span>
                <span className="text-error">CRITICAL</span>
              </div>
              <div className="flex justify-between text-[10px] font-label text-slate-500 border-b border-white/5 pb-1">
                <span>LATENCY</span>
                <span>-124MS</span>
              </div>
              <div className="flex justify-between text-[10px] font-label text-slate-500 border-b border-white/5 pb-1">
                <span>MODULE</span>
                <span>GFX_CORE</span>
              </div>
            </div>
          </div>
          <div className="xl:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Before State */}
            <div className="bg-surface-container-low p-6 border-l-2 border-error">
              <div className="flex justify-between items-center mb-6">
                <span className="font-label text-[10px] text-error bg-error/10 px-2 py-1 uppercase">
                  Raw / Broken
                </span>
                <span className="material-symbols-outlined text-error text-sm">
                  report
                </span>
              </div>
              <pre className="font-mono text-xs text-slate-400 overflow-x-auto leading-relaxed">
                <code>
{`while (render_queue) {
  const data = queue.pop();
  // Blocking main thread
  renderImmediate(data);
  updateDOM_Legacy();
}`}
                </code>
              </pre>
              <div className="mt-8 border-t border-white/5 pt-4">
                <p className="text-xs text-on-surface-variant font-body">
                  Main thread lockup during heavy asset injection. UI
                  responsiveness dropped to 12fps.
                </p>
              </div>
            </div>
            {/* After State */}
            <div className="bg-surface-container-highest p-6 border-l-2 border-secondary">
              <div className="flex justify-between items-center mb-6">
                <span className="font-label text-[10px] text-secondary bg-secondary/10 px-2 py-1 uppercase">
                  Optimized / Repaired
                </span>
                <span className="material-symbols-outlined text-secondary text-sm">
                  check_circle
                </span>
              </div>
              <pre className="font-mono text-xs text-secondary-fixed-dim overflow-x-auto leading-relaxed">
                <code>
{`async function processQueue() {
  const chunks = split(render_queue);
  await Promise.all(chunks.map(c => 
    worker.postMessage(c)
  ));
  requestAnimationFrame(flush);
}`}
                </code>
              </pre>
              <div className="mt-8 border-t border-white/5 pt-4">
                <p className="text-xs text-on-surface-variant font-body">
                  Offloaded rendering to WebWorkers. Consistent 60fps achieved
                  via non-blocking frame buffer.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Repair Entry 02 */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          <div className="xl:col-span-3">
            <div className="font-label text-xs text-primary mb-2">
              ENTRY_002
            </div>
            <h3 className="font-headline text-2xl font-bold text-secondary mb-4 tracking-tight">
              DATA_FLOW_LEAK
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-label text-slate-500 border-b border-white/5 pb-1">
                <span>SEVERITY</span>
                <span className="text-primary">MODERATE</span>
              </div>
              <div className="flex justify-between text-[10px] font-label text-slate-500 border-b border-white/5 pb-1">
                <span>MEMORY</span>
                <span>-420MB</span>
              </div>
              <div className="flex justify-between text-[10px] font-label text-slate-500 border-b border-white/5 pb-1">
                <span>MODULE</span>
                <span>STATE_SYNC</span>
              </div>
            </div>
          </div>
          <div className="xl:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Before State */}
            <div className="bg-surface-container-low p-6 border-l-2 border-error">
              <div className="flex justify-between items-center mb-6">
                <span className="font-label text-[10px] text-error bg-error/10 px-2 py-1 uppercase">
                  Raw / Broken
                </span>
                <span className="material-symbols-outlined text-error text-sm">
                  leak_add
                </span>
              </div>
              <div className="h-32 flex items-center justify-center border border-error/20 bg-error/5 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[96px]">
                    blur_on
                  </span>
                </div>
                <span className="font-label text-[10px] text-error z-10">
                  UNBOUND_SUBSCRIPTION_LEAK
                </span>
              </div>
              <div className="mt-8 border-t border-white/5 pt-4">
                <p className="text-xs text-on-surface-variant font-body">
                  Event listeners retained in memory after component
                  destruction. Persistent RAM creep.
                </p>
              </div>
            </div>
            {/* After State */}
            <div className="bg-surface-container-highest p-6 border-l-2 border-secondary">
              <div className="flex justify-between items-center mb-6">
                <span className="font-label text-[10px] text-secondary bg-secondary/10 px-2 py-1 uppercase">
                  Optimized / Repaired
                </span>
                <span className="material-symbols-outlined text-secondary text-sm">
                  shield
                </span>
              </div>
              <div className="h-32 flex items-center justify-center border border-secondary/20 bg-secondary/5 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[96px]">
                    grid_4x4
                  </span>
                </div>
                <span className="font-label text-[10px] text-secondary z-10">
                  DISPOSABLE_PATTERN_ACTIVE
                </span>
              </div>
              <div className="mt-8 border-t border-white/5 pt-4">
                <p className="text-xs text-on-surface-variant font-body">
                  Implemented Auto-Dispose pattern. Memory footprint stabilized
                  at 120MB baseline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Status HUD - Terminal Log */}
      <section className="mt-12">
        <div className="bg-surface-container-lowest border border-primary/10 p-4 font-mono text-[10px] md:text-xs">
          <div className="flex items-center gap-2 mb-4 border-b border-primary/10 pb-2">
            <div className="w-2 h-2 bg-primary animate-pulse" />
            <span className="text-primary font-label">
              REPAIR_PROTOCOLS_TERMINAL
            </span>
          </div>
          <div className="space-y-1 text-slate-500 max-h-48 overflow-y-auto">
            {[
              { time: "14:02:21", text: "INITIATING SYSTEM_SCAN..." },
              {
                time: "14:02:22",
                text: "SCAN COMPLETE: 12 ANOMALIES DETECTED.",
                color: "text-secondary",
              },
              {
                time: "14:02:25",
                text: "EXECUTING PROTOCOL_66: MEMORY_PURGE...",
              },
              {
                time: "14:02:26",
                text: "SUCCESS: 420MB RECLAIMED.",
                color: "text-primary",
              },
              {
                time: "14:03:01",
                text: "RE-CALIBRATING RENDER_PIPELINE...",
              },
              {
                time: "14:03:04",
                text: "SHADERS_OPTIMIZED. ASYNC_BRIDGE_ESTABLISHED.",
              },
              {
                time: "14:03:05",
                text: "SYSTEM_REPAIR_STATUS: STABLE_ALPHA",
                color: "text-secondary",
              },
            ].map((log, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-slate-700">[{log.time}]</span>
                <span className={log.color || ""}>{log.text}</span>
              </div>
            ))}
            <div className="flex gap-4 items-center">
              <span className="text-slate-700">[14:03:06]</span>
              <span>WAITING FOR OPERATOR INPUT...</span>
              <span className="w-1.5 h-3 bg-primary/40 ml-1" />
            </div>
          </div>
        </div>
      </section>

      {/* Floating HUD */}
      <div className="fixed bottom-10 right-10 z-50 hidden md:block">
        <div className="bg-surface-container-highest/40 backdrop-blur-md p-4 border border-secondary/20 flex flex-col gap-2">
          <div className="flex justify-between items-center gap-8">
            <span className="font-label text-[10px] text-secondary tracking-widest">
              REPAIR_PROGRESS
            </span>
            <span className="font-label text-[10px] text-secondary">82%</span>
          </div>
          <div className="w-48 h-1 bg-surface-container-low">
            <div className="h-full bg-secondary" style={{ width: "82%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
