import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Trash2, ArrowLeft } from 'lucide-react';
import { Expense, Category, CATEGORIES } from '../types';
import { formatCurrency, formatDate, groupExpensesByDate } from '../utils/helpers';
import { WatercolorCard } from './WatercolorCard';
import { EmptyState } from './EmptyState';
import { BotanicalDivider } from './BotanicalDivider';

interface ExpenseHistoryProps {
  expenses: Expense[];
  onDelete: (id: string) => void;
  onBack: () => void;
}

export const ExpenseHistory = ({ expenses, onDelete, onBack }: ExpenseHistoryProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  const filteredExpenses = useMemo(() => {
    return expenses.filter((expense) => {
      const matchesSearch = expense.note.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || expense.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [expenses, searchTerm, selectedCategory]);

  const groupedExpenses = useMemo(() => groupExpensesByDate(filteredExpenses), [filteredExpenses]);
  const sortedDates = useMemo(
    () => Object.keys(groupedExpenses).sort((a, b) => new Date(b).getTime() - new Date(a).getTime()),
    [groupedExpenses]
  );

  return (
    <div className="min-h-screen bg-cream bg-parchment px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <motion.button
          onClick={onBack}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
          className="flex items-center gap-2 text-forest/70 hover:text-forest mb-6 font-serif"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="font-display-italic text-4xl text-rose mb-2">Expense Chronicle</h1>
          <p className="font-serif text-forest/60">Your journey through spending</p>
        </motion.div>

        <WatercolorCard delay={0.2} className="mb-6">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-forest/40" size={20} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search your tales..."
                className="w-full pl-12 pr-6 py-3 bg-cream border-2 border-sage/20 rounded-2xl font-serif text-forest focus:outline-none focus:border-rose/40 transition-colors"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full font-serif text-sm transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-rose to-mauve text-cream shadow-watercolor-sm'
                    : 'bg-cream text-forest/70 border border-sage/20 hover:border-sage/40'
                }`}
              >
                All
              </motion.button>
              {(Object.keys(CATEGORIES) as Category[]).map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full font-serif text-sm transition-all flex items-center gap-2 ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-rose to-mauve text-cream shadow-watercolor-sm'
                      : 'bg-cream text-forest/70 border border-sage/20 hover:border-sage/40'
                  }`}
                >
                  <span>{CATEGORIES[cat].icon}</span>
                  {CATEGORIES[cat].name}
                </motion.button>
              ))}
            </div>
          </div>
        </WatercolorCard>

        {sortedDates.length > 0 ? (
          <div className="space-y-6">
            {sortedDates.map((date, dateIndex) => (
              <motion.div
                key={date}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + dateIndex * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-sage/30 to-transparent" />
                  <p className="font-serif text-forest/60 text-sm">{formatDate(date)}</p>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-sage/30 to-transparent" />
                </div>

                <div className="space-y-3">
                  <AnimatePresence mode="popLayout">
                    {groupedExpenses[date].map((expense, expIndex) => (
                      <motion.div
                        key={expense.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, x: -100 }}
                        transition={{ delay: expIndex * 0.05 }}
                        className="bg-parchment p-4 rounded-2xl border-2 border-sage/10 hover:border-rose/20 hover:shadow-watercolor-sm transition-all group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 flex-1">
                            <div className="text-3xl">{CATEGORIES[expense.category].icon}</div>
                            <div className="flex-1">
                              <p className="font-serif text-forest font-medium">{expense.note}</p>
                              <p className="font-serif text-sm text-forest/50">
                                {CATEGORIES[expense.category].name}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <p className="font-mono text-lg text-mauve font-semibold">
                              {formatCurrency(expense.amount)}
                            </p>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => onDelete(expense.id)}
                              className="p-2 rounded-full bg-rose/10 text-rose opacity-0 group-hover:opacity-100 transition-opacity hover:bg-rose/20"
                            >
                              <Trash2 size={18} />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <WatercolorCard>
            <EmptyState message="No tales found in your chronicle" />
          </WatercolorCard>
        )}

        <BotanicalDivider />
      </div>
    </div>
  );
};
