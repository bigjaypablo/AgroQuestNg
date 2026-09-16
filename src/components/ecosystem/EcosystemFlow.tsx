import { ArrowRight, ArrowDown } from "lucide-react";
import { ecosystemFlow } from "../../data/ecosystemFlow";

export default function EcosystemFlow() {
  return (
    <section className="bg-canopy-900 py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-medium text-gold">The Ecosystem Model</p>
        <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight md:text-3xl">
          One ecosystem, five connected stages.
        </h2>

        <div className="mt-12 flex flex-col md:flex-row md:items-start">
          {ecosystemFlow.map((step, i) => (
            <div key={step.label} className="flex flex-col md:flex-1 md:items-start">
              <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-0">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-sm font-medium">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold md:mt-4">{step.label}</h3>
              </div>
              <p className="mt-2 max-w-xs pl-14 text-sm text-white/60 md:pl-0">
                {step.description}
              </p>

              {i < ecosystemFlow.length - 1 && (
                <>
                  <div className="my-4 flex justify-center md:hidden">
                    <ArrowDown size={16} className="text-white/30" />
                  </div>
                  <div className="mt-5 hidden flex-1 items-center px-2 md:flex">
                    <ArrowRight size={16} className="text-white/30" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
