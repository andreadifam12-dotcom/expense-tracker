import { Expense, Budget } from '../types';

const EXPENSES_KEY = 'fairytale_expenses';
const BUDGETS_KEY = 'fairytale_budgets';

export const storageUtils = {
  getExpenses: (): Expense[] => {
    const data = localStorage.getItem(EXPENSES_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveExpenses: (expenses: Expense[]): void => {
    localStorage.setItem(EXPENSES_KEY, JSON.stringify(expenses));
  },

  addExpense: (expense: Expense): void => {
    const expenses = storageUtils.getExpenses();
    expenses.unshift(expense);
    storageUtils.saveExpenses(expenses);
  },

  deleteExpense: (id: string): void => {
    const expenses = storageUtils.getExpenses();
    const filtered = expenses.filter(e => e.id !== id);
    storageUtils.saveExpenses(filtered);
  },

  getBudgets: (): Budget[] => {
    const data = localStorage.getItem(BUDGETS_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveBudgets: (budgets: Budget[]): void => {
    localStorage.setItem(BUDGETS_KEY, JSON.stringify(budgets));
  },

  updateBudget: (budget: Budget): void => {
    const budgets = storageUtils.getBudgets();
    const index = budgets.findIndex(b => b.category === budget.category);
    if (index >= 0) {
      budgets[index] = budget;
    } else {
      budgets.push(budget);
    }
    storageUtils.saveBudgets(budgets);
  },
};
