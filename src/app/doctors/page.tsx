import type { Metadata } from "next";
import { DoctorsDirectory } from "@/components/DoctorsDirectory";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Our healthcare team",
  description: "Meet the professionals supporting your healthcare journey.",
};

export default function DoctorsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <SectionHeading
        as="h1"
        id="doctors-heading"
        title="Our healthcare team"
        description="Meet the professionals supporting your healthcare journey."
      />
      <DoctorsDirectory />
    </div>
  );
}
