import { cn } from "@/lib/cn";

type BentoCardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section" | "li";
  hover?: boolean;
};

export function BentoCard({
  children,
  className,
  as: Component = "div",
  hover = false,
}: BentoCardProps) {
  return (
    <Component
      className={cn(
        "rounded-2xl border border-border bg-white p-6 sm:p-8",
        hover &&
          "transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:border-navy/25",
        className,
      )}
    >
      {children}
    </Component>
  );
}
