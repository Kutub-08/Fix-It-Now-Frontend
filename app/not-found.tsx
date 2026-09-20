import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ticket px-4 py-16 text-ink">
      <div className="w-full max-w-md rounded-2xl border border-edge bg-ticket-hi px-6 py-12 text-center shadow-sm">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-safety">
          {"// No such ticket"}
        </p>
        <p className="mt-4 font-display text-6xl font-black leading-none tracking-tight">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-bold tracking-tight">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-steel">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-xl bg-primary px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}