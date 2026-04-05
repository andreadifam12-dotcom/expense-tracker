export type Page = 'dashboard' | 'history' | 'budget';
interface NavigationProps {
    currentPage: Page;
    onNavigate: (page: Page) => void;
}
export declare const Navigation: ({ currentPage, onNavigate }: NavigationProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Navigation.d.ts.map