import React from "react";
import { motion } from "framer-motion";

export default function PageHero({ eyebrow, title, subtitle, image, tall = false }) {
  return (
    <section className={`relative overflow-hidden ${tall ? "py-40 lg:py-48" : "py-32 lg:py-40"}`}>
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(11,12,16,.65), rgba(11,12,16,.85))' }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow && (
            <div className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--color-accent)' }}>
              {eyebrow}
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">{title}</h1>
          {subtitle && (
            <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}