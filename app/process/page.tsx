/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SYS_PORTFOLIO_V2.04 // PROCESS_ARCHITECTURE",
  description:
    "Metrics log documenting the architectural process from initial blueprint to final repair.",
};

export default function ProcessPage() {
  return (
    <div className="flex-1 blueprint-grid">
      {/* Header Section */}
      <header className="px-6 md:px-12 py-20 border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <span className="font-label text-xs uppercase tracking-[0.4em] text-secondary">
                METRICS_LOG_001
              </span>
              <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter text-on-surface leading-none">
                PROCESS_
                <br />
                <span className="text-primary">ARCHITECTURE</span>
              </h1>
            </div>
            <div className="flex gap-12 border-l border-outline-variant/20 pl-8 h-fit">
              <div className="space-y-1">
                <p className="font-label text-[10px] text-outline uppercase">
                  Iteration Cycles
                </p>
                <p className="font-headline text-3xl font-light text-secondary">
                  12.4k
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-label text-[10px] text-outline uppercase">
                  Code Health
                </p>
                <p className="font-headline text-3xl font-light text-primary">
                  99.8%
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Timeline Section */}
      <section className="px-6 md:px-12 py-32">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Step 01: Initial Blueprint */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative">
            <div className="hidden md:block absolute -left-12 top-0 text-[120px] font-black text-surface-container-highest/20 font-headline select-none">
              01
            </div>
            <div className="md:col-span-5 space-y-6">
              <div className="w-12 h-1 bg-secondary" />
              <h3 className="font-headline text-3xl font-bold uppercase tracking-tight">
                Initial Blueprint
              </h3>
              <p className="text-on-surface-variant leading-relaxed max-w-md">
                Deconstructing the problem space into skeletal requirements.
                Every project begins as a raw technical schematic, prioritizing
                structural integrity over aesthetic polish.
              </p>
              <div className="flex gap-4 font-label text-[10px] text-secondary/60">
                <span>[ ARCH_TYPE: SKELETON ]</span>
                <span>[ PHASE: 001 ]</span>
              </div>
            </div>
            <div className="md:col-span-7 bg-surface-container-low aspect-video border border-outline-variant/10 relative overflow-hidden group">
              <div className="absolute inset-0 blueprint-grid opacity-20" />
              <div className="absolute inset-8 border border-secondary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary/40 text-6xl">
                  architecture
                </span>
              </div>
              <div className="absolute bottom-4 right-4 font-label text-[9px] text-outline uppercase tracking-widest">
                System_Render_v0.1
              </div>
            </div>
          </div>

          {/* Step 02: System Integration */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative">
            <div className="hidden md:block absolute -right-12 top-0 text-[120px] font-black text-surface-container-highest/20 font-headline select-none text-right w-full">
              02
            </div>
            <div className="md:col-span-7 md:order-1 order-2 bg-surface-container-high aspect-video border border-outline-variant/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="w-24 h-24 border-t border-l border-primary/30" />
                  <div className="w-24 h-24 border-t border-r border-primary/30" />
                </div>
                <div className="flex justify-center">
                  <div className="w-full h-[1px] bg-primary/20 relative">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary" />
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div className="w-24 h-24 border-b border-l border-primary/30" />
                  <div className="w-24 h-24 border-b border-r border-primary/30" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary/50 text-6xl">
                  settings_input_component
                </span>
              </div>
            </div>
            <div className="md:col-span-5 md:order-2 order-1 space-y-6">
              <div className="w-12 h-1 bg-primary" />
              <h3 className="font-headline text-3xl font-bold uppercase tracking-tight">
                System Integration
              </h3>
              <p className="text-on-surface-variant leading-relaxed max-w-md">
                Establishing neural connections between disparate modules.
                High-fidelity logic meets physical interface. This is where the
                blueprint gains its operational pulse.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center font-label text-[10px] uppercase text-outline">
                  <span>Link Integrity</span>
                  <span>94%</span>
                </div>
                <div className="h-1 bg-surface-container-highest w-full">
                  <div className="h-full bg-primary w-[94%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Step 03: Final Repair */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative">
            <div className="hidden md:block absolute -left-12 top-0 text-[120px] font-black text-surface-container-highest/20 font-headline select-none">
              03
            </div>
            <div className="md:col-span-5 space-y-6">
              <div className="w-12 h-1 bg-secondary" />
              <h3 className="font-headline text-3xl font-bold uppercase tracking-tight">
                Final Repair
              </h3>
              <p className="text-on-surface-variant leading-relaxed max-w-md">
                The &quot;Repair&quot; phase is not about fixing errors—it&apos;s about
                intentional refinement. We stress-test the interface, optimizing
                every transition until the system feels monolithic.
              </p>
              <button className="px-6 py-3 border border-secondary text-secondary font-label text-xs tracking-widest hover:bg-secondary hover:text-surface transition-all duration-300">
                VIEW_SPECIFICATIONS
              </button>
            </div>
            <div className="md:col-span-7 bg-surface-container aspect-video border border-outline-variant/10 relative overflow-hidden flex items-center justify-center">
              <img
                alt="Technical visualization"
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6Ec6qFmfSlMgJXI3Ddt1MMEt3pEvsSd9uieCARVQIJ_Lu1OXFGfLik2TJvECZeO9MUSn_T43bX6SR9SNWtiVHKD421DD1i_-4vH86XeuZ4bJWFk7nBDUBs7WyKl3Q1uR3DualldZLwq8A09k55c_v1c7dOiQghep1_akv9Xq0CHJqc6muv4Ltegx2rznsuYz7sBqzv2XKrkPBsPx-lMja_tLE-Qd2nZJqZSV62h9OR7LN7AK6xdgPhA_GZJ_M7lywi2KHrZT_go8"
              />
              <div className="z-10 bg-surface/80 backdrop-blur-md p-8 border border-secondary/20 text-center space-y-4">
                <span className="material-symbols-outlined text-secondary text-4xl">
                  verified
                </span>
                <p className="font-label text-xs tracking-[0.3em] uppercase">
                  Status: Optimized
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical HUD */}
      <div className="fixed bottom-12 right-12 hidden xl:block w-64 p-6 bg-surface-container-highest/40 backdrop-blur-xl border border-outline-variant/10 z-40">
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
            <span className="font-label text-[9px] text-secondary">
              SYSTEM_STATUS
            </span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-secondary" />
              <div className="w-1 h-1 bg-secondary" />
              <div className="w-1 h-1 bg-secondary animate-pulse" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between font-label text-[10px]">
              <span className="text-outline">SCROLL_DEPTH</span>
              <span className="text-secondary">24%</span>
            </div>
            <div className="h-0.5 bg-surface-container w-full">
              <div className="h-full bg-secondary w-1/4" />
            </div>
          </div>
          <div className="pt-2 font-label text-[8px] text-outline-variant uppercase leading-tight">
            All processes governed by Core_System v2.04 // Unauthorized access
            prohibited.
          </div>
        </div>
      </div>
    </div>
  );
}
