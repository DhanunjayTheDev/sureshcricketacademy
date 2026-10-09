import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import Container from "../ui/Container";
import { InstagramIcon, FacebookIcon } from "../ui/SocialIcons";
import { SITE_CONFIG, CONTACT } from "../../constants/config";
import { NAV_LINKS } from "../../data/nav";
import { COACH } from "../../data/coach";

function FooterHeading({ children }: { children: string }) {
  return (
    <h3 className="relative inline-block pb-2 text-sm font-bold uppercase tracking-wider text-cream-50 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-gold-500">
      {children}
    </h3>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-gold-500 bg-pitch-950 text-cream-100">
      <Container className="py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center">
            <img src="/scalogofooter.png" alt={SITE_CONFIG.name} className="h-14 w-auto" />
          </Link>
          <p className="mt-4 text-sm text-cream-100/70 max-w-xs">{SITE_CONFIG.description}</p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-cream-50/10 hover:bg-gold-500 hover:text-white transition-colors"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-cream-50/10 hover:bg-gold-500 hover:text-white transition-colors"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <FooterHeading>Quick Links</FooterHeading>
          <ul className="mt-4 space-y-3 text-sm text-cream-100/80">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-gold-300 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeading>Programs</FooterHeading>
          <ul className="mt-4 space-y-3 text-sm text-cream-100/80">
            <li>
              <Link to="/programs" className="hover:text-gold-300 transition-colors">Kids Program</Link>
            </li>
            <li>
              <Link to="/programs" className="hover:text-gold-300 transition-colors">Adults Program</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-gold-300 transition-colors">Gallery</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold-300 transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <FooterHeading>Contact</FooterHeading>
          <ul className="mt-4 space-y-3 text-sm text-cream-100/80">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold-400" />
              <span>
                {CONTACT.address.line1}, {CONTACT.address.line2}, {CONTACT.address.city}, {CONTACT.address.state}{" "}
                {CONTACT.address.pincode}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-gold-400" />
              <a href={CONTACT.phoneHref} className="hover:text-gold-300 transition-colors">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-gold-400" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-gold-300 transition-colors">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="overflow-hidden border-t border-cream-100/10 py-8 sm:py-10">
        <p
          className="select-none px-4 text-center font-extrabold uppercase leading-none tracking-tight text-transparent transition-colors duration-500 [-webkit-text-stroke:1.5px_var(--color-cream-100)] hover:text-[#FF0000] hover:[-webkit-text-stroke:0px]"
          style={{ fontSize: "clamp(2.25rem, 9vw, 7rem)" }}
        >
          {COACH.name}
        </p>
      </div>

      <div className="border-t border-cream-100/10">
        <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream-100/60">
          <span>© {year} {SITE_CONFIG.name}. All rights reserved.</span>
          <span>Designed &amp; Developed by Dhanunjay</span>
        </Container>
      </div>
    </footer>
  );
}
