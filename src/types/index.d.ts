export type Category = 'food' | 'transport' | 'education' | 'home' | 'health' | 'others';
export interface Expense {
    id: string;
    amount: number;
    category: Category;
    note: string;
    date: string;
    createdAt: number;
}
export interface Budget {
    category: Category;
    limit: number;
}
export interface CategoryInfo {
    name: string;
    icon: string;
    color: string;
}
export declare const CATEGORIES: Record<Category, CategoryInfo>;
//# sourceMappingURL=index.d.ts.map