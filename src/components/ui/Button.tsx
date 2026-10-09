import type { ReactNode, ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { useButtonFx } from "../../hooks/useButtonFx";

type Variant = "primary" | "dark" | "secondary" | "ghost";
type Size = "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-gold-500 text-white hover:bg-gold-600 active:bg-gold-700 shadow-soft",
  dark: "bg-pitch-900 text-cream-50 hover:bg-pitch-800 active:bg-pitch-700 shadow-soft",
  secondary: "bg-cream-50 text-pitch-900 border border-cream-200 hover:bg-cream-100",
  ghost: "bg-transparent text-pitch-800 hover:bg-pitch-800/5",
};

const SIZE_CLASSES: Record<Size, string> = {
  md: "px-6 py-3 text-xs",
  lg: "px-8 py-4 text-sm",
};

const BASE =
  "relative isolate overflow-hidden inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase tracking-wider transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2";

function RippleLayer({ ripples }: { ripples: { id: number; x: number; y: number; size: number }[] }) {
  return (
    <>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-white/40 animate-ripple"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
          aria-hidden="true"
        />
      ))}
    </>
  );
}

interface LinkButtonProps extends BaseProps {
  href: string;
  external?: boolean;
}

export function LinkButton({
  href,
  external = false,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  children,
}: LinkButtonProps) {
  const classes = `${BASE} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`;
  const { ref, style, ripples, handleMouseMove, handleMouseLeave, handlePointerDown } =
    useButtonFx<HTMLAnchorElement>(variant === "primary");

  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onPointerDown={handlePointerDown}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        <RippleLayer ripples={ripples} />
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link
      ref={ref}
      to={href}
      className={classes}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onPointerDown={handlePointerDown}
    >
      <RippleLayer ripples={ripples} />
      {icon}
      {children}
    </Link>
  );
}

interface ButtonProps extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {}

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const { ref, style, ripples, handleMouseMove, handleMouseLeave, handlePointerDown } =
    useButtonFx<HTMLButtonElement>(variant === "primary");

  return (
    <button
      ref={ref}
      className={`${BASE} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onPointerDown={handlePointerDown}
      {...rest}
    >
      <RippleLayer ripples={ripples} />
      {icon}
      {children}
    </button>
  );
}
