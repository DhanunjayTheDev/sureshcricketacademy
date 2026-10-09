/**
 * Single source of truth for academy identity, contact details, and links.
 * Replace every "PLACEHOLDER" value below with the real detail once available -
 * nothing here is fabricated, these are intentional stand-ins.
 */

export const SITE_CONFIG = {
  name: "Suresh Cricket Academy",
  shortName: "SCA",
  tagline: "Train Like a Champion.",
  description:
    "Professional cricket coaching academy for kids and adults, led by former Ranji Trophy cricketer Marupuri Suresh.",
  url: "https://www.sureshcricketacademy.com", // PLACEHOLDER domain
  ogImage: "/og-image.jpg", // PLACEHOLDER social share image
} as const;

export const CONTACT = {
  phoneDisplay: "+91 00000 00000", // PLACEHOLDER
  phoneHref: "tel:+9100000000000", // PLACEHOLDER
  whatsappNumber: "910000000000", // PLACEHOLDER - digits only, country code first, no + or spaces
  email: "info@sureshcricketacademy.com", // PLACEHOLDER
  instagram: "https://instagram.com/sureshcricketacademy", // PLACEHOLDER
  facebook: "https://facebook.com/sureshcricketacademy", // PLACEHOLDER
  address: {
    line1: "Academy Ground, Street Name", // PLACEHOLDER
    line2: "Area / Landmark", // PLACEHOLDER
    city: "City",
    state: "State",
    pincode: "000000", // PLACEHOLDER
  },
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUGxhY2Vob2xkZXI!5e0!3m2!1sen!2sin", // PLACEHOLDER embed URL
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const SCHEDULE = {
  morning: "6:00 AM - 8:00 AM (placeholder timing)",
  evening: "4:00 PM - 7:00 PM (placeholder timing)",
} as const;
