import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Car, Droplets, Sparkles } from "lucide-react";
import { createPageUrl } from "@/utils";
import { serviceCards } from "@/config/services";

const featured = serviceCards.slice(0, 3);
const icons = [Car, Droplets, Sparkles];

export default function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--color-accent)' }}>
            What We Offer
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Services</h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            From a basic wash to full ceramic coating — professional results delivered at your door.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((card, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                   to={card.path}
                   className="group block h-full rounded-[14px] overflow-hidden border transition-all duration-500 hover:-translate-y-1"
                   style={{
                     backgroundColor: 'rgba(18, 20, 27, 0.85)',
                     borderColor: 'var(--color-border)',
                     boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                   }}
                 >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <h3 className="font-semibold">{card.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>{card.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm" style={{ color: 'var(--color-accent)' }}>{card.priceFrom}</span>
                      <span className="flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all" style={{ color: 'var(--color-accent)' }}>
                        Details <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to={createPageUrl("Services")}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-white rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
            style={{
              border: '1px solid var(--color-primary)',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-primary-light)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}