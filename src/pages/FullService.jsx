import React from "react";
import { motion } from "framer-motion";
import { Check, Clock, Shield, Sparkles } from "lucide-react";
import { fullServiceTiers } from "@/config/services";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import PricingCard from "@/components/shared/PricingCard";
import SectionHeading from "@/components/shared/SectionHeading";

const features = [
  { icon: Sparkles, title: "Interior + Exterior", desc: "Every package covers both the inside and outside of your vehicle for a complete transformation." },
  { icon: Shield, title: "Paint Protection", desc: "Our top-tier packages include orbital polish and wax to protect your paint and restore shine." },
  { icon: Clock, title: "Done at Your Door", desc: "We come to your home or workplace — no waiting at a shop, no disruption to your day." },
];

export default function FullService() {
  return (
    <div className="pt-20">
      <PageHero
        eyebrow="Full Service Detail"
        title="Complete Inside & Out"
        subtitle="From a basic clean to our premium Red Carpet Detail — every package covers both your interior and exterior."
        image="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1920&q=80"
      />

      {/* Feature Cards */}
      <section className="py-20 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-amber-500/20 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center mb-5">
                  <f.icon className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              eyebrow="Packages"
              title="Choose Your Level"
              subtitle="All packages include both interior and exterior care. Pick the depth of clean that fits your needs."
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fullServiceTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <PricingCard tier={tier} />
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-center text-zinc-600 text-xs">
            * Prices may vary based on vehicle condition. Contact us for a personalized quote.
          </p>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}