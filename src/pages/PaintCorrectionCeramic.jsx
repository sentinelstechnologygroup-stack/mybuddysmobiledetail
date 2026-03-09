// src/pages/PaintCorrectionCeramic.jsx
import React from "react";
import { motion } from "framer-motion";
import { Paintbrush, Layers, ShieldCheck } from "lucide-react";
import { paintCorrectionTiers, ceramicTiers } from "@/config/services";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import PricingCard from "@/components/shared/PricingCard";
import SectionHeading from "@/components/shared/SectionHeading";

const benefits = [
  {
    icon: Paintbrush,
    title: "Multi-Stage Correction",
    desc: "Remove swirl marks, light scratches, water spots, and oxidation to restore your paint's depth, gloss, and clarity.",
  },
  {
    icon: Layers,
    title: "Layered Protection",
    desc: "More ceramic layers mean stronger hydrophobic protection, deeper gloss, and longer durability against the elements.",
  },
  {
    icon: ShieldCheck,
    title: "Full Vehicle Coverage",
    desc: "Ceramic is applied to body panels, plastic trim, wheel faces, and windshield for complete exterior protection.",
  },
];

export default function PaintCorrectionCeramic() {
  return (
    <div className="pt-20">
      <PageHero
        eyebrow="Paint Correction & Ceramic Coating"
        title="Showroom Condition — Lasting Years"
        subtitle="Restore your paint to factory-like clarity, then lock it in with professional-grade ceramic protection."
        image="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1920&q=80"
      />

      <section
        className="py-20"
        style={{ backgroundColor: "rgba(9, 12, 18, 0.65)" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: "rgba(18, 20, 27, 0.85)",
                    borderColor: "var(--color-border)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.28)",
                  }}
                >
                  <div
                    className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "rgba(37, 99, 235, 0.12)" }}
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{ color: "var(--color-accent)" }}
                    />
                  </div>

                  <h3 className="mb-2 font-semibold text-white">
                    {benefit.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {benefit.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="py-24"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <SectionHeading
              eyebrow="Paint Correction"
              title="Remove. Restore. Refine."
              subtitle="Multi-stage correction removes surface defects and restores paint clarity. Higher levels add more aggressive correction for deeper defects."
              center={false}
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {paintCorrectionTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <PricingCard tier={tier} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div
            className="mb-20 h-px"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              eyebrow="Ceramic Coating"
              title="Protect What You Love"
              subtitle="Ceramic coating adds hydrophobic protection, UV resistance, and long-lasting gloss to the surfaces that matter most."
              center={false}
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {ceramicTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <PricingCard tier={tier} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div
            className="mt-10 rounded-[14px] border p-5 text-center"
            style={{
              backgroundColor: "rgba(18, 20, 27, 0.85)",
              borderColor: "var(--color-border)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            }}
          >
            <p
              className="text-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Paint correction and ceramic coating pricing may vary based on
              vehicle size, paint condition, oxidation, previous coatings, and
              required prep work. Contact us for a personalized quote.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}