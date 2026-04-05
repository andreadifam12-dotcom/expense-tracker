import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Category, CATEGORIES } from '../types';
import { WatercolorCard } from './WatercolorCard';

interface AddExpenseProps {
  onAdd: (expense: { amount: number; category: Category; note: string; date: string }) => void;
  onCancel: () => void;
}

export const AddExpense = ({ onAdd, onCancel }: AddExpenseProps) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState<Category>('food');
  const [note, setNote] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) return;

    onAdd({
      amount: parseFloat(amount),
      category,
      note: note || CATEGORIES[category].name,
      date,
    });

    setAmount('');
    setNote('');
    setDate(new Date().toISOString().split('T')[0]);
  };

  return (
    <div className="min-h-screen bg-cream bg-parchment px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <motion.button
          onClick={onCancel}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
          className="flex items-center gap-2 text-forest/70 hover:text-forest mb-6 font-serif"
        >
          <ArrowLeft size={20} />
          Back to Journal
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="font-display-italic text-4xl text-rose mb-2">New Entry</h1>
          <p className="font-serif text-forest/60">Record your tale of spending</p>
        </motion.div>

        <WatercolorCard delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label className="block font-serif text-forest mb-2 text-sm">Amount (Rp)</label>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0"
                  step="1000"
                  min="0"
                  required
                  className="w-full px-6 py-4 bg-cream border-2 border-sage/20 rounded-2xl font-mono text-2xl text-forest focus:outline-none focus:border-rose/40 transition-colors"
                />
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-rose/10 to-sage/10 -z-10" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="block font-serif text-forest text-sm mb-3">Category</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {(Object.keys(CATEGORIES) as Category[]).map((cat) => (
                  <motion.button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-2xl border-2 transition-all ${
                      category === cat
                        ? 'bg-gradient-to-br from-rose/20 to-mauve/20 border-rose shadow-watercolor-sm'
                        : 'bg-cream border-sage/10 hover:border-sage/30'
                    }`}
                  >
                    <div className="text-3xl mb-2">{CATEGORIES[cat].icon}</div>
                    <p className="font-serif text-sm text-forest">{CATEGORIES[cat].name}</p>
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-serif text-forest mb-2 text-sm">Note</label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="What did you spend on?"
                rows={3}
                className="w-full px-6 py-4 bg-cream border-2 border-sage/20 rounded-2xl font-serif text-forest focus:outline-none focus:border-rose/40 transition-colors resize-none"
                style={{
                  backgroundImage: `repeating-linear-gradient(transparent, transparent 2.4rem, #7A9E7E10 2.4rem, #7A9E7E10 2.5rem)`,
                }}
              />
            </div>

            <div>
              <label className="block font-serif text-forest mb-2 text-sm">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full px-6 py-4 bg-cream border-2 border-sage/20 rounded-2xl font-serif text-forest focus:outline-none focus:border-rose/40 transition-colors"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-rose to-mauve text-cream py-4 rounded-2xl font-crimson text-lg font-semibold shadow-watercolor hover:shadow-watercolor-lg transition-shadow flex items-center justify-center gap-2"
            >
              <Sparkles size={20} />
              Add to Journal
            </motion.button>
          </form>
        </WatercolorCard>

        <div className="mt-8 text-center">
          <svg width="100" height="60" viewBox="0 0 100 60" className="mx-auto opacity-40">
            <path
              d="M20 30 Q 30 20, 40 30 T 60 30 T 80 30"
              stroke="#7A9E7E"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="50" cy="15" r="3" fill="#D4798A" />
            <circle cx="40" cy="25" r="2" fill="#C9A84C" />
            <circle cx="60" cy="25" r="2" fill="#C9A84C" />
          </svg>
        </div>
      </div>
    </div>
  );
};
