"use client";

import { usePathname } from "next/navigation";
import type { User } from "@/lib/types";
import { breadcrumb, sectionTitle } from "./nav";
import { ThemeToggle } from "@/components/theme-toggle";

export function Topbar({
  role,
  user,
  onMenu,
}: {
  role: string;
  user?: User;
  onMenu: () => void;
}) {
  const pathname = usePathname();

  const today = new Date()
    .toLocaleDateString("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "short",
    })
    .toUpperCase()
    .replace(/\s+/g, " · ");

  return (
    <header className="sticky top-0 z-30 border-b border-edge bg-ticket/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-3 px-4 sm:px-6">
        <button
          type="button"
          onClick={onMenu}
          aria-label="Open navigation"
          className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-edge text-ink transition-colors hover:bg-ink/5 lg:hidden"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M2 4h12M2 8h12M2 12h12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="flex min-w-0 items-baseline gap-3">
          <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:inline">
            {breadcrumb(pathname)}
          </span>
          <h1 className="truncate font-display text-xl font-bold tracking-tight text-ink">
            {sectionTitle(pathname)}
          </h1>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <span className="hidden text-xs font-semibold uppercase tracking-wider text-steel md:inline">
            {today}
          </span>
          <span className="hidden h-5 w-px bg-edge md:block" />
          <div className="hidden items-center gap-2.5 md:flex">
            <span className="max-w-40 truncate text-sm font-semibold text-steel">
              {user?.name ?? "…"}
            </span>
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary font-display text-xs font-bold text-primary-foreground">
              {user?.name?.trim().charAt(0).toUpperCase() ?? role.charAt(0)}
            </span>
          </div>
          <span className="rounded-full border border-edge bg-ticket px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-steel">
            {role}
          </span>
          <span className="text-ink">
            <ThemeToggle />
          </span>
        </div>
      </div>
    </header>
  );
}