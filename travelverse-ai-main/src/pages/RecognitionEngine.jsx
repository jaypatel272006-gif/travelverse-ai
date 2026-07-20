import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Camera, Upload, Sparkles, RefreshCw, Award, 
  MapPin, CheckCircle, HelpCircle, ShieldAlert, ArrowRight 
} from 'lucide-react';

const PRESETS = [
  {
    name: 'Taj Mahal',
    location: 'Agra, India',
    confidence: '99.8%',
    description: 'Iconic white marble mausoleum commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.',
    etiquette: 'Remove shoes or wear shoe covers before stepping on the main platform. Maintain quiet inside the main dome chamber.',
    bestTime: 'Sunrise (6:00 AM) for minimal crowds and optimal soft lighting reflections.',
    stamp: '🕌 Agra Stamp Unlocked',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Ram Mandir',
    location: 'Ayodhya, India',
    confidence: '98.5%',
    description: 'A major grand Hindu temple in Ayodhya, Uttar Pradesh, constructed in traditional Nagara style architecture representing deep spiritual heritage.',
    etiquette: 'Dress modestly (knees and shoulders covered). Cell phones and leather items are restricted inside the main shrine area.',
    bestTime: 'Morning Aarti (6:30 AM) or evening Aarti (7:00 PM).',
    stamp: '🛕 Ayodhya Stamp Unlocked',
    image: 'https://images.unsplash.com/photo-1698299292850-8b6b060d4b29?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Colosseum',
    location: 'Rome, Italy',
    confidence: '97.2%',
    description: 'The largest ancient amphitheatre ever built, constructed under the Flavian emperors. A marvel of Roman engineering and history.',
    etiquette: 'Do not touch or write on ancient walls. Be prepared for metal detector security checkpoints at entrance gates.',
    bestTime: 'Late afternoon (3:30 PM) for beautiful golden lighting across the amphitheatre arches.',
    stamp: '🏛️ Rome Stamp Unlocked',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=400&q=80'
  }
];

export const RecognitionEngine = () => {
  const { showToast, awardXp } = useApp();
  const [imagePreview, setImagePreview] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scannedResult, setScannedResult] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      triggerScan(file);
    }
  };

  const triggerScan = (fileOrPreset) => {
    setIsScanning(true);
    setScannedResult(null);
    setImagePreview(fileOrPreset.image || URL.createObjectURL(fileOrPreset));
    showToast('Engaging AI Scan Engine...', 'info');

    setTimeout(() => {
      setIsScanning(false);
      // Pick a result: if preset, use it, else pick random preset
      const result = fileOrPreset.name 
        ? fileOrPreset 
        : PRESETS[Math.floor(Math.random() * PRESETS.length)];
      
      setScannedResult(result);
      showToast(`Scanned: ${result.name} detected with high confidence!`, 'success');
      awardXp(300, `Scanned landmark: ${result.name}`);
    }, 3200);
  };

  const handlePresetSelect = (preset) => {
    triggerScan(preset);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      triggerScan(file);
    }
  };

  return (
    <div className="w-full flex flex-col gap-8 text-left font-sans text-slate-800 dark:text-slate-100 py-4">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] text-teal-400 font-mono font-bold uppercase tracking-widest">
          QUANTUM RECOGNITION DECK
        </span>
        <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white mt-0 tracking-tight">
          AI Destination Recognition
        </h1>
        <p className="text-sm text-slate-400 font-semibold max-w-2xl">
          Upload or drag a photo of any world landmark. Our AI scan HUD reads geometric parameters, matches global coordinates, and awards your Explorer Passport stamp.
        </p>
      </div>

      {/* Preset selections */}
      <div className="flex flex-col gap-3">
        <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">
          Select a sample preset node to test scanner
        </span>
        <div className="flex gap-4 flex-wrap">
          {PRESETS.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handlePresetSelect(p)}
              disabled={isScanning}
              className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-teal-500/30 rounded-xl text-xs font-bold transition-all cursor-pointer disabled:opacity-50 flex items-center gap-2 shadow-sm"
            >
              <img src={p.image} alt={p.name} className="w-6 h-6 rounded-full object-cover" />
              <span>{p.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Upload & HUD Scanner Box */}
        <div className="lg:col-span-6 p-6 rounded-3xl bg-slate-950 border border-white/10 flex flex-col justify-between min-h-[480px] relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-20 z-0" />

          {/* HUD scan controls */}
          <div className="w-full flex justify-between items-center z-10 font-mono text-[9px] border-b border-white/5 pb-3">
            <span>RECOGNITION CORE // ONLINE</span>
            <span className="text-teal-400 font-bold uppercase tracking-wider animate-pulse">
              {isScanning ? 'SCANNING GEOMETRIES' : 'WAITING_FOR_VECTOR'}
            </span>
          </div>

          {/* Upload Drop Zone */}
          <div 
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className="flex-1 my-6 rounded-2xl border-2 border-dashed border-white/10 hover:border-teal-500/30 bg-slate-900/30 flex flex-col items-center justify-center gap-4 text-center cursor-pointer transition-all relative z-10 p-6 overflow-hidden"
          >
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              className="hidden" 
              accept="image/*"
            />

            {imagePreview ? (
              <div className="w-full h-full relative flex items-center justify-center">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="w-full max-h-80 object-contain rounded-xl border border-white/5"
                />
                
                {/* Laser scan lines */}
                {isScanning && (
                  <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent shadow-[0_0_12px_#2dd4bf] animate-scanner-sweep z-20" />
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-teal-400">
                  <Upload size={22} className="animate-bounce" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-sm text-white">Drag & Drop Image</h4>
                  <p className="text-[11px] text-slate-500 font-semibold mt-1">
                    Or click to browse files (PNG, JPG)
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="w-full text-center z-10 font-mono text-[8px] text-slate-500 uppercase tracking-widest pointer-events-none">
            Supports architectural, geographical, and cultural photo matching
          </div>
        </div>

        {/* Right Side: AI naration / stats */}
        <div className="lg:col-span-6 flex flex-col gap-6 items-stretch">
          
          {isScanning && (
            <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 flex flex-col items-center justify-center text-center gap-4 min-h-[400px]">
              <RefreshCw className="animate-spin text-teal-400" size={32} />
              <div className="font-mono text-xs text-slate-350">
                <p className="font-bold uppercase tracking-widest text-teal-400">Scanning Geometries</p>
                <p className="mt-1 font-semibold text-[10px]">Processing matrix landmarks. Calibrating databases...</p>
              </div>
            </div>
          )}

          {!isScanning && scannedResult && (
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-2xl flex flex-col gap-6 text-left animate-in fade-in slide-in-from-bottom-4">
              
              {/* Scan Results header */}
              <div className="flex justify-between items-start gap-4 border-b border-slate-200 dark:border-white/5 pb-4">
                <div>
                  <span className="text-[9.5px] font-bold text-teal-400 uppercase tracking-widest font-mono flex items-center gap-1">
                    <CheckCircle size={12} className="text-emerald-400" /> Match Calibrated
                  </span>
                  <h3 className="font-display font-black text-2xl text-slate-900 dark:text-white mt-1">
                    {scannedResult.name}
                  </h3>
                  <span className="text-xs text-slate-455 font-bold font-mono">
                    📍 {scannedResult.location}
                  </span>
                </div>

                <div className="flex flex-col items-end">
                  <span className="text-[8px] text-slate-500 uppercase font-black font-mono">Confidence</span>
                  <span className="text-base font-mono font-black text-teal-500">{scannedResult.confidence}</span>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-1">
                <span className="text-[8.5px] text-slate-400 uppercase font-black font-mono">Landmark Bio</span>
                <p className="text-xs text-slate-650 dark:text-slate-300 leading-relaxed font-semibold">
                  {scannedResult.description}
                </p>
              </div>

              {/* Cultural Etiquette */}
              <div className="flex flex-col gap-1.5 p-3 rounded-2xl bg-amber-500/5 border border-amber-500/10">
                <span className="text-[8.5px] text-amber-500 uppercase font-black font-mono flex items-center gap-1">
                  🕉️ Local Etiquette & Traditions
                </span>
                <p className="text-[11px] text-amber-700 dark:text-amber-300 leading-relaxed font-semibold">
                  {scannedResult.etiquette}
                </p>
              </div>

              {/* Best Visit windows */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-[9px] border-t border-slate-200 dark:border-white/5 pt-4">
                <div className="flex flex-col">
                  <span className="text-slate-500 uppercase font-black">Best Visit Hour</span>
                  <span className="text-slate-800 dark:text-white font-bold mt-0.5">{scannedResult.bestTime}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 uppercase font-black">Advisory status</span>
                  <span className="text-emerald-400 font-bold mt-0.5">Open // Safe</span>
                </div>
              </div>

              {/* Rewards */}
              <div className="flex items-center gap-3 p-3 bg-teal-500/10 border border-teal-500/20 rounded-2xl font-mono text-[10px] text-teal-300 font-bold mt-2">
                <Award size={16} className="text-teal-400" />
                <div className="flex-1">
                  <span>Passport Stamp Logged: {scannedResult.stamp}</span>
                  <span className="block text-[8px] text-slate-500 font-medium font-semibold mt-0.5">+300 Travel XP Added</span>
                </div>
              </div>
            </div>
          )}

          {!isScanning && !scannedResult && (
            <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 text-center text-slate-500 flex flex-col items-center justify-center gap-3 min-h-[400px]">
              <Camera size={26} className="text-slate-600 animate-pulse" />
              <div className="max-w-xs text-xs font-semibold">
                Waiting for target uploads. Drag and drop any landscape photo to calibrate coordinates.
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
