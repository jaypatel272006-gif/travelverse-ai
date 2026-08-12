import { useState, useMemo, useCallback } from 'react';

export const useBudget = (initialBudget = 50000) => {
  const [totalBudget, setTotalBudget] = useState(initialBudget);
  const [expenses, setExpenses] = useState([
    { id: 'e1', category: 'Hotels', name: 'Heritage Lodge Booking', amount: 18000 },
    { id: 'e2', category: 'Flights', name: 'Delhi to Srinagar Roundtrip', amount: 12500 },
    { id: 'e3', category: 'Food', name: 'Local Satvik & Fine Dining', amount: 6500 },
    { id: 'e4', category: 'Transport', name: 'Private Vehicle & Cabs', amount: 5000 },
    { id: 'e5', category: 'Activities', name: 'Gondola & Heritage Passes', amount: 3200 }
  ]);

  const categoryBreakdown = useMemo(() => {
    const categories = {
      Flights: 0,
      Hotels: 0,
      Transport: 0,
      Food: 0,
      Activities: 0,
      Emergency: 0,
      Other: 0
    };
    expenses.forEach(e => {
      if (categories[e.category] !== undefined) {
        categories[e.category] += e.amount;
      } else {
        categories.Other += e.amount;
      }
    });
    return categories;
  }, [expenses]);

  const totalSpent = useMemo(() => {
    return expenses.reduce((sum, e) => sum + e.amount, 0);
  }, [expenses]);

  const remainingBudget = useMemo(() => {
    return totalBudget - totalSpent;
  }, [totalBudget, totalSpent]);

  const addExpense = useCallback((category, name, amount) => {
    const newExpense = {
      id: `exp-${Date.now()}`,
      category,
      name,
      amount: parseFloat(amount) || 0
    };
    setExpenses(prev => [...prev, newExpense]);
  }, []);

  const deleteExpense = useCallback((id) => {
    setExpenses(prev => prev.filter(e => e.id !== id));
  }, []);

  return {
    totalBudget,
    setTotalBudget,
    expenses,
    totalSpent,
    remainingBudget,
    categoryBreakdown,
    addExpense,
    deleteExpense
  };
};

export default useBudget;
