export function StatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-edge bg-ticket-hi p-5 shadow-sm">
      <span
        aria-hidden
        className="absolute right-3 top-3 size-2.5 rounded-full bg-primary/20"
      />
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-steel">
        {label}
      </p>
      <p className="mt-2 font-display text-3xl font-bold tracking-tight text-ink">
        {value}
      </p>
      {hint && (
        <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-steel/70">
          {hint}
        </p>
      )}
    </div>
  );
}