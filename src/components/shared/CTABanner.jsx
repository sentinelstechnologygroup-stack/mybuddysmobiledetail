// src/components/shared/CTABanner.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import { createPageUrl } from "@/utils";

export default function CTABanner({
  heading = "Ready to Book?",
  subtext = "Call us or send a message — we're available 7 days a week, 7 AM to 6 PM.",
}) {
  return (
    <section className="py-24 lg:py-28 bg-zinc-950">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-white">
          {heading}
        </h2>

        <p className="mb-8 text-zinc-400">
          {subtext}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          {/* CALL BUTTON */}
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

          {/* MESSAGE BUTTON */}
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
            Send a Message
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

        </div>
      </div>
    </section>
  );
}