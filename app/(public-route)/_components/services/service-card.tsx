import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { ServiceListItem } from "@/lib/types";
import { bdt } from "../home/data";

export interface ServiceCardData {
  serial: string;
  id: string;
  category: string;
  title: string;
  description: string;
  durationMins: number;
  price: number;
  technician: string;
  rating: number;
  reviews: number;
  area: string;
}

export function toServiceCard(
  s: ServiceListItem,
  index: number
): ServiceCardData {
  return {
    serial: `FIN-${1042 + index}`,
    id: s.id,
    category: s.category?.name ?? "Service",
    title: s.title,
    description: s.description,
    durationMins: s.durationMins,
    price: Number(s.price) || 0,
    technician: s.technician?.user.name ?? "Technician",
    rating: s.technician?.avgRating ?? 0,
    reviews: s.technician?.totalReviews ?? 0,
    area: s.technician?.location ?? "Dhaka",
  };
}

export function ServiceCard({ service }: { service: ServiceCardData }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-edge bg-ticket-hi shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
      <div className="flex items-center justify-between gap-2 border-b border-edge px-5 py-3">
        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-steel">
          {"// "}
          {service.serial}
        </span>
        <span className="rounded-full bg-warning-bg px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-warning">
          {service.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold leading-snug">
          {service.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-steel line-clamp-2">
          {service.description}
        </p>
        <div className="mt-auto pt-4">
          <div className="flex items-end justify-between gap-3 border-t border-edge pt-3">
            <div className="min-w-0">
              <p className="truncate font-mono text-[10px] uppercase tracking-wider text-steel">
                {service.technician}
              </p>
              <p className="font-mono text-[10px] text-steel">
                {"\u2605"} {service.rating} ({service.reviews})
                {"\u00a0\u00b7\u00a0"}
                {service.area}
                {"\u00a0\u00b7\u00a0"}
                {service.durationMins} min
              </p>
            </div>
            <span className="shrink-0 font-display text-xl font-bold tabular-nums text-primary">
              {bdt(service.price)}
            </span>
          </div>
          <Button
            asChild
            className="mt-3 block w-full rounded-xl bg-primary px-3 py-2 text-center font-display text-sm font-bold text-primary-foreground group-hover:bg-primary/90 hover:bg-primary/90"
          >
            <Link href={`/services/${service.id}`}>Details</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}