// src/config/site.jsx
import { createPageUrl } from "@/utils";

export const site = {
  businessName: "My Buddy's Mobile Detail",
  tagline: "Mobile Car Detailing — Done Right at Your Door",
  phone: "619-203-3889",
  phoneHref: "tel:6192033889",
  email: "Contact@mybuddysmobiledetail.com",
  emailHref: "mailto:Contact@mybuddysmobiledetail.com",
  address: "Spring, TX 77386",
  hours: "7 Days a Week, 7:00 AM – 6:00 PM",
  serviceAreaSummary: "Based in Spring, TX — serving the Greater Houston area",
  primaryCtaLabel: "Book Your Detail",
  secondaryCtaLabel: "Call Now",
  footerCredit: "Custom Build by STG",
  year: new Date().getFullYear(),
};

export const navLinks = [
  { label: "Home", path: createPageUrl("Home") },
  { label: "About", path: createPageUrl("About") },
  { label: "Services", path: createPageUrl("Services") },
  { label: "Before/After", path: createPageUrl("Before/After") },
  { label: "Gallery", path: createPageUrl("Gallery") },
  { label: "Reviews", path: createPageUrl("Reviews") },
  { label: "Service Area", path: createPageUrl("ServiceArea") },
  { label: "Blog", path: createPageUrl("Blog") },
  { label: "Contact", path: createPageUrl("Contact") },
];