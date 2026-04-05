import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export const WatercolorCard = ({ children, className = '', delay = 0 }) => {
    return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay }, className: `bg-parchment shadow-watercolor rounded-[2rem] p-6 border border-rose/10 relative overflow-hidden ${className}`, children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-rose/5 to-sage/5 pointer-events-none" }), _jsx("div", { className: "relative z-10", children: children })] }));
};
//# sourceMappingURL=WatercolorCard.js.map