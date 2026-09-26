import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type CTASectionProps = {
  heading: string;
  description: string;
  href?: string;
  label?: string;
};

export function CTASection({
  heading,
  description,
  href = "/appointments",
  label = "Book an appointment",
}: CTASectionProps) {
  return (
    <section aria-labelledby="appointment-cta-heading" className="fade-in">
      <div className="rounded-2xl border border-primary/20 bg-primary px-6 py-10 text-white sm:px-10 sm:py-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-3">
            <h2
              id="appointment-cta-heading"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              {heading}
            </h2>
            <p className="text-base leading-7 text-white/90 sm:text-lg">
              {description}
            </p>
          </div>
          <Link
            href={href}
            className={cn(
              "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-base font-semibold text-navy",
              "transition-colors hover:bg-ice focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
            )}
          >
            {label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
