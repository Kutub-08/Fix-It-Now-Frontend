import type { PaymentStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

const statusStyles: Record<PaymentStatus, string> = {
  PENDING: "border-warning/70 bg-warning-bg text-warning",
  COMPLETED: "border-success/70 bg-success-bg text-success",
  FAILED: "border-danger/70 bg-danger-bg text-danger",
  REFUNDED: "border-ink/30 bg-muted text-muted-foreground",
};

export function PaymentStatusBadge({ status }: { status: PaymentStatus }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em]",
        statusStyles[status]
      )}
    >
      <span className="size-1.5 rounded-full bg-current" aria-hidden />
      {status}
    </span>
  );
}
