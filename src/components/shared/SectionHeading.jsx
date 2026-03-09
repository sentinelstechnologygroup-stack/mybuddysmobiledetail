// src/components/shared/SectionHeading.jsx
import React from "react";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}) {
  return (
    <div className={`mb-14 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <div
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
          style={{ color: "var(--color-accent)" }}
        >
          {eyebrow}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 leading-relaxed ${
            center ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
          style={{ color: "var(--color-text-secondary)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}