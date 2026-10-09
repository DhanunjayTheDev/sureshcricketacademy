import { Outlet } from "react-router-dom";
import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import ScrollProgress from "./ScrollProgress";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <AnnouncementBar />
      <Navbar />
      {/* Mobile: StaggeredMenu's header is fixed (not in flow), so offset content below it */}
      <main id="main-content" className="flex-1 pt-16 lg:pt-0">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
