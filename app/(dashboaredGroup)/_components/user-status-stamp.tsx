import type { UserStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

export function UserStatusStamp({ status }: { status: UserStatus }) {
  const banned = status === "BANNED";

  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em]",
        banned
          ? "border-danger/40 bg-danger-bg text-danger"
          : "border-success/40 bg-success-bg text-success"
      )}
    >
      <span className="size-1.5 rounded-full bg-current" aria-hidden />
      {status}
    </span>
  );
}