// src/pages/PhotoGallery.jsx
// @ts-nocheck

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeading from "@/components/shared/SectionHeading";
import { galleryImages, galleryFilters } from "@/config/galleryImages";

export default function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const handlePrev = () =>
    setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);

  const handleNext = () =>
    setLightboxIndex((i) => (i + 1) % filtered.length);

  return (
    <div className="pt-20">
      <PageHero
        eyebrow="Photo Gallery"
        title="Our Work in Pictures"
        subtitle="Browse real results from our team — filtered by service category."
        image="/images/home/hero.jpg"
      />

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Browse by Category"
            title="Real Results, Real Vehicles"
            subtitle="Filter by service type to see exactly what we can do for your vehicle."
          />

          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {galleryFilters.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white"
                    : "border border-white/10 text-zinc-400 hover:border-blue-500/40 hover:text-blue-400"
                }`}
              >
                {cat}
                <span className="ml-1.5 text-xs opacity-70">
                  (
                  {cat === "All"
                    ? galleryImages.length
                    : galleryImages.filter((i) => i.category === cat).length}
                  )
                </span>
              </button>
            ))}
          </div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {filtered.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                onClick={() => setLightboxIndex(index)}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-zinc-900"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/50 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-zinc-950/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-medium truncate">
                    {img.caption}
                  </p>
                  <p className="text-amber-400 text-[10px]">{img.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner
        heading="Like What You See?"
        subtext="Get these results on your vehicle — we come to you, 7 days a week."
      />

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 w-10 h-10 rounded-full bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-amber-400 transition-colors z-10 text-lg font-bold"
            >
              ‹
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-16 w-10 h-10 rounded-full bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-amber-400 transition-colors z-10 text-lg font-bold"
            >
              ›
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[85vh] flex flex-col items-center gap-4"
            >
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].caption}
                className="max-h-[75vh] max-w-full object-contain rounded-xl"
              />
              <div className="text-center">
                <p className="text-white font-medium">
                  {filtered[lightboxIndex].caption}
                </p>
                <p className="text-amber-400 text-sm">
                  {filtered[lightboxIndex].category}
                </p>
                <p className="text-zinc-500 text-xs mt-1">
                  {lightboxIndex + 1} / {filtered.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}