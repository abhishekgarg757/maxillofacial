import { Section, SectionHeading } from "@/components/ui/section";
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
        {doctor.philosophy.map((p) => {
          const Icon = getIcon(p.icon);
          return (
            <StaggerItem
              key={p.title}
              className="group flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="mb-5 grid size-13 place-items-center rounded-2xl bg-gradient-to-br from-brand-500/10 to-brand-600/10 text-brand-700 transition-colors duration-300 group-hover:from-brand-500 group-hover:to-brand-700 group-hover:text-white">
                <Icon className="size-6" />
              </span>
              <h3 className="text-lg font-bold text-ink-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
