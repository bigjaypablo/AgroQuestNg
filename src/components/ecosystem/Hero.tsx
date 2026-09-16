import { Link } from "react-router-dom";
import HeroSlideshow from "./HeroSlideshow";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 pb-10 text-center md:pt-24">
      <p className="text-sm font-medium text-canopy-700">
        Africa's Digital-First Agricultural Ecosystem
      </p>

      <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-ink md:text-6xl">
        Building better agricultural decisions, enterprises and systems.
      </h1>

      <p className="mx-auto mt-5 max-w-xl text-base text-ink/60 md:text-lg">
        AgroQuestNg connects agricultural education, intelligence, enterprise
        development, production and technology into one ecosystem.
      </p>

      <div className="mt-8 flex items-center justify-center gap-6">
        <Link to="/about" className="text-sm font-medium text-ink underline underline-offset-4 hover:text-canopy-700">
          Learn more
        </Link>
        <Link to="/contact" className="rounded-full bg-canopy-700 px-7 py-3 text-sm font-medium text-white hover:bg-canopy-900 transition-colors">
          Work With Us
        </Link>
      </div>

      <div className="mt-14">
        <HeroSlideshow />
      </div>
    </section>
  );
}
