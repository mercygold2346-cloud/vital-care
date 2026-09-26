"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { site } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-[0.18em] text-navy"
        >
          {site.name}
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy/80 transition-colors hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/appointments"
            className="hidden min-h-11 items-center rounded-xl bg-primary px-4 text-sm font-semibold text-white transition-colors hover:bg-primary-dark sm:inline-flex"
          >
            Book appointment
          </Link>
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border px-3 text-sm font-semibold tracking-[0.12em] text-navy uppercase lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-border bg-white px-4 py-4 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-navy hover:bg-ice"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/appointments"
              className="mt-2 inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-4 text-base font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Book appointment
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
