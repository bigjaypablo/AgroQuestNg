import { Link } from "react-router-dom";
import { ArrowUpRight, FileText } from "lucide-react";
import { insights, insightCategories } from "../../data/insights";

export default function InsightsPreview() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-canopy-700">Insights</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            Field notes, research and updates.
          </h2>
        </div>
        <Link
          to="/insights"
          className="hidden shrink-0 items-center gap-1 text-sm font-medium text-canopy-700 hover:text-canopy-900 md:flex"
        >
          View all insights <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {insightCategories.map((cat) => (
          <span
            key={cat}
            className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-ink/60"
          >
            {cat}
          </span>
        ))}
      </div>

      {insights.length === 0 ? (
        <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-dashed border-black/15 py-16 text-center">
          <FileText size={28} className="text-black/25" />
          <p className="mt-3 text-sm font-medium text-ink/70">
            No published insights yet.
          </p>
          <p className="mt-1 max-w-xs text-sm text-ink/45">
            Agro Insights, Field Notes, Case Studies, Announcements and Podcast
            episodes will appear here as they're published.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {insights.slice(0, 3).map((article) => (
            <Link
              key={article.slug}
              to={`/insights/${article.slug}`}
              className="rounded-2xl border border-black/5 bg-white p-5 hover:border-canopy-500/30"
            >
              <span className="text-xs font-medium text-canopy-700">{article.category}</span>
              <h3 className="mt-2 font-medium text-ink">{article.title}</h3>
              <p className="mt-2 text-sm text-ink/60">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      )}

      <Link
        to="/insights"
        className="mt-6 flex items-center justify-center gap-1 text-sm font-medium text-canopy-700 md:hidden"
      >
        View all insights <ArrowUpRight size={14} />
      </Link>
    </section>
  );
}
