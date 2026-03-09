import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Car, Droplets, Sparkles, Paintbrush, LayoutGrid } from "lucide-react";
import { createPageUrl } from "@/utils";
import { serviceCards } from "@/config/services";
import { site } from "@/config/site";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";

const icons = { Car, Droplets, Sparkles, Paintbrush, LayoutGrid };

const cardsWithIcons = serviceCards.map((card, i) => ({
  ...card,
  icon: [Car, Droplets, Sparkles, Paintbrush, LayoutGrid][i],
}));

export default function Services() {
  return (
    <div className="pt-20">
      <PageHero
        eyebrow="What We Offer"
        title="Our Services"
        subtitle="From a quick wash to full ceramic coating — we cover all types of vehicles and all levels of detail."
        image="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1920&q=80"
      />

      <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardsWithIcons.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  to={card.path}
                  className="group block h-full rounded-[14px] overflow-hidden border transition-all duration-500 hover:-translate-y-1"
                  style={{
                    backgroundColor: 'rgba(18, 20, 27, 0.85)',
                    borderColor: 'var(--color-border)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="relative h-56 overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="font-bold text-sm" style={{ color: 'var(--color-accent)' }}>{card.priceFrom}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                        <card.icon className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
                      </div>
                      <h2 className="text-lg font-semibold">{card.title}</h2>
                    </div>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-text-secondary)' }}>{card.description}</p>
                    <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: 'var(--color-accent)' }}>
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-[14px] border text-center" style={{
                    backgroundColor: 'rgba(18, 20, 27, 0.85)',
                    borderColor: 'var(--color-border)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                  }}>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              Prices may vary based on vehicle condition. Additional charges may apply for heavily soiled vehicles.{" "}
              <a href={site.phoneHref} className="transition-colors font-medium" style={{ color: 'var(--color-accent)', hover: 'var(--color-accent-hover)' }}>
                Call {site.phone}
              </a>{" "}
              for a personalized quote.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}