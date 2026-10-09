import { CONTACT } from "../../constants/config";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-pitch-900 text-white shadow-lift transition-all duration-200 hover:scale-110 hover:bg-gold-500 focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <span className="absolute inset-0 rounded-full bg-pitch-900/40 motion-safe:animate-ping" aria-hidden="true" />
      <img src="/whatsapp.png" alt="" className="relative h-7 w-7" aria-hidden="true" />
    </a>
  );
}
