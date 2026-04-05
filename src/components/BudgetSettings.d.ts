import { Budget, Expense } from '../types';
interface BudgetSettingsProps {
    budgets: Budget[];
    expenses: Expense[];
    onUpdateBudget: (budget: Budget) => void;
    onBack: () => void;
}
export declare const BudgetSettings: ({ budgets, expenses, onUpdateBudget, onBack }: BudgetSettingsProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=BudgetSettings.d.ts.map