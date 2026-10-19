import { motion, useReducedMotion } from "framer-motion";
import React from "react";

export interface StaggerChildProps {
  children: React.ReactNode;
  className?: string;
}

export const staggerChildVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const StaggerChild = ({ children, className }: StaggerChildProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={staggerChildVariants} className={className}>
      {children}
    </motion.div>
  );
};

export default StaggerChild;
