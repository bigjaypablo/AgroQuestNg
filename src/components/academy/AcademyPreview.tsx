import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { schools } from "../../data/schools";
import StatusBadge from "../ui/StatusBadge";

export default function AcademyPreview() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-canopy-700">The Academy</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            Seven schools, one learning ecosystem.
          </h2>
        </div>
        <Link
          to="/academy"
          className="hidden shrink-0 items-center gap-1 text-sm font-medium text-canopy-700 hover:text-canopy-900 md:flex"
        >
          Explore the Academy <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className="mt-8 -mx-5 flex gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
        {schools.map((school) => (
          <div
            key={school.slug}
            className="min-w-[240px] shrink-0 rounded-2xl border border-black/5 bg-white p-5 md:min-w-0"
          >
            <StatusBadge status={school.status} />
            <h3 className="mt-3 text-sm font-medium leading-snug text-ink">
              {school.name}
            </h3>
            <p className="mt-2 text-xs text-ink/55">{school.focus}</p>
          </div>
        ))}
      </div>

      <Link
        to="/academy"
        className="mt-6 flex items-center justify-center gap-1 text-sm font-medium text-canopy-700 md:hidden"
      >
        Explore the Academy <ArrowUpRight size={14} />
      </Link>
    </section>
  );
}
