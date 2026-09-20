"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

export function Dialog({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const priorFocus = document.activeElement as HTMLElement | null;
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      priorFocus?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  const dialog = (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-ink/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className="animate-ticket relative w-full max-w-md rounded-2xl border border-edge bg-ticket-hi text-ink shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-5 sm:p-6">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {"FixItNow"}
                </p>
                <h2 className="mt-1 font-display text-xl font-bold leading-tight tracking-tight text-ink">
                  {title}
                </h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-edge text-steel transition-colors hover:bg-ink/5 hover:text-ink"
              >
                ✕
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );

  return typeof document === "undefined" ? null : createPortal(dialog, document.body);
}
