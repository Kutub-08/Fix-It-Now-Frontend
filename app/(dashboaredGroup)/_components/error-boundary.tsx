"use client";

export function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-3xl rounded-2xl border-2 border-dashed border-edge bg-ticket-hi px-6 py-16 text-center">
      <p className="font-display text-xl font-bold text-ink">
        Couldn&apos;t load this page.
      </p>
      <p className="mx-auto mt-2 max-w-sm text-sm text-steel">
        {error.message ||
          "Something went wrong while talking to the dispatch desk. Try again."}
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 inline-block rounded-xl bg-primary px-5 py-2.5 font-display text-sm font-bold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
      >
        Try again
      </button>
    </div>
  );
}