import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import { ServiceIcon } from "@/components/ServiceIcon";
import { cn } from "@/lib/cn";

type ServiceCardProps = {
  service: Service;
  className?: string;
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-border bg-white p-6 sm:p-8",
        "transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:border-navy/25",
        className,
      )}
    >
      <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-ice text-primary">
        <ServiceIcon name={service.icon} />
      </div>
      <h3 className="text-xl font-semibold text-navy">{service.name}</h3>
      <p className="mt-3 flex-1 text-base leading-7 text-muted">
        {service.summary}
      </p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform"
      >
        View service
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}
