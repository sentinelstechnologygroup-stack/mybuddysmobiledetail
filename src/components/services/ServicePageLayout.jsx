import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Phone } from "lucide-react";
import { createPageUrl } from "@/utils";
import { site } from "@/config/site";
import PageHero from "@/components/shared/PageHero";

// ServicePageHero — used by older service pages
export function ServicePageHero({ title, subtitle, image }) {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6 relative z-10">
        <Link
          to={createPageUrl("Services")}
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-blue-400 text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>
      </div>
      <PageHero title={title} subtitle={subtitle} image={image} />
    </div>
  );
}

// PricingTierCard — used by older service pages
export function PricingTierCard({ tier }) {
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

// BookingCTA — used by older service pages
export function BookingCTA() {
  return (
    <section className="py-20 bg-zinc-900/30">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">Ready to Book?</h2>
        <p className="text-zinc-400 mb-8">
          Call us or send a message — we're available 7 days a week, 7 AM to 6 PM.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white rounded-full font-semibold transition-all shadow-xl shadow-blue-700/30"
          >
            <Phone className="w-4 h-4" />
            {site.phone}
          </a>
          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 hover:border-white/30 text-white rounded-full font-semibold transition-all hover:bg-white/5"
          >
            Send a Message
          </Link>
        </div>
      </div>
    </section>
  );
}