import React from "react";
import { motion } from "framer-motion";
import { Wind, Sparkles, Shield } from "lucide-react";
import { interiorTiers } from "@/config/services";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import PricingCard from "@/components/shared/PricingCard";
import SectionHeading from "@/components/shared/SectionHeading";

const features = [
  { icon: Wind, title: "Deep Extraction", desc: "Compressed air removes dust from vents and crevices, followed by thorough vacuuming of every surface." },
  { icon: Sparkles, title: "Shampoo & Condition", desc: "Carpets, seats, door panels, and the dash are shampooed and conditioned to restore softness and freshness." },
  { icon: Shield, title: "Ceramic Upgrade Available", desc: "Add ceramic coating to all vinyl and leather surfaces for long-lasting protection against stains and UV damage." },
];

export default function InteriorDetail() {
  return (
    <div className="pt-20">
      <PageHero
        eyebrow="Interior Detail"
        title="Fresh Cabin, Every Time"
        subtitle="From vacuuming and shampooing to conditioning and ceramic protection — your interior restored to like-new."
        image="/images/services/interior-detail-hero.png"
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
              title="Interior Options"
              subtitle="Choose a deep interior clean, or upgrade with ceramic coating on all leather and vinyl surfaces."
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {interiorTiers.map((tier, i) => (
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

          <p className="mt-8 text-zinc-600 text-xs">
            * Prices may vary based on vehicle condition. Contact us for a personalized quote.
          </p>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}