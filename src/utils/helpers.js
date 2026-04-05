export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(amount);
};
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).format(date);
};
export const formatShortDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', {
        day: 'numeric',
        month: 'short',
    }).format(date);
};
export const getMonthYear = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', {
        month: 'long',
        year: 'numeric',
    }).format(date);
};
export const getCurrentMonthExpenses = (expenses) => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    return expenses.filter(expense => {
        const expenseDate = new Date(expense.date);
        return expenseDate.getMonth() === currentMonth && expenseDate.getFullYear() === currentYear;
    });
};
export const getTotalByCategory = (expenses) => {
    const totals = {};
    expenses.forEach(expense => {
        totals[expense.category] = (totals[expense.category] || 0) + expense.amount;
    });
    return totals;
};
export const groupExpensesByDate = (expenses) => {
    const grouped = {};
    expenses.forEach(expense => {
        const date = expense.date;
        if (!grouped[date]) {
            grouped[date] = [];
        }
        grouped[date].push(expense);
    });
    return grouped;
};
//# sourceMappingURL=helpers.js.map