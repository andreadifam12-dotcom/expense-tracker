import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Dashboard } from './components/Dashboard';
import { AddExpense } from './components/AddExpense';
import { ExpenseHistory } from './components/ExpenseHistory';
import { BudgetSettings } from './components/BudgetSettings';
import { Navigation } from './components/Navigation';
import { FloatingActionButton } from './components/FloatingActionButton';
import { storageUtils } from './utils/storage';
function App() {
    const [expenses, setExpenses] = useState([]);
    const [budgets, setBudgets] = useState([]);
    const [currentView, setCurrentView] = useState('dashboard');
    const [monthlyBudget, setMonthlyBudget] = useState(10000000);
    useEffect(() => {
        const loadedExpenses = storageUtils.getExpenses();
        const loadedBudgets = storageUtils.getBudgets();
        setExpenses(loadedExpenses);
        setBudgets(loadedBudgets);
        const totalBudget = loadedBudgets.reduce((sum, b) => sum + b.limit, 0);
        if (totalBudget > 0) {
            setMonthlyBudget(totalBudget);
        }
    }, []);
    const handleAddExpense = (expenseData) => {
        const newExpense = {
            id: Date.now().toString(),
            ...expenseData,
            createdAt: Date.now(),
        };
        storageUtils.addExpense(newExpense);
        setExpenses((prev) => [newExpense, ...prev]);
        setCurrentView('dashboard');
    };
    const handleDeleteExpense = (id) => {
        storageUtils.deleteExpense(id);
        setExpenses((prev) => prev.filter((e) => e.id !== id));
    };
    const handleUpdateBudget = (budget) => {
        storageUtils.updateBudget(budget);
        setBudgets((prev) => {
            const index = prev.findIndex((b) => b.category === budget.category);
            if (index >= 0) {
                const updated = [...prev];
                updated[index] = budget;
                return updated;
            }
            return [...prev, budget];
        });
        const allBudgets = storageUtils.getBudgets();
        const total = allBudgets.reduce((sum, b) => sum + b.limit, 0);
        if (total > 0) {
            setMonthlyBudget(total);
        }
    };
    const handleNavigate = (page) => {
        setCurrentView(page);
    };
    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };
    return (_jsxs("div", { className: "min-h-screen bg-cream bg-parchment pb-24", children: [_jsxs(AnimatePresence, { mode: "wait", children: [currentView === 'dashboard' && (_jsx(motion.div, { variants: pageVariants, initial: "initial", animate: "animate", exit: "exit", transition: { duration: 0.3 }, children: _jsx(Dashboard, { expenses: expenses, monthlyBudget: monthlyBudget }) }, "dashboard")), currentView === 'add' && (_jsx(motion.div, { variants: pageVariants, initial: "initial", animate: "animate", exit: "exit", transition: { duration: 0.3 }, children: _jsx(AddExpense, { onAdd: handleAddExpense, onCancel: () => setCurrentView('dashboard') }) }, "add")), currentView === 'history' && (_jsx(motion.div, { variants: pageVariants, initial: "initial", animate: "animate", exit: "exit", transition: { duration: 0.3 }, children: _jsx(ExpenseHistory, { expenses: expenses, onDelete: handleDeleteExpense, onBack: () => setCurrentView('dashboard') }) }, "history")), currentView === 'budget' && (_jsx(motion.div, { variants: pageVariants, initial: "initial", animate: "animate", exit: "exit", transition: { duration: 0.3 }, children: _jsx(BudgetSettings, { budgets: budgets, expenses: expenses, onUpdateBudget: handleUpdateBudget, onBack: () => setCurrentView('dashboard') }) }, "budget"))] }), currentView !== 'add' && _jsx(FloatingActionButton, { onClick: () => setCurrentView('add') }), _jsx(Navigation, { currentPage: currentView === 'add' ? 'dashboard' : currentView, onNavigate: handleNavigate })] }));
}
export default App;
//# sourceMappingURL=App.js.map