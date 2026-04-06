import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { serviceAreas } from "@/config/serviceAreas";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeading from "@/components/shared/SectionHeading";

export default function ServiceArea() {
  return (
    <div className="pt-20">
      <PageHero
        eyebrow="We Come to You"
        title="Service Areas"
        subtitle="Based in Spring, TX — we proudly serve the Greater Houston area and surrounding communities."
        image="/images/service-area/service-area-hero.png"
      />

      <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              eyebrow="Coverage"
              title="Greater Houston & Surrounding Areas"
              subtitle="We come to your home or workplace — no need to drive anywhere. If your city isn't listed, give us a call. We may still be able to reach you."
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div
                className="rounded-[14px] overflow-hidden border shadow-2xl"
                style={{ height: "520px", borderColor: "var(--color-border)" }}
              >
                <iframe
                  title="My Buddy's Mobile Detail Service Area"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d443168.8!2d-95.3698!3d29.9902!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sGreater%20Houston%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus&z=9"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.85)",
                  }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <p
                className="mt-3 text-xs text-center"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Service radius approximately 50 miles from Spring, TX 77386
              </p>
            </motion.div>

            {/* Areas List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-between"
            >
              <div>
                <div
                  className="text-xs font-semibold tracking-[0.25em] uppercase mb-6"
                  style={{ color: "var(--color-accent)" }}
                >
                  Areas We Cover
                </div>

                <div className="grid grid-cols-1 gap-2">
                  {serviceAreas.map((area) => (
                    <div
                      key={area.name}
                      className={`flex items-center gap-3 px-4 py-3 rounded-[10px] text-sm transition-colors font-medium ${
                        area.base ? "font-semibold" : ""
                      }`}
                      style={{
                        backgroundColor: area.base
                          ? "var(--color-primary-light)"
                          : "rgba(18, 20, 27, 0.85)",
                        borderColor: area.base
                          ? "var(--color-primary)"
                          : "var(--color-border)",
                        borderWidth: "1px",
                        color: area.base
                          ? "var(--color-accent)"
                          : "var(--color-text-secondary)",
                      }}
                    >
                      <MapPin
                        className="w-3.5 h-3.5 flex-shrink-0"
                        style={{
                          color: area.base
                            ? "var(--color-accent)"
                            : "var(--color-text-secondary)",
                        }}
                      />
                      {area.name}

                      {area.base && (
                        <span
                          className="ml-auto text-[10px] px-2 py-0.5 rounded-full tracking-wider uppercase font-bold"
                          style={{
                            backgroundColor: "var(--color-primary-light)",
                            color: "var(--color-accent)",
                          }}
                        >
                          Base
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <p
                  className="mt-4 text-xs leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Don&apos;t see your area? Give us a call — we may still be able to service
                  you.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Convenience Copy */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--color-panel)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              {
                label: "At Your Home",
                desc: "Schedule a morning or afternoon appointment and we'll come to your driveway.",
              },
              {
                label: "At Your Workplace",
                desc: "We'll handle your car while you work. Your vehicle is ready when you are.",
              },
              {
                label: "7 Days a Week",
                desc: "We work weekends too — because your schedule shouldn't have to wait.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-[14px] border"
                style={{
                  backgroundColor: "rgba(18, 20, 27, 0.85)",
                  borderColor: "var(--color-border)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                }}
              >
                <h4 className="font-semibold mb-2" style={{ color: "var(--color-accent)" }}>
                  {item.label}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready for Mobile Detailing?"
        subtext="We come to you — at home, at work, or wherever is most convenient."
      />
    </div>
  );
}