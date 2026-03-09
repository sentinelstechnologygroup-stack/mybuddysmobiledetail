import React from "react";
import { motion } from "framer-motion";

const items = [
  { name: "Headliner Cleaning", price: "$100+", desc: "Removes smoke smell, body odor, dust, and minor stains with our proprietary method." },
  { name: "Engine Cleaning", price: "$80+", desc: "Removes road grime, grease, oil, and environmental fallout from your engine bay." },
  { name: "Clay Bar Treatment", price: "$250+", desc: "Removes contamination from clear coat, making it smooth, sealed with polish or wax." },
  { name: "Water Spot Removal", price: "$699+", desc: "Eliminates crystallized mineral deposits and calcium from your vehicle's surface." },
  { name: "Ozone Treatment", price: "$125/hr", desc: "Neutralizes and kills viruses and eliminates foul odors from cabin and filters." },
  { name: "Headlight Restoration", price: "$90/pair", desc: "Restores clarity to yellowed acrylic headlights for improved visibility and safety." },
  { name: "Plastic Trim Restoration", price: "$160+", desc: "Brings faded exterior trim back to life without expensive replacement." },
  { name: "Scratch Removal", price: "$80/panel", desc: "Removes hairline scratches caused by rubbing or surface transference." },
  { name: "Wheel Polish", price: "$35/rim", desc: "Removal of brake dust and grime from wheel surfaces." },
  { name: "Odor Removal", price: "$70/treatment", desc: "Removes odor caused by smoke and body." },
  { name: "Ceramic Shield for Windows", price: "$99+", desc: "Enhanced clarity, reduced glare, easier cleaning, and UV protection." },
];

export default function ALaCarteSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">À La Carte</h2>
        <p className="mt-3 text-zinc-400 max-w-2xl">
          Individual services to address specific needs. Combine them for a custom solution.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            className="group p-5 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-amber-500/20 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-semibold">{item.name}</h3>
              <span className="text-accent font-bold text-sm whitespace-nowrap ml-3">{item.price}</span>
            </div>
            <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}