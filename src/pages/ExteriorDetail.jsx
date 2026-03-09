import React from "react";
import { motion } from "framer-motion";
import { Droplets, Sparkles, Shield } from "lucide-react";
import { exteriorTiers } from "@/config/services";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import PricingCard from "@/components/shared/PricingCard";
import SectionHeading from "@/components/shared/SectionHeading";

const features = [
  { icon: Droplets, title: "Eco-Safe Hand Wash", desc: "We use biodegradable, pH-balanced soaps and power wash your wheel wells, body, and wheels for a thorough clean." },
  { icon: Sparkles, title: "Tire & Wheel Care", desc: "Wheels cleaned, dressed, and shined. Tires treated with UV-protective tire shine to prevent drying and cracking." },
  { icon: Shield, title: "Wax Protection", desc: "Upgrade to wax or premium hand-applied sealant for months of protection from the elements and UV damage." },
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
              title="Exterior Options"
              subtitle="Start with a thorough hand wash or upgrade to wax protection. All options use eco-safe products."
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exteriorTiers.map((tier, i) => (
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