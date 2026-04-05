import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../types';
import { formatCurrency, getCurrentMonthExpenses, getTotalByCategory } from '../utils/helpers';
import { WatercolorCard } from './WatercolorCard';
export const BudgetSettings = ({ budgets, expenses, onUpdateBudget, onBack }) => {
    const [editingCategory, setEditingCategory] = useState(null);
    const [budgetValues, setBudgetValues] = useState(() => {
        const initial = {};
        budgets.forEach((budget) => {
            initial[budget.category] = budget.limit.toString();
        });
        return initial;
    });
    const currentMonthExpenses = useMemo(() => getCurrentMonthExpenses(expenses), [expenses]);
    const categoryTotals = useMemo(() => getTotalByCategory(currentMonthExpenses), [currentMonthExpenses]);
    const getBudgetForCategory = (category) => {
        const budget = budgets.find((b) => b.category === category);
        return budget?.limit || 0;
    };
    const handleSaveBudget = (category) => {
        const value = parseFloat(budgetValues[category] || '0');
        if (value >= 0) {
            onUpdateBudget({ category, limit: value });
            setEditingCategory(null);
        }
    };
    const getProgressPercentage = (category) => {
        const spent = categoryTotals[category] || 0;
        const budget = getBudgetForCategory(category);
        if (budget === 0)
            return 0;
        return Math.min((spent / budget) * 100, 100);
    };
    const getProgressColor = (percentage) => {
        if (percentage >= 100)
            return 'bg-gradient-to-r from-rose to-mauve';
        if (percentage >= 80)
            return 'bg-gradient-to-r from-gold to-gold';
        return 'bg-gradient-to-r from-sage to-sage-dark';
    };
    return (_jsx("div", { className: "min-h-screen bg-cream bg-parchment px-4 py-8", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsxs(motion.button, { onClick: onBack, initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, whileHover: { x: -5 }, className: "flex items-center gap-2 text-forest/70 hover:text-forest mb-6 font-serif", children: [_jsx(ArrowLeft, { size: 20 }), "Back to Dashboard"] }), _jsxs(motion.div, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, className: "text-center mb-8", children: [_jsx("h1", { className: "font-display-italic text-4xl text-rose mb-2", children: "Budget Garden" }), _jsx("p", { className: "font-serif text-forest/60", children: "Nurture your financial growth" })] }), _jsx("div", { className: "space-y-4", children: Object.keys(CATEGORIES).map((category, index) => {
                        const budget = getBudgetForCategory(category);
                        const spent = categoryTotals[category] || 0;
                        const percentage = getProgressPercentage(category);
                        const isEditing = editingCategory === category;
                        return (_jsx(WatercolorCard, { delay: 0.1 + index * 0.05, children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("span", { className: "text-3xl", children: CATEGORIES[category].icon }), _jsxs("div", { children: [_jsx("h3", { className: "font-crimson text-xl text-forest font-semibold", children: CATEGORIES[category].name }), _jsxs("p", { className: "font-serif text-sm text-forest/50", children: [formatCurrency(spent), " of ", formatCurrency(budget)] })] })] }), !isEditing ? (_jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: () => {
                                                    setEditingCategory(category);
                                                    if (!budgetValues[category]) {
                                                        setBudgetValues((prev) => ({
                                                            ...prev,
                                                            [category]: budget.toString(),
                                                        }));
                                                    }
                                                }, className: "px-4 py-2 bg-gradient-to-r from-sage to-sage-dark text-cream rounded-full font-serif text-sm shadow-watercolor-sm hover:shadow-watercolor transition-shadow", children: "Set Limit" })) : null] }), isEditing ? (_jsxs(motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto' }, exit: { opacity: 0, height: 0 }, className: "flex gap-2", children: [_jsx("input", { type: "number", value: budgetValues[category], onChange: (e) => setBudgetValues((prev) => ({ ...prev, [category]: e.target.value })), placeholder: "Enter budget limit", step: "10000", min: "0", className: "flex-1 px-4 py-2 bg-cream border-2 border-sage/20 rounded-xl font-mono text-forest focus:outline-none focus:border-rose/40 transition-colors" }), _jsxs(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: () => handleSaveBudget(category), className: "px-6 py-2 bg-gradient-to-r from-rose to-mauve text-cream rounded-xl font-serif shadow-watercolor-sm hover:shadow-watercolor transition-shadow flex items-center gap-2", children: [_jsx(Sparkles, { size: 16 }), "Save"] }), _jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: () => setEditingCategory(null), className: "px-4 py-2 bg-cream border-2 border-sage/20 text-forest rounded-xl font-serif hover:border-sage/40 transition-colors", children: "Cancel" })] })) : null, budget > 0 ? (_jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "relative h-8 bg-cream rounded-full overflow-hidden border-2 border-sage/10", children: [_jsx(motion.div, { initial: { width: 0 }, animate: { width: `${percentage}%` }, transition: { duration: 0.8, ease: 'easeOut' }, className: `h-full ${getProgressColor(percentage)} opacity-80` }), _jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: _jsxs("svg", { className: "absolute inset-0 w-full h-full opacity-10", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("defs", { children: _jsxs("pattern", { id: `leaf-${category}`, x: "0", y: "0", width: "20", height: "20", patternUnits: "userSpaceOnUse", children: [_jsx("circle", { cx: "5", cy: "10", r: "1.5", fill: "#2C4A35" }), _jsx("circle", { cx: "15", cy: "10", r: "1", fill: "#2C4A35" })] }) }), _jsx("rect", { width: "100%", height: "100%", fill: `url(#leaf-${category})` })] }) })] }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsxs("p", { className: "font-serif text-xs text-forest/50", children: [percentage.toFixed(0), "% used"] }), percentage >= 80 ? (_jsx("p", { className: "font-serif text-xs text-gold italic", children: percentage >= 100 ? 'Budget exceeded!' : 'Approaching limit' })) : null] })] })) : null] }) }, category));
                    }) }), _jsxs("div", { className: "mt-8 text-center", children: [_jsxs("svg", { width: "150", height: "80", viewBox: "0 0 150 80", className: "mx-auto opacity-30", children: [_jsx("path", { d: "M20 40 Q 40 20, 60 40 T 100 40 T 130 40", stroke: "#7A9E7E", strokeWidth: "2", fill: "none", strokeLinecap: "round" }), _jsx("circle", { cx: "75", cy: "20", r: "4", fill: "#D4798A" }), _jsx("path", { d: "M73 18 L75 15 L77 18", stroke: "#5C3D2E", strokeWidth: "1", fill: "none" }), _jsx("ellipse", { cx: "75", cy: "45", rx: "8", ry: "3", fill: "#C9A84C", opacity: "0.3" })] }), _jsx("p", { className: "font-serif text-forest/40 text-sm italic mt-2", children: "Let your budgets bloom like flowers in spring" })] })] }) }));
};
//# sourceMappingURL=BudgetSettings.js.map