import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { BentoCard } from "@/components/BentoCard";
import { ServiceIcon } from "@/components/ServiceIcon";
import { getService, services } from "@/data/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return {
    title: service.name,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <Link
        href="/services"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to services
      </Link>
      <BentoCard>
        <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-ice text-primary">
          <ServiceIcon name={service.icon} className="size-6" />
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-navy">
          {service.name}
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted">{service.description}</p>
        <Link href="/appointments" className="btn-primary mt-8">
          Book appointment
        </Link>
      </BentoCard>
    </div>
  );
}
