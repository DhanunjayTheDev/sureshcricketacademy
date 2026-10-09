import { Home as HomeIcon } from "lucide-react";
import SEO from "../components/seo/SEO";
import Container from "../components/ui/Container";
import { LinkButton } from "../components/ui/Button";
import DotField from "../components/ui/DotField";
import Reveal from "../components/ui/Reveal";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <div className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-pitch-900">
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
          <Reveal className="mx-auto flex max-w-lg flex-col items-center gap-6 text-center">
            <p
              className="select-none font-extrabold uppercase leading-none tracking-tight text-transparent [-webkit-text-stroke:2px_var(--color-cream-50)]"
              style={{ fontSize: "clamp(4rem, 18vw, 10rem)" }}
            >
              404
            </p>
            <span className="border-l-[3px] border-gold-500 pl-3 text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
              Bowled Out
            </span>
            <h1 className="text-3xl font-extrabold uppercase text-cream-50 sm:text-4xl">Page Not Found</h1>
            <p className="text-cream-100/80">
              Looks like this one's gone over the boundary. The page you're looking for doesn't exist or has moved.
            </p>
            <LinkButton href="/" size="lg" icon={<HomeIcon className="h-4 w-4" />}>
              Back to Home
            </LinkButton>
          </Reveal>
        </Container>
      </div>
    </>
  );
}
