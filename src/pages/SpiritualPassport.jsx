import React, { useState } from 'react';
import { Compass, CheckCircle2, Circle, MapPin, Calendar, Sparkles, BookOpen, Navigation } from 'lucide-react';
import AppShell from '../components/layout/AppShell';
import PageContainer from '../components/layout/PageContainer';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import HeritageDivider from '../components/heritage/HeritageDivider';
import { useApp } from '../context/AppContext';

export const SpiritualPassport = () => {
  const { showToast, awardXp } = useApp();

  // 12 Jyotirlingas of India
  const [jyotirlingas, setJyotirlingas] = useState([
    {
      id: 'somnath',
      name: 'Somnath Mahadev',
      location: 'Prabhas Patan, Gujarat',
      state: 'Gujarat',
      history: 'First among the 12 Jyotirlinga shrines. Rebuilt seven times over centuries on the shore of the Arabian Sea.',
      bestTime: 'October to March',
      route: 'Train/Flight to Rajkot or Veraval Junction',
      nearby: 'Triveni Sangam, Bhalka Tirth',
      visited: true,
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'mallikarjuna',
      name: 'Mallikarjuna Swamy',
      location: 'Srisailam, Andhra Pradesh',
      state: 'Andhra Pradesh',
      history: 'Situated atop Nallamala Hills along the Krishna river. Revered in ancient Puranas as both a Jyotirlinga and Shakti Peetha.',
      bestTime: 'September to March',
      route: 'Flight to Hyderabad + 4hr Scenic Drive',
      nearby: 'Srisailam Dam, Pathala Ganga',
      visited: true,
      image: 'https://images.unsplash.com/photo-1600100397608-f090742f40fb?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'mahakaleshwar',
      name: 'Mahakaleshwar',
      location: 'Ujjain, Madhya Pradesh',
      state: 'Madhya Pradesh',
      history: 'Famed for the sacred Bhasma Aarti at dawn. The idol faces South (Dakshinamurti), unique among all 12 Jyotirlingas.',
      bestTime: 'October to March',
      route: 'Train to Ujjain Junction / Flight to Indore',
      nearby: 'Mahakal Lok Corridor, Harsiddhi Temple',
      visited: true,
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'omkareshwar',
      name: 'Omkareshwar',
      location: 'Khandwa, Madhya Pradesh',
      state: 'Madhya Pradesh',
      history: 'Located on Mandhata island in the Narmada river, shaped naturally in the sacred syllable "OM".',
      bestTime: 'October to March',
      route: 'Drive from Indore (75 km)',
      nearby: 'Mamleshwar Temple, Narmada Ghats',
      visited: true,
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'kedarnath',
      name: 'Kedarnath Dham',
      location: 'Rudraprayag, Uttarakhand',
      state: 'Uttarakhand',
      history: 'Nestled at 11,755 ft elevation against snow-covered Garhwal Himalayan peaks. Established by Adi Shankaracharya.',
      bestTime: 'May to October',
      route: 'Gaurikund Trek (16 km) or Helicopter from Phata',
      nearby: 'Bhairavnath Temple, Vasuki Tal',
      visited: false,
      image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'bhimashankar',
      name: 'Bhimashankar',
      location: 'Pune District, Maharashtra',
      state: 'Maharashtra',
      history: 'Set in lush Sahyadri forest sanctuary. Source of the Bhima River with Nagara style stone architecture.',
      bestTime: 'August to February',
      route: 'Drive from Pune (110 km) or Mumbai (210 km)',
      nearby: 'Gupt Bhimashankar, Sahyadri Reserve',
      visited: false,
      image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'kashi-vishwanath',
      name: 'Kashi Vishwanath',
      location: 'Varanasi, Uttar Pradesh',
      state: 'Uttar Pradesh',
      history: 'Located in the holy city of Kashi on the western bank of Ganges. Famed for its gold plated spires.',
      bestTime: 'October to March',
      route: 'Flight to Varanasi Airport / Direct Trains',
      nearby: 'Kashi Corridor, Dashashwamedh Ghat',
      visited: false,
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'trimbakeshwar',
      name: 'Trimbakeshwar',
      location: 'Nashik, Maharashtra',
      state: 'Maharashtra',
      history: 'Source of the holy Godavari river at Brahmagiri hill. Houses three lingams representing Brahma, Vishnu, and Shiva.',
      bestTime: 'September to February',
      route: 'Drive from Nashik (28 km)',
      nearby: 'Brahmagiri Hill, Kushavarta Kund',
      visited: false,
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'baidyanath',
      name: 'Baidyanath Dham',
      location: 'Deoghar, Jharkhand',
      state: 'Jharkhand',
      history: 'Revered as the shrine of Lord Shiva in his healing avatar. Major pilgrimage destination during Shravan month.',
      bestTime: 'October to March',
      route: 'Train to Jasidih Junction / Deoghar Airport',
      nearby: 'Nandan Pahar, Tapovan Caves',
      visited: false,
      image: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'nageshwar',
      name: 'Nageshwar',
      location: 'Dwarka, Gujarat',
      state: 'Gujarat',
      history: 'Enshrines Lord Shiva as the protector from poison and negative forces. Features a iconic giant sitting statue.',
      bestTime: 'October to March',
      route: 'Drive from Dwarka (15 km)',
      nearby: 'Dwarkadhish Temple, Bet Dwarka',
      visited: false,
      image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'ramanathaswamy',
      name: 'Ramanathaswamy',
      location: 'Rameswaram, Tamil Nadu',
      state: 'Tamil Nadu',
      history: 'Famous for the world’s longest pillared corridor and 22 holy water wells (tirthams). Associated with the Ramayana.',
      bestTime: 'October to April',
      route: 'Train across Pamban Bridge / Madurai Airport',
      nearby: 'Dhanushkodi, Pamban Bridge',
      visited: false,
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'grishneshwar',
      name: 'Grishneshwar',
      location: 'Ellora, Maharashtra',
      state: 'Maharashtra',
      history: 'Twelfth Jyotirlinga, built of red rock sandstone. Situated near UNESCO Ellora Caves.',
      bestTime: 'October to March',
      route: 'Drive from Chhatrapati Sambhajinagar / Aurangabad',
      nearby: 'UNESCO Ellora Caves, Daulatabad Fort',
      visited: false,
      image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=600&q=80'
    }
  ]);

  const completedCount = jyotirlingas.filter(j => j.visited).length;

  const toggleVisitStatus = (id) => {
    setJyotirlingas(prev => prev.map(item => {
      if (item.id === id) {
        const nextState = !item.visited;
        if (nextState) {
          showToast(`Marked ${item.name} as Visited! +300 XP awarded`, 'success');
          awardXp(300, `Visited ${item.name}`);
        } else {
          showToast(`Updated ${item.name} status`);
        }
        return { ...item, visited: nextState };
      }
      return item;
    }));
  };

  return (
    <AppShell title="Spiritual Passport // 12 Jyotirlingas">
      <PageContainer className="space-y-12">
        
        {/* Header Passport Status */}
        <section className="relative rounded-3xl bg-[#24170F] border border-[#B9854F]/30 p-8 sm:p-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1B120C] border border-[#D4A66A]/30 text-xs font-mono text-[#D4A66A]">
            <Sparkles size={14} />
            <span>SACRED PILGRIMAGE JOURNAL</span>
          </div>

          <h1 className="font-serif-heritage text-3xl sm:text-5xl font-bold text-[#F5E7CF]">
            Spiritual Passport — 12 Jyotirlingas
          </h1>

          <p className="text-sm text-[#E8CFA8]/80 max-w-xl mx-auto font-light leading-relaxed">
            Track your spiritual journey across the 12 sacred Jyotirlinga shrines of India with reverence and historical context.
          </p>

          {/* Progress Card */}
          <div className="max-w-md mx-auto p-6 rounded-2xl bg-[#1B120C] border border-[#D4A66A]/30 space-y-3">
            <div className="flex justify-between items-center text-xs font-mono text-[#D4A66A]">
              <span>PASSPORT PROGRESS</span>
              <span className="font-bold text-[#F5E7CF]">{completedCount} / 12 COMPLETED</span>
            </div>
            <div className="w-full h-3 rounded-full bg-[#342117] overflow-hidden p-0.5">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-[#B9854F] to-[#D4A66A] transition-all duration-500"
                style={{ width: `${(completedCount / 12) * 100}%` }}
              />
            </div>
          </div>
        </section>

        <HeritageDivider label="12 SACRED JYOTIRLINGA SANCTUARIES" />

        {/* Shrines Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jyotirlingas.map((shrine) => (
            <div 
              key={shrine.id} 
              className={`p-6 rounded-3xl bg-[#24170F] border transition-all space-y-4 ${
                shrine.visited 
                  ? 'border-[#D4A66A] shadow-lg shadow-[#D4A66A]/5' 
                  : 'border-[#B9854F]/20 opacity-90'
              }`}
            >
              <div className="flex justify-between items-start">
                <Badge variant={shrine.visited ? "gold" : "bronze"}>
                  <MapPin size={12} className="mr-1" />
                  {shrine.state}
                </Badge>

                <button 
                  onClick={() => toggleVisitStatus(shrine.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono transition-colors ${
                    shrine.visited 
                      ? 'bg-[#D4A66A]/20 text-[#D4A66A] border border-[#D4A66A]' 
                      : 'bg-[#1B120C] text-[#E8CFA8]/60 border border-[#B9854F]/20 hover:text-[#F5E7CF]'
                  }`}
                >
                  {shrine.visited ? <CheckCircle2 size={14} /> : <Circle size={14} />}
                  <span>{shrine.visited ? 'VISITED' : 'MARK VISITED'}</span>
                </button>
              </div>

              <div>
                <h3 className="font-serif-heritage text-xl font-bold text-[#F5E7CF]">{shrine.name}</h3>
                <p className="text-xs font-mono text-[#D4A66A] mt-0.5">{shrine.location}</p>
              </div>

              <p className="text-xs text-[#E8CFA8]/80 font-light leading-relaxed">
                {shrine.history}
              </p>

              <div className="pt-2 border-t border-[#B9854F]/20 space-y-2 text-xs text-[#E8CFA8]/70">
                <div className="flex items-center gap-2">
                  <Calendar size={12} className="text-[#D4A66A]" />
                  <span>Best Time: {shrine.bestTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Navigation size={12} className="text-[#D4A66A]" />
                  <span className="truncate">Route: {shrine.route}</span>
                </div>
              </div>
            </div>
          ))}
        </section>

      </PageContainer>
    </AppShell>
  );
};

export default SpiritualPassport;
