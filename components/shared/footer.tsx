import Link from "next/link";
import { Wrench } from "lucide-react";

const columns = [
  {
    title: "Services",
    links: [
      { href: "#services", label: "Plumbing" },
      { href: "#services", label: "Electrical" },
      { href: "#services", label: "AC & Cooling" },
      { href: "#services", label: "Cleaning" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "#how", label: "How it works" },
      { href: "#pros", label: "Technicians" },
      { href: "/login", label: "Log in" },
      { href: "/register", label: "Join as a technician" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label="FixItNow — back to home"
          >
            <span className="flex size-8 items-center justify-center rounded-lg bg-safety text-ink">
              <Wrench className="size-4" aria-hidden />
            </span>
            <span className="font-display text-xl font-bold tracking-tight">
              FixItNow
            </span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
            Home services across Dhaka. Vetted pros, fixed prices in taka,
            booked in minutes.
          </p>
          <p className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">
            <span className="size-1.5 animate-pulse rounded-full bg-safety" aria-hidden />
            Open today · 8:00 AM – 9:00 PM
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
              {column.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/85 transition-colors hover:text-primary-foreground hover:underline underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-5 text-xs font-medium text-primary-foreground/60 sm:px-6">
          <span>© 2026 FixItNow</span>
          <span>Made for the homes of Dhaka</span>
          <span>Prices in BDT</span>
        </div>
      </div>
    </footer>
  );
}