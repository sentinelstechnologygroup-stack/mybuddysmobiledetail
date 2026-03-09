import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviews } from "@/config/reviews";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import ReviewCard from "@/components/shared/ReviewCard";
import SectionHeading from "@/components/shared/SectionHeading";

export default function Reviews() {
  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="pt-20">
      <PageHero
        eyebrow="Customer Reviews"
        title="What Our Clients Say"
        subtitle="Real feedback from real customers across the Greater Houston area."
        image="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1920&q=80"
      />

      {/* Rating Summary */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--color-panel)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="text-7xl font-bold text-white tracking-tight">{avgRating}</div>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} className="w-7 h-7 fill-sky-400 text-sky-400" />
              ))}
            </div>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
             Based on {reviews.length} verified customer reviews
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              eyebrow="Verified Reviews"
              title="Trusted Across Houston"
              subtitle="From interior transformations to ceramic coatings, here's what our customers have experienced firsthand."
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <ReviewCard review={review} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Join Our Satisfied Customers"
        subtext="Book your detail today and see the difference professional mobile detailing makes."
      />
    </div>
  );
}