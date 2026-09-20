import type { BookingStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

const statusStyles: Record<BookingStatus, string> = {
  REQUESTED: "border-warning/70 bg-warning-bg text-warning",
  ACCEPTED: "border-info/70 bg-info-bg text-info",
  DECLINED: "border-danger/70 bg-danger-bg text-danger",
  PAID: "border-success/70 bg-success-bg text-success",
  IN_PROGRESS: "border-info/70 bg-info-bg text-info",
  COMPLETED: "border-success/70 bg-success-bg text-success",
  CANCELLED: "border-ink/30 bg-muted text-muted-foreground",
};

export function BookingStatusBadge({ status }: { status: BookingStatus }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em]",
        statusStyles[status]
      )}
    >
      <span className="size-1.5 rounded-full bg-current" aria-hidden />
      {status.replace("_", " ")}
    </span>
  );
}
