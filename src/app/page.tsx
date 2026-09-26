import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { BentoCard } from "@/components/BentoCard";
import { CTASection } from "@/components/CTASection";
import { DoctorCard } from "@/components/DoctorCard";
import { QuickAccessCard } from "@/components/QuickAccessCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceIcon } from "@/components/ServiceIcon";
import { doctors } from "@/data/doctors";
import { getService, services } from "@/data/services";
import { hours, site } from "@/data/site";

const stats = [
  { value: "24/7", label: "Online support" },
  { value: "15+", label: "Health services" },
  { value: "20+", label: "Healthcare professionals" },
];

const reasons = [
  {
    number: "01",
    title: "Experienced care",
    body: "Qualified healthcare professionals focused on patient-centered care.",
  },
  {
    number: "02",
    title: "Easy access",
    body: "Simple appointment scheduling and clear information.",
  },
  {
    number: "03",
    title: "Patient first",
    body: "A calm, respectful experience designed around patients.",
  },
];

export default function HomePage() {
  const general = getService("general-consultation")!;
  const specialist = getService("specialist-care")!;
  const diagnostics = getService("diagnostics")!;
  const preventive = getService("preventive-care")!;
  const checkups = getService("health-checkups")!;
  const featuredDoctors = doctors.filter((doctor) => doctor.featured);

  return (
    <div className="mx-auto max-w-6xl space-y-20 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <section
        aria-labelledby="home-hero-heading"
        className="fade-in grid gap-4 lg:grid-cols-12"
      >
        <BentoCard className="flex flex-col justify-center bg-ice lg:col-span-7 lg:min-h-[420px]">
          <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
            {site.tagline}
          </p>
          <h1
            id="home-hero-heading"
            className="mt-4 text-4xl font-semibold tracking-tight text-navy sm:text-5xl lg:text-6xl"
          >
            Your health.
            <br />
            Our priority.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
            Accessible healthcare designed around your needs, with trusted
            professionals and convenient care.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/appointments" className="btn-primary">
              Book appointment
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore services
            </Link>
          </div>
        </BentoCard>

        <div className="grid gap-4 lg:col-span-5">
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-border bg-ice lg:min-h-[320px]">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80"
              alt="Healthcare professional reviewing patient information on a tablet in a clinic"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <BentoCard className="flex items-start gap-4">
            <div className="flex size-11 items-center justify-center rounded-xl bg-ice text-primary">
              <Clock className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.12em] text-primary uppercase">
                Open today
              </p>
              <p className="mt-1 text-lg font-semibold text-navy">
                {hours.shortDays}
              </p>
              <p className="text-muted">{hours.time}</p>
            </div>
          </BentoCard>
        </div>
      </section>

      <section aria-label="Clinic highlights" className="fade-in space-y-3">
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <BentoCard key={stat.label} className="text-center sm:text-left">
              <p className="text-3xl font-semibold text-navy">{stat.value}</p>
              <p className="mt-2 text-sm font-medium tracking-[0.08em] text-muted uppercase">
                {stat.label}
              </p>
            </BentoCard>
          ))}
        </div>
        <p className="text-sm text-muted">
          Example figures that can be replaced with your clinic&apos;s details.
        </p>
      </section>

      <section aria-labelledby="help-heading" className="fade-in space-y-8">
        <SectionHeading id="help-heading" title="How can we help?" />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <QuickAccessCard
            service={general}
            title="General care"
            description="Routine consultations and everyday health concerns."
          />
          <QuickAccessCard
            service={specialist}
            title="Specialist care"
            description="Connect with healthcare professionals for specialized needs."
          />
          <QuickAccessCard
            service={diagnostics}
            title="Diagnostics"
            description="Access common diagnostic and laboratory services."
          />
          <QuickAccessCard
            service={preventive}
            title="Preventive care"
            description="Health checks and preventive wellness services."
          />
        </div>
      </section>

      <section aria-labelledby="featured-services-heading" className="fade-in space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading id="featured-services-heading" title="Care that fits your needs." />
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            View all services
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-12">
          <FeaturedServiceCard
            service={general}
            title="Primary care"
            className="lg:col-span-8 min-h-[220px]"
          />
          <FeaturedServiceCard
            service={checkups}
            title="Health checks"
            className="lg:col-span-4"
          />
          <FeaturedServiceCard
            service={diagnostics}
            title="Lab services"
            className="lg:col-span-5"
          />
          <FeaturedServiceCard
            service={specialist}
            title="Specialist consultations"
            className="lg:col-span-7"
          />
        </div>
      </section>

      <section
        aria-labelledby="why-heading"
        className="fade-in grid gap-8 lg:grid-cols-12 lg:items-start"
      >
        <div className="lg:col-span-4">
          <h2
            id="why-heading"
            className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
          >
            Why VITALCARE?
          </h2>
        </div>
        <div className="grid gap-4 lg:col-span-8">
          {reasons.map((reason) => (
            <BentoCard key={reason.number} className="flex gap-5">
              <p className="text-sm font-semibold tracking-[0.12em] text-primary">
                {reason.number}
              </p>
              <div>
                <h3 className="text-lg font-semibold text-navy">{reason.title}</h3>
                <p className="mt-2 text-base leading-7 text-muted">{reason.body}</p>
              </div>
            </BentoCard>
          ))}
        </div>
      </section>

      <section aria-labelledby="doctors-preview-heading" className="fade-in space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading id="doctors-preview-heading" title="Meet our care team." />
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            View all doctors
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </section>

      <CTASection
        heading="Ready to take the next step?"
        description="Book an appointment with our care team."
      />
    </div>
  );
}

function FeaturedServiceCard({
  service,
  title,
  className,
}: {
  service: (typeof services)[number];
  title: string;
  className?: string;
}) {
  return (
    <BentoCard hover className={className}>
      <div className="mb-6 flex size-11 items-center justify-center rounded-xl bg-ice text-primary">
        <ServiceIcon name={service.icon} />
      </div>
      <h3 className="text-2xl font-semibold text-navy">{title}</h3>
      <p className="mt-3 max-w-md text-base leading-7 text-muted">
        {service.summary}
      </p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
      >
        View service
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </BentoCard>
  );
}
