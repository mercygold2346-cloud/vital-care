import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { BentoCard } from "@/components/BentoCard";
import { ContactForm } from "@/components/ContactForm";
import { contactInfo } from "@/data/contact";
import { hours } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach VITALCARE by email, phone, or a short message.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
        We&apos;re here to help.
      </h1>

      <div className="grid gap-4 lg:grid-cols-12">
        <BentoCard className="space-y-6 lg:col-span-7">
          <h2 className="text-2xl font-semibold text-navy">Contact us</h2>
          <dl className="grid gap-5 sm:grid-cols-2">
            <div>
              <dt className="flex items-center gap-2 text-sm font-semibold tracking-[0.08em] text-muted uppercase">
                <Mail className="size-4 text-primary" aria-hidden="true" />
                Email
              </dt>
              <dd className="mt-2">
                <a href={`mailto:${contactInfo.email}`} className="text-navy">
                  {contactInfo.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-sm font-semibold tracking-[0.08em] text-muted uppercase">
                <Phone className="size-4 text-primary" aria-hidden="true" />
                Phone
              </dt>
              <dd className="mt-2">
                <a href={contactInfo.phoneHref} className="text-navy">
                  {contactInfo.phone}
                </a>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="flex items-center gap-2 text-sm font-semibold tracking-[0.08em] text-muted uppercase">
                <MapPin className="size-4 text-primary" aria-hidden="true" />
                Address
              </dt>
              <dd className="mt-2 text-navy">
                {contactInfo.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </dd>
            </div>
          </dl>
        </BentoCard>

        <div className="grid gap-4 lg:col-span-5">
          <BentoCard>
            <h2 className="flex items-center gap-2 text-lg font-semibold text-navy">
              <Clock className="size-4 text-primary" aria-hidden="true" />
              Opening hours
            </h2>
            <p className="mt-3 text-muted">{hours.days}</p>
            <p className="text-navy">{hours.compactTime}</p>
          </BentoCard>
          <BentoCard>
            <h2 className="text-lg font-semibold text-navy">Follow us</h2>
            <ul className="mt-4 space-y-2">
              {contactInfo.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-muted transition-colors hover:text-navy"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </BentoCard>
        </div>

        <BentoCard className="lg:col-span-7">
          <h2 className="text-2xl font-semibold text-navy">Contact form</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </BentoCard>

        <BentoCard className="flex min-h-[280px] flex-col justify-between bg-ice lg:col-span-5">
          <div>
            <h2 className="text-lg font-semibold text-navy">Clinic location</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Map placeholder for 123 Wellness Avenue. A live map can be added
              later without changing this layout.
            </p>
          </div>
          <div
            role="img"
            aria-label="Map placeholder showing the VITALCARE clinic location"
            className="mt-6 flex min-h-[180px] items-center justify-center rounded-xl border border-dashed border-primary/30 bg-white text-sm font-medium text-muted"
          >
            Map placeholder
          </div>
        </BentoCard>
      </div>
    </div>
  );
}
