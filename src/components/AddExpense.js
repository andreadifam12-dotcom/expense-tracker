import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../types';
import { WatercolorCard } from './WatercolorCard';
export const AddExpense = ({ onAdd, onCancel }) => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('food');
    const [note, setNote] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!amount || parseFloat(amount) <= 0)
            return;
        onAdd({
            amount: parseFloat(amount),
            category,
            note: note || CATEGORIES[category].name,
            date,
        });
        setAmount('');
        setNote('');
        setDate(new Date().toISOString().split('T')[0]);
    };
    return (_jsx("div", { className: "min-h-screen bg-cream bg-parchment px-4 py-8", children: _jsxs("div", { className: "max-w-2xl mx-auto", children: [_jsxs(motion.button, { onClick: onCancel, initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, whileHover: { x: -5 }, className: "flex items-center gap-2 text-forest/70 hover:text-forest mb-6 font-serif", children: [_jsx(ArrowLeft, { size: 20 }), "Back to Journal"] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "text-center mb-8", children: [_jsx("h1", { className: "font-display-italic text-4xl text-rose mb-2", children: "New Entry" }), _jsx("p", { className: "font-serif text-forest/60", children: "Record your tale of spending" })] }), _jsx(WatercolorCard, { delay: 0.2, children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "relative", children: [_jsx("label", { className: "block font-serif text-forest mb-2 text-sm", children: "Amount (Rp)" }), _jsxs("div", { className: "relative", children: [_jsx("input", { type: "number", value: amount, onChange: (e) => setAmount(e.target.value), placeholder: "0", step: "1000", min: "0", required: true, className: "w-full px-6 py-4 bg-cream border-2 border-sage/20 rounded-2xl font-mono text-2xl text-forest focus:outline-none focus:border-rose/40 transition-colors" }), _jsx("div", { className: "absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-rose/10 to-sage/10 -z-10" })] })] }), _jsxs("div", { className: "space-y-3", children: [_jsx("label", { className: "block font-serif text-forest text-sm mb-3", children: "Category" }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: Object.keys(CATEGORIES).map((cat) => (_jsxs(motion.button, { type: "button", onClick: () => setCategory(cat), whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: `p-4 rounded-2xl border-2 transition-all ${category === cat
                                                ? 'bg-gradient-to-br from-rose/20 to-mauve/20 border-rose shadow-watercolor-sm'
                                                : 'bg-cream border-sage/10 hover:border-sage/30'}`, children: [_jsx("div", { className: "text-3xl mb-2", children: CATEGORIES[cat].icon }), _jsx("p", { className: "font-serif text-sm text-forest", children: CATEGORIES[cat].name })] }, cat))) })] }), _jsxs("div", { children: [_jsx("label", { className: "block font-serif text-forest mb-2 text-sm", children: "Note" }), _jsx("textarea", { value: note, onChange: (e) => setNote(e.target.value), placeholder: "What did you spend on?", rows: 3, className: "w-full px-6 py-4 bg-cream border-2 border-sage/20 rounded-2xl font-serif text-forest focus:outline-none focus:border-rose/40 transition-colors resize-none", style: {
                                            backgroundImage: `repeating-linear-gradient(transparent, transparent 2.4rem, #7A9E7E10 2.4rem, #7A9E7E10 2.5rem)`,
                                        } })] }), _jsxs("div", { children: [_jsx("label", { className: "block font-serif text-forest mb-2 text-sm", children: "Date" }), _jsx("input", { type: "date", value: date, onChange: (e) => setDate(e.target.value), required: true, className: "w-full px-6 py-4 bg-cream border-2 border-sage/20 rounded-2xl font-serif text-forest focus:outline-none focus:border-rose/40 transition-colors" })] }), _jsxs(motion.button, { type: "submit", whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, className: "w-full bg-gradient-to-r from-rose to-mauve text-cream py-4 rounded-2xl font-crimson text-lg font-semibold shadow-watercolor hover:shadow-watercolor-lg transition-shadow flex items-center justify-center gap-2", children: [_jsx(Sparkles, { size: 20 }), "Add to Journal"] })] }) }), _jsx("div", { className: "mt-8 text-center", children: _jsxs("svg", { width: "100", height: "60", viewBox: "0 0 100 60", className: "mx-auto opacity-40", children: [_jsx("path", { d: "M20 30 Q 30 20, 40 30 T 60 30 T 80 30", stroke: "#7A9E7E", strokeWidth: "2", fill: "none", strokeLinecap: "round" }), _jsx("circle", { cx: "50", cy: "15", r: "3", fill: "#D4798A" }), _jsx("circle", { cx: "40", cy: "25", r: "2", fill: "#C9A84C" }), _jsx("circle", { cx: "60", cy: "25", r: "2", fill: "#C9A84C" })] }) })] }) }));
};
//# sourceMappingURL=AddExpense.js.map