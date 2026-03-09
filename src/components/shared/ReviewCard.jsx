import React from "react";
import { Star } from "lucide-react";

export default function ReviewCard({ review }) {
  return (
    <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/20 transition-all duration-300 flex flex-col h-full">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-sky-400 text-sky-400" />
        ))}
      </div>
      <p className="text-zinc-300 text-sm leading-relaxed flex-1 mb-5">"{review.text}"</p>
      <div className="border-t border-white/5 pt-4 flex items-end justify-between gap-2">
        <div>
          <div className="text-sm font-semibold text-white">{review.name}</div>
          <div className="text-xs text-zinc-500">{review.location}</div>
        </div>
        {review.service && (
          <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-full font-medium whitespace-nowrap">
            {review.service}
          </span>
        )}
      </div>
    </div>
  );
}