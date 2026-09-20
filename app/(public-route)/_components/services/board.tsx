import Link from "next/link";
import type { Category, ServiceListItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ServiceCard, toServiceCard, type ServiceCardData } from "./service-card";

interface ServicesBoardProps {
  services: ServiceListItem[];
  total: number;
  totalPages: number;
  currentPage: number;
  search: string;
  category: string;
  categories: Category[];
}

function makeHref(params: { search?: string; category?: string; page?: number }) {
  const query = new URLSearchParams();
  if (params.search) query.set("search", params.search);
  if (params.category) query.set("category", params.category);
  if (params.page && params.page > 1) query.set("page", String(params.page));
  const qs = query.toString();
  return qs ? `/services?${qs}` : "/services";
}

export function ServicesBoard({
  services,
  total,
  totalPages,
  currentPage,
  search,
  category,
  categories,
}: ServicesBoardProps) {
  const list = services.map(toServiceCard);
  const hasFilters = Boolean(search || category);
  const tabs = [
    { name: "All", value: "" },
    ...categories.map((c) => ({ name: c.name, value: c.name })),
  ];

  return (
    <>
      <section className="hero-grid border-b border-edge bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
            {"// The board \u00b7 all services"}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-primary-foreground sm:text-5xl">
            Every job, one ticket.
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            Fixed prices in taka, set before anyone picks up a tool. Tear off a
            ticket, pick a slot, and a vetted pro takes the other half.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-2xl border border-edge bg-ticket-hi p-3 shadow-sm sm:p-4">
          <form action="/services" method="get" className="flex flex-wrap items-center gap-2">
            {category && <input type="hidden" name="category" value={category} />}
            <label
              htmlFor="services-search"
              className="font-mono text-[10px] uppercase tracking-widest text-steel"
            >
              Find
            </label>
            <input
              id="services-search"
              name="search"
              type="search"
              defaultValue={search}
              placeholder="AC cooling, leak, wiring\u2026"
              className="h-10 min-w-0 flex-1 basis-56 rounded-xl border border-edge bg-ticket-hi px-3 text-sm text-ink shadow-xs placeholder:text-steel/60 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:outline-none"
            />
            <button
              type="submit"
              className="h-10 rounded-xl bg-primary px-4 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Go
            </button>
          </form>

          <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-edge pt-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-steel">
              Category
            </span>
            {tabs.map((tab) => {
              const active = category === tab.value;
              const href = makeHref({
                search,
                category: tab.value || undefined,
              });
              return (
                <Link
                  key={tab.value || "all"}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full border px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-widest transition-colors",
                    active
                      ? "border-transparent bg-primary text-primary-foreground shadow-sm"
                      : "border-edge bg-ticket-hi text-ink hover:bg-primary/5"
                  )}
                >
                  {tab.name}
                </Link>
              );
            })}
            {hasFilters && (
              <Link
                href="/services"
                className="ml-auto rounded-full border border-safety/50 bg-warning-bg px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-warning transition-colors hover:bg-warning-bg"
              >
                clear filters
              </Link>
            )}
          </div>
        </div>

        <div className="mt-6">
          <p className="font-mono text-[11px] uppercase tracking-wider text-steel">
            {"// "}
            {list.length} of {total} tickets
            {category && <> \u00b7 {category}</>}
            {search && <> \u00b7 “{search}”</>}
          </p>
        </div>

        {list.length > 0 ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((service: ServiceCardData) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border-2 border-dashed border-edge p-12 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-steel">
              Nothing on the board matches
            </p>
            <p className="mt-2 font-display text-xl font-bold">
              “{search || category || "that"}”.
            </p>
            <Link
              href="/services"
              className="mt-4 inline-block rounded-xl bg-primary px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
            >
              clear filters
            </Link>
          </div>
        )}

        {totalPages > 1 && (
          <nav
            className="mt-10 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest"
            aria-label="Pagination"
          >
            {currentPage > 1 ? (
              <Link
                href={makeHref({ search, category, page: currentPage - 1 })}
                className="rounded-xl border border-edge bg-ticket-hi px-3 py-2 text-ink transition-colors hover:bg-primary/5"
              >
                {"\u2039"} Prev
              </Link>
            ) : (
              <span className="px-3 py-2 text-steel/50">{"\u2039"} Prev</span>
            )}
            <span className="px-3 py-2 text-steel">
              Page {currentPage} of {totalPages}
            </span>
            {currentPage < totalPages ? (
              <Link
                href={makeHref({ search, category, page: currentPage + 1 })}
                className="rounded-xl border border-edge bg-ticket-hi px-3 py-2 text-ink transition-colors hover:bg-primary/5"
              >
                Next {"\u203a"}
              </Link>
            ) : (
              <span className="px-3 py-2 text-steel/50">Next {"\u203a"}</span>
            )}
          </nav>
        )}
      </div>
    </>
  );
}