import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { audiences } from "../../data/audiences";

export default function CommunityCta() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="rounded-3xl bg-canopy-100 px-6 py-14 text-center md:px-16 md:py-20">
        <p className="text-sm font-medium text-canopy-700">Community</p>
        <h2 className="mx-auto mt-3 max-w-xl text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          Built for the people building African agriculture.
        </h2>

        <div className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2">
          {audiences.map((a) => (
            <span
              key={a.label}
              className="rounded-full border border-canopy-700/20 bg-white px-4 py-1.5 text-sm text-ink/70"
            >
              {a.label}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/community"
            className="rounded-full bg-canopy-700 px-7 py-3 text-sm font-medium text-white hover:bg-canopy-900 transition-colors"
          >
            Join the Community
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-1 text-sm font-medium text-ink hover:text-canopy-700"
          >
            Start a Partnership Conversation <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
