import { Clock, Sunrise, Sunset, Landmark } from "lucide-react";
import { Target, TreePine, Dumbbell as Bag, HeartPulse, Swords, Droplets, ParkingCircle } from "lucide-react";
import Section from "../../ui/Section";
import Container from "../../ui/Container";
import Reveal from "../../ui/Reveal";
import { FACILITIES } from "../../../data/programs";
import { SCHEDULE } from "../../../constants/config";

const FACILITY_ICONS = [Target, TreePine, Bag, HeartPulse, Swords, Droplets, ParkingCircle];

function ColumnLabel({ icon: Icon, children }: { icon: typeof Clock; children: string }) {
  return (
    <div className="flex items-center gap-2 text-gold-500">
      <Icon className="h-5 w-5" aria-hidden="true" />
      <h3 className="text-sm font-extrabold uppercase tracking-[0.15em] text-ink-950">{children}</h3>
    </div>
  );
}

export default function ScheduleFacilities() {
  return (
    <Section tone="cream">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal direction="left" className="flex flex-col gap-5">
            <ColumnLabel icon={Clock}>Daily Schedule</ColumnLabel>
            <div className="flex items-center gap-4 rounded-xl border border-cream-200 bg-white p-5 shadow-soft">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-500/10 text-gold-600">
                <Sunrise className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-ink-950">Morning Batch</p>
                <p className="text-sm font-semibold text-gold-600">{SCHEDULE.morning}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-cream-200 bg-white p-5 shadow-soft">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-pitch-900/5 text-pitch-800">
                <Sunset className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-ink-950">Evening Batch</p>
                <p className="text-sm font-semibold text-gold-600">{SCHEDULE.evening}</p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" className="flex flex-col gap-5">
            <ColumnLabel icon={Landmark}>Facilities</ColumnLabel>
            <div className="grid grid-cols-2 gap-3">
              {FACILITIES.map((facility, i) => {
                const Icon = FACILITY_ICONS[i % FACILITY_ICONS.length];
                return (
                  <div
                    key={facility}
                    className="flex items-center gap-2.5 rounded-lg border border-cream-200 bg-white px-4 py-3 shadow-soft"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
                    <span className="text-sm font-semibold text-ink-900">{facility}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
