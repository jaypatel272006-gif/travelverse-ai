import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, HelpCircle, ChevronDown, CheckCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { mockFaqs } from '../data/mockData';

// Sub-component for individual Accordion item
const AccordionItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border-b border-slate-100 dark:border-slate-800/80 last:border-b-0 py-4 text-left">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-2 text-sm font-bold text-slate-850 dark:text-slate-100 focus:outline-none"
      >
        <span className="max-w-[90%] leading-relaxed">{faq.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={14} className="text-slate-400" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-xs text-slate-500 leading-relaxed pt-2 pb-3 font-semibold">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Contact = () => {
  const { showToast } = useApp();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      showToast('Please fill out all form fields.', 'error');
      return;
    }

    if (!email.includes('@') || email.length < 5) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }

    showToast('Your message has been sent! Our support team will reach out within 24 hours.');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="py-4 text-left flex flex-col gap-12 max-w-5xl mx-auto">
      {/* Title Header */}
      <div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-850 dark:text-slate-100 mb-2 mt-0">
          Support & Contact HQ
        </h1>
        <p className="text-sm text-slate-500 max-w-xl">
          Have questions about your AI itineraries, custom flights booking, or refund policies? Drop us a note or explore our FAQs.
        </p>
      </div>

      {/* Main Grid: Form on left, Details & FAQs on right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* Support Request Form */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/40 shadow-sm flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <h3 className="font-display font-extrabold text-lg text-slate-850 dark:text-slate-100">Send Message</h3>
            <p className="text-xs text-slate-500">Reach out directly to our global travel coordination team.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Mercer"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-205 dark:border-slate-805 text-xs font-semibold focus:outline-none focus:border-teal-500"
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@example.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-205 dark:border-slate-805 text-xs font-semibold focus:outline-none focus:border-teal-500"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Flight booking cancellation or planning query"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-205 dark:border-slate-805 text-xs font-semibold focus:outline-none focus:border-teal-500"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Detailed Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your request details here..."
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-205 dark:border-slate-805 text-xs font-semibold focus:outline-none focus:border-teal-500 h-28 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-teal-655 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition-all shadow flex items-center justify-center gap-1.5"
            >
              <Send size={13} />
              Submit Ticket
            </button>
          </form>
        </div>

        {/* Right Side Info & FAQs Accordion */}
        <div className="flex flex-col gap-8">
          
          {/* HQ Info details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/40 shadow-sm flex flex-col gap-1.5 text-center items-center">
              <MapPin size={18} className="text-teal-500" />
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Address</span>
              <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 leading-snug">789 Wander Blvd, SF</span>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/40 shadow-sm flex flex-col gap-1.5 text-center items-center">
              <Phone size={18} className="text-teal-500" />
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Helpline</span>
              <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">+1 (800) 555-PLAN</span>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/40 shadow-sm flex flex-col gap-1.5 text-center items-center">
              <Mail size={18} className="text-teal-500" />
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Email Help</span>
              <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">support@travelverse.ai</span>
            </div>
          </div>

          {/* Accordion FAQ Grid */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/40 shadow-sm">
            <h3 className="font-display font-extrabold text-lg text-slate-850 dark:text-slate-100 mb-4 flex items-center gap-1.5">
              <HelpCircle size={18} className="text-teal-500" /> Frequently Asked Questions
            </h3>
            
            <div className="flex flex-col">
              {mockFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  faq={faq}
                  isOpen={openFaqIndex === index}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
