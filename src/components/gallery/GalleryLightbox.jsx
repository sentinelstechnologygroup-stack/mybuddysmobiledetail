import React, { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function GalleryLightbox({ items, activeIndex, onClose, onNavigate }) {
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < items.length - 1;

  const handleKey = useCallback((e) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft" && hasPrev) onNavigate(activeIndex - 1);
    if (e.key === "ArrowRight" && hasNext) onNavigate(activeIndex + 1);
  }, [activeIndex, hasPrev, hasNext, onClose, onNavigate]);

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  const item = items[activeIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-zinc-950/95 backdrop-blur-xl flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Counter */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 text-zinc-400 text-sm font-medium tracking-wide">
          {activeIndex + 1} / {items.length}
        </div>

        {/* Prev */}
        {hasPrev && (
          <button
            onClick={(e) => { e.stopPropagation(); onNavigate(activeIndex - 1); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-700 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Content */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          <BeforeAfterSlider
            before={item.before}
            after={item.after}
            label={item.label}
          />
        </motion.div>

        {/* Next */}
        {hasNext && (
          <button
            onClick={(e) => { e.stopPropagation(); onNavigate(activeIndex + 1); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-700 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Dot nav */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); onNavigate(i); }}
              className={`w-1.5 h-1.5 rounded-full transition-all ${i === activeIndex ? "bg-amber-500 w-4" : "bg-zinc-600 hover:bg-zinc-400"}`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}