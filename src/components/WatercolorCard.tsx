import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface WatercolorCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const WatercolorCard = ({ children, className = '', delay = 0 }: WatercolorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-parchment shadow-watercolor rounded-[2rem] p-6 border border-rose/10 relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-rose/5 to-sage/5 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
