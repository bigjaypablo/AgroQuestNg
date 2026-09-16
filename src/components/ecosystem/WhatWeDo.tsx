import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { pillars } from "../../data/ecosystem";
import StatusBadge from "../ui/StatusBadge";

export default function WhatWeDo() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          What We Do
        </h2>
        <Link
          to="/academy"
          className="hidden shrink-0 items-center gap-1 text-sm font-medium text-canopy-700 hover:text-canopy-900 md:flex"
        >
          Explore the Academy <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p) => (
          <Link
            key={p.slug}
            to={p.path}
            className="group overflow-hidden rounded-2xl border border-black/5 bg-white transition-colors hover:border-canopy-500/30"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-canopy-100">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xs text-canopy-700/50">
                  [ {p.name} — image placeholder ]
                </div>
              )}
              <div className="absolute left-3 top-3">
                <StatusBadge status={p.status} />
              </div>
            </div>

            <div className="p-5">
              <h3 className="font-medium text-ink">{p.name}</h3>
              <p className="mt-2 text-sm text-ink/60">{p.summary}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-canopy-700 opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowUpRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
