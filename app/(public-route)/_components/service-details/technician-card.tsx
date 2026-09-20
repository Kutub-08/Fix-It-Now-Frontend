import type { ServiceDetails } from "@/lib/types";

function initialsOf(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function TechnicianCard({
  technician,
}: {
  technician: ServiceDetails["technician"];
}) {
  const name = technician?.user.name ?? "Technician";
  const area = technician?.location ?? "Dhaka";
  const rating = technician?.avgRating ?? 0;
  const reviews = technician?.totalReviews ?? 0;
  const skills = technician?.skills ?? [];
  const experience = technician?.experienceYrs ?? 0;
  const verified = technician?.isVerified ?? false;

  return (
    <aside className="flex h-fit flex-col rounded-2xl border border-edge bg-ticket-hi shadow-sm">
      <div className="border-b border-edge p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-safety">
          {"// the pro on this job"}
        </p>
        <div className="mt-4 flex items-center gap-3">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-bold text-primary">
            {initialsOf(name)}
          </span>
          <div className="min-w-0">
            <h2 className="truncate font-display text-xl font-bold leading-tight text-ink">
              {name}
            </h2>
            <p className="mt-1 truncate font-mono text-[11px] uppercase tracking-wider text-steel">
              {area}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-edge pb-4 font-mono text-[11px] text-steel">
          <span className="text-ink">
            {"\u2605"}{" "}
            {rating > 0 ? rating.toFixed(1) : "new"} ({reviews})
          </span>
          <span>
            {experience} yr{experience === 1 ? "" : "s"} on the tools
          </span>
          {verified && (
            <span className="rounded-full bg-success-bg px-2 py-0.5 font-bold text-success">
              {"\u2713"} verified
            </span>
          )}
        </div>

        {technician?.bio && (
          <p className="text-sm leading-relaxed text-steel">{technician.bio}</p>
        )}

        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-steel">
            Skills
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {(skills.length > 0 ? skills : ["Vetted pro"]).map((skill) => (
              <li
                key={skill}
                className="rounded-lg border border-edge bg-muted px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-edge p-5">
        <p className="font-mono text-[10px] uppercase tracking-wider text-steel">
          {verified
            ? "Background-checked and rated by past customers."
            : "New to the board \u00b7 profile pending verification."}
        </p>
      </div>
    </aside>
  );
}