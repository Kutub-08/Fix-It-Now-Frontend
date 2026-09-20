export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-edge bg-ticket-hi px-6 py-14 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-steel">
        Nothing here yet
      </p>
      <h3 className="mt-2 font-display text-xl font-bold text-ink">{title}</h3>
      {description && (
        <p className="mx-auto mt-1 max-w-sm text-sm text-steel">{description}</p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
