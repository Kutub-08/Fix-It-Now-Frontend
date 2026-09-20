"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ticket px-4 py-16 text-ink">
      <div className="w-full max-w-md rounded-2xl border border-edge bg-ticket-hi px-6 py-12 text-center shadow-sm">
        <p className="animate-stamp inline-block rounded-full border border-safety bg-safety/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-safety">
          {"\u2717 Ticket lost"}
        </p>
        <h1 className="mt-5 font-display text-3xl font-bold tracking-tight">
          Something went wrong
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-steel">
          {error.message}
        </p>
        <button
          onClick={reset}
          className="mt-6 rounded-xl bg-primary px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Try again
        </button>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
          If this keeps happening, contact support
        </p>
      </div>
    </div>
  );
}