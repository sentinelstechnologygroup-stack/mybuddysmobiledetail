// src/components/shared/FooterCTA.jsx
import React from "react";
import { Phone, ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import { createPageUrl } from "@/utils";
import { Link } from "react-router-dom";

export default function FooterCTA() {
  return (
    <section
      className="py-16 lg:py-20 border-b"
      style={{
        backgroundColor: "var(--color-panel)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              Ready to Transform Your Vehicle?
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-white">
              Book Your Detail Today
            </h3>

            <p
              className="mt-3 text-sm leading-relaxed max-w-xl"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Professional mobile detailing delivered to your home or workplace.
              7 days a week, 7 AM – 6 PM.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
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
  );
}