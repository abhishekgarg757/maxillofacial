import { Section, SectionHeading } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { getIcon } from "@/lib/icons";
import { doctor } from "@/content/doctor";

export function WhyChoose() {
  return (
    <Section className="bg-ink-50">
      <SectionHeading
        eyebrow="Why patients choose us"
        title="Surgical precision, delivered with genuine care"
        description="A calm, transparent experience built around you — combining modern technique with a human touch at every step."
      />
      <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {doctor.philosophy.map((p, i) => {
          const Icon = getIcon(p.icon);
          return (
            <StaggerItem key={p.title} index={i} className="h-full">
              <FeatureCard icon={Icon} title={p.title} body={p.body} tone="ink" />
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
