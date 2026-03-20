"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const topLinks = [
  { href: "/archive", label: "ARCHIVE" },
  { href: "/process", label: "PROCESS" },
  { href: "/specs", label: "SPECS" },
  { href: "/labs", label: "LABS" },
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 md:px-12 bg-surface/60 backdrop-blur-xl border-b border-primary/10">
      <Link
        href="/"
        className="font-headline font-bold text-primary tracking-tighter text-xl"
      >
        SYS_PORTFOLIO_V2.04
      </Link>

      <div className="hidden md:flex gap-8 items-center">
        {topLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-headline uppercase tracking-widest text-xs transition-colors duration-300 underline-hover ${
              pathname === link.href
                ? "text-primary after:w-full"
                : "text-on-surface-variant/70 hover:text-primary"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        href="/contact"
        className="font-headline uppercase tracking-widest text-xs bg-primary text-on-primary px-6 py-2 font-bold transition-all underline-hover hover:opacity-90"
      >
        CONNECT
      </Link>
    </nav>
  );
}
