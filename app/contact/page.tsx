/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SYS_PORTFOLIO_V2.04 // ESTABLISH_UPLINK",
  description:
    "Initiate a secure communication channel to the operator.",
};

export default function ContactPage() {
  return (
    <div className="flex-1 px-6 md:px-12 pb-20">
      <section className="max-w-6xl mx-auto w-full py-12">
        {/* Header Section */}
        <div className="mb-20">
          <div className="font-headline text-[10px] tracking-[0.3em] text-secondary mb-4 uppercase">
            Direct_Connection_Protocol
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-6 max-w-2xl">
            ESTABLISH <span className="text-primary italic">UPLINK</span>.
          </h1>
          <p className="font-body text-lg text-on-surface-variant max-w-xl leading-relaxed">
            Initiate a secure communication channel. Your inquiry will be
            processed and routed to the appropriate subsystem for analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Form Section */}
          <div className="lg:col-span-8">
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="font-label text-[10px] tracking-widest text-on-surface-variant/50 group-focus-within:text-secondary uppercase transition-colors">
                    IDENTIFIER_NAME
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:border-secondary focus:ring-0 px-0 py-4 font-body text-on-surface placeholder:text-on-surface-variant/20 transition-all"
                    placeholder="ENTER NAME..."
                    type="text"
                  />
                </div>
                <div className="group">
                  <label className="font-label text-[10px] tracking-widest text-on-surface-variant/50 group-focus-within:text-secondary uppercase transition-colors">
                    PROTOCOL_EMAIL
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:border-secondary focus:ring-0 px-0 py-4 font-body text-on-surface placeholder:text-on-surface-variant/20 transition-all"
                    placeholder="ENTER EMAIL..."
                    type="email"
                  />
                </div>
              </div>
              <div className="group">
                <label className="font-label text-[10px] tracking-widest text-on-surface-variant/50 group-focus-within:text-secondary uppercase transition-colors">
                  TRANSMISSION_PAYLOAD
                </label>
                <textarea
                  className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:border-secondary focus:ring-0 px-0 py-4 font-body text-on-surface placeholder:text-on-surface-variant/20 transition-all resize-none"
                  placeholder="INPUT MESSAGE DATA..."
                  rows={5}
                />
              </div>
              <div className="flex items-center gap-8">
                <button
                  className="group relative px-10 py-5 bg-primary text-on-primary font-headline font-bold text-sm tracking-widest transition-all hover:pr-14 overflow-hidden underline-hover"
                  type="submit"
                >
                  <span className="relative z-10">EXECUTE_SEND</span>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all material-symbols-outlined text-sm">
                    send
                  </span>
                </button>
                <div className="hidden md:flex flex-col text-[9px] font-label text-on-surface-variant/30 tracking-tighter">
                  <span>ENCRYPTION: AES-256</span>
                  <span>RETRY: TRUE</span>
                </div>
              </div>
            </form>
          </div>

          {/* Side Info */}
          <div className="lg:col-span-4 space-y-12">
            <div className="p-8 bg-surface-container-low border-l-2 border-secondary/20">
              <div className="font-label text-[10px] tracking-widest text-secondary mb-6">
                TERMINAL_COMMANDS
              </div>
              <ul className="space-y-4 font-label text-xs tracking-tight">
                {["LINKEDIN", "GITHUB", "DRIBBBLE", "X_PLATFORM"].map(
                  (platform) => (
                    <li key={platform}>
                      <a
                        className="group flex items-center justify-between text-on-surface-variant hover:text-secondary transition-all"
                        href="#"
                      >
                        <span>GOTO:{platform}</span>
                        <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-all">
                          north_east
                        </span>
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="relative aspect-square bg-surface-container-high overflow-hidden group">
              <img
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-700 grayscale"
                alt="Satellite imagery"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ3Kmzhv_RzHk3vThyl2zNG5aWXINiKO-0zNMJKA-z_dYxjG44eWGDqPs771NjU094SJly0jP7yyMkFtIefua5UmdJEgKiYsPSd5UlR1jcD8qLV_GTupPrWi3hEuzghwtN39JI_RvihQ7VukqVLLmnLBlO1Ip60mGx3TwnJEkwxlNI51YhBgCELeAutFnqhkpZJmSGBgLmWYDP4oZ52RchOWUXXAKBTnT96X0D9yp1qIr4dFBSM4k1DrmQn2ZcU-CxTPAPmdKcOUI"
              />
              <div className="absolute inset-0 border border-secondary/10 pointer-events-none" />
              <div className="absolute bottom-4 left-4 font-label text-[9px] text-secondary tracking-widest bg-surface/80 px-2 py-1">
                HQ_COORDINATES: [34.0522° N, 118.2437° W]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Status HUD */}
      <div className="fixed bottom-32 right-8 hidden xl:block w-48 z-40">
        <div className="bg-surface-container-highest/40 backdrop-blur-md p-4 border-l border-secondary/30">
          <div className="font-label text-[9px] text-on-surface-variant/60 mb-2">
            SYSTEM_INTEGRITY
          </div>
          <div className="flex gap-1 h-1 mb-3">
            <div className="flex-grow bg-secondary h-full" />
            <div className="flex-grow bg-secondary h-full" />
            <div className="flex-grow bg-secondary h-full" />
            <div className="flex-grow bg-secondary/20 h-full" />
          </div>
          <div className="font-label text-[9px] text-primary uppercase animate-pulse">
            Stable_Connection
          </div>
        </div>
      </div>
    </div>
  );
}
