import { SITE_CONFIG, CONTACT } from "../constants/config";

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  sameAs: [CONTACT.instagram, CONTACT.facebook],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${CONTACT.address.line1}, ${CONTACT.address.line2}`,
    addressLocality: CONTACT.address.city,
    addressRegion: CONTACT.address.state,
    postalCode: CONTACT.address.pincode,
    addressCountry: "IN",
  },
  sport: "Cricket",
} as const;
