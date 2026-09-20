import Link from "next/link";

export function DispatchHeader({ serial }: { serial: string }) {
  return (
    <section className="hero-grid border-b border-primary-foreground/15 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-8 sm:px-6">
        <Link
          href="/services"
          className="font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground/70 transition-colors hover:text-safety"
        >
          {"\u2190"} The board \u00b7 all services
        </Link>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground/50">
          ticket {serial}
        </span>
      </div>
    </section>
  );
}

export function BoardCta() {
  return (
    <section className="hero-grid border-t border-primary-foreground/15 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
            {"// not the one?"}
          </p>
          <p className="mt-1 font-display text-2xl font-bold leading-snug text-primary-foreground">
            Something else on the board needs fixing.
          </p>
        </div>
        <Link
          href="/services"
          className="inline-flex h-11 items-center justify-center rounded-xl bg-safety px-6 font-display text-base font-bold text-ink shadow-sm transition-all hover:-translate-y-px hover:bg-safety/90"
        >
          Browse all services
        </Link>
      </div>
    </section>
  );
}