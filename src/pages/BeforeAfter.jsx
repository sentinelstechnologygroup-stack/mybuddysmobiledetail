// src/pages/BeforeAfter.jsx
// @ts-nocheck

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeading from "@/components/shared/SectionHeading";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import BeforeAfterSlider from "@/components/gallery/BeforeAfterSlider";
import { beforeAfterItems } from "@/config/galleryImages";

const filters = ["All", "Headlights", "Vehicles"];

export default function BeforeAfter() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return beforeAfterItems;
    return beforeAfterItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="pt-20">
      <PageHero
        eyebrow="Before & After"
        title="See the difference"
        subtitle="Drag the slider or click any comparison to expand."
        image="/images/before-after/before-after-hero.jpg"
      />

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Transformation Gallery"
            title="Before. After. Big difference."
            subtitle="Real results from real vehicles."
          />

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              const count =
                filter === "All"
                  ? beforeAfterItems.length
                  : beforeAfterItems.filter(
                      (item) => item.category === filter
                    ).length;

              return (
                <button
                  key={filter}
                  onClick={() => {
                    setActiveFilter(filter);
                    setActiveIndex(null);
                  }}
                  className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
                  style={{
                    backgroundColor: isActive
                      ? "rgba(37, 99, 235, 0.92)"
                      : "rgba(18, 20, 27, 0.92)",
                    border: isActive
                      ? "1px solid rgba(96, 165, 250, 0.42)"
                      : "1px solid rgba(255, 255, 255, 0.12)",
                    color: "#ffffff",
                  }}
                >
                  {filter}
                  <span className="ml-2 opacity-70">({count})</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.24, delay: index * 0.04 }}
                className="rounded-2xl border border-white/10 bg-zinc-900/60 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="block w-full"
                >
                  <BeforeAfterSlider
                    before={item.before}
                    after={item.after}
                    showHint={false}
                  />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Want results like this?"
        subtext="Book mobile detailing and let us bring the clean directly to you."
      />

      {activeIndex !== null && (
        <GalleryLightbox
          items={filteredItems}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </div>
  );
}