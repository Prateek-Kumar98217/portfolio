import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SYS_PORTFOLIO_V2.04 // HARDWARE_SPECS",
  description:
    "System resources, GitHub contribution density, and algorithm metrics.",
};

/* Contribution grid helper — generates pattern of green opacities */
function ContributionGrid() {
  const opacities = [10, 40, 20, 10, 10, 60, 10, 10, 10, 80, 30, 10, 10, 10, 10, 10, 20, 10, 10, 10, 10, 60, 10, 10, 10, 40, 10, 10, 20, 10, 10, 100, 10, 10, 30, 10, 20, 10, 10, 10, 60, 10, 10, 10, 80, 30, 10, 10, 10, 10, 10, 20, 10, 10, 10, 10, 60, 10, 10, 10, 40, 10, 10, 20, 10, 10, 100, 10, 10, 30, 10, 20, 10, 10, 10, 60, 10, 10, 10, 80, 30, 10, 10, 10, 10, 10, 20, 10, 10, 10, 10, 60, 10, 10, 10, 40, 10, 10, 20, 10, 10, 100, 10, 10, 30, 10, 40, 20, 10, 10, 60, 10, 10, 10, 80, 30, 10, 10, 10, 10, 10, 20, 10, 10, 10, 10, 60, 10, 10, 10, 40, 10, 10, 20, 10, 10, 100, 10, 10, 30];
  return (
    <div className="grid grid-rows-7 grid-flow-col gap-1 flex-1">
      {opacities.map((op, i) => (
        <div
          key={i}
          className="w-3 h-3"
          style={{ backgroundColor: `rgba(34, 197, 94, ${op / 100})` }}
        />
      ))}
    </div>
  );
}

/* Traffic bar chart */
function TrafficChart() {
  const bars = [
    { h: "40%", val: "4.1k" },
    { h: "65%", val: "6.2k" },
    { h: "55%", val: "5.4k" },
    { h: "85%", val: "8.9k" },
    { h: "70%", val: "7.1k" },
    { h: "95%", val: "9.8k" },
    { h: "60%", val: "6.0k" },
    { h: "45%", val: "4.5k" },
    { h: "55%", val: "5.5k" },
    { h: "30%", val: "3.0k" },
    { h: "40%", val: "4.0k" },
    { h: "80%", val: "8.0k" },
  ];
  return (
    <div className="h-48 relative flex items-end gap-2">
      {bars.map((bar, i) => (
        <div
          key={i}
          className="flex-1 bg-primary/20 hover:bg-primary transition-colors group relative"
          style={{ height: bar.h }}
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-primary text-on-primary text-[8px] px-1 font-headline">
            {bar.val}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SpecsPage() {
  return (
    <div className="flex-1 pb-12 px-6 md:px-12 bg-grid-pattern">
      {/* Header Section */}
      <header className="mb-16 pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-headline text-[10px] uppercase tracking-[0.3em] text-primary mb-2 block">
              SYSTEM_RESOURCES // CORE_01
            </span>
            <h1 className="font-headline font-bold text-4xl md:text-6xl text-on-surface tracking-tighter">
              HARDWARE_SPECS // REPO_STATS
            </h1>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-2 border border-outline-variant/20">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-headline text-[10px] tracking-widest text-on-surface-variant">
                LIVE_DECODE_ACTIVE
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column: GitHub Heatmap */}
        <div className="md:col-span-8 space-y-6">
          {/* Contribution Grid Container */}
          <div className="bg-surface-container-lowest p-8 border border-outline-variant/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-secondary">
                database
              </span>
            </div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline text-xs font-bold tracking-widest text-secondary flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">
                  commit
                </span>
                GITHUB_COMMIT_DENSITY
              </h3>
              <span className="text-[10px] font-headline text-slate-500">
                PERIOD: LAST_365_DAYS
              </span>
            </div>

            {/* Contribution Grid */}
            <div className="flex flex-col gap-1 overflow-x-auto pb-4">
              <div className="flex gap-1">
                <ContributionGrid />
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center border-t border-outline-variant/10 pt-4">
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <span className="text-[9px] font-headline text-slate-500 uppercase tracking-widest">
                    Total_Commits
                  </span>
                  <span className="font-headline font-bold text-lg text-primary">
                    4,209
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-headline text-slate-500 uppercase tracking-widest">
                    Merged_PRs
                  </span>
                  <span className="font-headline font-bold text-lg text-primary">
                    124
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[9px] font-headline text-slate-500">
                  LESS
                </span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-green-500/10" />
                  <div className="w-2 h-2 bg-green-500/40" />
                  <div className="w-2 h-2 bg-green-500/70" />
                  <div className="w-2 h-2 bg-green-500" />
                </div>
                <span className="text-[9px] font-headline text-slate-500">
                  MORE
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-low p-6 border-l-4 border-primary">
              <div className="flex items-center justify-between mb-4">
                <span className="material-symbols-outlined text-primary">
                  terminal
                </span>
                <span className="text-[10px] font-headline text-slate-500">
                  AVG_DAILY_COMMIT: 11.2
                </span>
              </div>
              <h4 className="font-headline text-sm font-bold text-on-surface mb-2">
                LAST_DEPLOYS
              </h4>
              <div className="space-y-3">
                {[
                  { name: "main-branch-v2.4.0", time: "2M_AGO" },
                  { name: "feat-api-gateway", time: "5H_AGO" },
                  { name: "hotfix-ui-glitch", time: "1D_AGO" },
                ].map((deploy, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center text-[10px] font-headline ${
                      i < 2 ? "border-b border-outline-variant/5 pb-1" : ""
                    }`}
                  >
                    <span className="text-secondary">{deploy.name}</span>
                    <span className="text-slate-500">{deploy.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-container-low p-6 border-l-4 border-secondary">
              <div className="flex items-center justify-between mb-4">
                <span className="material-symbols-outlined text-secondary">
                  analytics
                </span>
                <span className="text-[10px] font-headline text-slate-500">
                  UPTIME: 99.99%
                </span>
              </div>
              <h4 className="font-headline text-sm font-bold text-on-surface mb-2">
                SYSTEM_HEALTH
              </h4>
              <div className="space-y-2">
                <div className="h-2 bg-surface-container w-full relative">
                  <div className="absolute inset-0 bg-secondary w-full opacity-30" />
                  <div className="absolute inset-0 bg-secondary w-[85%]" />
                </div>
                <div className="flex justify-between text-[8px] font-headline text-slate-500 tracking-tighter uppercase">
                  <span>MEM_USAGE: 4.2GB</span>
                  <span>TOTAL_NODES: 18</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: LeetCode Stats */}
        <div className="md:col-span-4 space-y-6">
          <div className="bg-surface-container-lowest p-8 border border-outline-variant/10 relative overflow-hidden h-full flex flex-col items-center justify-center">
            <div className="absolute top-0 left-0 p-4">
              <span className="font-headline text-[10px] tracking-widest text-primary">
                ALGO_METRICS
              </span>
            </div>
            <div className="relative w-48 h-48 mb-8">
              {/* SVG Circular Progress */}
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  className="text-surface-container-high"
                  cx="96"
                  cy="96"
                  fill="transparent"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="8"
                />
                <circle
                  className="text-primary"
                  cx="96"
                  cy="96"
                  fill="transparent"
                  r="88"
                  stroke="currentColor"
                  strokeDasharray="553"
                  strokeDashoffset="470"
                  strokeWidth="8"
                />
                <circle
                  className="text-surface-container-high"
                  cx="96"
                  cy="96"
                  fill="transparent"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="8"
                />
                <circle
                  className="text-secondary"
                  cx="96"
                  cy="96"
                  fill="transparent"
                  r="70"
                  stroke="currentColor"
                  strokeDasharray="440"
                  strokeDashoffset="110"
                  strokeWidth="8"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-[10px] font-headline text-slate-500 uppercase tracking-widest">
                  SOLVED
                </span>
                <span className="text-3xl font-headline font-bold text-on-surface">
                  450
                </span>
                <span className="text-[10px] font-headline text-primary">
                  /3000
                </span>
              </div>
            </div>
            <div className="w-full space-y-4">
              {[
                { label: "Easy", count: "210/600", color: "bg-primary" },
                { label: "Medium", count: "190/1400", color: "bg-secondary" },
                { label: "Hard", count: "50/1000", color: "bg-slate-500" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 ${stat.color}`} />
                    <span className="text-[10px] font-headline uppercase">
                      {stat.label}
                    </span>
                  </div>
                  <span className="text-[10px] font-headline font-bold text-on-surface">
                    {stat.count}
                  </span>
                </div>
              ))}
            </div>
            <button className="mt-8 w-full border border-secondary/20 py-2 font-headline text-[10px] tracking-widest hover:bg-secondary/10 transition-colors uppercase">
              View_LeetCode_Profile
            </button>
          </div>
        </div>

        {/* Full Width Activity Graph */}
        <div className="md:col-span-12">
          <div className="bg-surface-container-lowest p-8 border border-outline-variant/10">
            <div className="flex justify-between items-center mb-12">
              <h3 className="font-headline text-xs font-bold tracking-widest text-secondary flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">
                  timeline
                </span>
                SYSTEM_TRAFFIC_LOGS
              </h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-0.5 bg-primary" />
                  <span className="text-[8px] font-headline text-slate-500 uppercase">
                    Requests
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-0.5 bg-secondary" />
                  <span className="text-[8px] font-headline text-slate-500 uppercase">
                    Latency
                  </span>
                </div>
              </div>
            </div>

            <TrafficChart />

            <div className="mt-4 flex justify-between text-[8px] font-headline text-slate-600 uppercase tracking-widest">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating HUD */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-none hidden md:block">
        <div className="bg-surface-container-highest/40 backdrop-blur-xl p-4 border border-secondary/20 pointer-events-auto">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <span className="text-[8px] font-headline text-secondary uppercase tracking-widest">
                SCRL_POS
              </span>
              <div className="h-1 w-24 bg-surface-container relative">
                <div className="absolute inset-y-0 left-0 bg-secondary w-[15%]" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[8px] font-headline text-primary uppercase tracking-widest">
                SYS_INT
              </span>
              <div className="h-1 w-24 bg-surface-container relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 bg-primary w-[80%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
