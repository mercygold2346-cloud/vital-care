import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our services",
  description:
    "Explore our core healthcare services and find the right place to start.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <SectionHeading
        as="h1"
        id="services-heading"
        title="Our services"
        description="Explore our core healthcare services and find the right place to start."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </div>
  );
}
