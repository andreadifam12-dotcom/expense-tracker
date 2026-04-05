import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface FloatingActionButtonProps {
  onClick: () => void;
}

export const FloatingActionButton = ({ onClick }: FloatingActionButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1, rotate: 90 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-rose to-mauve text-cream rounded-full shadow-watercolor-lg flex items-center justify-center z-50 border-2 border-cream"
    >
      <Plus size={28} strokeWidth={2.5} />
    </motion.button>
  );
};
