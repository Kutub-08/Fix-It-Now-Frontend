"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuth } from "@/contexts/auth-context";
import type { User } from "@/lib/types";
import { Label } from "@/components/ui/input";

const inputClass =
  "w-full rounded-xl border border-edge bg-ticket-hi px-3 py-2.5 text-sm text-ink shadow-xs placeholder:text-steel/60 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:outline-none";

const labelClass =
  "mb-1.5 block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-steel";

const roleHome: Record<User["role"], string> = {
  CUSTOMER: "/dashboard",
  TECHNICIAN: "/technician-dashboard",
  ADMIN: "/admin-dashboard",
};

export default function LoginForm({ redirectTo }: { redirectTo: string }) {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setPending(true);

    let role: User["role"] | null = null;
    try {
      role = await login(email.trim(), password);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Sign-in failed. Try again.";
      setError(message);
      toast.error(message);
      setPending(false);
      return;
    }

    toast.success("Signed in");
    const destination =
      redirectTo &&
      redirectTo.startsWith("/") &&
      !redirectTo.startsWith("//")
        ? redirectTo
        : roleHome[role ?? "CUSTOMER"];

    router.replace(destination);
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 px-5 py-6 sm:px-6">
      <div>
        <Label htmlFor="email" className={labelClass}>
          Email
        </Label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          className={inputClass}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="password" className={labelClass}>
          Password
        </Label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
          className={inputClass}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && (
        <p
          role="alert"
          className="flex items-start gap-2 rounded-xl border border-danger/30 bg-danger-bg px-3 py-2.5"
        >
          <span
            aria-hidden
            className="font-mono text-sm font-bold text-danger"
          >
            {"\u2717"}
          </span>
          <span className="text-sm leading-relaxed text-ink">{error}</span>
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-display text-base font-bold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-60"
      >
        {pending && (
          <span
            aria-hidden
            className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          />
        )}
        {pending ? "Signing in\u2026" : "Sign in"}
      </button>
    </form>
  );
}