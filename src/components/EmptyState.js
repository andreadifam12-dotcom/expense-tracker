import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export const EmptyState = ({ message }) => {
    return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "flex flex-col items-center justify-center p-12 text-center", children: [_jsx(motion.div, { animate: { y: [0, -10, 0] }, transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }, className: "text-6xl mb-4", children: "\uD83D\uDC07" }), _jsx("p", { className: "font-serif text-forest/60 text-lg italic", children: message })] }));
};
//# sourceMappingURL=EmptyState.js.map