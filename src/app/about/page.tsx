import type { Metadata } from "next";
import Image from "next/image";
import { BentoCard } from "@/components/BentoCard";
import { CTASection } from "@/components/CTASection";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "VITALCARE combines trusted healthcare with a simpler digital experience.",
};

const blocks = [
  {
    title: "Our mission",
    body: "Make high-quality care easier to understand and easier to reach, without adding complexity to the patient experience.",
  },
  {
    title: "Our approach",
    body: "We keep visits, information, and next steps simple so patients can focus on their health rather than navigating a complicated system.",
  },
  {
    title: "Our values",
    body: "Clarity, respect, and accessibility guide every interaction—from the first appointment request to follow-up care.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <section className="fade-in max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-navy sm:text-5xl lg:text-6xl">
          Healthcare
          <br />
          built around
          <br />
          people.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          {site.name} combines trusted healthcare with a simpler digital
          experience.
        </p>
      </section>

      <section aria-label="About VITALCARE" className="grid gap-4 md:grid-cols-3">
        {blocks.map((block) => (
          <BentoCard key={block.title}>
            <h2 className="text-xl font-semibold text-navy">{block.title}</h2>
            <p className="mt-3 text-base leading-7 text-muted">{block.body}</p>
          </BentoCard>
        ))}
      </section>

      <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-border bg-ice sm:min-h-[420px]">
        <Image
          src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1600&q=80"
          alt="Clinician speaking with a patient during a calm consultation"
          fill
          sizes="(min-width: 1024px) 70vw, 100vw"
          className="object-cover"
        />
      </div>

      <section className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          Care should feel simple.
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted">
          We designed VITALCARE around the people who use it. That means clear
          language, straightforward appointments, and a clinic experience that
          stays calm even when health questions feel urgent.
        </p>
      </section>

      <CTASection
        heading="Ready to take the next step?"
        description="Book an appointment with our care team."
      />
    </div>
  );
}
