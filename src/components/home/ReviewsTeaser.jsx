import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { createPageUrl } from "@/utils";
import { reviews } from "@/config/reviews";
import ReviewCard from "@/components/shared/ReviewCard";

const featured = reviews.slice(0, 3);

export default function ReviewsTeaser() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex justify-center gap-1 mb-4">
            {[1,2,3,4,5].map((n) => (
              <Star key={n} className="w-5 h-5 fill-sky-400 text-sky-400" />
            ))}
          </div>
          <div className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-400 mb-4">
            Customer Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Real feedback from real customers across the Greater Houston area.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to={createPageUrl("Reviews")}
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 hover:border-blue-500/40 text-zinc-300 hover:text-blue-400 rounded-full text-sm font-semibold transition-all hover:bg-blue-500/5"
          >
            Read All Reviews
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}