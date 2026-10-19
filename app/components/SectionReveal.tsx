import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** First section should play on mount so the hero is never blank. */
  eager?: boolean;
};

export default function SectionReveal({
  children,
  className,
  delay = 0,
  eager = false,
}: SectionRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const visible = { opacity: 1, y: 0 };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 48 }}
      animate={eager ? visible : undefined}
      whileInView={eager ? undefined : visible}
      viewport={eager ? undefined : { once: true, amount: 0.08 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
