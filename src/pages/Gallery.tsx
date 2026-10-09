import SEO from "../components/seo/SEO";
import DotField from "../components/ui/DotField";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import GalleryGrid from "../components/gallery/GalleryGrid";
import CTABanner from "../components/sections/shared/CTABanner";

export default function Gallery() {
  return (
    <>
      <SEO
        title="Gallery"
        description="Browse training sessions, coaching moments, matches, and academy events at Suresh Cricket Academy."
        path="/gallery"
      />

      <Section tone="pitch" className="relative overflow-hidden">
        <DotField
        className="pointer-events-none absolute inset-0 opacity-60"
        dotRadius={1.5}
        dotSpacing={16}
        bulgeStrength={45}
        glowRadius={150}
        gradientFrom="rgba(236,58,84,0.28)"
        gradientTo="rgba(15,23,42,0.05)"
        glowColor="#ec3a54"
      />
        <Container className="relative">
          <SectionHeading
            invert
            eyebrow="Gallery"
            title="Life at the Academy"
            highlight="Academy"
            subtitle="Training, coaching, matches, and milestones."
          />
        </Container>
      </Section>

      <Section tone="cream">
        <Container>
          <GalleryGrid />
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
