import type { Status } from "../../data/ecosystem";

const LABELS: Record<Status, string> = {
  active: "Active",
  pilot: "Pilot",
  "in-development": "In Development",
  "coming-soon": "Coming Soon",
  research: "Research",
};

const STYLES: Record<Status, string> = {
  active: "bg-canopy-100 text-canopy-700 border-canopy-500/30",
  pilot: "bg-gold/10 text-gold-600 border-gold/30",
  "in-development": "bg-black/5 text-ink/60 border-black/10",
  "coming-soon": "bg-black/5 text-ink/60 border-black/10",
  research: "bg-canopy-900/5 text-canopy-900 border-canopy-900/15",
};

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`inline-flex shrink-0 items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${STYLES[status]}`}>
      {LABELS[status]}
    </span>
  );
}
