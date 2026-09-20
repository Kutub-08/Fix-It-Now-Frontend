"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Dialog } from "@/components/ui/dialog";
import { cancelBooking } from "../_actions/cancelBooking";

export function CancelBookingDialog({
  open,
  onClose,
  bookingId,
  serviceTitle,
}: {
  open: boolean;
  onClose: () => void;
  bookingId: string;
  serviceTitle: string;
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [reason, setReason] = useState("");

  function handleConfirm() {
    startTransition(async () => {
      const res = await cancelBooking(bookingId, reason);
      if (res.success) {
        toast.success(res.message);
        setReason("");
        onClose();
        router.refresh();
      } else {
        toast.error(res.message);
      }
    });
  }

  return (
    <Dialog open={open} onClose={onClose} title="Cancel booking?">
      <p className="text-sm leading-relaxed text-steel">
        This will cancel{" "}
        <span className="font-semibold text-ink">{serviceTitle}</span>.
        Once cancelled it can&apos;t be undone.
      </p>
      <label
        htmlFor="cancel-reason"
        className="mb-1.5 mt-5 block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-steel"
      >
        Reason <span className="normal-case tracking-normal text-steel/70">(optional)</span>
      </label>
      <textarea
        id="cancel-reason"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        rows={2}
        placeholder="Changed my mind…"
        className="w-full rounded-xl border border-edge bg-ticket-hi px-3 py-2 text-sm text-ink shadow-xs placeholder:text-steel/60 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:outline-none"
      />
      <div className="mt-6 flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="rounded-xl border border-edge px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink/5"
        >
          Keep booking
        </button>
        <button
          type="button"
          onClick={handleConfirm}
          disabled={pending}
          className="rounded-xl bg-danger px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-danger/85 disabled:pointer-events-none disabled:opacity-60"
        >
          {pending ? "Cancelling…" : "Cancel booking"}
        </button>
      </div>
    </Dialog>
  );
}
