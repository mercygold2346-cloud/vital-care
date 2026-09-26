export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "About", href: "/about" },
  { label: "Appointments", href: "/appointments" },
  { label: "Contact", href: "/contact" },
];

export const supportNav: NavItem[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Terms", href: "/terms" },
];
