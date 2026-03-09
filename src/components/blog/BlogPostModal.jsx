import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Tag, Phone } from "lucide-react";
import { site } from "@/config/site";

export default function BlogPostModal({ post, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden my-8"
        >
          {/* Hero Image */}
          <div className="relative h-64 overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-zinc-950/70 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="absolute bottom-4 left-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/90 text-zinc-950 text-xs font-semibold rounded-full">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="flex items-center gap-4 text-zinc-500 text-xs mb-4">
              <span>{post.date}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-8 leading-snug">
              {post.title}
            </h1>

            <div className="space-y-8">
              {post.sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-amber-400 font-semibold text-base mb-3">{section.heading}</h2>
                  <p className="text-zinc-300 text-sm leading-relaxed">{section.body}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-zinc-400 text-sm">Ready to book a detail?</p>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-zinc-950 rounded-full font-semibold text-sm transition-all hover:from-amber-500 hover:to-amber-400"
              >
                <Phone className="w-4 h-4" />
                {site.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}