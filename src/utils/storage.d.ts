import { Expense, Budget } from '../types';
export declare const storageUtils: {
    getExpenses: () => Expense[];
    saveExpenses: (expenses: Expense[]) => void;
    addExpense: (expense: Expense) => void;
    deleteExpense: (id: string) => void;
    getBudgets: () => Budget[];
    saveBudgets: (budgets: Budget[]) => void;
    updateBudget: (budget: Budget) => void;
};
//# sourceMappingURL=storage.d.ts.map