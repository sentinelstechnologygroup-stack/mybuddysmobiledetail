import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Expand, X, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import { site } from "@/config/site";
import { createPageUrl } from "@/utils";

const galleryItems = [
  {
    id: 1,
    title: "Rear Wash Detail",
    category: "All",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80",
    height: "h-44",
  },
  {
    id: 2,
    title: "Audi Exterior",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=900&q=80",
    height: "h-44",
  },
  {
    id: 3,
    title: "Road Shine Finish",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&q=80",
    height: "h-44",
  },
  {
    id: 4,
    title: "White Sedan Detail",
    category: "Sedan",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900&q=80",
    height: "h-44",
  },
  {
    id: 5,
    title: "Sunset Gloss",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=900&q=80",
    height: "h-44",
  },
  {
    id: 6,
    title: "Black Coupe Finish",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&q=80",
    height: "h-44",
  },
  {
    id: 7,
    title: "Red Performance Car",
    category: "Sports Car",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=900&q=80",
    height: "h-44",
  },
  {
    id: 8,
    title: "Interior Work",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?w=900&q=80",
    height: "h-44",
  },
  {
    id: 9,
    title: "SUV Detail",
    category: "SUV",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900&q=80",
    height: "h-44",
  },
  {
    id: 10,
    title: "Blue Exotic",
    category: "Sports Car",
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=900&q=80",
    height: "h-44",
  },
  {
    id: 11,
    title: "Red Coupe",
    category: "Sports Car",
    image:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?w=900&q=80",
    height: "h-44",
  },
  {
    id: 12,
    title: "Classic Blue Finish",
    category: "Sedan",
    image:
      "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?w=900&q=80",
    height: "h-44",
  },
  {
    id: 13,
    title: "Classic Beetle",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=900&q=80",
    height: "h-44",
  },
  {
    id: 14,
    title: "Client Delivery",
    category: "All",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80",
    height: "h-44",
  },
  {
    id: 15,
    title: "Bike Detail",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1505705694340-019e1e335916?w=900&q=80",
    height: "h-44",
  },
  {
    id: 16,
    title: "Estate Drive Finish",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80",
    height: "h-44",
  },
  {
    id: 17,
    title: "Engine Bay Detail",
    category: "Engine",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&q=80",
    height: "h-44",
  },
  {
    id: 18,
    title: "Hood Reflection",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&q=80",
    height: "h-44",
  },
  {
    id: 19,
    title: "Night Finish",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=900&q=80",
    height: "h-44",
  },
  {
    id: 20,
    title: "Ceramic Coating",
    category: "Coating",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900&q=80",
    height: "h-44",
  },
  {
    id: 21,
    title: "Studio Reflection",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=900&q=80",
    height: "h-44",
  },
];

const filters = [
  "All",
  "Exterior",
  "Interior",
  "Sedan",
  "SUV",
  "Sports Car",
  "Coating",
  "Engine",
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
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
        subtitle="Browse real results from real vehicles detailed by a mobile detailing team focused on clean finishes, restored shine, and consistent quality."
        image="https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?w=1920&q=80"
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
              Real Results, Real Vehicles
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              From daily drivers to show-ready shine
            </h2>

            <p
              className="mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Tap any image to view it larger. Use the filters to browse exterior,
              interior, ceramic coating, engine bay, and more.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

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
                className={`group relative overflow-hidden rounded-xl text-left ${item.height}`}
                style={{
                  backgroundColor: "rgba(18, 20, 27, 0.92)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  boxShadow: "0 10px 24px rgba(0, 0, 0, 0.24)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
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
                    {item.title}
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
              Like What You See?
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Get these results on your vehicle
            </h3>

            <p
              className="mt-3 max-w-2xl mx-auto text-sm leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Book mobile detailing at your home or workplace. Fast scheduling,
              consistent quality, and professional results delivered to your door.
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

      <CTABanner
        heading="Book Your Detail Today"
        subtext="Professional mobile detailing delivered to your home or workplace. 7 days a week, 7 AM – 6 PM."
      />

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
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full max-h-[75vh] object-cover"
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
                    {selectedItem.title}
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