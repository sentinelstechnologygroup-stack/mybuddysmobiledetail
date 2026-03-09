import React from "react";
import { Check } from "lucide-react";
import { site } from "@/config/site";

export default function PricingCard({ tier }) {
  return (
    <div
      className={`relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 h-full flex flex-col ${
        tier.featured
          ? "bg-gradient-to-b from-blue-600/10 to-zinc-900/80 border-blue-500/30"
          : "bg-zinc-900/50 border-white/5 hover:border-blue-500/20"
      }`}
    >
      {tier.featured && (
        <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-600 text-white text-[10px] font-bold tracking-wider uppercase rounded-full">
          Most Popular
        </div>
      )}
      <h3 className="text-lg font-semibold mb-4">{tier.name}</h3>
      <div className="space-y-1.5 mb-5">
        {tier.pricing.map((p) => (
          <div key={p.type} className="flex justify-between items-center text-sm">
            <span className="text-zinc-500">{p.type}</span>
            <span className="font-bold text-blue-400">{p.price}</span>
          </div>
        ))}
      </div>
      <div className="h-px bg-white/5 mb-5" />
      <ul className="space-y-2.5 flex-1">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-400">
            <Check className="w-4 h-4 text-blue-400/70 mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={site.phoneHref}
        className={`block mt-6 text-center py-3 rounded-xl text-sm font-semibold transition-all ${
          tier.featured
            ? "bg-blue-600 text-white hover:bg-blue-500"
            : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
        }`}
      >
        Book Now
      </a>
    </div>
  );
}