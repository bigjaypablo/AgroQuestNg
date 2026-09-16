import { Link } from "react-router-dom";
import { useState } from "react";
import { Mail } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend connected yet — swap this for a real submission handler
    // once a newsletter provider is configured.
    setSubmitted(true);
  };

  return (
    <footer className="bg-canopy-900 text-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="text-lg font-semibold tracking-tight">
              AgroQuest<span className="text-gold">Ng</span>
            </span>
            <p className="mt-3 max-w-xs text-sm text-white/60">
              Building Africa's digital-first agricultural ecosystem.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 max-w-xs">
              <label htmlFor="newsletter-email" className="text-xs font-medium uppercase tracking-widest text-white/50">
                Subscribe to Insights
              </label>
              <div className="mt-2 flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-2 py-1.5">
                <Mail size={16} className="ml-2 text-white/40" />
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-canopy-500 px-4 py-1.5 text-xs font-medium text-white hover:bg-canopy-700"
                >
                  Join
                </button>
              </div>
              {submitted && (
                <p className="mt-2 text-xs text-canopy-300">
                  Thanks — you'll hear from us once Insights are live.
                </p>
              )}
            </form>
          </div>

          <div className="text-sm">
            <p className="font-medium text-white/90">Ecosystem</p>
            <div className="mt-3 flex flex-col gap-2 text-white/60">
              <Link to="/what-we-do/agromarket-link" className="hover:text-white">AgroMarket Link</Link>
              <Link to="/what-we-do/agrolab" className="hover:text-white">AgroLab & Innovation</Link>
              <Link to="/what-we-do/agri-tech" className="hover:text-white">Agri-Tech & Drones</Link>
              <Link to="/what-we-do/consulting" className="hover:text-white">Business Development</Link>
              <Link to="/what-we-do/production" className="hover:text-white">Production Units</Link>
              <Link to="/what-we-do/zero-waste" className="hover:text-white">Zero-Waste Agriculture</Link>
            </div>
          </div>

          <div className="text-sm">
            <p className="font-medium text-white/90">Organization</p>
            <div className="mt-3 flex flex-col gap-2 text-white/60">
              <Link to="/academy" className="hover:text-white">Academy</Link>
              <Link to="/insights" className="hover:text-white">Insights</Link>
              <Link to="/about" className="hover:text-white">About</Link>
              <Link to="/about/founder" className="hover:text-white">Founder</Link>
              <Link to="/community" className="hover:text-white">Community</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>

          <div className="text-sm">
            <p className="font-medium text-white/90">Legal</p>
            <div className="mt-3 flex flex-col gap-2 text-white/60">
              <Link to="/legal/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/legal/terms" className="hover:text-white">Terms & Conditions</Link>
              <Link to="/legal/disclaimer" className="hover:text-white">Disclaimer</Link>
              <Link to="/faqs" className="hover:text-white">FAQs</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} AgroQuestNg Ecosystem Ltd.</p>
          <p>official.agroquestng@gmail.com · Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
