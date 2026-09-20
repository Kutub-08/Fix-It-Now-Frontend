import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "./section-heading";

const steps = [
  {
    n: "01",
    title: "Book",
    tag: "Requested",
    tagClass: "border border-edge bg-muted text-muted-foreground",
    body: "Pick a service and a time that suits you. No phone calls, no haggling.",
  },
  {
    n: "02",
    title: "Pay",
    tag: "Paid",
    tagClass: "border border-edge bg-muted text-muted-foreground",
    body: "Secure checkout — the price on the ticket is the price you pay.",
  },
  {
    n: "03",
    title: "Done",
    tag: "Done",
    tagClass: "border border-transparent bg-success-bg text-success",
    body: "A vetted pro shows up on time and gets it fixed. Rate them after.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 border-t border-edge">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="// How it works"
          title="Booked, paid, done — in that order."
          sub="Every job runs through the same three tickets. You always know exactly where your fix stands."
        />
        <ol className="relative grid gap-4 md:grid-cols-3">
          <span
            aria-hidden
            className="absolute left-[16.67%] right-[16.67%] top-9 hidden border-t-2 border-dashed border-edge md:block"
          />
          {steps.map((step) => (
            <li key={step.n} className="relative">
              <Card className="flex h-full flex-col rounded-2xl border-edge bg-ticket-hi p-6 shadow-sm">
                <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                  {step.n}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  {step.body}
                </p>
                <Badge
                  className={`mt-5 inline-flex w-fit font-mono text-[10px] font-bold uppercase tracking-widest ${step.tagClass}`}
                >
                  {step.tag}
                </Badge>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}