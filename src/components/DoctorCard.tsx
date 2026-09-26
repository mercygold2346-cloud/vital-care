import Image from "next/image";
import type { Doctor } from "@/data/doctors";
import { cn } from "@/lib/cn";

type DoctorCardProps = {
  doctor: Doctor;
  className?: string;
};

export function DoctorCard({ doctor, className }: DoctorCardProps) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-white",
        className,
      )}
    >
      <div className="relative aspect-[4/5] bg-ice">
        <Image
          src={doctor.image}
          alt={doctor.imageAlt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover object-top"
        />
      </div>
      <div className="space-y-2 p-6">
        <h3 className="text-xl font-semibold text-navy">{doctor.name}</h3>
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          {doctor.specialty}
        </p>
        <p className="text-base leading-7 text-muted">{doctor.summary}</p>
      </div>
    </article>
  );
}
