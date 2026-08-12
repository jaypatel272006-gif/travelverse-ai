import { useState, useCallback, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { getDestinationImage } from '../data/imageRegistry';

export const useMemories = () => {
  const { awardXp, showToast } = useApp();
  const [memoriesList, setMemoriesList] = useState(() => {
    try {
      const saved = localStorage.getItem('tv_memories');
      return saved ? JSON.parse(saved) : [
        {
          id: 'mem-1',
          year: '2026',
          destination: 'Kashmir',
          title: 'Sunset over Dal Lake Houseboat',
          date: 'OCT 2100',
          image: getDestinationImage('dest-kashmir'),
          category: 'Nature',
          journal: 'The mountains reflected in the peaceful mirror waters. Traditional Kashmiri tea warmed our hands.'
        },
        {
          id: 'mem-2',
          year: '2025',
          destination: 'Goa',
          title: 'Fontainhas Pastel Street Walk',
          date: 'DEC 2025',
          image: getDestinationImage('dest-goa'),
          category: 'Cultural',
          journal: 'Explored historic Latin Quarters in Old Goa. Pastel balconies and Portuguese heritage architecture.'
        },
        {
          id: 'mem-3',
          year: '2025',
          destination: 'Jaipur',
          title: 'Amber Fort Morning Rays',
          date: 'MAR 2025',
          image: getDestinationImage('dest-jaipur'),
          category: 'Heritage',
          journal: 'Stood atop Amber Fort overlooking Maota Lake at dawn. Sunlight illuminated the yellow sandstone walls.'
        }
      ];
    } catch {
      return [];
    }
  });

  const saveMemoriesToStorage = (newList) => {
    try {
      localStorage.setItem('tv_memories', JSON.stringify(newList));
    } catch (e) {
      console.warn('LocalStorage save memory failed', e);
    }
  };

  const addMemory = useCallback((newMemory) => {
    const memoryObj = {
      id: `mem-${Date.now()}`,
      year: newMemory.year || new Date().getFullYear().toString(),
      destination: newMemory.destination || 'India Explorer',
      title: newMemory.title || 'Travel Memory Capsule',
      date: newMemory.date || 'OCT 2100',
      image: newMemory.image || getDestinationImage('dest-goa'),
      category: newMemory.category || 'General',
      journal: newMemory.journal || ''
    };

    setMemoriesList(prev => {
      const updated = [memoryObj, ...prev];
      saveMemoriesToStorage(updated);
      return updated;
    });

    awardXp(150, `Archived Travel Memory: ${memoryObj.title}`);
    showToast(`Memory capsule saved to Quantum Archive! +150 XP`, 'success');
  }, [awardXp, showToast]);

  const deleteMemory = useCallback((id) => {
    setMemoriesList(prev => {
      const updated = prev.filter(m => m.id !== id);
      saveMemoriesToStorage(updated);
      return updated;
    });
    showToast(`Memory capsule removed from ledger.`, 'info');
  }, [showToast]);

  const memoriesByYear = useMemo(() => {
    const grouped = {};
    memoriesList.forEach(m => {
      grouped[m.year] = grouped[m.year] || [];
      grouped[m.year].push(m);
    });
    return grouped;
  }, [memoriesList]);

  return {
    memoriesList,
    memoriesByYear,
    addMemory,
    deleteMemory
  };
};

export default useMemories;
