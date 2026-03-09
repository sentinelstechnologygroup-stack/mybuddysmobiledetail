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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1920&q=80"
          alt="Premium car detailing"
          className="w-full h-full object-cover"
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
            background: "linear-gradient(to top, rgba(11,12,16,.80), transparent)",
          }}
        />
      </div>

      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-5"
              style={{ color: "var(--color-accent)" }}
            >
              Greater Houston Area
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white"
            >
              {site.tagline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-zinc-300 text-lg leading-relaxed max-w-xl"
            >
              Professional mobile detailing delivered directly to your home or workplace.
              No driving. No waiting. Just results.
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
                  className="flex items-center gap-2.5 text-zinc-400 text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  {pt}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white rounded-[14px] font-semibold text-base transition-all duration-200 border"
                style={{
                  minWidth: "180px",
                  backgroundColor: "rgba(12, 17, 28, 0.88)",
                  borderColor: "rgba(59, 130, 246, 0.75)",
                  boxShadow:
                    "0 0 0 1px rgba(59, 130, 246, 0.18), 0 0 26px rgba(37, 99, 235, 0.28)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Phone className="w-4 h-4" />
                {site.phone}
              </a>

              <Link
                to={createPageUrl("Contact")}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white rounded-[14px] font-semibold text-base transition-all duration-200 border"
                style={{
                  minWidth: "190px",
                  backgroundColor: "rgba(24, 28, 38, 0.92)",
                  borderColor: "rgba(255,255,255,0.14)",
                  boxShadow: "0 8px 22px rgba(0,0,0,0.24)",
                  backdropFilter: "blur(10px)",
                }}
              >
                Send Message
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}