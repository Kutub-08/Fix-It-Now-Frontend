import { Fragment } from "react";
import { cn } from "@/lib/utils";
import type { BookingStatus } from "@/lib/types";

const STEPS: Array<{ status: BookingStatus; label: string }> = [
  { status: "REQUESTED", label: "Requested" },
  { status: "ACCEPTED", label: "Accepted" },
  { status: "PAID", label: "Paid" },
  { status: "COMPLETED", label: "Done" },
];

const POSITION: Record<string, number> = {
  REQUESTED: 0,
  ACCEPTED: 1,
  IN_PROGRESS: 1,
  PAID: 2,
  COMPLETED: 3,
};

const DISMISSED: Array<{ status: string; label: string }> = [
  { status: "CANCELLED", label: "Cancelled" },
  { status: "DECLINED", label: "Declined" },
];

export function JobRail({
  status,
  className,
}: {
  status: string;
  className?: string;
}) {
  const idx = POSITION[status] ?? -1;
  const dismissed = DISMISSED.find((d) => d.status === status);

  return (
    <div
      role="group"
      aria-label={`Booking progress: ${
        dismissed
          ? dismissed.label.toLowerCase()
          : status.toLowerCase().replaceAll("_", " ")
      }`}
      className={cn("flex items-center", className)}
    >
      {dismissed ? (
        <span className="flex items-center gap-2 rounded-full bg-danger-bg px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-danger">
          <span className="size-1.5 rounded-full bg-danger" aria-hidden />
          {dismissed.label}
        </span>
      ) : (
        STEPS.map((step, i) => (
          <Fragment key={step.status}>
            {i > 0 && (
              <span
                aria-hidden
                className={cn(
                  "h-0.5 flex-1 rounded-full",
                  i <= idx ? "bg-primary/50" : "bg-edge"
                )}
              />
            )}
            <span className="flex flex-col items-center gap-1.5">
              <span
                aria-hidden
                className={cn(
                  "size-2 rounded-full",
                  i < idx
                    ? "bg-primary"
                    : i === idx
                      ? "animate-pulse bg-safety ring-2 ring-safety/30"
                      : "bg-edge"
                )}
              />
              <span
                className={cn(
                  "text-[10px] font-semibold uppercase tracking-wider",
                  i === idx
                    ? "text-primary"
                    : i < idx
                      ? "text-steel"
                      : "text-steel/60"
                )}
              >
                {step.label}
              </span>
            </span>
          </Fragment>
        ))
      )}
    </div>
  );
}