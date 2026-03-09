// src/pages/FullService.jsx
import React from "react";
import { motion } from "framer-motion";
import { Clock, Shield, Sparkles } from "lucide-react";
import { fullServiceTiers } from "@/config/services";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import PricingCard from "@/components/shared/PricingCard";
import SectionHeading from "@/components/shared/SectionHeading";

const features = [
  {
    icon: Sparkles,
    title: "Interior + Exterior",
    desc: "Every package covers both the inside and outside of your vehicle for a complete transformation.",
  },
  {
    icon: Shield,
    title: "Paint Protection",
    desc: "Our top-tier packages include orbital polish and wax to protect your paint and restore shine.",
  },
  {
    icon: Clock,
    title: "Done at Your Door",
    desc: "We come to your home or workplace — no waiting at a shop, no disruption to your day.",
  },
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

      <section
        className="py-20"
        style={{ backgroundColor: "rgba(9, 12, 18, 0.65)" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border p-7 transition-all duration-300"
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
                    {feature.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {feature.desc}
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
          >
            <SectionHeading
              eyebrow="Packages"
              title="Choose Your Level"
              subtitle="All packages include both interior and exterior care. Pick the depth of clean that fits your needs."
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {fullServiceTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <PricingCard tier={tier} />
              </motion.div>
            ))}
          </div>

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
              Prices may vary based on vehicle condition. Heavily soiled
              vehicles, excessive pet hair, and specialty stain removal may
              require additional time and cost. Contact us for a personalized
              quote.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}