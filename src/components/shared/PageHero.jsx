// src/components/shared/PageHero.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * @typedef {Object} PageHeroProps
 * @property {string=} eyebrow
 * @property {string} title
 * @property {string=} subtitle
 * @property {string} image
 * @property {boolean=} tall
 * @property {string=} imagePosition
 */

/**
 * @param {PageHeroProps} props
 */
export default function PageHero(props) {
  const {
    eyebrow,
    title,
    subtitle,
    image,
    tall = false,
    imagePosition = "center center",
  } = props;

  return (
    <section
      className={`relative overflow-hidden w-full ${
        tall
          ? "h-[420px] sm:h-[500px] lg:h-[620px]"
          : "h-[340px] sm:h-[420px] lg:h-[520px]"
      }`}
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: imagePosition }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(11,12,16,.58), rgba(11,12,16,.82))",
          }}
        />
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {eyebrow ? (
            <div
              className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              {eyebrow}
            </div>
          ) : null}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            {title}
          </h1>

          {subtitle ? (
            <p
              className="mt-5 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {subtitle}
            </p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}