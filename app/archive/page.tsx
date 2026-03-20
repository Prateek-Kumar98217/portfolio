/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SYS_PORTFOLIO_V2.04 // POLISHED_ARCHIVE",
  description:
    "A curated selection of high-fidelity prototypes and repaired systems.",
};

const projects = [
  {
    id: 1,
    title: "NEURAL_MESH_V4",
    subtitle: "Real-time synaptic mapping for decentralized autonomous clusters.",
    buildRef: "BUILD_REF: 8829-X",
    coords: "X: 44.02 // Y: 12.91",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYCL-qjGzIRfaTaCdWdC68z-hznrxIHx8pTRovgarcKLRIN-3RwjuWWnN2r58orLtrEk2g_Z9oK1YE13F2j5JgkBvrbpxJqOwhL2VmWJ5Y1Fqd_NP41HknF8Nw1jSobBZQqZv6Ujsp71-HAsuvcHtoXSilZj2rMxYszjIXHRrH0h305Bg7mmDJI6x84uhEcxuw2TFrCo2LBiFQ1xGt-7lKXUUNM2b9QzP5vkt-fLf3gERJaLYnu3FGrWz8jmBM88m0XVWGQCYhvwE",
    span: "md:col-span-8",
    aspect: "aspect-[16/9]",
    type: "featured" as const,
  },
  {
    id: 2,
    title: "CORE_UI_KIT",
    subtitle: "REPAIRED COMPONENT SYSTEM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFXyuf3j6jGBWAOWaIEzEm8uz0mDsPTqcZJK_hQQjX8gTzzM5-jpG9Zcvya50qMnlnpI1vRcLqGYoh2YBJsUrYRRLB0KXeh6T9lo4a948tQ4Lel7jKSpwV6jkyPtEE7QMenpVHb0CKyE2hwkjPpUumljcoHDcqn4NfnykFWbR7zonLb_2cnigsPocFnOkjLJTP-MM5It23A4REYiGOAVNkiEq1FagAmDi6hOzsAXyMnusNzvo1QYWOU4RHSB4gPHwzgs1IY3hvci4",
    span: "md:col-span-4",
    type: "vertical" as const,
  },
  {
    id: 3,
    title: "VAULT_PROTOCOL",
    badge: "SECURED",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB86QhuCrErOrVapjtKB5ocsHxiUaASnzFPp-HV9A36zQ8HwvdSs2tmHUSe2vmZxHHXS1QdQuMNcOajw2bcupQkH9oAkB8N6ek_iYQIQPkdzzhEfJ2_fBveukbUZQcM1sB6uBUqXwJcyCl87kvbAqR5Jb-aUaoVR5RfBPeLLkZyZK__nzsUyFo7drhy1pieHvBgd1Yh3EQCxlzfTiJVfFiU02gWK3E1NYev6MEpJO90uvHy7R6QonxXx_F6v8LMXDVjmntOWMxxSBA",
    span: "md:col-span-4",
    aspect: "aspect-square",
    type: "square" as const,
  },
];

export default function ArchivePage() {
  return (
    <div className="flex-1 pb-20 px-6 md:px-12">
      {/* Header Section */}
      <header className="mb-20 max-w-4xl pt-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="h-px w-12 bg-primary" />
          <span className="font-label text-xs tracking-[0.3em] text-primary">
            PROJECT_GALLERY_REV_2.04
          </span>
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-6 leading-none">
          POLISHED <span className="text-secondary">ARCHIVE</span>
        </h1>
        <p className="font-body text-lg text-on-surface-variant/80 max-w-2xl leading-relaxed">
          A curated selection of high-fidelity prototypes and repaired systems.
          Every module represents a state of peak digital structural integrity.
        </p>
      </header>

      {/* Bento Grid Projects */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Project Card 1: Large Featured */}
        <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low border border-outline-variant/10 aspect-[16/9]">
          <img
            alt="Project Interface"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
            src={projects[0].image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
            <div className="font-label text-[10px] text-secondary tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {projects[0].buildRef}
            </div>
            <h3 className="font-body text-3xl font-bold text-on-surface">
              {projects[0].title}
            </h3>
            <div className="flex justify-between items-end mt-4 overflow-hidden h-0 group-hover:h-12 transition-all duration-500">
              <p className="text-sm text-on-surface-variant/80 max-w-md">
                {projects[0].subtitle}
              </p>
              <span className="material-symbols-outlined text-primary text-3xl">
                arrow_outward
              </span>
            </div>
          </div>
          <div className="absolute top-4 right-4 font-label text-[9px] text-outline-variant uppercase tracking-tighter pointer-events-none">
            {projects[0].coords}
          </div>
        </div>

        {/* Project Card 2: Vertical */}
        <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-low border border-outline-variant/10">
          <img
            alt="Web Component"
            className="w-full h-full object-cover opacity-40 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000"
            src={projects[1].image}
          />
          <div className="absolute inset-0 glass-panel opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <h3 className="font-body text-2xl font-bold text-on-surface mb-2">
              {projects[1].title}
            </h3>
            <p className="text-xs text-on-surface-variant font-label tracking-wider mb-4">
              {projects[1].subtitle}
            </p>
            <button className="w-full border border-secondary/30 text-secondary py-3 text-[10px] font-label tracking-[0.2em] hover:bg-secondary/10 transition-all opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-300">
              INSPECT_MODULE
            </button>
          </div>
        </div>

        {/* Project Card 3: Square */}
        <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-low border border-outline-variant/10 aspect-square">
          <img
            alt="Cybersecurity"
            className="w-full h-full object-cover opacity-50 group-hover:opacity-90 transition-all duration-500"
            src={projects[2].image}
          />
          <div className="absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="font-label text-[10px] bg-primary text-on-primary px-2 py-1">
                {projects[2].badge}
              </span>
              <span className="material-symbols-outlined text-on-surface-variant/40">
                lock
              </span>
            </div>
            <div>
              <h3 className="font-body text-xl font-bold text-on-surface">
                {projects[2].title}
              </h3>
              <div className="h-px w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2" />
            </div>
          </div>
        </div>

        {/* Project Card 4: Horizontal */}
        <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low border border-outline-variant/10">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="text-[12rem] font-black text-on-surface-variant/5 select-none tracking-tighter">
              RENDER
            </div>
          </div>
          <div className="relative p-12 h-full flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="font-label text-xs text-secondary mb-4">
                STATUS: OPTIMIZED
              </div>
              <h3 className="font-headline text-4xl font-bold text-on-surface mb-4 tracking-tight">
                KINETIC_FLOW
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                High-performance animation engine built for low-latency visual
                feedback in critical environments.
              </p>
              <div className="flex gap-4">
                <span className="text-[9px] font-label border border-outline-variant px-3 py-1">
                  REACT_04
                </span>
                <span className="text-[9px] font-label border border-outline-variant px-3 py-1">
                  WEBGL_SYNC
                </span>
                <span className="text-[9px] font-label border border-outline-variant px-3 py-1">
                  RUST_CORE
                </span>
              </div>
            </div>
            <div className="w-full md:w-64 aspect-square bg-surface-container-highest border border-outline-variant/20 relative group-hover:scale-95 transition-transform duration-700">
              <img
                alt="Abstract Art"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuArZzUk0ScO88GhH3LFNtUsameuXZ3Z79URut5zL0JS15aa8nxuwFXOP_EfCex89uu6B7LozF_nCyxHITCfRnaY-xu9IsvR5RpXJPUlJA8mzZScMjLzZdK5ZuP9Taf6uJkkUzbvneiTkcoc8mGRB5xVsqw8qbgXTa_W0Dw2Xr4JteVcscWrxAHQSoVNcMYvHO_GsNtT8hReu-CO5UnRqE_zgNdwLz0Bu_yKYvICjWvk3otrgtKvLpGFqqyRYGAevQIp-5p26148WQU"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Status HUD Signature */}
      <div className="fixed bottom-12 right-12 z-50 pointer-events-none md:pointer-events-auto hidden md:block">
        <div className="glass-panel border border-secondary/20 p-4 w-48 shadow-2xl">
          <div className="flex justify-between items-center mb-3">
            <span className="font-label text-[10px] text-secondary tracking-widest">
              SYSTEM_HUD
            </span>
            <span className="flex h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
          </div>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-[8px] font-label text-on-surface-variant/60 mb-1">
                <span>REPAIR_LEVEL</span>
                <span>98.2%</span>
              </div>
              <div className="h-0.5 w-full bg-surface-container-highest">
                <div className="h-full bg-secondary" style={{ width: "98.2%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[8px] font-label text-on-surface-variant/60 mb-1">
                <span>SYNC_RATE</span>
                <span>120Hz</span>
              </div>
              <div className="h-0.5 w-full bg-surface-container-highest">
                <div className="h-full bg-primary w-[80%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
