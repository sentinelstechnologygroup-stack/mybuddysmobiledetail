// src/pages/ExteriorDetail.jsx
import React from "react";
import { motion } from "framer-motion";
import { Droplets, Sparkles, Shield } from "lucide-react";
import { exteriorTiers } from "@/config/services";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import PricingCard from "@/components/shared/PricingCard";
import SectionHeading from "@/components/shared/SectionHeading";

const features = [
  {
    icon: Droplets,
    title: "Eco-Safe Hand Wash",
    desc: "We use biodegradable, pH-balanced soaps and power wash your wheel wells, body, and wheels for a thorough clean.",
  },
  {
    icon: Sparkles,
    title: "Tire & Wheel Care",
    desc: "Wheels cleaned, dressed, and shined. Tires treated with UV-protective tire shine to help prevent drying and cracking.",
  },
  {
    icon: Shield,
    title: "Wax Protection",
    desc: "Upgrade to wax or premium hand-applied sealant for added shine and longer-lasting protection from UV and the elements.",
  },
];

export default function ExteriorDetail() {
  return (
    <div className="pt-20">
      <PageHero
        eyebrow="Exterior Detail"
        title="Show-Quality Shine"
        subtitle="Eco-friendly soaps, power washing, and your choice of wax protection — all delivered to your driveway."
        image="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1920&q=80"
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
              title="Exterior Options"
              subtitle="Start with a thorough hand wash or upgrade to wax protection. All options use eco-safe products."
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {exteriorTiers.map((tier, index) => (
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
              Prices may vary based on vehicle condition. Excess buildup, heavy
              contamination, and oversized vehicles may require additional time
              and cost. Contact us for a personalized quote.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}