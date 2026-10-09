import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../../data/nav";
import { SITE_CONFIG, CONTACT } from "../../constants/config";
import Container from "../ui/Container";
import { LinkButton } from "../ui/Button";
import StaggeredMenu from "./StaggeredMenu";

const MENU_ITEMS = [
  ...NAV_LINKS.map((link) => ({ label: link.label, ariaLabel: `Go to ${link.label}`, link: link.href })),
  { label: "Enroll Now", ariaLabel: "Enroll now", link: "/contact" },
];

const SOCIAL_ITEMS = [
  { label: "Instagram", link: CONTACT.instagram },
  { label: "Facebook", link: CONTACT.facebook },
];

function NavItem({ href, label }: { href: string; label: string }) {
  const { pathname } = useLocation();
  const isActive = pathname === href;
  const classes = `relative text-sm font-semibold uppercase tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-gold-500 after:transition-all ${
    isActive
      ? "text-gold-500 after:w-full"
      : "text-ink-700 after:w-0 hover:text-pitch-900 hover:after:w-full"
  }`;

  return (
    <Link to={href} className={classes}>
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile / tablet: full-screen staggered menu owns its own fixed header */}
      <div className="lg:hidden">
        <StaggeredMenu
          isFixed
          scrolled={scrolled}
          position="right"
          items={MENU_ITEMS}
          socialItems={SOCIAL_ITEMS}
          displaySocials
          displayItemNumbering
          logoUrl="/scalogo.png"
          menuButtonColor="#16213a"
          openMenuButtonColor="#16213a"
          accentColor="#e31937"
          colors={["#16213a", "#e31937"]}
          onMenuOpen={() => {
            document.body.style.overflow = "hidden";
          }}
          onMenuClose={() => {
            document.body.style.overflow = "";
          }}
        />
      </div>

      {/* Desktop */}
      <header
        className={`sticky top-0 z-50 hidden w-full bg-cream-50/95 backdrop-blur transition-shadow duration-300 lg:block ${
          scrolled ? "shadow-soft" : ""
        }`}
      >
        <Container>
          <nav className="flex h-20 items-center justify-between" aria-label="Primary">
            <Link to="/" className="flex items-center" aria-label={`${SITE_CONFIG.name} home`}>
              <img src="/scalogo.png" alt={SITE_CONFIG.name} className="h-14 w-auto" />
            </Link>

            <div className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <NavItem key={link.label} href={link.href} label={link.label} />
              ))}
            </div>

            <LinkButton href="/contact" size="md">
              Enroll Now
            </LinkButton>
          </nav>
        </Container>
      </header>
    </>
  );
}
