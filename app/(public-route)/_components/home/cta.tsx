import Link from "next/link";

export function Cta() {
  return (
    <section className="hero-grid border-t border-edge bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
          {"// Join the board"}
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
          Are you the fix?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
          Technicians: publish your services and let the neighbourhood book you
          in. Free to join, paid on every completed job.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/register"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-safety px-6 font-display text-base font-bold text-ink shadow-sm transition-all hover:-translate-y-px hover:bg-safety/90"
          >
            Become a technician
          </Link>
          <Link
            href="#services"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-primary-foreground/40 px-6 font-display text-base font-bold text-primary-foreground transition-all hover:border-primary-foreground/70 hover:bg-primary-foreground/10"
          >
            Browse services
          </Link>
        </div>
      </div>
    </section>
  );
}