// src/components/home/CTASection.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import { createPageUrl } from "@/utils";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1920&q=80"
          alt="Premium detail"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(11,12,16,.75), rgba(11,12,16,.85))",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div
            className="mb-5 text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: "var(--color-accent)" }}
          >
            Ready to Book?
          </div>

          <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Your Car Deserves the Best
          </h2>

          <p
            className="mb-10 text-lg leading-relaxed"
            style={{ color: "var(--color-text-primary)" }}
          >
            We come to you — at home, at work, wherever is convenient.
            Available 7 days a week across the Greater Houston area.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-[14px] border px-7 py-3.5 text-base font-semibold text-white transition-all duration-200"
              style={{
                minWidth: "180px",
                backgroundColor: "rgba(12, 17, 28, 0.88)",
                borderColor: "rgba(59, 130, 246, 0.75)",
                boxShadow:
                  "0 0 0 1px rgba(59, 130, 246, 0.18), 0 0 26px rgba(37, 99, 235, 0.28)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>

            <Link
              to={createPageUrl("Contact")}
              className="group inline-flex items-center justify-center gap-2 rounded-[14px] border px-7 py-3.5 text-base font-semibold text-white transition-all duration-200"
              style={{
                minWidth: "190px",
                backgroundColor: "rgba(24, 28, 38, 0.92)",
                borderColor: "rgba(255,255,255,0.14)",
                boxShadow: "0 8px 22px rgba(0,0,0,0.24)",
                backdropFilter: "blur(10px)",
              }}
            >
              {site.primaryCtaLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}