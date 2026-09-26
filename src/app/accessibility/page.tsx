import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Accessibility",
};

export default function AccessibilityPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-navy">
        Accessibility
      </h1>
      <p className="mt-4 text-lg leading-8 text-muted">
        {site.name} is designed to be readable, keyboard-accessible, and usable
        with assistive technologies. If you encounter a barrier, please contact
        us so we can improve the experience.
      </p>
    </article>
  );
}
