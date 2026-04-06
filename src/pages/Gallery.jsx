// src/pages/Gallery.jsx

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Expand, X, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import { site } from "@/config/site";
import { createPageUrl } from "@/utils";
import { galleryImages, galleryFilters } from "@/config/galleryImages";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return galleryImages;
    return galleryImages.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const selectedItem =
    selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const goPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="pt-20">
      <PageHero
        eyebrow="Gallery"
        title="Our Work in Pictures"
        subtitle="Browse real detailing results from actual vehicles serviced by My Buddy’s Mobile Detail."
        image="/images/gallery/hero.jpeg"
      />

      <section
        className="py-16 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              Real Results
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Mobile detailing results you can actually see
            </h2>

            <p
              className="mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Tap any image to open it larger. Use the filters to browse by
              service type.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {galleryFilters.map((filter) => {
              const isActive = activeFilter === filter;
              const count =
                filter === "All"
                  ? galleryImages.length
                  : galleryImages.filter((item) => item.category === filter).length;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200"
                  style={{
                    backgroundColor: isActive
                      ? "rgba(37, 99, 235, 0.92)"
                      : "rgba(18, 20, 27, 0.92)",
                    border: isActive
                      ? "1px solid rgba(96, 165, 250, 0.42)"
                      : "1px solid rgba(255, 255, 255, 0.12)",
                    color: "#ffffff",
                    boxShadow: isActive
                      ? "0 8px 20px rgba(37, 99, 235, 0.24)"
                      : "none",
                  }}
                >
                  {filter}
                  <span className="ml-2 opacity-70">({count})</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filteredItems.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.28, delay: index * 0.02 }}
                onClick={() => setSelectedIndex(index)}
                className="group relative overflow-hidden rounded-xl text-left aspect-square"
                style={{
                  backgroundColor: "rgba(18, 20, 27, 0.92)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  boxShadow: "0 10px 24px rgba(0, 0, 0, 0.24)",
                }}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute top-2 left-2">
                  <span
                    className="inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white"
                    style={{
                      backgroundColor: "rgba(11, 12, 16, 0.78)",
                      border: "1px solid rgba(255, 255, 255, 0.14)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {item.category}
                  </span>
                </div>

                <div
                  className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
                  style={{
                    backgroundColor: "rgba(11, 12, 16, 0.82)",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                    color: "var(--color-accent)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <Expand className="w-4 h-4" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="text-sm font-semibold text-white leading-snug">
                    {item.caption}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              Ready to Book?
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Get these results on your vehicle
            </h3>

            <p
              className="mt-3 max-w-2xl mx-auto text-sm leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Mobile detailing at your home or workplace with fast scheduling and
              professional results.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[12px] font-semibold text-white border transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary), var(--color-primary-hover))",
                  borderColor: "rgba(96, 165, 250, 0.55)",
                  boxShadow: "0 10px 24px rgba(37, 99, 235, 0.28)",
                }}
              >
                <Phone className="w-4 h-4" />
                {site.phone}
              </a>

              <Link
                to={createPageUrl("Contact")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[12px] font-semibold text-white border transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "rgba(18, 20, 27, 0.92)",
                  borderColor: "rgba(255, 255, 255, 0.22)",
                  boxShadow: "0 10px 24px rgba(0, 0, 0, 0.24)",
                  backdropFilter: "blur(10px)",
                }}
              >
                Send Message
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.86)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden"
              style={{
                backgroundColor: "rgba(18, 20, 27, 0.98)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
              }}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(11, 12, 16, 0.78)",
                  border: "1px solid rgba(255, 255, 255, 0.16)",
                  color: "#ffffff",
                }}
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedItem.src}
                alt={selectedItem.caption}
                className="w-full max-h-[75vh] object-contain bg-black"
              />

              <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div
                    className="text-[11px] font-bold uppercase tracking-[0.22em] mb-2"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {selectedItem.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedItem.caption}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="px-4 py-2 rounded-lg text-sm font-semibold text-white border"
                    style={{
                      backgroundColor: "rgba(18, 20, 27, 0.92)",
                      borderColor: "rgba(255, 255, 255, 0.18)",
                    }}
                  >
                    Prev
                  </button>

                  <button
                    type="button"
                    onClick={goNext}
                    className="px-4 py-2 rounded-lg text-sm font-semibold text-white border"
                    style={{
                      backgroundColor: "rgba(18, 20, 27, 0.92)",
                      borderColor: "rgba(255, 255, 255, 0.18)",
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}