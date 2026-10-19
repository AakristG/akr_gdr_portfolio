import { motion, useReducedMotion } from "framer-motion";

export default function SectionDivider() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div
        className="mx-auto my-14 h-px w-full max-w-6xl bg-gray-200 md:my-20"
        aria-hidden
      />
    );
  }

  return (
    <motion.div
      className="relative mx-auto my-14 flex w-full max-w-6xl items-center gap-3 md:my-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.5 }}
      aria-hidden
    >
      <motion.div
        className="h-px flex-1 origin-right bg-gradient-to-r from-transparent to-primary/45"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className="h-2 w-2 rounded-full bg-primary"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.28, type: "spring", stiffness: 280, damping: 16 }}
      />
      <motion.div
        className="h-px flex-1 origin-left bg-gradient-to-l from-transparent to-primary/45"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}
