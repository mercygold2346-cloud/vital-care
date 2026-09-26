import type { Metadata } from "next";
import { AppointmentForm } from "@/components/AppointmentForm";
import { BentoCard } from "@/components/BentoCard";

export const metadata: Metadata = {
  title: "Book an appointment",
  description:
    "Choose a preferred date and provide a few details so our team can assist you.",
};

export default function AppointmentsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
        Book an appointment
      </h1>
      <p className="mt-4 text-lg leading-8 text-muted">
        Choose a preferred date and provide a few details so our team can assist
        you.
      </p>
      <BentoCard className="mt-8">
        <AppointmentForm />
      </BentoCard>
    </div>
  );
}
