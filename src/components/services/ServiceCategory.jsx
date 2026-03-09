import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function ServiceCategory({ title, description, tiers, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="mb-20"
    >
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
        {description && (
          <p className="mt-3 text-zinc-400 max-w-2xl">{description}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiers.map((tier, tierIndex) => (
          <div
            key={tier.name}
            className={`group relative p-6 rounded-2xl border transition-all duration-500 hover:-translate-y-1 ${
              tier.featured
                ? "bg-gradient-to-b from-amber-500/10 to-zinc-900/80 border-amber-500/30"
                : "bg-zinc-900/50 border-white/5 hover:border-amber-500/20"
            }`}
          >
            {tier.featured && (
              <div className="absolute -top-3 left-6 px-3 py-1 bg-amber-500 text-zinc-950 text-[10px] font-bold tracking-wider uppercase rounded-full">
                Most Popular
              </div>
            )}

            <h3 className="text-lg font-semibold mb-1">{tier.name}</h3>

            {/* Pricing */}
            <div className="mt-4 space-y-2">
              {tier.pricing.map((p) => (
                <div key={p.type} className="flex justify-between items-center text-sm">
                  <span className="text-zinc-500">{p.type}</span>
                  <span className="font-bold text-accent">{p.price}</span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="my-5 h-px bg-white/5" />

            {/* Features */}
            <ul className="space-y-2.5">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-400">
                  <Check className="w-4 h-4 text-amber-500/70 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="tel:6192033889"
              className={`block mt-6 text-center py-3 rounded-xl text-sm font-semibold transition-all ${
                tier.featured
                  ? "bg-amber-500 text-zinc-950 hover:bg-amber-400"
                  : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              Book Now
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
}