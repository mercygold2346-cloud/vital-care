import {
  ClipboardList,
  FlaskConical,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import type { Service } from "@/data/services";

const icons = {
  stethoscope: Stethoscope,
  shield: ShieldCheck,
  clipboard: ClipboardList,
  flask: FlaskConical,
  users: Users,
  heart: HeartPulse,
};

export function ServiceIcon({
  name,
  className = "size-5",
}: {
  name: Service["icon"];
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
