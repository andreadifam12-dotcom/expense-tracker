import { Expense, Category } from '../types';

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
};

export const formatShortDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'short',
  }).format(date);
};

export const getMonthYear = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('id-ID', {
    month: 'long',
    year: 'numeric',
  }).format(date);
};

export const getCurrentMonthExpenses = (expenses: Expense[]): Expense[] => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  return expenses.filter(expense => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() === currentMonth && expenseDate.getFullYear() === currentYear;
  });
};

export const getTotalByCategory = (expenses: Expense[]): Record<Category, number> => {
  const totals: Record<string, number> = {};

  expenses.forEach(expense => {
    totals[expense.category] = (totals[expense.category] || 0) + expense.amount;
  });

  return totals as Record<Category, number>;
};

export const groupExpensesByDate = (expenses: Expense[]): Record<string, Expense[]> => {
  const grouped: Record<string, Expense[]> = {};

  expenses.forEach(expense => {
    const date = expense.date;
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(expense);
  });

  return grouped;
};
