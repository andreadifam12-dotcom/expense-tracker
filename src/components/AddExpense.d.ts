import { Category } from '../types';
interface AddExpenseProps {
    onAdd: (expense: {
        amount: number;
        category: Category;
        note: string;
        date: string;
    }) => void;
    onCancel: () => void;
}
export declare const AddExpense: ({ onAdd, onCancel }: AddExpenseProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=AddExpense.d.ts.map