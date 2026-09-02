import { getIcon } from "@/lib/icons";
import { Container } from "@/components/ui/container";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { stats } from "@/content/doctor";

export function StatsBand() {
  return (
    <section aria-label="Clinic highlights" className="relative z-10 -mt-12">
      <Container>
        <Stagger className="grid grid-cols-2 gap-3 rounded-3xl border border-ink-100 bg-white p-4 shadow-xl shadow-ink-950/5 sm:gap-4 sm:p-6 lg:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = getIcon(s.icon);
            return (
              <StaggerItem
                key={s.label}
                index={i}
                className="flex items-center gap-4 rounded-2xl p-4 transition-colors hover:bg-accent-soft/60"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="size-6" />
                </span>
                <span className="flex flex-col">
                  <span className="font-display text-2xl font-extrabold leading-none text-ink-900">
                    {s.value}
                  </span>
                  <span className="mt-1 text-xs leading-snug text-muted-foreground">
                    {s.label}
                  </span>
                </span>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
