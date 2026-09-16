import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronRight, ArrowUpRight } from "lucide-react";

interface WhatWeDoItem {
  label: string;
  to: string;
}

interface MobileMenuProps {
  whatWeDo: WhatWeDoItem[];
  onClose: () => void;
}

const mainLinks = [
  { label: "Home", to: "/" },
  { label: "Academy", to: "/academy" },
  { label: "Insights", to: "/insights" },
  { label: "About", to: "/about" },
  { label: "Community", to: "/community" },
];

export default function MobileMenu({ whatWeDo, onClose }: MobileMenuProps) {
  const [subOpen, setSubOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(t);
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 200);
  };

  const rowClass = (delay: number) =>
    `group flex items-center justify-between border-b border-black/5 py-5 transition-all duration-300 ${
      visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
    }`;

  return (
    <div
      className={`fixed inset-0 z-[60] bg-white md:hidden overflow-y-auto transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-5 border-b border-black/5">
        <span className="font-semibold text-lg tracking-tight">
          AgroQuest<span className="text-gold">Ng</span>
        </span>
        <button
          onClick={handleClose}
          aria-label="Close menu"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 hover:bg-black/5"
        >
          <X size={18} />
        </button>
      </div>

      <nav className="flex flex-col px-6 pt-4">
        <Link to="/" onClick={handleClose} style={{ transitionDelay: "0ms" }} className={rowClass(0)}>
          <span className="text-2xl font-semibold tracking-tight">Home</span>
          <ArrowUpRight size={18} className="text-black/30 group-hover:text-canopy-700 transition-colors" />
        </Link>

        <div style={{ transitionDelay: "40ms" }} className={`border-b border-black/5 transition-all duration-300 ${visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}>
          <button
            className="flex w-full items-center justify-between py-5"
            onClick={() => setSubOpen(!subOpen)}
            aria-expanded={subOpen}
          >
            <span className="text-2xl font-semibold tracking-tight">What We Do</span>
            <ChevronRight size={18} className={`text-black/40 transition-transform duration-300 ${subOpen ? "rotate-90" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${subOpen ? "max-h-96 pb-3" : "max-h-0"}`}>
            {whatWeDo.map((item) => (
              <Link key={item.to} to={item.to} onClick={handleClose} className="flex items-center justify-between py-2.5 pl-1 text-sm text-ink/60 hover:text-canopy-700">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {mainLinks.slice(1).map((item, i) => (
          <Link key={item.to} to={item.to} onClick={handleClose} style={{ transitionDelay: `${(i + 2) * 40}ms` }} className={rowClass(i + 2)}>
            <span className="text-2xl font-semibold tracking-tight">{item.label}</span>
            <ArrowUpRight size={18} className="text-black/30 group-hover:text-canopy-700 transition-colors" />
          </Link>
        ))}

        <Link to="/contact" onClick={handleClose} className="mt-6 flex items-center justify-center rounded-full bg-canopy-700 py-4 text-base font-medium text-white hover:bg-canopy-900 transition-colors">
          Contact AgroQuestNg
        </Link>
      </nav>

      <div className="mt-10 px-6 pb-10 pt-6 border-t border-black/5">
        <p className="text-xs uppercase tracking-widest text-black/40">Get in touch</p>
        <p className="mt-2 text-sm text-ink/70">official.agroquestng@gmail.com</p>
        <p className="mt-1 text-sm text-ink/50">Nigeria</p>
      </div>
    </div>
  );
}
