import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-navy">Privacy</h1>
      <p className="mt-4 text-lg leading-8 text-muted">
        {site.name} collects only the contact details you choose to share through
        our appointment and contact forms. We do not ask for sensitive medical
        history on this website. This page is sample content and can be replaced
        with a full privacy policy.
      </p>
    </article>
  );
}
