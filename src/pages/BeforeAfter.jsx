// src/pages/BeforeAfter.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import BeforeAfterSlider from "@/components/gallery/BeforeAfterSlider";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";

const PAGE_SIZE = 15;

const allComparisons = [
  {
    label: "Full Exterior Detail — Paint Restoration",
    before: { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80" },
    after: { src: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=900&q=80" },
  },
  {
    label: "Interior Deep Clean — Seat & Carpet Shampoo",
    before: { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80" },
    after: { src: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=900&q=80" },
  },
  {
    label: "Exterior Wash & Wax — Body Shine",
    before: { src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=900&q=80" },
    after: { src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=900&q=80" },
  },
  {
    label: "Headlight Restoration — Clarity Renewed",
    before: { src: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=900&q=80" },
    after: { src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=80" },
  },
  {
    label: "Paint Correction — Swirl Mark Removal",
    before: { src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=900&q=80" },
    after: { src: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=900&q=80" },
  },
  {
    label: "Interior Detail — Dashboard & Panel Clean",
    before: { src: "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=900&q=80" },
    after: { src: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=900&q=80" },
  },
  {
    label: "Ceramic Coating — Gloss & Protection",
    before: { src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=900&q=80" },
    after: { src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&q=80" },
  },
  {
    label: "Engine Bay Detail — Full Clean",
    before: { src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&q=80" },
    after: { src: "https://images.unsplash.com/photo-1581362072978-14998d01fdaa?w=900&q=80" },
  },
  {
    label: "Wheel & Tire Restoration",
    before: { src: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=900&q=80" },
    after: { src: "https://images.unsplash.com/photo-1518987048-93e29699e79a?w=900&q=80" },
  },
  {
    label: "Full Interior — Leather Conditioning",
    before: { src: "https://images.unsplash.com/photo-1577650240293-1494f4fc5e31?w=900&q=80" },
    after: { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80" },
  },
  {
    label: "Oxidation Removal — Clear Coat Restore",
    before: { src: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=900&q=80" },
    after: { src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=900&q=80" },
  },
  {
    label: "Premium Full Detail — SUV",
    before: { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80" },
    after: { src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=80" },
  },
  {
    label: "Clay Bar Treatment — Paint Smoothing",
    before: { src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=900&q=80" },
    after: { src: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=900&q=80" },
  },
  {
    label: "Convertible Soft Top Clean",
    before: { src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=900&q=80" },
    after: { src: "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=900&q=80" },
  },
  {
    label: "Truck Bed & Exterior Detail",
    before: { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80" },
    after: { src: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=900&q=80" },
  },
  {
    label: "Window Glass Polish",
    before: { src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=900&q=80" },
    after: { src: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=900&q=80" },
  },
  {
    label: "Red Carpet Full Detail — Luxury Sedan",
    before: { src: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=900&q=80" },
    after: { src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=80" },
  },
  {
    label: "Ozone Treatment — Interior Odor Removal",
    before: { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80" },
    after: { src: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=900&q=80" },
  },
];

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const visibleItems = allComparisons.slice(0, visibleCount);
  const hasMore = visibleCount < allComparisons.length;

  return (
    <div className="pt-20">
      <PageHero
        eyebrow="Before & After"
        title="Transformation Gallery"
        subtitle="Witness the transformation. Drag the slider or click to expand for a closer look."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
      />

      <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % PAGE_SIZE) * 0.04 }}
                className="group relative rounded-[14px] overflow-hidden"
                style={{
                  backgroundColor: "rgba(18, 20, 27, 0.92)",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  boxShadow: "0 10px 32px rgba(0, 0, 0, 0.34)",
                }}
              >
                <div className="relative">
                  <div
                    className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-md text-xs font-bold tracking-wider uppercase text-white"
                    style={{
                      backgroundColor: "rgba(37, 99, 235, 0.92)",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 8px 18px rgba(37, 99, 235, 0.22)",
                    }}
                  >
                    Before/After
                  </div>

                  <BeforeAfterSlider before={item.before} after={item.after} label={item.label} />

                  <button
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
                    style={{
                      backgroundColor: "rgba(11, 12, 16, 0.86)",
                      borderColor: "rgba(255, 255, 255, 0.22)",
                      color: "var(--color-accent)",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 8px 22px rgba(0, 0, 0, 0.28)",
                    }}
                    title="Expand"
                  >
                    <Expand className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {hasMore && (
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-[12px] text-sm font-semibold text-white border transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "rgba(18, 20, 27, 0.92)",
                  borderColor: "rgba(255, 255, 255, 0.22)",
                  boxShadow: "0 10px 24px rgba(0, 0, 0, 0.24)",
                }}
              >
                Load More ({allComparisons.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </div>
      </section>

      <CTABanner
        heading="Ready to See These Results on Your Vehicle?"
        subtext="Book your detail today and we'll come to you."
      />

      {lightboxIndex !== null && (
        <GalleryLightbox
          items={visibleItems}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}