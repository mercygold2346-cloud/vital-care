import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-navy">Terms</h1>
      <p className="mt-4 text-lg leading-8 text-muted">
        The {site.name} website is for general information and appointment
        requests. It is not a substitute for emergency care. This page is sample
        content and can be replaced with full terms of use.
      </p>
    </article>
  );
}
