import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Dashboard } from './components/Dashboard';
import { AddExpense } from './components/AddExpense';
import { ExpenseHistory } from './components/ExpenseHistory';
import { BudgetSettings } from './components/BudgetSettings';
import { Navigation, Page } from './components/Navigation';
import { FloatingActionButton } from './components/FloatingActionButton';
import { Expense, Budget, Category } from './types';
import { storageUtils } from './utils/storage';

type View = 'dashboard' | 'add' | 'history' | 'budget';

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [monthlyBudget, setMonthlyBudget] = useState(10000000);

  useEffect(() => {
    const loadedExpenses = storageUtils.getExpenses();
    const loadedBudgets = storageUtils.getBudgets();
    setExpenses(loadedExpenses);
    setBudgets(loadedBudgets);

    const totalBudget = loadedBudgets.reduce((sum, b) => sum + b.limit, 0);
    if (totalBudget > 0) {
      setMonthlyBudget(totalBudget);
    }
  }, []);

  const handleAddExpense = (expenseData: {
    amount: number;
    category: Category;
    note: string;
    date: string;
  }) => {
    const newExpense: Expense = {
      id: Date.now().toString(),
      ...expenseData,
      createdAt: Date.now(),
    };
    storageUtils.addExpense(newExpense);
    setExpenses((prev) => [newExpense, ...prev]);
    setCurrentView('dashboard');
  };

  const handleDeleteExpense = (id: string) => {
    storageUtils.deleteExpense(id);
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  const handleUpdateBudget = (budget: Budget) => {
    storageUtils.updateBudget(budget);
    setBudgets((prev) => {
      const index = prev.findIndex((b) => b.category === budget.category);
      if (index >= 0) {
        const updated = [...prev];
        updated[index] = budget;
        return updated;
      }
      return [...prev, budget];
    });

    const allBudgets = storageUtils.getBudgets();
    const total = allBudgets.reduce((sum, b) => sum + b.limit, 0);
    if (total > 0) {
      setMonthlyBudget(total);
    }
  };

  const handleNavigate = (page: Page) => {
    setCurrentView(page);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="min-h-screen bg-cream bg-parchment pb-24">
      <AnimatePresence mode="wait">
        {currentView === 'dashboard' && (
          <motion.div
            key="dashboard"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <Dashboard expenses={expenses} monthlyBudget={monthlyBudget} />
          </motion.div>
        )}

        {currentView === 'add' && (
          <motion.div
            key="add"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <AddExpense onAdd={handleAddExpense} onCancel={() => setCurrentView('dashboard')} />
          </motion.div>
        )}

        {currentView === 'history' && (
          <motion.div
            key="history"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <ExpenseHistory
              expenses={expenses}
              onDelete={handleDeleteExpense}
              onBack={() => setCurrentView('dashboard')}
            />
          </motion.div>
        )}

        {currentView === 'budget' && (
          <motion.div
            key="budget"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <BudgetSettings
              budgets={budgets}
              expenses={expenses}
              onUpdateBudget={handleUpdateBudget}
              onBack={() => setCurrentView('dashboard')}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {currentView !== 'add' && <FloatingActionButton onClick={() => setCurrentView('add')} />}

      <Navigation
        currentPage={currentView === 'add' ? 'dashboard' : currentView}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

export default App;
