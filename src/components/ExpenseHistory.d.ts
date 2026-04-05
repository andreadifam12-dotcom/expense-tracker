import { Expense } from '../types';
interface ExpenseHistoryProps {
    expenses: Expense[];
    onDelete: (id: string) => void;
    onBack: () => void;
}
export declare const ExpenseHistory: ({ expenses, onDelete, onBack }: ExpenseHistoryProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ExpenseHistory.d.ts.map