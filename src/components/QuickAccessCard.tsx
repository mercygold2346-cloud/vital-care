import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { Service } from "@/data/services";

export function QuickAccessCard({
  service,
  title,
  description,
}: {
  service: Service;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:border-navy/25 sm:p-7"
    >
      <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-ice text-primary">
        <ServiceIcon name={service.icon} />
      </div>
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted">{description}</p>
      <span className="mt-5 inline-flex items-center text-primary" aria-hidden="true">
        <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </span>
      <span className="sr-only">View {title}</span>
    </Link>
  );
}
