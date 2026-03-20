import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SYS_PORTFOLIO_V2.04 // EXPERIMENTAL_LABS",
  description:
    "Technical inventory of modules and architectural frameworks deployed within the core environment.",
};

const techStack = [
  {
    ref: "M_01",
    icon: "terminal",
    title: "NODE.JS // RUNTIME",
    description:
      "Asynchronous event-driven JavaScript runtime designed to build scalable network applications.",
    status: "STABLE",
    statusColor: "bg-green-500/10 text-green-400",
    version: "v20.11.0",
    category: "DEPENDENCY_CORE",
  },
  {
    ref: "M_02",
    icon: "database",
    title: "SUPABASE_DB // STACK",
    description:
      "Open source Firebase alternative providing PostgreSQL database, Auth, and Realtime subscriptions.",
    status: "STABLE",
    statusColor: "bg-green-500/10 text-green-400",
    version: "v2.39.0",
    category: "INFRASTRUCTURE",
  },
  {
    ref: "M_03",
    icon: "layers",
    title: "REACT_UI // LIBRARY",
    description:
      "Component-based architectural layer for building high-performance user interfaces and SPAs.",
    status: "ACTIVE",
    statusColor: "bg-blue-500/10 text-blue-400",
    version: "v18.2.0",
    category: "FRONTEND_FRAMEWORK",
  },
  {
    ref: "M_04",
    icon: "palette",
    title: "TAILWIND_CSS // JIT",
    description:
      "Utility-first CSS framework for rapid UI development with integrated design system tokens.",
    status: "STABLE",
    statusColor: "bg-green-500/10 text-green-400",
    version: "v3.4.1",
    category: "STYLING_ENGINE",
  },
  {
    ref: "M_05",
    icon: "cloud_upload",
    title: "VERCEL_EDGE // DEPLOY",
    description:
      "Cloud platform for static sites and Serverless Functions, optimized for performance and scale.",
    status: "OPTIMIZED",
    statusColor: "bg-secondary/10 text-secondary",
    version: "v5.0.0",
    category: "EDGE_COMPUTE",
  },
  {
    ref: "M_06",
    icon: "code",
    title: "GITHUB_GIT // VCS",
    description:
      "Distributed version control and collaboration platform for source code management.",
    status: "LATEST",
    statusColor: "bg-primary/10 text-primary",
    version: "v2.44.0",
    category: "SOURCE_CONTROL",
  },
];

export default function LabsPage() {
  return (
    <div className="flex-1 pb-12 px-6 md:px-12">
      <header className="mb-16 pt-8">
        <div className="flex items-center gap-4 mb-2">
          <div className="h-[1px] w-12 bg-primary" />
          <span className="font-label text-[10px] tracking-[0.3em] text-primary uppercase">
            System Resource Library
          </span>
        </div>
        <h1 className="font-headline font-bold text-4xl md:text-6xl text-on-surface tracking-tighter leading-none mb-6">
          EXPERIMENTAL_LABS //{" "}
          <span className="text-secondary">TECH_STACK</span>
        </h1>
        <p className="font-body text-outline max-w-2xl text-lg">
          Technical inventory of modules and architectural frameworks deployed
          within the core environment. Each component is subject to continuous
          stress-testing and iteration.
        </p>
      </header>

      {/* Tech Stack Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1">
        {techStack.map((tech) => (
          <div
            key={tech.ref}
            className="bg-surface-container-low p-8 border border-outline-variant/10 group hover:bg-surface-container transition-colors relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2 font-label text-[9px] text-primary opacity-30">
              {tech.ref}
            </div>
            <div className="flex justify-between items-start mb-8">
              <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  {tech.icon}
                </span>
              </div>
              <div className="text-right">
                <span
                  className={`inline-block px-2 py-1 ${tech.statusColor} font-label text-[9px] tracking-widest mb-1`}
                >
                  {tech.status}
                </span>
                <div className="font-label text-[10px] text-outline">
                  {tech.version}
                </div>
              </div>
            </div>
            <h3 className="font-headline font-bold text-xl tracking-tight mb-2 text-on-surface">
              {tech.title}
            </h3>
            <p className="font-body text-sm text-outline mb-6 leading-relaxed">
              {tech.description}
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
              <span className="font-label text-[10px] text-outline-variant">
                {tech.category}
              </span>
              <span className="material-symbols-outlined text-sm text-secondary">
                arrow_forward_ios
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom Section */}
      <section className="mt-20">
        <div className="bg-surface-container-lowest p-12 border border-outline-variant/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <span className="font-label text-[10px] text-primary tracking-widest">
                SYSTEM_LOGS
              </span>
              <div className="space-y-2 font-label text-[11px] text-outline-variant leading-none">
                <div className="flex gap-4">
                  <span className="text-secondary">[08:42]</span>{" "}
                  INITIALIZING_LAB_SESSIONS...
                </div>
                <div className="flex gap-4">
                  <span className="text-secondary">[08:43]</span>{" "}
                  FETCHING_REMOTE_MODULES...
                </div>
                <div className="flex gap-4">
                  <span className="text-secondary">[08:43]</span> CACHE_HIT:
                  98.4%
                </div>
                <div className="flex gap-4">
                  <span className="text-primary">[08:44]</span>{" "}
                  SYSTEM_READY_FOR_INPUT_
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <h4 className="font-headline font-bold text-lg mb-4 text-on-surface">
                DEVELOPER_NOTES // ARCHITECTURE
              </h4>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h5 className="font-headline text-xs font-bold text-secondary mb-2">
                    MODULARITY_SCORE
                  </h5>
                  <div className="text-3xl font-headline font-bold text-on-surface">
                    0.94
                    <span className="text-sm text-outline font-normal">
                      /1.0
                    </span>
                  </div>
                </div>
                <div>
                  <h5 className="font-headline text-xs font-bold text-secondary mb-2">
                    REPAIR_LATENCY
                  </h5>
                  <div className="text-3xl font-headline font-bold text-on-surface">
                    14
                    <span className="text-sm text-outline font-normal">ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating HUD */}
      <div className="fixed bottom-8 right-8 z-50 pointer-events-none hidden md:block">
        <div className="bg-surface-container-highest/40 backdrop-blur-md p-4 border border-outline-variant/10 pointer-events-auto flex flex-col gap-2">
          <div className="font-label text-[9px] text-secondary tracking-widest">
            STATUS_HUD
          </div>
          <div className="w-32 bg-surface-container h-1">
            <div className="bg-secondary h-full w-[75%]" />
          </div>
          <div className="flex justify-between items-center">
            <span className="font-label text-[8px] text-outline-variant">
              SYNC_READY
            </span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
