// src/components/home/HeroSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { site } from "@/config/site";
import { createPageUrl } from "@/utils";

const trustPoints = [
  "We come to your home or workplace",
  "20+ years of detailing experience",
  "Eco-friendly products & methods",
];

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{
        minHeight: "clamp(620px, 78vh, 860px)",
      }}
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1920&q=80"
          alt="Premium car detailing"
          className="h-full w-full object-cover object-center"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(11,12,16,.85), rgba(11,12,16,.65), rgba(11,12,16,.40))",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(11,12,16,.80), transparent)",
          }}
        />
      </div>

      <div className="relative w-full">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 lg:px-8 lg:pt-32 lg:pb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: "var(--color-accent)" }}
            >
              Greater Houston Area
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-balance text-4xl font-bold leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {site.tagline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300"
            >
              Professional mobile detailing delivered directly to your home or
              workplace. No driving. No waiting. Just results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 space-y-2"
            >
              {trustPoints.map((pt) => (
                <div
                  key={pt}
                  className="flex items-center gap-2.5 text-sm text-zinc-400"
                >
                  <CheckCircle className="h-4 w-4 flex-shrink-0 text-blue-400" />
                  {pt}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
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
                Send Message
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}