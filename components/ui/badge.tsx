import { cn } from "@/lib/utils";

type Tone =
  | "neutral"
  | "green"
  | "amber"
  | "red"
  | "blue"
  | "purple"
  | "zinc";

const toneClasses: Record<Tone, string> = {
  neutral: "bg-muted text-muted-foreground",
  green: "bg-success-bg text-success",
  amber: "bg-warning-bg text-warning",
  red: "bg-danger-bg text-danger",
  blue: "bg-info-bg text-info",
  purple: "bg-info-bg text-info",
  zinc: "bg-muted text-muted-foreground",
};

export function Badge({
  tone = "neutral",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-semibold",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
