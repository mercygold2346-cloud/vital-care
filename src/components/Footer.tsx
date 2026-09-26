import Link from "next/link";
import { contactInfo } from "@/data/contact";
import { footerNav, supportNav } from "@/data/navigation";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="text-lg font-semibold tracking-[0.18em] text-navy">
            {site.name}
          </p>
          <p className="mt-3 max-w-sm text-sm font-medium tracking-[0.08em] text-muted uppercase">
            {site.tagline}
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-sm font-semibold text-navy">Navigation</p>
          <ul className="mt-4 space-y-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-navy"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Support">
          <p className="text-sm font-semibold text-navy">Support</p>
          <ul className="mt-4 space-y-2">
            {supportNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-navy"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            <a href={`mailto:${contactInfo.email}`} className="hover:text-navy">
              {contactInfo.email}
            </a>
          </p>
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-muted sm:px-6 lg:px-8">
          © 2026 {site.name}
        </p>
      </div>
    </footer>
  );
}
