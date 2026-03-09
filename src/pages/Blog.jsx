// src/pages/Blog.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/config/blogPosts";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeading from "@/components/shared/SectionHeading";
import BlogPostModal from "@/components/blog/BlogPostModal";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="pt-20">
      <PageHero
        eyebrow="The Detail Blog"
        title="Tips, Insights & Car Care"
        subtitle="Expert advice from the team at My Buddy's Mobile Detail — helping you keep your vehicle looking its best."
        image="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1920&q=80"
      />

      <section className="py-24" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Latest Articles"
            title="From the Detail Team"
            subtitle="Practical car care knowledge written by professionals with over 20 years of experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                onClick={() => setSelectedPost(post)}
                className="group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: "rgba(18, 20, 27, 0.92)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.24)",
                }}
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full text-white"
                      style={{
                        backgroundColor: "rgba(37, 99, 235, 0.92)",
                        border: "1px solid rgba(96, 165, 250, 0.3)",
                        boxShadow: "0 8px 18px rgba(37, 99, 235, 0.2)",
                      }}
                    >
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <div
                    className="flex items-center gap-4 text-xs mb-4"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3 leading-snug">
                    {post.title}
                  </h2>

                  <p
                    className="text-sm leading-relaxed mb-5 line-clamp-3"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {post.excerpt}
                  </p>

                  <div
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Experience the Difference?"
        subtext="Book your detail today and put these tips to work on your vehicle."
      />

      {selectedPost && (
        <BlogPostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
}