import { Phone } from "lucide-react";
import { CONTACT } from "../../constants/config";

/**
 * Desktop/tablet only - on mobile the StaggeredMenu owns the fixed top
 * chrome (logo + menu toggle), so a second bar stacked above it would
 * either get hidden underneath or clash with the native-app-style header.
 */
export default function AnnouncementBar() {
  return (
    <div className="hidden bg-pitch-950 text-cream-100 text-xs lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 lg:px-12">
        <div className="flex items-center gap-6 overflow-hidden">
          <span className="font-medium tracking-wide">Admissions Open</span>
          <span className="text-cream-100/60">|</span>
          <span className="font-medium tracking-wide">Free Trial Session Available</span>
        </div>
        <div className="flex items-center gap-4">
          <a href={CONTACT.phoneHref} className="flex items-center gap-1.5 hover:text-gold-300 transition-colors">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Call Now</span>
          </a>
          <a
            href={`https://wa.me/${CONTACT.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-gold-300 transition-colors"
          >
            <img src="/whatsapp.png" alt="" className="h-3.5 w-3.5" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
