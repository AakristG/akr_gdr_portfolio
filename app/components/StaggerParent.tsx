import { motion, useReducedMotion } from "framer-motion";
import React from "react";

export interface StaggerParentProps {
  children: React.ReactNode;
  className?: string;
}

export const staggerParentVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const StaggerParent = ({ children, className }: StaggerParentProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={staggerParentVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggerParent;
