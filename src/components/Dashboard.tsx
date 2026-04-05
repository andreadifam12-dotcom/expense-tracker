import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Expense } from '../types';
import { CATEGORIES } from '../types';
import { formatCurrency, getCurrentMonthExpenses, getTotalByCategory, formatShortDate } from '../utils/helpers';
import { WatercolorCard } from './WatercolorCard';
import { OrnateFrame } from './OrnateFrame';
import { BotanicalDivider } from './BotanicalDivider';
import { EmptyState } from './EmptyState';

interface DashboardProps {
  expenses: Expense[];
  monthlyBudget: number;
}

export const Dashboard = ({ expenses, monthlyBudget }: DashboardProps) => {
  const currentMonthExpenses = useMemo(() => getCurrentMonthExpenses(expenses), [expenses]);
  const totalSpent = useMemo(
    () => currentMonthExpenses.reduce((sum, exp) => sum + exp.amount, 0),
    [currentMonthExpenses]
  );
  const remaining = monthlyBudget - totalSpent;
  const categoryTotals = useMemo(() => getTotalByCategory(currentMonthExpenses), [currentMonthExpenses]);

  const chartData = useMemo(() => {
    return Object.entries(categoryTotals)
      .filter(([, amount]) => amount > 0)
      .map(([category, amount]) => ({
        name: CATEGORIES[category as keyof typeof CATEGORIES].name,
        value: amount,
        color: CATEGORIES[category as keyof typeof CATEGORIES].color,
      }));
  }, [categoryTotals]);

  const recentExpenses = useMemo(() => currentMonthExpenses.slice(0, 5), [currentMonthExpenses]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="font-display-italic text-5xl text-rose mb-2">Salam!</h1>
        <p className="font-serif text-forest/70 text-lg">Here's your spending today</p>
      </motion.div>

      <OrnateFrame>
        <WatercolorCard delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="font-serif text-forest/60 text-sm mb-1">Total Spent</p>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="font-mono text-3xl text-mauve font-semibold"
              >
                {formatCurrency(totalSpent)}
              </motion.p>
            </div>
            <div>
              <p className="font-serif text-forest/60 text-sm mb-1">Monthly Budget</p>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="font-mono text-3xl text-sage-dark font-semibold"
              >
                {formatCurrency(monthlyBudget)}
              </motion.p>
            </div>
            <div>
              <p className="font-serif text-forest/60 text-sm mb-1">Remaining</p>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className={`font-mono text-3xl font-semibold ${
                  remaining >= 0 ? 'text-sage-dark' : 'text-gold'
                }`}
              >
                {formatCurrency(remaining)}
              </motion.p>
            </div>
          </div>
        </WatercolorCard>
      </OrnateFrame>

      <BotanicalDivider />

      {chartData.length > 0 ? (
        <WatercolorCard delay={0.6} className="mb-8">
          <h2 className="font-crimson text-2xl text-forest mb-6 text-center font-semibold">
            Spending by Category
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} opacity={0.8} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => formatCurrency(value)}
                contentStyle={{
                  backgroundColor: '#FAF3DC',
                  border: '2px solid #D4798A',
                  borderRadius: '1rem',
                  fontFamily: 'Lora, serif',
                }}
              />
              <Legend
                wrapperStyle={{ fontFamily: 'Lora, serif', fontSize: '14px' }}
                iconType="circle"
              />
            </PieChart>
          </ResponsiveContainer>
        </WatercolorCard>
      ) : null}

      <WatercolorCard delay={0.8}>
        <h2 className="font-crimson text-2xl text-forest mb-4 font-semibold">Recent Transactions</h2>
        {recentExpenses.length > 0 ? (
          <div className="space-y-3">
            {recentExpenses.map((expense, index) => (
              <motion.div
                key={expense.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="flex items-center justify-between p-4 bg-cream rounded-2xl border border-sage/10 hover:shadow-watercolor-sm transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{CATEGORIES[expense.category].icon}</span>
                  <div>
                    <p className="font-serif text-forest font-medium">{expense.note}</p>
                    <p className="font-serif text-sm text-forest/50">{formatShortDate(expense.date)}</p>
                  </div>
                </div>
                <p className="font-mono text-lg text-mauve font-semibold">
                  {formatCurrency(expense.amount)}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          <EmptyState message="No expenses yet. Start tracking your magical journey!" />
        )}
      </WatercolorCard>
    </div>
  );
};
