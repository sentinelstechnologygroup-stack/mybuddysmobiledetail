import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";

const sections = [
  {
    title: "Access Requirements",
    items: [
      "Vehicle must be unlocked with all compartments accessible.",
      "We require sufficient space to work and access to a working water spigot and power outlets.",
      "If access is denied or unsafe, we may cancel the appointment and charge a cancellation fee.",
    ],
  },
  {
    title: "Cancellations & Rescheduling",
    items: [
      "Minimum 24 hours' notice required to cancel or reschedule without penalty.",
      "Same-day cancellations or no-shows may result in a fee of up to 50% of the service cost.",
    ],
  },
  {
    title: "Weather Policy",
    items: [
      "Appointments may be postponed in the event of heavy rain, storms, or extreme conditions. We'll contact you to reschedule.",
    ],
  },
  {
    title: "Payment",
    items: [
      "Payment is due immediately after service unless otherwise agreed.",
      "We accept cash and mobile payments via Zelle.",
    ],
  },
  {
    title: "Service Limitations",
    items: [
      "We do our best to remove stains, odors, and pet hair, but complete removal is not guaranteed.",
      "Additional charges may be applied depending on the condition of the vehicle.",
      "We do not remove or reinstall child seats.",
    ],
  },
  {
    title: "Damage & Liability",
    items: [
      "We are not responsible for pre-existing damage, faulty parts, or items left in the vehicle.",
      "Customers are responsible for disclosing any known issues prior to service.",
    ],
  },
  {
    title: "Personal Items",
    items: [
      "Please remove all personal belongings before your appointment.",
      "We are not responsible for lost or damaged items left in the vehicle.",
    ],
  },
];

export default function Terms() {
  return (
    <div className="pt-20">
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before booking a service with My Buddy's Mobile Detail."
        image="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1920&q=80"
      />

      <section className="py-24 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="border border-white/8 rounded-2xl p-8 bg-zinc-900/40"
              >
                <h2 className="text-lg font-semibold text-amber-400 mb-5">{section.title}</h2>
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-zinc-300 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <p className="mt-12 text-zinc-500 text-xs text-center">
            By booking a service, you agree to these terms and conditions.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Ready to Book?"
        subtext="Questions about our terms? Give us a call — we're happy to walk you through everything."
      />
    </div>
  );
}