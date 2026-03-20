"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sideLinks = [
  { href: "/", label: "DASHBOARD", icon: "grid_view" },
  { href: "/about", label: "BLUEPRINTS", icon: "architecture" },
  { href: "/repairs", label: "REPAIRS", icon: "build" },
  { href: "/contact", label: "TERMINAL", icon: "terminal" },
];

export function SideNav() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`hidden lg:flex flex-col h-screen pt-24 fixed left-0 top-0 bg-surface-container-low border-r border-secondary/5 z-40 transition-all duration-300 ease-in-out ${
        expanded ? "w-64" : "w-16"
      }`}
    >
      {/* Identity Block */}
      <div className={`mb-12 transition-all duration-300 ${expanded ? "px-6" : "px-3"}`}>
        <div className="flex items-center gap-4 mb-2">
          <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center border border-secondary/20 shrink-0">
            <span className="material-symbols-outlined text-secondary text-xl">
              account_circle
            </span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              expanded ? "opacity-100 w-auto" : "opacity-0 w-0"
            }`}
          >
            <div className="text-sm font-black text-secondary font-headline tracking-tighter whitespace-nowrap">
              OPERATOR_01
            </div>
            <div className="text-[10px] text-on-surface-variant/40 font-headline uppercase tracking-tighter whitespace-nowrap">
              STATUS: SYNCING
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1">
        {sideLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              title={link.label}
              className={`flex items-center gap-4 py-4 font-headline font-medium text-xs tracking-tight transition-all ${
                expanded ? "px-6" : "px-4 justify-center"
              } ${
                isActive
                  ? "bg-secondary/10 text-secondary border-l-4 border-primary"
                  : "text-on-surface-variant/40 hover:bg-surface-container-high"
              }`}
            >
              <span className="material-symbols-outlined text-lg shrink-0">
                {link.icon}
              </span>
              <span
                className={`overflow-hidden transition-all duration-300 whitespace-nowrap ${
                  expanded ? "opacity-100 w-auto" : "opacity-0 w-0"
                }`}
              >
                {link.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Widget */}
      <div className={`mt-auto p-4 transition-all duration-300 ${expanded ? "px-6" : "px-3"}`}>
        <div
          className={`bg-surface-container-highest/20 border-l border-primary/30 transition-all duration-300 ${
            expanded ? "p-4" : "p-2"
          }`}
        >
          <div
            className={`font-headline text-[10px] text-primary mb-1 overflow-hidden transition-all duration-300 whitespace-nowrap ${
              expanded ? "opacity-100 h-auto" : "opacity-0 h-0 mb-0"
            }`}
          >
            SYSTEM_LOAD
          </div>
          <div className="w-full bg-surface-container-highest h-1">
            <div className="bg-secondary h-full w-2/3" />
          </div>
        </div>
      </div>
    </aside>
  );
}
