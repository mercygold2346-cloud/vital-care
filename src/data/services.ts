export type Service = {
  slug: string;
  name: string;
  shortName?: string;
  summary: string;
  description: string;
  icon: "stethoscope" | "shield" | "clipboard" | "flask" | "users" | "heart";
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "general-consultation",
    name: "General Consultation",
    shortName: "Primary Care",
    summary: "Routine consultations and everyday health concerns.",
    description:
      "Visit us for common illnesses, follow-up care, and questions about your overall health. Appointments are designed to be clear, unhurried, and easy to book.",
    icon: "stethoscope",
    featured: true,
  },
  {
    slug: "preventive-care",
    name: "Preventive Care",
    summary: "Health checks and preventive wellness services.",
    description:
      "Stay ahead of health concerns with regular screenings, vaccinations, and practical guidance tailored to your age and lifestyle.",
    icon: "shield",
  },
  {
    slug: "health-checkups",
    name: "Health Checkups",
    shortName: "Health Checks",
    summary: "Structured checkups that help you understand your baseline health.",
    description:
      "Our checkup visits review your history, key measurements, and next steps so you leave with a simple plan—not a stack of unanswered questions.",
    icon: "clipboard",
    featured: true,
  },
  {
    slug: "diagnostics",
    name: "Diagnostics",
    shortName: "Lab Services",
    summary: "Access common diagnostic and laboratory services.",
    description:
      "We offer frequently requested laboratory and diagnostic services with straightforward instructions and timely results shared by your care team.",
    icon: "flask",
    featured: true,
  },
  {
    slug: "family-health",
    name: "Family Health",
    summary: "Care for adults and children in one familiar clinic.",
    description:
      "Family health visits support households who want consistent, coordinated care for everyday needs across different ages.",
    icon: "users",
  },
  {
    slug: "specialist-care",
    name: "Specialist Care",
    shortName: "Specialist Consultations",
    summary: "Connect with healthcare professionals for specialized needs.",
    description:
      "When a concern needs a specialist, we help you find the right clinician and prepare you for a focused, well-explained consultation.",
    icon: "heart",
    featured: true,
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
