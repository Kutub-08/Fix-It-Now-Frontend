import type { Metadata } from "next";
import Link from "next/link";
import LoginForm from "../_components/LoginForm";

export const metadata: Metadata = {
  title: "Sign in \u2014 FixItNow",
};

type LoginSearchParams = Promise<{ next?: string }>;

export default async function LoginPage({
  searchParams,
}: {
  searchParams: LoginSearchParams;
}) {
  const params = await searchParams;
  const next = typeof params.next === "string" ? params.next : "";

  return (
    <section className="grid min-h-[80dvh] bg-ticket md:grid-cols-2">
      <div className="hero-grid flex items-center border-b border-primary-foreground/15 bg-primary px-6 py-16 text-primary-foreground sm:px-10 md:border-b-0 md:border-r md:border-r-edge">
        <div className="mx-auto w-full max-w-md">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
            {"// FixItNow \u00b7 member sign-in"}
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[1.02] tracking-tight text-primary-foreground sm:text-6xl">
            Punch in.
          </h1>
          <p className="mt-5 max-w-sm text-lg leading-relaxed text-primary-foreground/80">
            Your tickets, jobs and crew are waiting. Sign in and get back to
            the board.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-primary-foreground/60">
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-safety" />
              Vetted pros
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-safety" />
              Fixed prices
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-safety" />
              Booked in 2 min
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center px-6 py-16 sm:px-10">
        <div className="w-full max-w-md overflow-hidden rounded-2xl border border-edge bg-ticket-hi shadow-sm">
          <div className="flex items-center justify-between gap-4 border-b border-edge px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-steel sm:px-6">
            <span>{"// Member sign-in"}</span>
            <span aria-hidden>{"\u25cb"} Form 01</span>
          </div>

          <LoginForm redirectTo={next} />

          <div className="border-t border-edge px-5 py-4 sm:px-6">
            <p className="font-mono text-[11px] uppercase tracking-wider text-steel">
              New to FixItNow?{" "}
              <Link
                href="/register"
                className="font-bold text-primary underline underline-offset-4 transition-colors hover:text-safety"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}