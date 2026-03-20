/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SYS_PORTFOLIO_V2.04 // ABOUT_OPERATOR",
  description:
    "Profile of the operator — currently in phase 02 of deconstruction.",
};

export default function AboutPage() {
  return (
    <div className="flex-1 blueprint-grid relative">
      {/* Alignment Markers */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 text-[10px] font-mono text-secondary">
          X: 00.42
        </div>
        <div className="absolute bottom-10 right-10 text-[10px] font-mono text-secondary">
          Y: 88.11
        </div>
        <div className="h-px w-full bg-secondary/10 absolute top-1/4" />
        <div className="h-px w-full bg-secondary/10 absolute top-3/4" />
        <div className="w-px h-full bg-secondary/10 absolute left-1/3" />
      </div>

      <div className="container mx-auto px-6 md:px-12 py-12 relative z-10">
        <header className="mb-20">
          <div className="inline-block px-2 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-headline tracking-[0.3em] mb-4">
            [UNDER_CONSTRUCTION]
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter text-on-surface leading-none">
            ABOUT_THE
            <br />
            <span className="text-outline-variant">OPERATOR</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Column: Status HUD */}
          <div className="md:col-span-4 space-y-8">
            <section className="bg-surface-container-low p-6 border-l-2 border-secondary/30">
              <h3 className="font-headline text-xs text-secondary mb-6 tracking-widest uppercase">
                System Status
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] font-headline text-on-surface-variant/50">
                    CREATIVE_ENGINE
                  </span>
                  <span className="text-xs font-headline text-on-surface">
                    92% STABLE
                  </span>
                </div>
                <div className="w-full h-1 bg-surface-container-highest">
                  <div
                    className="w-[92%] h-full bg-secondary"
                    style={{
                      boxShadow: "0 0 10px rgba(211,251,255,0.4)",
                    }}
                  />
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-[10px] font-headline text-on-surface-variant/50">
                    LOGIC_ROUTING
                  </span>
                  <span className="text-xs font-headline text-on-surface">
                    45% COMPILED
                  </span>
                </div>
                <div className="w-full h-1 bg-surface-container-highest">
                  <div
                    className="w-[45%] h-full bg-primary"
                    style={{
                      boxShadow: "0 0 10px rgba(255,182,147,0.4)",
                    }}
                  />
                </div>
              </div>
            </section>

            <section className="bg-surface-container-lowest p-6 border border-outline-variant/10">
              <h3 className="font-headline text-xs text-on-surface mb-4 tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary block" /> Technical Specs
              </h3>
              <ul className="space-y-3 font-headline text-[11px] text-on-surface-variant">
                <li className="flex justify-between">
                  <span>CORE_SKILL:</span>
                  <span className="text-secondary">UI_ARCHITECTURE</span>
                </li>
                <li className="flex justify-between">
                  <span>SUB_SYSTEM:</span>
                  <span className="text-secondary">MOTION_REPAIR</span>
                </li>
                <li className="flex justify-between">
                  <span>FRAMEWORK:</span>
                  <span className="text-secondary">REACT_V18</span>
                </li>
                <li className="flex justify-between">
                  <span>STYLES:</span>
                  <span className="text-secondary">TAILWIND_CSS</span>
                </li>
                <li className="flex justify-between">
                  <span>LOCAL_TZ:</span>
                  <span className="text-secondary">UTC-05:00</span>
                </li>
              </ul>
            </section>

            <div className="opacity-30">
              <img
                alt="Circuitry blueprint detail"
                className="grayscale border border-outline-variant/30"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCmD1N7lYRIb0hLzOzIbtv_FOHXIqq1-gKscTGSyQGnEguzWGm5vvIfb5Hg1hpQxjNPu3ENPGbvwC5zqPADlw0N51XYlvIgUdps8GHiYBzp_6Fb22a-_V7HPRqbYf90pTxNKLspWKQDcv0l5ufBs7v1e5tqlPCEmiXJsL16Dh4YMsOx04A0QCAeK3o5niKRoS3q1E4zacGEFPx7cK2p4W2-2eVsUaoUgXJu93p6QwWA2sdFd_Bsa3aWmDZ_BRhxTW6JpGtbWtg_hA"
              />
            </div>
          </div>

          {/* Right Column: Assembling Bio */}
          <div className="md:col-span-8 space-y-12">
            <div className="relative p-1 border-t border-l border-outline-variant/20">
              {/* Scaffolding corner marks */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary" />

              <div className="p-8 md:p-12 space-y-8">
                <div className="space-y-6">
                  <p className="font-headline text-2xl md:text-3xl text-secondary leading-tight uppercase tracking-tight">
                    &quot;I build digital environments where{" "}
                    <span className="text-primary italic">friction</span> meets{" "}
                    <span className="text-on-surface underline">finesse</span>
                    .&quot;
                  </p>
                  <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                    This profile is currently in{" "}
                    <span className="font-headline text-sm bg-surface-container px-2 py-0.5 text-on-surface">
                      [PHASE_02]
                    </span>{" "}
                    of deconstruction. The objective is to strip away the
                    decorative fluff and expose the structural integrity of
                    digital experiences.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-outline-variant/10">
                    <div className="space-y-2">
                      <div className="text-[10px] font-headline text-primary uppercase">
                        // Raw_Input
                      </div>
                      <p className="font-headline text-sm text-on-surface-variant/70 leading-relaxed uppercase">
                        Born in the terminal, raised on the web. I translate
                        complex business logic into skeletal wireframes that
                        breathe. 0px border-radius is my religion.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-[10px] font-headline text-secondary uppercase">
                        // Polished_Output
                      </div>
                      <p className="font-body text-sm text-on-surface leading-relaxed">
                        The final result is always a balance of high-end
                        editorial typography and mechanical precision. Every
                        pixel has a purpose; every animation has a reason.
                      </p>
                    </div>
                  </div>

                  <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                    Currently operating out of the{" "}
                    <span className="text-primary underline">
                      Void-Box Labs
                    </span>
                    , I am developing the next generation of architectural UIs.
                    If you&apos;re looking for a generic template, you&apos;re in the
                    wrong sector.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="group relative cursor-crosshair">
                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                    <button className="border border-primary text-primary px-8 py-4 font-headline text-sm tracking-widest uppercase underline-hover">
                      INITIATE_COLLABORATION
                    </button>
                  </div>
                  <button className="border border-outline-variant/40 text-on-surface-variant px-8 py-4 font-headline text-sm tracking-widest uppercase hover:bg-surface-container-high transition-colors">
                    DOWNLOAD_SPECS.PDF
                  </button>
                </div>
              </div>
            </div>

            {/* Schematic Detail */}
            <div className="grid grid-cols-3 gap-1 opacity-50">
              <div className="h-32 bg-surface-container-lowest border border-outline-variant/10 flex items-center justify-center">
                <span className="text-[8px] font-headline text-outline-variant tracking-widest">
                  FIG_A: GRID_ALIGMENT
                </span>
              </div>
              <div className="h-32 bg-surface-container-lowest border border-outline-variant/10 flex items-center justify-center">
                <span className="text-[8px] font-headline text-outline-variant tracking-widest">
                  FIG_B: COLOR_SAMPLING
                </span>
              </div>
              <div className="h-32 bg-surface-container-lowest border border-outline-variant/10 flex items-center justify-center">
                <span className="text-[8px] font-headline text-outline-variant tracking-widest">
                  FIG_C: NODAL_ROUTING
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status HUD */}
      <div className="fixed bottom-8 right-8 z-[60] hidden md:block">
        <div className="bg-surface-container-highest/40 backdrop-blur-md border border-outline-variant/20 p-4 space-y-2">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-secondary animate-pulse" />
            <span className="font-headline text-[10px] tracking-widest text-on-surface uppercase">
              Uptime: 99.99%
            </span>
          </div>
          <div className="w-32 h-[2px] bg-outline-variant/20 relative">
            <div className="absolute left-0 top-0 h-full bg-secondary w-2/3" />
          </div>
          <div className="font-headline text-[9px] text-on-surface-variant/40 uppercase">
            Rendering... (about.sys)
          </div>
        </div>
      </div>
    </div>
  );
}
