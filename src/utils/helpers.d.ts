import { Expense, Category } from '../types';
export declare const formatCurrency: (amount: number) => string;
export declare const formatDate: (dateString: string) => string;
export declare const formatShortDate: (dateString: string) => string;
export declare const getMonthYear: (dateString: string) => string;
export declare const getCurrentMonthExpenses: (expenses: Expense[]) => Expense[];
export declare const getTotalByCategory: (expenses: Expense[]) => Record<Category, number>;
export declare const groupExpensesByDate: (expenses: Expense[]) => Record<string, Expense[]>;
//# sourceMappingURL=helpers.d.ts.map