export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Coach", href: "/about-coach" },
  { label: "Programs", href: "/programs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
