import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Leaf, Award } from "lucide-react";

const values = [
  {
    icon: MapPin,
    title: "We Come to You",
    description: "We bring the detail shop to your driveway or parking spot — at home, at work, or wherever is most convenient.",
  },
  {
    icon: Award,
    title: "20+ Years of Expertise",
    description: "Our team brings two decades of hands-on experience with automotive, RV, and marine detailing.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "We use biodegradable soaps and water-saving techniques that deliver great results without harming the environment.",
  },
  {
    icon: Clock,
    title: "Available 7 Days a Week",
    description: "We work weekends and holidays because your schedule shouldn't have to wait for professional care.",
  },
];

export default function MissionSection() {
  return (
    <section className="py-24 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-400 mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Professional Care, Zero Hassle
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            We handle every detail so you don't have to. Here's what makes My Buddy's Mobile Detail different.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-7 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-blue-500/20 transition-all duration-400 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5 mx-auto group-hover:bg-blue-500/20 transition-colors">
                <value.icon className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-3">{value.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}