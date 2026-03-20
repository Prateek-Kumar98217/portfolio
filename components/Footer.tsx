import Link from "next/link";

const footerLinks = [
  { href: "#", label: "GIT" },
  { href: "#", label: "LINKEDIN" },
  { href: "#", label: "LOGS" },
  { href: "#", label: "DEBUG" },
];

export function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 bg-surface border-t border-primary/5">
      <div className="font-headline text-[9px] uppercase tracking-[0.2em] text-primary">
        © 2024 SYSTEM_CORE // ALL_RIGHTS_RESERVED
      </div>
      <div className="flex gap-8">
        {footerLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="font-headline text-[9px] uppercase tracking-[0.2em] text-on-surface-variant/50 hover:text-secondary hover:tracking-[0.3em] transition-all duration-500"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
