// src/pages/Services.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Car,
  Droplets,
  Sparkles,
  Shield,
  LayoutGrid,
} from "lucide-react";
import { serviceCards } from "@/config/services";
import { site } from "@/config/site";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";

const iconList = [Car, Droplets, Sparkles, Shield, LayoutGrid];

const cardsWithIcons = serviceCards.map((card, i) => ({
  ...card,
  icon: iconList[i] || Car,
}));

export default function Services() {
  return (
    <div className="pt-20">
      <PageHero
        eyebrow="What We Offer"
        title="Our Services"
        subtitle="From a quick wash to full ceramic coating — we cover all types of vehicles and all levels of detail."
        image="/images/services/services-hero.png"
        tall
        imagePosition="center 38%"
      />

      <section
        className="py-20 lg:py-24"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {cardsWithIcons.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="h-full"
                >
                  <Link
                    to={card.path}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                    style={{
                      backgroundColor: "rgba(18, 20, 27, 0.92)",
                      borderColor: "var(--color-border)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.28)",
                    }}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/25 to-transparent" />

                      <div className="absolute left-5 bottom-4">
                        <span
                          className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold tracking-wide"
                          style={{
                            color: "white",
                            backgroundColor: "rgba(37, 99, 235, 0.9)",
                          }}
                        >
                          {card.priceFrom}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 transition-colors duration-300 group-hover:bg-blue-500/20">
                          <Icon
                            className="h-5 w-5"
                            style={{ color: "var(--color-accent)" }}
                          />
                        </div>

                        <h2 className="text-xl font-semibold leading-tight">
                          {card.title}
                        </h2>
                      </div>

                      <p
                        className="text-sm leading-7 mb-6 flex-1"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {card.description}
                      </p>

                      <div
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                        style={{ color: "var(--color-accent)" }}
                      >
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div
            className="mt-10 rounded-2xl border px-6 py-5 text-center"
            style={{
              backgroundColor: "rgba(18, 20, 27, 0.92)",
              borderColor: "var(--color-border)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.24)",
            }}
          >
            <p
              className="text-sm leading-7"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Prices may vary based on vehicle condition. Additional charges may
              apply for heavily soiled vehicles.{" "}
              <a
                href={site.phoneHref}
                className="font-semibold transition-opacity hover:opacity-80"
                style={{ color: "var(--color-accent)" }}
              >
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