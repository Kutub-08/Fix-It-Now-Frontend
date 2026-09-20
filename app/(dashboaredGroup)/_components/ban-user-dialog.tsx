"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Dialog } from "@/components/ui/dialog";
import type { AdminUserListItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { updateUserStatus } from "../_actions/updateUserStatus";

export function BanUserDialog({
  user,
  open,
  onClose,
}: {
  user: AdminUserListItem;
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const banning = user.status === "ACTIVE";
  const label = banning ? "Ban" : "Unban";

  function handleConfirm() {
    startTransition(async () => {
      const res = await updateUserStatus(user.id, banning ? "BANNED" : "ACTIVE");
      if (res.success) {
        toast.success(res.message);
        onClose();
        router.refresh();
      } else {
        toast.error(res.message);
      }
    });
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={banning ? "Ban this user?" : "Unban this user?"}
    >
      <p className="text-sm leading-relaxed text-steel">
        {banning ? "This will block " : "This will restore "}
        <span className="font-semibold text-ink">{user.name}</span>
        {banning
          ? " from the platform. They won\u2019t be able to log in until you unban them."
          : " to the platform. They can log in again."}
      </p>
      <div className="mt-6 flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="rounded-xl border border-edge px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-muted"
        >
          Keep
        </button>
        <button
          type="button"
          onClick={handleConfirm}
          disabled={pending}
          className={cn(
            "rounded-xl px-4 py-2 text-sm font-medium text-bone shadow-sm transition-colors disabled:pointer-events-none disabled:opacity-60",
            banning
              ? "bg-danger hover:bg-danger/85"
              : "bg-success hover:bg-success/85"
          )}
        >
          {pending ? "Updating…" : label}
        </button>
      </div>
    </Dialog>
  );
}
