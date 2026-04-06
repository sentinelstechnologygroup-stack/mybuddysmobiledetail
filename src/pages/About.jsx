import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Leaf, Award, Clock, ArrowRight } from "lucide-react";
import { createPageUrl } from "@/utils";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeading from "@/components/shared/SectionHeading";

const reasons = [
  {
    icon: Award,
    title: "20+ Years of Expertise",
    description:
      "With two decades of experience in automotive, RV, and marine detailing, our team brings proven knowledge to every service.",
  },
  {
    icon: Shield,
    title: "Advanced Protective Treatments",
    description:
      "We offer specialized treatments beyond surface cleaning — protective coatings that shield your vehicle from environmental elements and preserve its finish.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Practices",
    description:
      "We prioritize biodegradable products and water-saving techniques. Great results for your car, and a smaller footprint on the environment.",
  },
  {
    icon: Clock,
    title: "Endorsed by Exotics & Mimosas",
    description:
      "Our work and product line has been recognized and endorsed by Exotics & Mimosas, an exclusive social auto club based in San Antonio, founded by Joel Buckley.",
  },
];

export default function About() {
  return (
    <div className="pt-20">
    <PageHero
      eyebrow="About Us"
      title="Precision. Experience. Results."
      subtitle="We bring professional-grade detailing directly to your home or workplace — delivering showroom-quality results without the hassle."
      image="/images/about/about-hero.png"
      imagePosition="center center"
    />

      {/* Founder */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80"
                  alt="Premium car detailing"
                  className="rounded-[14px] w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 rounded-[14px] ring-1 ring-inset" style={{ ringColor: 'var(--border-light)' }} />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600/10 rounded-2xl -z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--color-accent)' }}>
                The Founder
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">Dhiraj Sane</h2>
              <div className="space-y-5 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                <p>
                  Dhiraj Sane founded My Buddy's Mobile Detail in 2020, drawing on over 20 years of
                  experience in automotive, RV, and marine craft detailing.
                </p>
                <p>
                  During years of industry service, Dhiraj observed a significant disparity in the
                  performance of detailing products. Realizing the average consumer rarely had access
                  to the range of products he had worked with, he set out to bridge that gap — and
                  bring professional-grade care directly to customers' doors.
                </p>
                <p>
                  He acknowledges that specific detailing tasks require expert hands: swirl marks,
                  overspray, hard water spots, oxidized paint, ceramic coatings, tar, and tree sap
                  all demand precision and proper technique to guarantee a comprehensive result.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--color-panel)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl leading-relaxed font-light" style={{ color: 'var(--color-text-primary)' }}
          >
            "At My Buddy's Mobile Detail, we are a passionate team providing exceptional care with
            auto, aircraft, maritime, and heavy machinery solutions. With years of experience, we
            have perfected our techniques to deliver services that meet and exceed your expectations."
          </motion.p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Reasons to Detail With Us"
              subtitle="Everything we do is focused on providing the best detail and customer experience in the industry. No matter what you drive, you'll feel even better about it after trusting us."
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-[14px] border transition-all duration-500 hover:-translate-y-1"
                style={{
                  backgroundColor: 'rgba(18, 20, 27, 0.85)',
                  borderColor: 'var(--color-border)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
                onMouseEnter={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                onMouseLeave={(e) => e.target.style.borderColor = 'var(--color-border)'}
              >
                <div className="w-12 h-12 rounded-[10px] flex items-center justify-center mb-6 transition-colors" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                  <reason.icon className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
                </div>
                <h3 className="text-lg font-semibold mb-3">{reason.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Ready to Detail Your Car?" />

    </div>
  );
}