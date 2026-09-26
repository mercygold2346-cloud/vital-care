export type DoctorCategory = "general" | "specialist";

export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  category: DoctorCategory;
  summary: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export const doctors: Doctor[] = [
  {
    id: "maya-johnson",
    name: "Dr. Maya Johnson",
    specialty: "General Medicine",
    category: "general",
    summary:
      "Focuses on everyday health concerns and long-term wellness in a calm, listening-first setting.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Portrait of Dr. Maya Johnson, a general medicine physician",
    featured: true,
  },
  {
    id: "daniel-carter",
    name: "Dr. Daniel Carter",
    specialty: "Cardiology",
    category: "specialist",
    summary:
      "Supports patients with heart-related questions through clear explanations and coordinated follow-up.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Portrait of Dr. Daniel Carter, a cardiology specialist",
    featured: true,
  },
  {
    id: "sarah-williams",
    name: "Dr. Sarah Williams",
    specialty: "Family Medicine",
    category: "general",
    summary:
      "Provides family-centered care for adults and children, with an emphasis on prevention and continuity.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Portrait of Dr. Sarah Williams, a family medicine physician",
    featured: true,
  },
  {
    id: "james-okonkwo",
    name: "Dr. James Okonkwo",
    specialty: "Internal Medicine",
    category: "general",
    summary:
      "Helps adults manage ongoing conditions with practical plans and unhurried visits.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Portrait of Dr. James Okonkwo, an internal medicine physician",
  },
  {
    id: "elena-rossi",
    name: "Dr. Elena Rossi",
    specialty: "Pediatrics",
    category: "specialist",
    summary:
      "Cares for children and adolescents with a gentle approach that also supports parents and caregivers.",
    image:
      "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Portrait of Dr. Elena Rossi, a pediatric specialist",
  },
  {
    id: "priya-nair",
    name: "Dr. Priya Nair",
    specialty: "Dermatology",
    category: "specialist",
    summary:
      "Advises on common skin concerns with straightforward treatment options and follow-up guidance.",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Portrait of Dr. Priya Nair, a dermatology specialist",
  },
];
