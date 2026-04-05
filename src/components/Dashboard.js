import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { CATEGORIES } from '../types';
import { formatCurrency, getCurrentMonthExpenses, getTotalByCategory, formatShortDate } from '../utils/helpers';
import { WatercolorCard } from './WatercolorCard';
import { OrnateFrame } from './OrnateFrame';
import { BotanicalDivider } from './BotanicalDivider';
import { EmptyState } from './EmptyState';
export const Dashboard = ({ expenses, monthlyBudget }) => {
    const currentMonthExpenses = useMemo(() => getCurrentMonthExpenses(expenses), [expenses]);
    const totalSpent = useMemo(() => currentMonthExpenses.reduce((sum, exp) => sum + exp.amount, 0), [currentMonthExpenses]);
    const remaining = monthlyBudget - totalSpent;
    const categoryTotals = useMemo(() => getTotalByCategory(currentMonthExpenses), [currentMonthExpenses]);
    const chartData = useMemo(() => {
        return Object.entries(categoryTotals)
            .filter(([, amount]) => amount > 0)
            .map(([category, amount]) => ({
            name: CATEGORIES[category].name,
            value: amount,
            color: CATEGORIES[category].color,
        }));
    }, [categoryTotals]);
    const recentExpenses = useMemo(() => currentMonthExpenses.slice(0, 5), [currentMonthExpenses]);
    return (_jsxs("div", { className: "max-w-6xl mx-auto px-4 py-8", children: [_jsxs(motion.div, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, className: "text-center mb-8", children: [_jsx("h1", { className: "font-display-italic text-5xl text-rose mb-2", children: "Salam!" }), _jsx("p", { className: "font-serif text-forest/70 text-lg", children: "Here's your spending today" })] }), _jsx(OrnateFrame, { children: _jsx(WatercolorCard, { delay: 0.2, children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 text-center", children: [_jsxs("div", { children: [_jsx("p", { className: "font-serif text-forest/60 text-sm mb-1", children: "Total Spent" }), _jsx(motion.p, { initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 }, transition: { delay: 0.3 }, className: "font-mono text-3xl text-mauve font-semibold", children: formatCurrency(totalSpent) })] }), _jsxs("div", { children: [_jsx("p", { className: "font-serif text-forest/60 text-sm mb-1", children: "Monthly Budget" }), _jsx(motion.p, { initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 }, transition: { delay: 0.4 }, className: "font-mono text-3xl text-sage-dark font-semibold", children: formatCurrency(monthlyBudget) })] }), _jsxs("div", { children: [_jsx("p", { className: "font-serif text-forest/60 text-sm mb-1", children: "Remaining" }), _jsx(motion.p, { initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 }, transition: { delay: 0.5 }, className: `font-mono text-3xl font-semibold ${remaining >= 0 ? 'text-sage-dark' : 'text-gold'}`, children: formatCurrency(remaining) })] })] }) }) }), _jsx(BotanicalDivider, {}), chartData.length > 0 ? (_jsxs(WatercolorCard, { delay: 0.6, className: "mb-8", children: [_jsx("h2", { className: "font-crimson text-2xl text-forest mb-6 text-center font-semibold", children: "Spending by Category" }), _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(PieChart, { children: [_jsx(Pie, { data: chartData, cx: "50%", cy: "50%", innerRadius: 60, outerRadius: 100, paddingAngle: 5, dataKey: "value", children: chartData.map((entry, index) => (_jsx(Cell, { fill: entry.color, opacity: 0.8 }, `cell-${index}`))) }), _jsx(Tooltip, { formatter: (value) => formatCurrency(value), contentStyle: {
                                        backgroundColor: '#FAF3DC',
                                        border: '2px solid #D4798A',
                                        borderRadius: '1rem',
                                        fontFamily: 'Lora, serif',
                                    } }), _jsx(Legend, { wrapperStyle: { fontFamily: 'Lora, serif', fontSize: '14px' }, iconType: "circle" })] }) })] })) : null, _jsxs(WatercolorCard, { delay: 0.8, children: [_jsx("h2", { className: "font-crimson text-2xl text-forest mb-4 font-semibold", children: "Recent Transactions" }), recentExpenses.length > 0 ? (_jsx("div", { className: "space-y-3", children: recentExpenses.map((expense, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: 0.9 + index * 0.1 }, className: "flex items-center justify-between p-4 bg-cream rounded-2xl border border-sage/10 hover:shadow-watercolor-sm transition-shadow", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("span", { className: "text-3xl", children: CATEGORIES[expense.category].icon }), _jsxs("div", { children: [_jsx("p", { className: "font-serif text-forest font-medium", children: expense.note }), _jsx("p", { className: "font-serif text-sm text-forest/50", children: formatShortDate(expense.date) })] })] }), _jsx("p", { className: "font-mono text-lg text-mauve font-semibold", children: formatCurrency(expense.amount) })] }, expense.id))) })) : (_jsx(EmptyState, { message: "No expenses yet. Start tracking your magical journey!" }))] })] }));
};
//# sourceMappingURL=Dashboard.js.map