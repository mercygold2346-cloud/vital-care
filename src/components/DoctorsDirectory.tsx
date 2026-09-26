"use client";

import { useMemo, useState } from "react";
import { doctors, type DoctorCategory } from "@/data/doctors";
import { DoctorCard } from "@/components/DoctorCard";

const filters: { id: "all" | DoctorCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "general", label: "General care" },
  { id: "specialist", label: "Specialists" },
];

export function DoctorsDirectory() {
  const [filter, setFilter] = useState<"all" | DoctorCategory>("all");
  const visible = useMemo(
    () =>
      filter === "all"
        ? doctors
        : doctors.filter((doctor) => doctor.category === filter),
    [filter],
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filter doctors"
        className="flex flex-wrap gap-2"
      >
        {filters.map((item) => {
          const selected = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(item.id)}
              className={
                selected
                  ? "min-h-11 rounded-full bg-navy px-4 text-sm font-semibold text-white"
                  : "min-h-11 rounded-full border border-border bg-white px-4 text-sm font-semibold text-navy hover:border-navy/30"
              }
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((doctor) => (
          <li key={doctor.id}>
            <DoctorCard doctor={doctor} />
          </li>
        ))}
      </ul>
    </div>
  );
}
