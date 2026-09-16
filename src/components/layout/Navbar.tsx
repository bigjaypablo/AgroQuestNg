import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, ChevronDown, Search } from "lucide-react";
import MobileMenu from "./MobileMenu";

const whatWeDo = [
  { label: "AgroMarket Link", to: "/what-we-do/agromarket-link" },
  { label: "AgroLab & Innovation", to: "/what-we-do/agrolab" },
  { label: "Agri-Tech & Drone Services", to: "/what-we-do/agri-tech" },
  { label: "Business Development", to: "/what-we-do/consulting" },
  { label: "Production Units", to: "/what-we-do/production" },
  { label: "Zero-Waste Agriculture", to: "/what-we-do/zero-waste" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const linkClass = "text-sm font-medium text-ink/80 hover:text-canopy-700 transition-colors";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-semibold text-lg tracking-tight">
            AgroQuest<span className="text-gold">Ng</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <div
            className="relative"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <button className={`flex items-center gap-1 ${linkClass}`}>
              What We Do <ChevronDown size={14} />
            </button>
            {dropdown && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 w-64 rounded-2xl border border-black/5 bg-white p-2 shadow-xl">
                {whatWeDo.map((item) => (
                  <Link key={item.to} to={item.to} className="block rounded-xl px-4 py-2.5 text-sm text-ink/80 hover:bg-canopy-100 hover:text-canopy-900">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <NavLink to="/academy" className={linkClass}>Academy</NavLink>
          <NavLink to="/insights" className={linkClass}>Insights</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/community" className={linkClass}>Community</NavLink>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button aria-label="Search" className="text-ink/70 hover:text-canopy-700">
            <Search size={18} />
          </button>
          <Link to="/contact" className="rounded-full bg-canopy-700 px-5 py-2 text-sm font-medium text-white hover:bg-canopy-900 transition-colors">
            Contact
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu />
        </button>
      </nav>

      {open && <MobileMenu whatWeDo={whatWeDo} onClose={() => setOpen(false)} />}
    </header>
  );
}
