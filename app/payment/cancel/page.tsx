"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function PaymentCancelContent() {
  const searchParams = useSearchParams();
  const tranId = searchParams.get("tran_id");

  return (
    <div className="flex min-h-[60vh] items-center justify-center p-8">
      <div className="w-full max-w-md rounded-2xl border border-edge bg-ticket-hi p-8 shadow-md">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-danger">
          Payment cancelled
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink">
          No charge was made.
        </h1>
        <p className="mt-3 text-sm text-steel">
          You can retry payment anytime from your dashboard. The booking stays
          reserved until then.
        </p>
        {tranId && (
          <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-steel/70">
            Transaction · {tranId}
          </p>
        )}
        <div className="mt-6">
          <Link
            href="/dashboard/bookings"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Back to my bookings
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PaymentCancelPage() {
  return (
    <Suspense fallback={null}>
      <PaymentCancelContent />
    </Suspense>
  );
}