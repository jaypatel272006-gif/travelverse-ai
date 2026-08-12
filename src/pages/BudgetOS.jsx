import React, { useState } from 'react';
import { DollarSign, Plus, Trash2, PieChart, ShieldCheck } from 'lucide-react';
import useBudget from '../hooks/useBudget';
import GlassPanel from '../components/ui/GlassPanel';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import StatWidget from '../components/ui/StatWidget';

export const BudgetOS = () => {
  const {
    totalBudget,
    setTotalBudget,
    expenses,
    totalSpent,
    remainingBudget,
    categoryBreakdown,
    addExpense,
    deleteExpense
  } = useBudget(50000);

  const [cat, setCat] = useState('Hotels');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (name.trim() && amount) {
      addExpense(cat, name, amount);
      setName('');
      setAmount('');
    }
  };

  return (
    <div className="flex flex-col gap-8 text-left w-full">
      <div className="flex flex-col gap-2">
        <Badge variant="emerald" icon={DollarSign}>FINANCIAL MATRIX</Badge>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1">
          Travel Budget OS
        </h1>
        <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-xl">
          Real-time expense allocation, budget envelope cap, and category analytics for active travel dossiers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatWidget
          label="Total Envelope Cap"
          value={`₹${totalBudget.toLocaleString('en-IN')}`}
          subtext="Configurable Limit"
          icon={DollarSign}
          color="teal"
        />
        <StatWidget
          label="Total Allocated"
          value={`₹${totalSpent.toLocaleString('en-IN')}`}
          subtext={`${expenses.length} Expense Line Items`}
          icon={PieChart}
          color="purple"
        />
        <StatWidget
          label="Remaining Envelope"
          value={`₹${remainingBudget.toLocaleString('en-IN')}`}
          subtext="Available Liquid Buffer"
          icon={ShieldCheck}
          color={remainingBudget >= 0 ? 'emerald' : 'amber'}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Panel */}
        <GlassPanel className="lg:col-span-4 p-6 flex flex-col gap-4">
          <h3 className="font-display font-bold text-base text-white">Add Expense Line Item</h3>
          <form onSubmit={handleAdd} className="flex flex-col gap-3 font-mono text-xs">
            <div>
              <label className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Category</label>
              <select
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-950 border border-white/10 text-white"
              >
                <option value="Hotels">Hotels & Lodging</option>
                <option value="Flights">Flights & Transit</option>
                <option value="Transport">Local Cabs & Fuel</option>
                <option value="Food">Food & Dining</option>
                <option value="Activities">Activities & Passes</option>
                <option value="Emergency">Emergency Buffer</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Expense Description</label>
              <input
                type="text"
                placeholder="e.g. Resort Booking Deposit"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-950 border border-white/10 text-white"
                required
              />
            </div>
            <div>
              <label className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Amount (₹)</label>
              <input
                type="number"
                placeholder="15000"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-950 border border-white/10 text-white"
                required
              />
            </div>
            <Button variant="primary" type="submit" icon={Plus} className="mt-2">
              ADD LINE ITEM
            </Button>
          </form>
        </GlassPanel>

        {/* Expenses List */}
        <GlassPanel className="lg:col-span-8 p-6 flex flex-col gap-4">
          <h3 className="font-display font-bold text-base text-white">Expense Ledger Items</h3>
          
          <div className="flex flex-col gap-2 font-mono text-xs">
            {expenses.map(e => (
              <div key={e.id} className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Badge variant="teal" size="sm">{e.category}</Badge>
                  <span className="font-bold text-white">{e.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-teal-400 font-bold">₹{e.amount.toLocaleString('en-IN')}</span>
                  <button onClick={() => deleteExpense(e.id)} className="text-slate-500 hover:text-rose-400">
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>

    </div>
  );
};

export default BudgetOS;
