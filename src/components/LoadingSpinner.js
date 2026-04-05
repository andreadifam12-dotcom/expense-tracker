import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export const LoadingSpinner = () => {
    return (_jsx("div", { className: "flex items-center justify-center p-8", children: _jsx(motion.div, { animate: { rotate: 360 }, transition: { duration: 3, repeat: Infinity, ease: 'linear' }, className: "relative w-16 h-16", children: _jsxs("svg", { viewBox: "0 0 64 64", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("circle", { cx: "32", cy: "32", r: "28", stroke: "#7A9E7E", strokeWidth: "2", opacity: "0.2" }), _jsx("path", { d: "M32 4C46.3594 4 58 15.6406 58 30", stroke: "#D4798A", strokeWidth: "3", strokeLinecap: "round" }), _jsx("circle", { cx: "32", cy: "12", r: "3", fill: "#C9A84C" }), _jsx("circle", { cx: "46", cy: "20", r: "2", fill: "#D4798A", opacity: "0.6" }), _jsx("circle", { cx: "52", cy: "32", r: "2.5", fill: "#7A9E7E", opacity: "0.6" })] }) }) }));
};
//# sourceMappingURL=LoadingSpinner.js.map