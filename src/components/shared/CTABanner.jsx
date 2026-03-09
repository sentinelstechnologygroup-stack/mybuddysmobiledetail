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
    <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--color-primary-light)' }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">{heading}</h2>
        <p className="mb-8" style={{ color: 'var(--color-text-secondary)' }}>{subtext}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white rounded-[10px] font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            style={{
              background: `linear-gradient(to right, var(--color-primary), var(--color-primary-hover))`
            }}
          >
            <Phone className="w-4 h-4" />
            {site.phone}
          </a>
          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white rounded-[10px] font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
            style={{
              border: '1px solid var(--color-primary)',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-primary-light)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Send a Message
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}