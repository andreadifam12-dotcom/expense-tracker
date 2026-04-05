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

export const CATEGORIES: Record<Category, CategoryInfo> = {
  food: { name: 'Food', icon: '🌸', color: '#D4798A' },
  transport: { name: 'Transport', icon: '🍃', color: '#7A9E7E' },
  education: { name: 'Education', icon: '📚', color: '#C9A84C' },
  home: { name: 'Home', icon: '🕯️', color: '#C9637A' },
  health: { name: 'Health', icon: '💐', color: '#5C8C6A' },
  others: { name: 'Others', icon: '🐇', color: '#5C3D2E' },
};
