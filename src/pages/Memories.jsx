import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Plus, Calendar, MapPin, Trash2, Sparkles, Image as ImageIcon } from 'lucide-react';
import useMemories from '../hooks/useMemories';
import GlassPanel from '../components/ui/GlassPanel';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

export const Memories = () => {
  const { memoriesList, memoriesByYear, addMemory, deleteMemory } = useMemories();
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDest, setNewDest] = useState('Goa');
  const [newJournal, setNewJournal] = useState('');

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (newTitle.trim()) {
      addMemory({
        title: newTitle,
        destination: newDest,
        journal: newJournal,
        year: new Date().getFullYear().toString(),
        date: 'OCT 2100'
      });
      setNewTitle('');
      setNewJournal('');
      setShowAddModal(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 text-left w-full">
      {/* Title Header */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <Badge variant="purple" icon={BookOpen}>QUANTUM ARCHIVE</Badge>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1">
            Memory Vault Ledger
          </h1>
          <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-xl">
            Preserve your travel history in encrypted spatial memory capsules indexed by location, year, and sensory journal notes.
          </p>
        </div>
        <Button variant="primary" icon={Plus} onClick={() => setShowAddModal(true)}>
          ADD MEMORY
        </Button>
      </div>

      {/* Memories Timeline by Year */}
      <div className="flex flex-col gap-8">
        {Object.entries(memoriesByYear).map(([year, memories]) => (
          <div key={year} className="flex flex-col gap-4">
            <div className="flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="font-display font-black text-xl text-teal-400">{year}</span>
              <span className="text-xs font-mono text-slate-500 font-bold">{memories.length} MEMORIES ARCHIVED</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {memories.map(mem => (
                <GlassPanel key={mem.id} hoverEffect glowColor="purple" className="p-0 overflow-hidden">
                  <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                    <img src={mem.image} alt={mem.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3">
                      <Badge variant="purple">{mem.category || 'Memory'}</Badge>
                    </div>
                    <button
                      onClick={() => deleteMemory(mem.id)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/70 border border-white/15 text-slate-400 hover:text-rose-400 transition-colors"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                  <div className="p-5 flex flex-col gap-2">
                    <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                      <span>{mem.date}</span>
                      <span className="text-teal-400 font-bold">{mem.destination}</span>
                    </div>
                    <h3 className="font-display font-bold text-base text-white">{mem.title}</h3>
                    {mem.journal && <p className="text-xs text-slate-300 font-mono leading-relaxed mt-1">{mem.journal}</p>}
                  </div>
                </GlassPanel>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Add Memory Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <GlassPanel className="w-full max-w-md p-6 flex flex-col gap-4">
            <h3 className="font-display font-bold text-lg text-white">Create Spatial Memory Capsule</h3>
            <form onSubmit={handleAddSubmit} className="flex flex-col gap-3 font-mono text-xs">
              <input
                type="text"
                placeholder="Memory Title e.g. Sunset at Dal Lake"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="p-3 rounded-xl bg-slate-950 border border-white/10 text-white"
                required
              />
              <select
                value={newDest}
                onChange={(e) => setNewDest(e.target.value)}
                className="p-3 rounded-xl bg-slate-950 border border-white/10 text-white"
              >
                <option value="Kashmir">Kashmir</option>
                <option value="Goa">Goa</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Kerala">Kerala</option>
                <option value="Ladakh">Ladakh</option>
                <option value="Varanasi">Varanasi</option>
              </select>
              <textarea
                placeholder="Journal notes & sensory details..."
                value={newJournal}
                onChange={(e) => setNewJournal(e.target.value)}
                rows={3}
                className="p-3 rounded-xl bg-slate-950 border border-white/10 text-white resize-none"
              />
              <div className="flex justify-end gap-2 mt-2">
                <Button variant="ghost" onClick={() => setShowAddModal(false)}>CANCEL</Button>
                <Button variant="primary" type="submit">SAVE CAPSULE</Button>
              </div>
            </form>
          </GlassPanel>
        </div>
      )}

    </div>
  );
};

export default Memories;
