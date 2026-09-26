import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  id?: string;
  as?: "h1" | "h2";
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  id,
  as: Heading = "h2",
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "max-w-2xl space-y-3",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          {eyebrow}
        </p>
      ) : null}
      <Heading
        id={id}
        className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
      >
        {title}
      </Heading>
      {description ? (
        <p className="text-base leading-7 text-muted sm:text-lg">{description}</p>
      ) : null}
    </header>
  );
}
