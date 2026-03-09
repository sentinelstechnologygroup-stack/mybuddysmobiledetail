import React from "react";
import { motion } from "framer-motion";
import { Paintbrush, Layers, ShieldCheck } from "lucide-react";
import { paintCorrectionTiers, ceramicTiers } from "@/config/services";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import PricingCard from "@/components/shared/PricingCard";
import SectionHeading from "@/components/shared/SectionHeading";

const benefits = [
  { icon: Paintbrush, title: "Multi-Stage Correction", desc: "Remove swirl marks, light scratches, water spots, and oxidation — restoring your paint's true depth and clarity." },
  { icon: Layers, title: "Layered Protection", desc: "More ceramic layers means more hydrophobic protection, deeper gloss, and years of durability against the elements." },
  { icon: ShieldCheck, title: "Full Vehicle Coverage", desc: "Ceramic applied to body, plastic trim, wheel faces, and windshield — complete protection, inside and out." },
];

export default function PaintCorrectionCeramic() {
  return (
    <div className="pt-20">
      <PageHero
        eyebrow="Paint Correction & Ceramic Coating"
        title="Showroom Condition — Lasting Years"
        subtitle="Restore your paint to factory-perfect clarity, then lock it in with professional-grade ceramic protection."
        image="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1920&q=80"
      />

      {/* Benefit Cards */}
      <section className="py-20 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-amber-500/20 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center mb-5">
                  <b.icon className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="font-semibold mb-2">{b.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Paint Correction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <SectionHeading
              eyebrow="Paint Correction"
              title="Remove. Restore. Refine."
              subtitle="Multi-stage correction removes surface defects and restores paint clarity. Each level adds more aggressive compounds for deeper correction."
              center={false}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paintCorrectionTiers.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <PricingCard tier={tier} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="h-px bg-white/5 mb-20" />

          {/* Ceramic Coating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              eyebrow="Ceramic Coating"
              title="Protect What You Love"
              subtitle="Ceramic provides unmatched hydrophobic protection, UV resistance, and long-lasting gloss. Applied to body, plastic, wheels, and windshield."
              center={false}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ceramicTiers.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <PricingCard tier={tier} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <p className="mt-10 text-center text-zinc-600 text-xs">
            * Prices may vary based on vehicle condition. Contact us for a personalized quote.
          </p>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}