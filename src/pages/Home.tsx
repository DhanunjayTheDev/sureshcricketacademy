import SEO from "../components/seo/SEO";
import Hero from "../components/sections/home/Hero";
import Highlights from "../components/sections/home/Highlights";
import AboutAcademy from "../components/sections/home/AboutAcademy";
import CoachProfile from "../components/sections/shared/CoachProfile";
import SuccessStory from "../components/sections/home/SuccessStory";
import WhyChooseUs from "../components/sections/home/WhyChooseUs";
import ProgramsPreview from "../components/sections/home/ProgramsPreview";
import ProcessTimeline from "../components/sections/shared/ProcessTimeline";
import TestimonialsSection from "../components/sections/shared/TestimonialsSection";
import FAQSection from "../components/sections/shared/FAQSection";
import CTABanner from "../components/sections/shared/CTABanner";
import { ORGANIZATION_JSON_LD } from "../data/jsonld";

export default function Home() {
  return (
    <>
      <SEO
        title="Premier Cricket Coaching Academy"
        description="Suresh Cricket Academy offers professional cricket coaching for kids and adults under former Ranji Trophy cricketer Marupuri Suresh, mentor to Indian international Shree Charani."
        path="/"
        jsonLd={ORGANIZATION_JSON_LD}
      />
      <Hero />
      <Highlights />
      <AboutAcademy variant="preview" />
      <CoachProfile variant="preview" />
      <SuccessStory />
      <WhyChooseUs />
      <ProgramsPreview />
      <ProcessTimeline />
      <TestimonialsSection />
      <FAQSection tone="white" />
      <CTABanner />
    </>
  );
}
