import Link from "next/link";

export function RecordError({ retryHref = "/dashboard/profile" }: { retryHref?: string }) {
  return (
    <div className="mx-auto max-w-3xl rounded-2xl border-2 border-dashed border-edge bg-ticket-hi px-6 py-16 text-center">
      <p className="font-display text-xl font-bold text-ink">
        Couldn&apos;t read your record.
      </p>
      <p className="mx-auto mt-2 max-w-sm text-sm text-steel">
        The dispatch desk couldn&apos;t load your file. Check your connection and
        try again.
      </p>
      <Link
        href={retryHref}
        className="mt-6 inline-block rounded-xl bg-primary px-5 py-2.5 font-display text-sm font-bold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
      >
        Try again
      </Link>
    </div>
  );
}