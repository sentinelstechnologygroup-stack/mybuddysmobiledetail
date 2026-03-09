import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { site, navLinks } from "@/config/site";
import { createPageUrl } from "@/utils";
import FooterCTA from "@/components/shared/FooterCTA";

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl shadow-2xl"
            : "bg-transparent"
        }`}
        style={{
          backgroundColor: scrolled ? 'rgba(11, 12, 16, 0.95)' : 'transparent',
          borderBottom: scrolled ? `1px solid var(--border-subtle)` : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-lg tracking-tight" style={{ background: `linear-gradient(to bottom right, var(--color-primary), var(--color-primary-hover))` }}>
                      MB
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-sm font-bold tracking-wider uppercase text-white transition-colors" style={{ color: 'var(--color-text-primary)' }}>
                  My Buddy's
                </div>
                <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: 'var(--color-text-secondary)' }}>
                  Mobile Detail
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={`${link.label}-${link.path}`}
                    to={link.path}
                    className="px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 border"
                    style={{
                      color: isActive
                        ? "#ffffff"
                        : "var(--color-text-secondary)",
                      backgroundColor: isActive
                        ? "rgba(37, 99, 235, 0.92)"
                        : "transparent",
                      borderColor: isActive
                        ? "rgba(96, 165, 250, 0.42)"
                        : "transparent",
                      boxShadow: isActive
                        ? "0 8px 20px rgba(37, 99, 235, 0.24)"
                        : "none",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <a
                href={site.phoneHref}
                className="ml-4 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[12px] text-sm font-semibold text-white border transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary), var(--color-primary-hover))",
                  borderColor: "rgba(96, 165, 250, 0.55)",
                  boxShadow: "0 10px 24px rgba(37, 99, 235, 0.28)",
                }}
              >
                <Phone className="w-4 h-4" />
                {site.secondaryCtaLabel || "Call Now"}
              </a>
            </nav>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden backdrop-blur-xl overflow-hidden"
              style={{
                backgroundColor: 'rgba(11, 12, 16, 0.98)',
                borderTop: `1px solid var(--border-light)`
              }}
            >
              <div className="px-6 py-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors`}
                    style={{
                      color: location.pathname === link.path ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                      backgroundColor: location.pathname === link.path ? 'var(--color-primary-light)' : 'transparent'
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={site.phoneHref}
                  className="block mt-4 px-4 py-3 text-white rounded-xl text-center font-semibold flex items-center justify-center gap-2"
                  style={{
                    background: `linear-gradient(to right, var(--color-primary), var(--color-primary-hover))`
                  }}
                >
                  <Phone className="w-4 h-4" />
                  {site.phone}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t" style={{ backgroundColor: '#07080c', borderColor: 'var(--color-border)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-lg" style={{ background: `linear-gradient(to bottom right, var(--color-primary), var(--color-primary-hover))` }}>
                  MB
                </div>
                <div>
                  <div className="text-sm font-bold tracking-wider uppercase" style={{ color: 'var(--color-text-primary)' }}>My Buddy's</div>
                  <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: 'var(--color-text-secondary)' }}>Mobile Detail</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed mt-4" style={{ color: 'var(--color-text-secondary)' }}>
                Professional mobile detailing delivered to your home or workplace. Over 20 years of experience in automotive care.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: 'var(--color-text-secondary)' }}>Contact</h4>
              <div className="space-y-4">
                <a href={site.phoneHref} className="flex items-center gap-3 transition-colors text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  <Phone className="w-4 h-4" style={{ color: 'rgba(37, 99, 235, 0.6)' }} />
                  {site.phone}
                </a>
                <a href={site.emailHref} className="flex items-center gap-3 transition-colors text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  <Mail className="w-4 h-4" style={{ color: 'rgba(37, 99, 235, 0.6)' }} />
                  {site.email}
                </a>
                <div className="flex items-center gap-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: 'rgba(37, 99, 235, 0.6)' }} />
                  {site.address}
                </div>
              </div>
            </div>

            {/* Hours + Nav */}
            <div>
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: 'var(--color-text-secondary)' }}>Hours</h4>
              <div className="flex items-start gap-3 text-zinc-400 text-sm mb-8">
                <Clock className="w-4 h-4 mt-0.5" style={{ color: 'rgba(37, 99, 235, 0.6)' }} />
                <div>
                  <p className="font-medium" style={{ color: 'var(--color-text-primary)' }}>7 Days a Week</p>
                  <p>7:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderColor: 'var(--border-light)' }}>
            <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
              © {site.year} {site.businessName}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to={createPageUrl("Terms")} className="text-xs transition-colors" style={{ color: 'var(--color-text-secondary)' }}>
                Terms & Conditions
              </Link>
              <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>·</span>
              <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{site.footerCredit}</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full backdrop-blur-sm border flex items-center justify-center transition-all shadow-xl"
            style={{
              backgroundColor: 'rgba(63, 63, 70, 0.8)',
              borderColor: 'var(--border-light)',
              color: 'var(--color-text-secondary)'
            }}
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}