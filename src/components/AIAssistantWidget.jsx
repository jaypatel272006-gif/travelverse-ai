import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Compass, MessageSquare, ShieldAlert, Cpu } from 'lucide-react';
import { mockDestinations } from '../data/mockData';

export const AIAssistantWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: 'Neural connection active. I am TravelVerse AI Companion. Where shall we navigate next? Try asking for customized itineraries or local weather suggestions!',
      time: 'Just now'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const suggestionChips = [
    'Visa-free destinations for Indians',
    'Train vs Flight: Delhi to Kerala',
    'Jain & Veg food in Japan/Europe',
    'Offbeat gems in Goa & Ladakh',
    'NRI travel advisory for India'
  ];

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    // User Message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    // AI smart response generation logic based on keywords
    setTimeout(() => {
      let aiText = '';
      const query = text.toLowerCase();

      if (query.includes('visa') || query.includes('passport') || query.includes('entry') || query.includes('nri')) {
        if (query.includes('nri') || query.includes('visit india')) {
          aiText = '🛂 NRI Travel Intelligence: Non-Resident Indians require a valid foreign passport along with an OCI (Overseas Citizenship of India) card or a valid tourist visa. Ensure your passport is valid for at least 6 months from arrival. For smooth transit, register with appropriate portals if active, and keep certified copies of Indian address proofs.';
        } else {
          aiText = '🛂 Indian Passport Visa Guide:\n• Visa-Free/eVisa: 60+ countries including Thailand, Malaysia, Vietnam, Sri Lanka, Mauritius, and Maldives. Perfect for spontaneous getaways!\n• Schengen (Europe): Requires a standard tourist visa. Recommend starting applications 3 months in advance. Bank statement history of 6 months is crucial.\n• USA/UK: Require physical visa interviews; slots can take several months, so plan ahead!';
        }
      } else if (query.includes('train') || query.includes('flight') || query.includes('transit') || query.includes('metro') || query.includes('cab')) {
        aiText = '🚆 Indian Transit Optimizer:\n• Flight vs Train: For distances >600km (e.g. Delhi to Kerala or Mumbai to Kolkata), flights are highly recommended to avoid travel fatigue. For medium distances (e.g. Delhi to Jaipur, Mumbai to Goa), premium AC trains like Vande Bharat, Shatabdi, or Rajdhani Express are cost-effective, scenic, and comfortable.\n• Local Commuting: Use Delhi Metro or Bangalore Namma Metro to beat city traffic. For last-mile transit, use app-based cabs (Ola, Uber) for safety and upfront pricing. Avoid unmetered street autos.';
      } else if (query.includes('veg') || query.includes('vegetarian') || query.includes('jain') || query.includes('food') || query.includes('diet')) {
        aiText = '🌱 Dietary Preferences Intelligence:\n• Domestic: India offers the world\'s best vegetarian/Jain food. Look for "Pure Veg" green dots or request "Jain menu" (no onion, garlic, or root vegetables) at any standard dining location.\n• International (Europe/Japan): Pre-book vegetarian/Jain meals with your airline at least 48 hours before departure. Use the HappyCow app to discover local vegan/vegetarian cafes. Translate your dietary requirements (e.g. "Watashi wa niku to sakana o tabemasen" - "I do not eat meat or fish" in Japanese) to show chefs.';
      } else if (query.includes('offbeat') || query.includes('gem') || query.includes('hidden') || query.includes('crowd')) {
        aiText = '🗺️ Offbeat Hidden Gems of India:\n• Goa: Bypass Baga/Calangute for the serene Butterfly Beach, Galgibaga (turtle nesting beach), or the spice plantations of Ponda.\n• Ladakh: Explore Turtuk (the last village on the Indo-Pak border) or Hanle (Dark Sky Sanctuary) instead of standard Leh loops.\n• Himachal: Choose Jibhi or Tirthan Valley over congested Shimla/Manali to experience pristine pine forests and quiet mountain streams.';
      } else if (query.includes('delhi') || query.includes('jaipur') || query.includes('india')) {
        aiText = 'I have fetched our India Golden Triangle indexes. For a 5-day Delhi & Jaipur Tour, I recommend 2 days exploring Old Delhi rickshaw routes and 3 days in Jaipur exploring Amber Fort and royal gardens. The weather is clear and sunny right now. Tap "Plan Custom Itinerary" on the planner page to build this target agenda!';
      } else if (query.includes('dubai') || query.includes('abu dhabi') || query.includes('uae')) {
        aiText = 'UAE coordinates unlocked. Dubai offers futuristic urban luxury: Burj Khalifa (level 124), dhow dining cruises, and desert dune bashing. For Abu Dhabi, the Sheikh Zayed Mosque is a must-see. Lodging averages ₹28,000-₹44,000/night for luxury tiers.';
      } else if (query.includes('kyoto') || query.includes('tokyo') || query.includes('japan')) {
        aiText = 'Japan servers active. Tokyo offers high-speed train networks, Shibuya Crossing, and digital art centers (teamLab). Kyoto offers traditional ryokan sanctuaries, forest paths, and shrines. Ideal duration: 5-8 days.';
      } else {
        aiText = `Search completed for "${text}". I have mapped this query to our global travel index. We have flights and luxury hotels ready for booking. Would you like me to launch the AI planner wizard to generate a customized route?`;
      }

      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: aiText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] text-left">
      {/* Orb Float widget button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="orb"
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-full bg-slate-900 border border-teal-500/50 flex items-center justify-center text-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.3)] cursor-pointer relative"
          >
            {/* Pulsing halo ring */}
            <span className="absolute inset-0 rounded-full border border-teal-400/30 scale-120 animate-ping duration-2000" />
            <Sparkles size={22} className="animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Holographic Chat Panel drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="panel"
            initial={{ scale: 0.9, opacity: 0, y: 50, x: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0, x: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50, x: 50 }}
            className="w-[340px] sm:w-[380px] h-[480px] rounded-3xl glass-neo border border-teal-500/25 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-slate-950/80 border-b border-teal-500/15 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse relative">
                  <span className="absolute inset-0 rounded-full bg-teal-400/50 scale-200 animate-ping" />
                </div>
                <div>
                  <h4 className="font-display font-black text-xs text-white uppercase tracking-wider flex items-center gap-1">
                    <Cpu size={12} className="text-teal-400" /> Neural Travel Companion
                  </h4>
                  <span className="text-[9px] text-slate-450 uppercase font-bold tracking-widest block">Quantum Connection Stable</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X size={15} />
              </button>
            </div>

            {/* Quick Action Navigation Bar */}
            <div className="px-4 py-2 bg-slate-900 border-b border-teal-500/10 flex gap-2 overflow-x-auto scrollbar-none whitespace-nowrap text-[9px] font-mono font-black shrink-0">
              <button
                type="button"
                onClick={() => {
                  window.location.href = '/planner';
                }}
                className="px-2.5 py-1 bg-teal-500/10 border border-teal-500/20 text-teal-405 rounded-lg hover:bg-teal-500/20 cursor-pointer"
              >
                ✈️ PLAN TRIP
              </button>
              <button
                type="button"
                onClick={() => {
                  window.location.href = '/road-trip-os';
                }}
                className="px-2.5 py-1 bg-teal-500/10 border border-teal-500/20 text-teal-405 rounded-lg hover:bg-teal-500/20 cursor-pointer"
              >
                🚗 ROAD TRIP
              </button>
              <button
                type="button"
                onClick={() => {
                  handleSend('Give me a quick budget breakdown template');
                }}
                className="px-2.5 py-1 bg-teal-500/10 border border-teal-500/20 text-teal-405 rounded-lg hover:bg-teal-500/20 cursor-pointer"
              >
                💰 BUDGETS
              </button>
              <button
                type="button"
                onClick={() => {
                  handleSend('Show emergency helpline numbers');
                }}
                className="px-2.5 py-1 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-lg hover:bg-rose-500/20 cursor-pointer"
              >
                🚨 EMERGENCY HELP
              </button>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-thin">
              {messages.map((m) => (
                <div 
                  key={m.id} 
                  className={`flex flex-col max-w-[85%] gap-1 ${m.sender === 'user' ? 'self-end items-end' : 'self-start'}`}
                >
                  <div className={`p-3 rounded-2xl text-xs leading-relaxed font-semibold
                    ${m.sender === 'user' 
                      ? 'bg-teal-500 text-slate-950 rounded-tr-none font-bold' 
                      : 'bg-slate-900 border border-teal-500/10 text-slate-200 rounded-tl-none'
                    }`}
                  >
                    {m.text}
                  </div>
                  <span className="text-[8px] text-slate-500 font-bold uppercase">{m.time}</span>
                </div>
              ))}

              {isTyping && (
                <div className="self-start flex flex-col gap-1 max-w-[80%]">
                  <div className="p-3 bg-slate-900 border border-teal-500/10 text-slate-450 rounded-2xl rounded-tl-none text-xs flex gap-1.5 items-center font-bold">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black ml-1">Analyzing database</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Suggestions list */}
            {messages.length === 1 && (
              <div className="p-3 border-t border-teal-500/10 shrink-0">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-2">Suggested Prompts</span>
                <div className="flex flex-wrap gap-1.5">
                  {suggestionChips.map((chip) => (
                    <button
                      key={chip}
                      onClick={() => handleSend(chip)}
                      className="px-2.5 py-1.5 border border-teal-500/20 hover:border-teal-500/50 bg-slate-950/40 rounded-xl text-[10px] font-bold text-slate-350 hover:text-teal-400 transition-all text-left cursor-pointer"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Bar */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputVal);
              }}
              className="p-3 bg-slate-950/90 border-t border-teal-500/15 flex gap-2 items-center shrink-0"
            >
              <input
                type="text"
                placeholder="Ask travel companion..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="flex-1 px-4 py-2.5 bg-slate-900 border border-teal-500/10 rounded-xl text-xs text-white focus:outline-none focus:border-teal-500 focus:ring-0"
              />
              <button
                type="submit"
                className="p-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl shadow-md transition-all shrink-0 cursor-pointer"
              >
                <Send size={13} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
