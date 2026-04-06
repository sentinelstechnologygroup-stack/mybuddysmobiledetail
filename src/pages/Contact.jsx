// src/pages/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { site } from "../config/site.jsx";
import PageHero from "@/components/shared/PageHero";

/**
 * @typedef {Object} ContactFormState
 * @property {string} name
 * @property {string} phone
 * @property {string} email
 * @property {string} zipcode
 * @property {string} service
 * @property {string} message
 */

export default function Contact() {
  /** @type {[ContactFormState, React.Dispatch<React.SetStateAction<ContactFormState>>]} */
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    zipcode: "",
    service: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /**
   * @param {keyof ContactFormState} key
   * @param {string} value
   */
  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  /**
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="pt-20" style={{ backgroundColor: "var(--color-bg)" }}>
      <PageHero
        eyebrow="Contact"
        title="Book Your Mobile Detail"
        subtitle="Tell us about your vehicle and the service you need. We’ll come to your home or workplace and help get you scheduled."
        image="/images/contact/contact-hero.jpg"
        imagePosition="center center"
      />

      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              Get In Touch
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Let’s Get Your Vehicle Looking Right
            </h2>

            <p
              className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Use the form below or contact us directly by phone or email.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl p-6 lg:p-8"
              style={{
                backgroundColor: "rgba(18,20,27,0.92)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 14px 40px rgba(0,0,0,0.28)",
              }}
            >
              {submitted ? (
                <div className="py-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: "rgba(37,99,235,0.16)",
                        border: "1px solid rgba(96,165,250,0.35)",
                      }}
                    >
                      <CheckCircle
                        className="w-6 h-6"
                        style={{ color: "var(--color-accent)" }}
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Message Received
                      </h3>
                      <p
                        className="text-sm"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        Thanks for reaching out. This demo form is ready for
                        your real form handler.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        phone: "",
                        email: "",
                        zipcode: "",
                        service: "",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-[12px] font-semibold text-white border transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-primary), var(--color-primary-hover))",
                      borderColor: "rgba(96, 165, 250, 0.55)",
                      boxShadow: "0 10px 24px rgba(37, 99, 235, 0.28)",
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field
                      label="Name"
                      required={true}
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                    />
                    <Field
                      label="Phone"
                      required={true}
                      placeholder="Best number to reach you"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field
                      label="Email"
                      type="email"
                      required={true}
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                    />
                    <Field
                      label="ZIP Code"
                      placeholder="77386"
                      value={form.zipcode}
                      onChange={(e) => updateField("zipcode", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 text-xs uppercase tracking-wider mb-2">
                      Service Requested
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => updateField("service", e.target.value)}
                      className="w-full h-12 rounded-xl px-4 bg-zinc-900/80 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                    >
                      <option value="">Select a service</option>
                      <option value="Full Service">Full Service Detail</option>
                      <option value="Exterior Detail">Exterior Detail</option>
                      <option value="Interior Detail">Interior Detail</option>
                      <option value="Paint Correction">Paint Correction</option>
                      <option value="Ceramic Coating">Ceramic Coating</option>
                      <option value="A La Carte">A La Carte / Add-On</option>
                      <option value="Not Sure">Not Sure — Need a Quote</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-zinc-400 text-xs uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Tell us about your vehicle and what services you're interested in..."
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      className="w-full rounded-xl px-4 py-3 bg-zinc-900/80 border border-white/10 text-white focus:outline-none focus:ring-2 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-[12px] font-semibold text-white transition-all duration-200 disabled:opacity-70"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-primary), var(--color-primary-hover))",
                      boxShadow: "0 10px 24px rgba(37, 99, 235, 0.28)",
                    }}
                  >
                    <Send className="w-4 h-4" />
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="rounded-2xl p-6 lg:p-8 space-y-5"
              style={{
                backgroundColor: "rgba(18,20,27,0.92)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 14px 40px rgba(0,0,0,0.28)",
              }}
            >
              <InfoRow
                icon={Phone}
                title="Call"
                value={site.phone}
                href={site.phoneHref}
              />
              <InfoRow
                icon={Mail}
                title="Email"
                value={site.email}
                href={site.emailHref}
              />
              <InfoRow
                icon={MapPin}
                title="Service Area"
                value={site.address}
              />
              <InfoRow icon={Clock} title="Hours" value={site.hours} />

              <div
                className="rounded-xl p-5 mt-6"
                style={{
                  backgroundColor: "rgba(11,12,16,0.70)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  Mobile Service, Built for Convenience
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  We come to your home or workplace so you don’t have to waste
                  time driving, waiting, or rearranging your day.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * @typedef {Object} FieldProps
 * @property {string} label
 * @property {string=} type
 * @property {boolean=} required
 * @property {string=} placeholder
 * @property {string} value
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange
 */

/**
 * @param {FieldProps} props
 */
function Field(props) {
  const {
    label,
    type = "text",
    required = false,
    placeholder = "",
    value,
    onChange,
  } = props;

  return (
    <div>
      <label className="block text-zinc-400 text-xs uppercase tracking-wider mb-2">
        {label}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-12 rounded-xl px-4 bg-zinc-900/80 border border-white/10 text-white focus:outline-none focus:ring-2"
      />
    </div>
  );
}

/**
 * @typedef {Object} InfoRowProps
 * @property {React.ComponentType<{ className?: string, style?: React.CSSProperties }>} icon
 * @property {string} title
 * @property {string} value
 * @property {string=} href
 */

/**
 * @param {InfoRowProps} props
 */
function InfoRow(props) {
  const { icon: Icon, title, value, href = "" } = props;

  const content = (
    <div className="flex items-start gap-3">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          backgroundColor: "rgba(37,99,235,0.12)",
          border: "1px solid rgba(96,165,250,0.24)",
        }}
      >
        <Icon className="w-4 h-4" style={{ color: "var(--color-accent)" }} />
      </div>

      <div>
        <div
          className="text-xs uppercase tracking-[0.18em] font-semibold mb-1"
          style={{ color: "var(--color-accent)" }}
        >
          {title}
        </div>
        <div className="text-white font-medium">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return <div>{content}</div>;
}