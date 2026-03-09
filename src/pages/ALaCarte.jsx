import React from "react";
import { motion } from "framer-motion";
import { aLaCarteItems } from "@/config/services";
import { site } from "@/config/site";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";

export default function ALaCarte() {
  return (
    <div className="pt-20">
      <PageHero
        eyebrow="À La Carte"
        title="Specialty Add-On Services"
        subtitle="Individual services to address specific needs. Mix and match to build a custom detailing package."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
      />

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aLaCarteItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-amber-500/20 transition-all duration-300 flex flex-col"
              >
                <div className="flex justify-between items-start mb-3 gap-3">
                  <h3 className="text-base font-semibold">{item.name}</h3>
                  <span className="text-amber-400 font-bold text-sm whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed flex-1">{item.desc}</p>
                <a
                  href={site.phoneHref}
                  className="block mt-5 text-center py-2.5 rounded-xl text-sm font-semibold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
                >
                  Book Now
                </a>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-center text-zinc-600 text-xs">
            * Prices may vary based on vehicle condition. Contact us for a personalized quote.
          </p>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}