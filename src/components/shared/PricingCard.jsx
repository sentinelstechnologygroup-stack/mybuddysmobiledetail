// src/components/shared/PricingCard.jsx
import React from "react";
import { Check } from "lucide-react";
import { site } from "@/config/site";

export default function PricingCard({ tier }) {
  return (
    <div
      className="relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1"
      style={{
        background: tier.featured
          ? "linear-gradient(to bottom, rgba(37, 99, 235, 0.12), rgba(18, 20, 27, 0.92))"
          : "rgba(18, 20, 27, 0.78)",
        borderColor: tier.featured
          ? "rgba(37, 99, 235, 0.45)"
          : "rgba(255, 255, 255, 0.08)",
        boxShadow: tier.featured
          ? "0 12px 40px rgba(37, 99, 235, 0.18)"
          : "0 8px 28px rgba(0, 0, 0, 0.28)",
      }}
    >
      {tier.featured && (
        <div
          className="absolute -top-3 left-6 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "#ffffff",
          }}
        >
          Most Popular
        </div>
      )}

      <h3 className="mb-4 text-lg font-semibold text-white">{tier.name}</h3>

      <div className="mb-5 space-y-2">
        {tier.pricing.map((priceRow) => (
          <div
            key={priceRow.type}
            className="flex items-center justify-between text-sm"
          >
            <span style={{ color: "var(--color-text-secondary)" }}>
              {priceRow.type}
            </span>
            <span
              className="font-bold"
              style={{ color: "var(--color-accent)" }}
            >
              {priceRow.price}
            </span>
          </div>
        ))}
      </div>

      <div
        className="mb-5 h-px"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
      />

      <ul className="flex-1 space-y-2.5">
        {tier.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 text-sm"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <Check
              className="mt-0.5 h-4 w-4 flex-shrink-0"
              style={{ color: "var(--color-accent)" }}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={site.phoneHref}
        className={`mt-6 flex w-full items-center justify-center rounded-xl py-3 text-center text-sm font-semibold transition-all duration-300 ${
          tier.featured
            ? "bg-blue-600 text-white hover:bg-blue-500"
            : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
        }`}
      >
        Book Now
      </a>
    </div>
  );
}