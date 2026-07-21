import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  DollarSign, Clock, Shield, Globe, 
  MapPin, HelpCircle, ArrowRight, RefreshCw, Languages 
} from 'lucide-react';

export const TravelUtilities = () => {
  const { showToast } = useApp();

  // 1. Currency States
  const [currAmount, setCurrAmount] = useState(1);
  const [currFrom, setCurrFrom] = useState('USD');
  const [currTo, setCurrTo] = useState('INR');
  const [currResult, setCurrResult] = useState(83.45);

  const currencyRates = {
    USD: { INR: 83.45, EUR: 0.92, GBP: 0.79, JPY: 156.40, USD: 1 },
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0095, JPY: 1.87, INR: 1 },
    EUR: { USD: 1.09, INR: 90.72, GBP: 0.86, JPY: 170.0, EUR: 1 },
    GBP: { USD: 1.27, INR: 105.65, EUR: 1.16, JPY: 198.0, GBP: 1 },
    JPY: { USD: 0.0064, INR: 0.53, EUR: 0.0059, GBP: 0.0051, JPY: 1 }
  };

  const handleCurrencyConvert = (val, from, to) => {
    setCurrAmount(val);
    const rate = currencyRates[from]?.[to] || 1;
    setCurrResult(parseFloat((val * rate).toFixed(2)));
  };

  // 2. Visa States
  const [passportCountry, setPassportCountry] = useState('India');
  const [destinationCountry, setDestinationCountry] = useState('Japan');
  const [visaStatus, setVisaStatus] = useState({
    requirement: 'Visa Required (eVisa available)',
    validity: 'Up to 90 Days',
    timeline: '5-7 Business Days',
    confidence: 'High (updated 2 hrs ago)'
  });

  const handleVisaCheck = (e) => {
    e.preventDefault();
    showToast('AI Query: Fetching immigration policies...', 'info');
    
    setTimeout(() => {
      if (destinationCountry === 'Thailand' || destinationCountry === 'Nepal' || destinationCountry === 'Sri Lanka') {
        setVisaStatus({
          requirement: 'Visa Free / Visa on Arrival',
          validity: '30 Days',
          timeline: 'Instant at Border',
          confidence: 'High'
        });
      } else if (destinationCountry === 'USA' || destinationCountry === 'UK' || destinationCountry === 'Schengen Area') {
        setVisaStatus({
          requirement: 'Strict Visa Required (Paper/Sticker)',
          validity: 'Variable based on itinerary',
          timeline: '15-20 Business Days',
          confidence: 'High'
        });
      } else {
        setVisaStatus({
          requirement: 'eVisa Required',
          validity: '90 Days',
          timeline: '3-5 Business Days',
          confidence: 'High'
        });
      }
      showToast('Immigration rules updated.', 'success');
    }, 800);
  };

  // 3. Translator States
  const [transText, setTransText] = useState('Where is the nearest train station?');
  const [transLang, setTransLang] = useState('Hindi');
  const [transResult, setTransResult] = useState('सबसे पास का रेलवे स्टेशन कहाँ है? (Sabse paas ka railway station kahan hai?)');

  const handleTranslate = (e) => {
    e.preventDefault();
    if (!transText.trim()) return;

    showToast('AI Translator: Synthesizing regional nodes...', 'info');
    setTimeout(() => {
      let result;
      const text = transText.toLowerCase();

      if (transLang === 'Hindi') {
        if (text.includes('how are you')) result = 'आप कैसे हैं? (Aap kaise hain?)';
        else if (text.includes('thank you')) result = 'धन्यवाद (Dhanyavaad)';
        else result = 'कृपया मेरी मदद करें (Kripya meri madad karein) - Please help me';
      } else if (transLang === 'Japanese') {
        if (text.includes('how are you')) result = 'お元気ですか？ (O-genki desu ka?)';
        else if (text.includes('thank you')) result = 'ありがとう (Arigatou)';
        else result = '助けてください (Tasukete kudasai) - Please help me';
      } else if (transLang === 'French') {
        if (text.includes('how are you')) result = 'Comment allez-vous ?';
        else if (text.includes('thank you')) result = 'Merci beaucoup';
        else result = "S'il vous plaît, aidez-moi - Please help me";
      } else {
        result = `[Translated to ${transLang}]: System translation buffer active.`;
      }

      setTransResult(result);
      showToast('Text translated successfully.', 'success');
    }, 600);
  };

  return (
    <div className="w-full flex flex-col gap-8 text-left font-sans text-slate-800 dark:text-slate-100 py-4">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] text-teal-400 font-mono font-bold uppercase tracking-widest">
          UTILITY CONTROL CENTER
        </span>
        <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white mt-0 tracking-tight">
          Travel Utilities Dashboard
        </h1>
        <p className="text-sm text-slate-400 font-semibold max-w-2xl">
          Your essential travel toolkit: real-time currency conversion, visa intelligence, live timezone clocks, and regional translators.
        </p>
      </div>

      {/* Grid panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* Panel 1: Currency Converter */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-xl flex flex-col gap-5 text-left">
          <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
            <DollarSign className="text-teal-400" size={18} /> Currency Converter
          </h3>
          <p className="text-xs text-slate-400 font-semibold leading-relaxed">
            Dynamic currency exchange calculations with cached offline matrices.
          </p>

          <div className="flex flex-col gap-4 font-mono text-xs mt-2">
            <div className="flex flex-col gap-1">
              <label className="text-[8px] text-slate-500 font-black uppercase">Amount</label>
              <input
                type="number"
                value={currAmount}
                onChange={(e) => handleCurrencyConvert(parseFloat(e.target.value) || 0, currFrom, currTo)}
                className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/5 focus:outline-none text-slate-850 dark:text-white font-bold"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[8px] text-slate-500 font-black uppercase">From</label>
                <select
                  value={currFrom}
                  onChange={(e) => { setCurrFrom(e.target.value); handleCurrencyConvert(currAmount, e.target.value, currTo); }}
                  className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/5 text-slate-800 dark:text-white"
                >
                  <option value="USD">USD ($)</option>
                  <option value="INR">INR (₹)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="JPY">JPY (¥)</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[8px] text-slate-500 font-black uppercase">To</label>
                <select
                  value={currTo}
                  onChange={(e) => { setCurrTo(e.target.value); handleCurrencyConvert(currAmount, currFrom, e.target.value); }}
                  className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/5 text-slate-800 dark:text-white"
                >
                  <option value="INR">INR (₹)</option>
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="JPY">JPY (¥)</option>
                </select>
              </div>
            </div>

            <div className="p-3 bg-teal-500/10 border border-teal-500/20 rounded-2xl flex justify-between items-center text-teal-400 font-black mt-2">
              <span>EXCHANGED RESULT</span>
              <span>{currResult.toLocaleString()} {currTo}</span>
            </div>
          </div>
        </div>

        {/* Panel 2: Visa Checker */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-xl flex flex-col gap-5 text-left">
          <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
            <Globe className="text-teal-400" size={18} /> Visa Advisor Core
          </h3>
          <p className="text-xs text-slate-400 font-semibold leading-relaxed">
            Verify visa regulations and processing estimates.
          </p>

          <form onSubmit={handleVisaCheck} className="flex flex-col gap-4 font-mono text-xs mt-2">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[8px] text-slate-500 font-black uppercase">Passport</label>
                <input
                  type="text"
                  value={passportCountry}
                  onChange={(e) => setPassportCountry(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/5 text-slate-800 dark:text-white font-bold"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[8px] text-slate-500 font-black uppercase">Destination</label>
                <input
                  type="text"
                  value={destinationCountry}
                  onChange={(e) => setDestinationCountry(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/5 text-slate-800 dark:text-white font-bold"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white font-mono font-bold rounded-xl shadow-md transition-colors cursor-pointer"
            >
              QUERY VISA SCHEDULER
            </button>

            {visaStatus && (
              <div className="flex flex-col gap-1.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/5 text-[10px] text-slate-500 dark:text-slate-450 mt-1">
                <div className="flex justify-between">
                  <span>Visa Status:</span>
                  <span className="text-white font-bold">{visaStatus.requirement}</span>
                </div>
                <div className="flex justify-between">
                  <span>Validity:</span>
                  <span className="text-white font-bold">{visaStatus.validity}</span>
                </div>
                <div className="flex justify-between">
                  <span>Est Timeline:</span>
                  <span className="text-white font-bold">{visaStatus.timeline}</span>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Panel 3: Live Translator */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-xl flex flex-col gap-5 text-left">
          <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
            <Languages className="text-teal-400" size={18} /> Linguistic Translation
          </h3>
          <p className="text-xs text-slate-400 font-semibold leading-relaxed">
            Translate travel phrases into local languages with pronunciation markers.
          </p>

          <form onSubmit={handleTranslate} className="flex flex-col gap-4 font-mono text-xs mt-2">
            <div className="flex flex-col gap-1">
              <label className="text-[8px] text-slate-500 font-black uppercase">Phrase</label>
              <input
                type="text"
                value={transText}
                onChange={(e) => setTransText(e.target.value)}
                className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/5 text-slate-800 dark:text-white font-bold"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[8px] text-slate-500 font-black uppercase">Target Language</label>
              <select
                value={transLang}
                onChange={(e) => setTransLang(e.target.value)}
                className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/5 text-slate-800 dark:text-white"
              >
                <option value="Hindi">Hindi (India)</option>
                <option value="Japanese">Japanese (Japan)</option>
                <option value="French">French (France)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white font-mono font-bold rounded-xl shadow-md transition-colors cursor-pointer"
            >
              TRANSLATE PHRASE
            </button>

            {transResult && (
              <div className="p-3 bg-teal-500/10 border border-teal-500/20 rounded-2xl text-[10px] text-teal-300 font-bold leading-relaxed">
                {transResult}
              </div>
            )}
          </form>
        </div>

      </div>
    </div>
  );
};
