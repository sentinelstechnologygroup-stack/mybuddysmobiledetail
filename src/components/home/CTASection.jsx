import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import { createPageUrl } from "@/utils";

export default function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1920&q=80"
          alt="Premium detail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(11,12,16,.75), rgba(11,12,16,.85))' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="text-xs font-semibold tracking-[0.25em] uppercase mb-5" style={{ color: 'var(--color-accent)' }}>
            Ready to Book?
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6">
            Your Car Deserves the Best
          </h2>
          <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--color-text-primary)' }}>
            We come to you — at home, at work, wherever is convenient. Available 7 days a week across
            the Greater Houston area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={createPageUrl("Contact")}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-white rounded-full font-semibold text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              style={{
                background: `linear-gradient(to right, var(--color-primary), var(--color-primary-hover))`
              }}
            >
              {site.primaryCtaLabel}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all text-white hover:shadow-lg hover:-translate-y-0.5"
              style={{
                border: '1px solid var(--color-primary)',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-primary-light)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <Phone className="w-4 h-4" />
              {site.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}