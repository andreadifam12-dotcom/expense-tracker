const EXPENSES_KEY = 'fairytale_expenses';
const BUDGETS_KEY = 'fairytale_budgets';
export const storageUtils = {
    getExpenses: () => {
        const data = localStorage.getItem(EXPENSES_KEY);
        return data ? JSON.parse(data) : [];
    },
    saveExpenses: (expenses) => {
        localStorage.setItem(EXPENSES_KEY, JSON.stringify(expenses));
    },
    addExpense: (expense) => {
        const expenses = storageUtils.getExpenses();
        expenses.unshift(expense);
        storageUtils.saveExpenses(expenses);
    },
    deleteExpense: (id) => {
        const expenses = storageUtils.getExpenses();
        const filtered = expenses.filter(e => e.id !== id);
        storageUtils.saveExpenses(filtered);
    },
    getBudgets: () => {
        const data = localStorage.getItem(BUDGETS_KEY);
        return data ? JSON.parse(data) : [];
    },
    saveBudgets: (budgets) => {
        localStorage.setItem(BUDGETS_KEY, JSON.stringify(budgets));
    },
    updateBudget: (budget) => {
        const budgets = storageUtils.getBudgets();
        const index = budgets.findIndex(b => b.category === budget.category);
        if (index >= 0) {
            budgets[index] = budget;
        }
        else {
            budgets.push(budget);
        }
        storageUtils.saveBudgets(budgets);
    },
};
//# sourceMappingURL=storage.js.map