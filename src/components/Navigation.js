import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Home, BookOpen, Settings } from 'lucide-react';
export const Navigation = ({ currentPage, onNavigate }) => {
    const navItems = [
        { page: 'dashboard', icon: Home, label: 'Home' },
        { page: 'history', icon: BookOpen, label: 'History' },
        { page: 'budget', icon: Settings, label: 'Budget' },
    ];
    return (_jsx("nav", { className: "fixed bottom-0 left-0 right-0 bg-parchment/95 backdrop-blur-sm border-t-2 border-sage/10 shadow-watercolor z-40", children: _jsx("div", { className: "max-w-md mx-auto px-4 py-3", children: _jsx("div", { className: "flex justify-around items-center", children: navItems.map(({ page, icon: Icon, label }) => {
                    const isActive = currentPage === page;
                    return (_jsxs(motion.button, { onClick: () => onNavigate(page), whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 }, className: "relative flex flex-col items-center gap-1 min-w-[4rem]", children: [_jsx("div", { className: `p-3 rounded-2xl transition-all ${isActive
                                    ? 'bg-gradient-to-br from-rose to-mauve text-cream shadow-watercolor-sm'
                                    : 'text-forest/50 hover:text-forest'}`, children: _jsx(Icon, { size: 22, strokeWidth: 2.5 }) }), _jsx("span", { className: `font-serif text-xs transition-colors ${isActive ? 'text-rose font-medium' : 'text-forest/50'}`, children: label }), isActive ? (_jsx(motion.div, { layoutId: "activeTab", className: "absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-rose rounded-full" })) : null] }, page));
                }) }) }) }));
};
//# sourceMappingURL=Navigation.js.map