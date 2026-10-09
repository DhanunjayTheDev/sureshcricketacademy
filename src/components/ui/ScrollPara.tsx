import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface ScrollParaProps {
  /** The text lines or paragraphs to reveal. */
  paragraphs: string[];
  /** The animation direction for each paragraph revealing. */
  direction?: "bottom" | "top" | "left" | "right" | "none";
  /** The blur amount in pixels when the element starts entering. */
  startBlur?: number;
  /** The offset amount in pixels for the enter animation. */
  offset?: number;
  className?: string;
  containerClassName?: string;
  textClassName?: string;
  /** Opacity starting value. */
  startOpacity?: number;
  /** Delay before the next line starts revealing. */
  stagger?: number;
}

export function ScrollPara({
  paragraphs,
  direction = "bottom",
  startBlur = 10,
  offset = 50,
  className = "",
  containerClassName = "",
  textClassName = "",
  startOpacity = 0.1,
  stagger = 0.5,
}: ScrollParaProps) {
  const container = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const elements = textRefs.current.filter((el): el is HTMLParagraphElement => Boolean(el));
      const totalElements = elements.length;

      if (totalElements === 0) return;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        gsap.set(elements, { x: 0, y: 0, opacity: 1, filter: "blur(0px)" });
        return;
      }

      const getInitialTransform = () => {
        switch (direction) {
          case "top":
            return { y: -offset, x: 0 };
          case "left":
            return { x: -offset, y: 0 };
          case "right":
            return { x: offset, y: 0 };
          case "bottom":
            return { y: offset, x: 0 };
          case "none":
          default:
            return { x: 0, y: 0 };
        }
      };

      elements.forEach((el) => {
        gsap.set(el, {
          ...getInitialTransform(),
          opacity: startOpacity,
          filter: `blur(${startBlur}px)`,
        });
      });

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: `+=${window.innerHeight * totalElements * 0.5}`,
          pin: true,
          scrub: 1,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      elements.forEach((el, index) => {
        scrollTimeline.to(
          el,
          {
            x: 0,
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power2.out",
          },
          index * stagger,
        );
      });

      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });

      if (container.current) {
        resizeObserver.observe(container.current);
      }

      return () => {
        resizeObserver.disconnect();
        scrollTimeline.kill();
      };
    },
    {
      scope: container,
      dependencies: [direction, paragraphs.length, startOpacity, startBlur, offset, stagger],
    },
  );

  return (
    <div className={`relative w-full min-h-[100vh] ${className}`} ref={container}>
      <div className="relative flex h-[100vh] w-full items-center justify-center overflow-hidden p-6 md:p-12">
        <div className={`relative flex w-full max-w-5xl flex-col items-center gap-6 text-center md:gap-10 ${containerClassName}`}>
          {paragraphs.map((text, i) => (
            <p
              key={text}
              className={`text-2xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-center will-change-transform ${textClassName}`}
              ref={(el) => {
                textRefs.current[i] = el;
              }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScrollPara;
