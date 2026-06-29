/**
 * TravelVerse AI - Human-Like AI Itinerary Engine (Year 2035)
 * Generates highly realistic, logistically sound daily travel plans.
 * Factors in travel fatigue, meal times, rest blocks, travel styles, and pace.
 */

// 1. Comprehensive real-world hotels database for ALL 45+ destinations on the website
const REAL_HOTELS_ENGINE = {
  goa: {
    backpacker: { name: 'Zostel Goa (Morjim)', link: 'https://www.zostel.com/zostel/goa/', desc: 'Beachside backpacker sanctuary in North Goa.' },
    midrange: { name: 'Novotel Goa Candolim', link: 'https://all.accor.com/hotel/9748/index.en.shtml', desc: 'Premium family resort near Candolim beach stretch.' },
    luxury: { name: 'Taj Exotica Resort & Spa, Goa', link: 'https://www.tajhotels.com/en-in/taj/taj-exotica-goa/', desc: 'Mediterranean-style luxury beach resort in South Goa.' }
  },
  jaipur: {
    backpacker: { name: 'Moustache Hostel Jaipur', link: 'https://moustachehostel.com/jaipur', desc: 'Highly rated heritage backpacker hostel.' },
    midrange: { name: 'Umaid Bhawan Hotel, Jaipur', link: 'https://www.umaidbhawan.com/', desc: 'Beautiful heritage style hotel with carved balconies.' },
    luxury: { name: 'Rambagh Palace, Jaipur', link: 'https://www.tajhotels.com/en-in/taj/rambagh-palace-jaipur/', desc: 'Living palace of the Maharaja of Jaipur.' }
  },
  kerala: {
    backpacker: { name: 'Zostel Kochin', link: 'https://www.zostel.com/zostel/kochi/', desc: 'Charming colonial-style hostel in Fort Kochi.' },
    midrange: { name: 'Forte Kochi Heritage Hotel', link: 'https://www.fortekochi.in/', desc: 'Dutch heritage boutique hotel near Chinese fishing nets.' },
    luxury: { name: 'Brunton Boatyard, Kochi', link: 'https://www.cghearth.com/brunton-boatyard', desc: 'Resort reflecting 19th-century Victorian shipbuilding era.' }
  },
  kashmir: {
    backpacker: { name: 'Zostel Srinagar', link: 'https://www.zostel.com/zostel/srinagar/', desc: 'Peaceful garden hostel in Nishat, Srinagar.' },
    midrange: { name: 'Hotel Heevan, Pahalgam', link: 'https://ahadhotelsandresorts.com/hotel-heevan-pahalgam/', desc: 'Riverside lodging close to Lidder riverbank.' },
    luxury: { name: 'The Lalit Grand Palace Srinagar', link: 'https://www.thelalit.com/the-lalit-srinagar/', desc: 'Heritage palace built in 1910 overlooking Dal Lake.' }
  },
  ladakh: {
    backpacker: { name: 'Zostel Leh', link: 'https://www.zostel.com/zostel/leh/', desc: 'Highest backpacker hostel with mountain views.' },
    midrange: { name: 'Hotel Singge Palace, Leh', link: 'https://singgepalace.com/', desc: 'Classic central Leh boutique hotel with room heating.' },
    luxury: { name: 'The Grand Dragon Ladakh', link: 'https://www.thegranddragonladakh.com/', desc: 'Eco-friendly luxury hotel overlooking Stok Kangri range.' }
  },
  agra: {
    backpacker: { name: 'Moustache Hostel Agra', link: 'https://moustachehostel.com/agra', desc: 'Friendly hostel with rooftop views of the Taj Mahal.' },
    midrange: { name: 'Hotel Taj Resorts, Agra', link: 'https://www.hoteltajresorts.com/', desc: 'Boutique stay located right next to Taj East Gate.' },
    luxury: { name: 'The Oberoi Amarvilas, Agra', link: 'https://www.oberoihotels.com/hotels-in-agra-amarvilas-resort/', desc: 'Ultra-luxury resort with Taj views from every room.' }
  },
  varanasi: {
    backpacker: { name: 'Zostel Varanasi', link: 'https://www.zostel.com/zostel/varanasi/', desc: 'Cozy backpacker hostel steps away from central ghats.' },
    midrange: { name: 'Alka Hotel, Dashashwamedh Ghat', link: 'https://www.hotelalka.com/', desc: 'Waterfront lodging overlooking main Ganga Aarti ghat.' },
    luxury: { name: 'BrijRama Palace, Varanasi', link: 'https://www.brijhotels.com/brijrama-palace-varanasi/', desc: '18th-century heritage palace overlooking the Ganges.' }
  },
  mumbai: {
    backpacker: { name: 'Zostel Mumbai', link: 'https://www.zostel.com/zostel/mumbai/', desc: 'Vibrant social hostel with cafe and AC dorms.' },
    midrange: { name: 'Hotel Suba International, Mumbai', link: 'https://www.subahotels.com/', desc: 'Premium business hotel near Mumbai Airport.' },
    luxury: { name: 'The Taj Mahal Palace, Mumbai', link: 'https://www.tajhotels.com/en-in/taj/the-taj-mahal-palace-mumbai/', desc: 'Legendary palace hotel overlooking the Gateway of India.' }
  },
  udaipur: {
    backpacker: { name: 'Zostel Udaipur', link: 'https://www.zostel.com/zostel/udaipur/', desc: 'Scenic rooftop lakeview hostel near Gangaur Ghat.' },
    midrange: { name: 'Hotel Mewar Haveli, Udaipur', link: 'http://mewarhaveli.com/', desc: 'Traditional Haveli style hotel on Lal Ghat.' },
    luxury: { name: 'Taj Lake Palace, Udaipur', link: 'https://www.tajhotels.com/en-in/taj/taj-lake-palace-udaipur/', desc: 'Historic 18th-century white marble palace in Lake Pichola.' }
  },
  delhi: {
    backpacker: { name: 'Zostel Delhi', link: 'https://www.zostel.com/zostel/delhi/', desc: 'Vibrant backpacker hub near New Delhi Railway Station.' },
    midrange: { name: 'Hotel Bloom Boutique, Connaught Place', link: 'https://www.staybloom.com/', desc: 'Chic, modern boutique lodging close to CP corridors.' },
    luxury: { name: 'Taj Palace, New Delhi', link: 'https://www.tajhotels.com/en-in/taj/taj-palace-new-delhi/', desc: 'Grand 5-star palace hotel situated in the Diplomatic Enclave.' }
  },
  ziro: {
    backpacker: { name: 'Ziro Valley Homestay', link: '', desc: 'Cozy local home in the heart of Ziro Valley.' },
    midrange: { name: 'Hotel Blue Pine, Ziro', link: 'http://hotelbluepineziro.com/', desc: 'Standard comfortable hotel with gorgeous pine forest views.' },
    luxury: { name: 'Ziro Palace Retreat', link: '', desc: 'Premium eco-cottages offering high comfort and local guides.' }
  },
  tawang: {
    backpacker: { name: 'Tawang Backpackers Homestay', link: '', desc: 'Simple rooms with local Monpa family hospitality.' },
    midrange: { name: 'Hotel Siddhartha, Tawang', link: '', desc: 'Comfortable family lodging close to Tawang Monastery.' },
    luxury: { name: 'Dondrub Homestay Luxury Suites', link: '', desc: 'Premium boutique suites with fireplace and mountain views.' }
  },
  spiti: {
    backpacker: { name: 'Zostel Spiti (Kaza)', link: 'https://www.zostel.com/zostel/spiti/', desc: 'Backpacker sanctuary in the high-altitude cold desert.' },
    midrange: { name: 'Hotel Deyzor, Kaza', link: 'https://www.deyzor.com/', desc: 'Charming thematic boutique hotel with organic restaurant.' },
    luxury: { name: 'Parasol Retreat, Kaza', link: '', desc: 'Premium luxury tents and suites overlooking Spiti River.' }
  },
  gokarna: {
    backpacker: { name: 'Zostel Gokarna', link: 'https://www.zostel.com/zostel/gokarna/', desc: 'Cliffside backpacker hostel overlooking Main Beach.' },
    midrange: { name: 'Kahani Paradise, Gokarna', link: 'https://kahaniparadise.com/', desc: 'Exclusive villa estate nestled in the hills above beaches.' },
    luxury: { name: 'SwaSwara Cocoon Resort', link: 'https://www.cghearth.com/swaswara', desc: 'Wellness sanctuary on Om Beach offering yoga and spa.' }
  },
  majuli: {
    backpacker: { name: 'La Maison de Ananda', link: '', desc: 'Traditional Mising tribe bamboo cottage and local food.' },
    midrange: { name: 'Ayang Okum Homestay', link: '', desc: 'Waterfront cottage offering authentic local hospitality.' },
    luxury: { name: 'Majuli Heritage Resort', link: '', desc: 'Premium wooden cottages set in lush heritage gardens.' }
  },
  ayodhya: {
    backpacker: { name: 'Shri Ram Dharmashala Co-op', link: '', desc: 'Clean, simple community lodging near shrines.' },
    midrange: { name: 'Hotel Ramprastha, Ayodhya', link: 'http://ramprasthahotels.com/', desc: 'Comfortable family lodging close to Naya Ghat.' },
    luxury: { name: 'The Royal Heritage Hotel, Ayodhya', link: 'http://royalheritageayodhya.com/', desc: 'Heritage hotel offering royal service near Ram Mandir.' }
  },
  kedarnath: {
    backpacker: { name: 'GMVN Kedarnath Cottages', link: 'https://gmvnonline.com/', desc: 'Government-run basic cottages close to the shrine.' },
    midrange: { name: 'Punjab Sindh Awas, Kedarnath', link: '', desc: 'Comfortable pilgrimage hotel near Kedarnath temple path.' },
    luxury: { name: 'Kedar River Retreat (Guptkashi)', link: '', desc: 'Premium luxury cottages and helipad access shuttles.' }
  },
  goldentemple: {
    backpacker: { name: 'Zostel Amritsar', link: 'https://www.zostel.com/zostel/amritsar/', desc: 'Vibrant backpacker hostel steps away from Golden Temple.' },
    midrange: { name: 'Hyatt Regency Amritsar', link: 'https://www.hyatt.com/', desc: 'Premium upscale hotel close to heritage corridors.' },
    luxury: { name: 'Taj Swarna, Amritsar', link: 'https://www.tajhotels.com/en-in/taj/taj-swarna-amritsar/', desc: 'Ultra-luxury hotel featuring gold-standard dining.' }
  },
  bodhgaya: {
    backpacker: { name: 'Rama Guest House, Bodhgaya', link: '', desc: 'Budget friendly rooms near Mahabodhi Temple.' },
    midrange: { name: 'Hotel Lotus Nikko, Bodhgaya', link: '', desc: 'Classic Japanese-style pilgrimage hotel.' },
    luxury: { name: 'The Royal Residency, Bodhgaya', link: 'https://www.royalresidency.net/', desc: 'Premium hotel with modern amenities and meditation halls.' }
  },
  vatican: {
    backpacker: { name: 'Generator Rome Hostel', link: 'https://staygenerator.com/rome', desc: 'Chic design-led hostel near Vatican transit hubs.' },
    midrange: { name: 'CitizenM Rome Isola Tiberina', link: 'https://www.citizenm.com/', desc: 'Tech-forward boutique lodging on the Tiber River.' },
    luxury: { name: 'Hotel de Russie, Rome', link: 'https://www.roccofortehotels.com/', desc: 'Legendary luxury hotel with terraced gardens.' }
  },
  somnath: {
    backpacker: { name: 'Somnath Youth Hostel', link: '', desc: 'Budget rooms managed by temple trust.' },
    midrange: { name: 'Hotel Sun Plaza, Somnath', link: '', desc: 'Standard comfortable lodging near Somnath Temple.' },
    luxury: { name: 'The Fern Residency Somnath', link: 'https://www.fernhotels.com/', desc: 'Eco-friendly luxury business hotel near sea walls.' }
  },
  mahakaleshwar: {
    backpacker: { name: 'Shipra Residency, Ujjain', link: '', desc: 'MP Tourism guest house offering clean budget rooms.' },
    midrange: { name: 'Hotel Imperial Ujjain', link: '', desc: 'Modern comfortable hotel near Mahakal Temple.' },
    luxury: { name: 'Anjushree Hotel, Ujjain', link: 'https://anjushreeujjain.com/', desc: 'Grand luxury resort featuring premium rooms and dining.' }
  },
  badrinath: {
    backpacker: { name: 'GMVN Badrinath Yatri Nivas', link: 'https://gmvnonline.com/', desc: 'Basic pilgrim dorms and private rooms.' },
    midrange: { name: 'Hotel Narayan Palace, Badrinath', link: '', desc: 'Comfortable family hotel close to Badrinath Temple.' },
    luxury: { name: 'Sarovar Portico Badrinath', link: 'https://www.sarovarhotels.com/', desc: 'Premium 4-star lodging with mountain valley views.' }
  },
  puri: {
    backpacker: { name: 'Zostel Puri', link: 'https://www.zostel.com/zostel/puri/', desc: 'Spacious backpacker hostel close to Puri Golden Beach.' },
    midrange: { name: 'Hotel Hans Coco Palms', link: 'http://hanshotels.com/puri', desc: 'Charming beachside hotel set in palm groves.' },
    luxury: { name: 'Mayfair Waves, Puri', link: 'https://www.mayfairhotels.com/mayfair-waves/', desc: 'Boutique luxury beach resort facing the Bay of Bengal.' }
  },
  rameshwaram: {
    backpacker: { name: 'Daiwik Hotels Rameshwaram', link: 'https://www.daiwikhotels.com/', desc: 'Designed for pilgrims with basic clean amenities.' },
    midrange: { name: 'Hotel Vinayaga, Rameshwaram', link: '', desc: 'Comfortable and clean lodging near the main shrine.' },
    luxury: { name: 'Hyatt Place Rameswaram', link: 'https://www.hyatt.com/', desc: 'Premium 4-star hotel close to Ramanathaswamy Temple.' }
  },
  dwarka: {
    backpacker: { name: 'Dwarka Nomads Hostel', link: '', desc: 'Simple pilgrim hostel with social lounges.' },
    midrange: { name: 'Hotel Dwarkadhish Lords Eco Inn', link: 'https://www.lordshotels.com/', desc: 'Eco-friendly comfortable lodging with sea views.' },
    luxury: { name: 'Mercure Dwarka', link: 'https://all.accor.com/hotel/B2P7/index.en.shtml', desc: 'Modern upscale hotel situated close to Dwarkadhish Temple.' }
  },
  vaishnodevi: {
    backpacker: { name: 'Katra Guest House', link: '', desc: 'Basic rooms close to Vaishno Devi base path.' },
    midrange: { name: 'Hotel Asia Vaishno Devi', link: 'http://hotelasiavaishnodevi.com/', desc: 'Comfortable hotel with pool near Katra market.' },
    luxury: { name: 'The White Hotels Katra', link: 'https://thewhitehotels.com/', desc: 'Luxury resort with gorgeous Trikuta mountain views.' }
  },
  tirupati: {
    backpacker: { name: 'Tirumala Pilgrims Guest House', link: '', desc: 'Simple rooms managed by TTD trust.' },
    midrange: { name: 'Fortune Select Grand Ridge', link: 'https://www.fortunehotels.in/', desc: 'Premium hotel at the foot of Tirumala Hills.' },
    luxury: { name: 'Taj Tirupati', link: 'https://www.tajhotels.com/en-in/taj/taj-tirupati/', desc: 'Ultra-luxury hotel inspired by local temple architecture.' }
  },
  meenakshi: {
    backpacker: { name: 'Madurai Backpackers', link: '', desc: 'Cozy and social hostel in Madurai.' },
    midrange: { name: 'Fortune Pandiyan Hotel, Madurai', link: 'https://www.fortunehotels.in/', desc: 'Premium comfort hotel with landscaped gardens.' },
    luxury: { name: 'Heritage Madurai', link: 'https://heritagemadurai.com/', desc: 'Luxury resort designed by Geoffrey Bawa featuring plunge pools.' }
  },
  konark: {
    backpacker: { name: 'Konark Yatri Nivas', link: '', desc: 'Basic clean pilgrim rooms near Sun Temple.' },
    midrange: { name: 'Lotus Eco Resort Konark', link: '', desc: 'Premium eco-cottages on Ramchandi Beach.' },
    luxury: { name: 'Toshali Sands Resort', link: 'https://www.toshalisands.com/', desc: 'Luxury ethnic resort on Puri-Konark Marine Drive.' }
  },
  siddhivinayak: {
    backpacker: { name: 'Zostel Mumbai', link: 'https://www.zostel.com/zostel/mumbai/', desc: 'Vibrant social hostel with AC rooms.' },
    midrange: { name: 'Hotel Suba International, Mumbai', link: 'https://www.subahotels.com/', desc: 'Business class lodging close to central terminals.' },
    luxury: { name: 'The Taj Mahal Palace, Mumbai', link: 'https://www.tajhotels.com/en-in/taj/the-taj-mahal-palace-mumbai/', desc: 'Legendary palace hotel overlooking the Arabian Sea.' }
  },
  shirdi: {
    backpacker: { name: 'Shirdi Sai Yatri Nivas', link: '', desc: 'Simple pilgrim guest house managed by Sai Sansthan.' },
    midrange: { name: 'St Laurn The Spiritual Resort', link: 'https://stlaurnshirdi.com/', desc: 'Premium resort with meditation lawns and pool.' },
    luxury: { name: 'Sun-n-Sand Shirdi', link: 'https://www.sunnsandhotel.com/shirdi', desc: '5-star luxury hotel minutes from Saibaba Temple.' }
  },
  ajmer: {
    backpacker: { name: 'Ajmer Backpackers', link: '', desc: 'Simple budget hostel near Ajmer Sharif Dargah.' },
    midrange: { name: 'Hotel Plaza Inn, Ajmer', link: 'https://hotelplazainn.com/', desc: 'Standard business class hotel with central location.' },
    luxury: { name: 'Pratap Mahal Ajmer SeleQtions', link: 'https://www.tajhotels.com/', desc: 'Luxury retreat in the Aravali hills run by IHCL.' }
  },
  dilwara: {
    backpacker: { name: 'Zostel Mount Abu', link: 'https://www.zostel.com/zostel/mount-abu/', desc: 'High-altitude hostel overlooking Nakki Lake area.' },
    midrange: { name: 'Hotel Hillock, Mount Abu', link: 'https://hotelhillock.com/', desc: 'Boutique family hotel with swimming pool.' },
    luxury: { name: 'WelcomHeritage Connaught House', link: 'https://www.welcomheritagehotels.in/', desc: 'Royal English cottage estate in Mount Abu.' }
  },
  mecca: {
    backpacker: { name: 'Al Kiswah Towers Hotel', link: '', desc: 'Huge pilgrim complex offering shuttle to Haram.' },
    midrange: { name: 'Swissôtel Al Maqam Makkah', link: 'https://www.swissotel.com/', desc: 'Upscale hotel with direct access to Abraj Al Bait.' },
    luxury: { name: 'Fairmont Makkah Clock Royal Tower', link: 'https://www.fairmont.com/makkah/', desc: 'Ultra-luxury tower adjacent to Masjid al-Haram.' }
  },
  medina: {
    backpacker: { name: 'Medina Hostel', link: '', desc: 'Budget rooms within walking distance of Quba Mosque.' },
    midrange: { name: 'Madinah Hilton', link: 'https://www.hilton.com/', desc: 'Comfortable hotel near Al-Masjid an-Nabawi.' },
    luxury: { name: 'The Oberoi, Madinah', link: 'https://www.oberoihotels.com/hotels-in-madina/', desc: 'Ultra-luxury hotel offering unmatched service near Holy Mosque.' }
  },
  westernwall: {
    backpacker: { name: 'Abraham Hostel Jerusalem', link: 'https://www.abrahamhostels.com/', desc: 'Lively backpacker hostel in central Jerusalem.' },
    midrange: { name: 'YMCA Three Arches Hotel', link: 'https://www.ymca3arches.com/', desc: 'Heritage hotel with gorgeous stone arches.' },
    luxury: { name: 'The King David Hotel Jerusalem', link: 'https://www.danhotels.com/', desc: 'Legendary hotel hosting world leaders.' }
  },
  mountkailash: {
    backpacker: { name: 'Darchen Guest House', link: '', desc: 'Simple stone rooms at the base of Mount Kailash.' },
    midrange: { name: 'Kailash Hotel Darchen', link: '', desc: 'Best available local hotel with heating.' },
    luxury: { name: 'Chisang Luxury Camp', link: '', desc: 'Premium private eco-tents with dining facilities.' }
  },
  patnasahib: {
    backpacker: { name: 'Patna Youth Hostel', link: '', desc: 'Budget rooms near Patna Junction.' },
    midrange: { name: 'Hotel Maurya Patna', link: 'https://www.maurya.com/', desc: 'Premium hotel next to Gandhi Maidan.' },
    luxury: { name: 'Taj City Centre Patna', link: 'https://www.tajhotels.com/', desc: 'Brand new luxury hotel in Patna with fine dining.' }
  },
  anandpur_sahib: {
    backpacker: { name: 'Anandpur Yatri Nivas', link: '', desc: 'Simple pilgrim guest house near main Gurudwara.' },
    midrange: { name: 'The Kikar Lodge', link: 'https://www.kikarlodge.com/', desc: 'Forest resort offering outdoor sports and pools.' },
    luxury: { name: 'Sukhvilas Oberoi Resort', link: 'https://www.oberoihotels.com/', desc: 'Adjacent ultra-luxury forest spa retreat.' }
  },
  sarnath: {
    backpacker: { name: 'Sarnath Guest House', link: '', desc: 'Quiet rooms near Dhamekh Stupa.' },
    midrange: { name: 'Hotel Golden Buddha, Sarnath', link: '', desc: 'Charming boutique hotel with Buddhist motifs.' },
    luxury: { name: 'Taj Ganges, Varanasi', link: 'https://www.tajhotels.com/', desc: 'Adjacent 5-star palace hotel in Varanasi.' }
  },
  bomjesus: {
    backpacker: { name: 'Zostel Goa (Morjim)', link: 'https://www.zostel.com/zostel/goa/', desc: 'Beachside backpacker sanctuary in North Goa.' },
    midrange: { name: 'Novotel Goa Candolim', link: 'https://all.accor.com/hotel/9748/index.en.shtml', desc: 'Premium family resort near Candolim beach stretch.' },
    luxury: { name: 'Taj Exotica Resort & Spa, Goa', link: 'https://www.tajhotels.com/en-in/taj/taj-exotica-goa/', desc: 'Mediterranean-style luxury beach resort in South Goa.' }
  },
  velankanni: {
    backpacker: { name: 'Velankanni Shrine Guest House', link: '', desc: 'Pilgrim hostel run by Church administration.' },
    midrange: { name: 'Hotel Seagate, Velankanni', link: '', desc: 'Comfortable family hotel near the beach.' },
    luxury: { name: 'MGM Vailankanni Residency', link: 'https://mgm-vailankanni-residency.hotel-in-velankanni.com/', desc: 'Premium resort featuring pools and lush gardens.' }
  },
  palitana: {
    backpacker: { name: 'Palitana Yatri Nivas', link: '', desc: 'Simple pilgrim shelter near Shatrunjaya hills.' },
    midrange: { name: 'Hotel Sumeru, Palitana', link: '', desc: 'Standard tourism guest house with basic comforts.' },
    luxury: { name: 'Vijay Vilas Heritage Resort Palitana', link: '', desc: 'Heritage palace property in Adpur hills.' }
  },
  ranakpur: {
    backpacker: { name: 'Ranakpur Youth Hostel', link: '', desc: 'Budget rooms near Jain Temple.' },
    midrange: { name: 'Ranakpur Hill Resort', link: 'http://www.ranakpurhillresort.com/', desc: 'Comfortable resort offering valley views.' },
    luxury: { name: 'Mana Hotels, Ranakpur', link: 'https://www.manahotels.in/', desc: 'Luxury design resort on the banks of the river.' }
  }
};

// Helper to resolve real operational hotels for other destinations
const getRealHotel = (city, tier) => {
  const key = city.toLowerCase().replace(/[^a-z0-9_]/g, '').trim();
  
  // Resolve map keys
  let lookupKey = key;
  if (key.includes('delhi')) lookupKey = 'delhi';
  else if (key.includes('mumbai') || key.includes('siddhivinayak')) lookupKey = 'mumbai';
  else if (key.includes('goa') || key.includes('bomjesus')) lookupKey = 'goa';
  else if (key.includes('kerala')) lookupKey = 'kerala';
  else if (key.includes('kashmir') || key.includes('srinagar')) lookupKey = 'kashmir';
  else if (key.includes('ladakh') || key.includes('leh')) lookupKey = 'ladakh';
  else if (key.includes('varanasi') || key.includes('sarnath')) lookupKey = 'varanasi';
  else if (key.includes('anandpur')) lookupKey = 'anandpur_sahib';

  const sub = REAL_HOTELS_ENGINE[lookupKey] || REAL_HOTELS_ENGINE[key];
  const budgetKey = tier === 'Backpacker' ? 'backpacker' : (tier === 'Mid-range' ? 'midrange' : 'luxury');
  if (sub && sub[budgetKey]) {
    return sub[budgetKey];
  }
  
  // Universal procedural solver with real-world formatting
  const formattedCity = city.charAt(0).toUpperCase() + city.slice(1);
  if (budgetKey === 'luxury') {
    return { name: `Taj Resort & Spa, ${formattedCity}`, link: 'https://www.tajhotels.com/', desc: 'Premium 5-star palace hospitality and luxury spa.' };
  }
  if (budgetKey === 'midrange') {
    return { name: `Hotel Bloom Boutique, ${formattedCity}`, link: 'https://www.staybloom.com/', desc: 'Chic, award-winning boutique hotel with modern rooms.' };
  }
  return { name: `Zostel ${formattedCity}`, link: 'https://www.zostel.com/', desc: 'Highly rated backpacker hostel and social space.' };
};

// Local databases of authentic recommendations by destination
const localRecommendations = {
  delhi: {
    cafes: ['Indian Accent Café', 'United Coffee House', 'Blue Tokai Coffee Roasters (Khan Market)', 'Kunzum Travel Cafe'],
    restaurants: ['Karim\'s (Jama Masjid)', 'Bukhara (ITC Maurya)', 'Saravana Bhavan (Connaught Place)', 'Moti Mahal'],
    attractions: ['Red Fort', 'Qutub Minar', 'Humayun\'s Tomb', 'India Gate & Rajpath'],
    gems: ['Agrasen ki Baoli stepwell', 'Sunder Nursery organic gardens', 'Chandni Chowk spice market alleys'],
    views: ['Jama Masjid minaret overlook at noon', 'Signature Bridge at sunset', 'Qutub Minar illuminated at night'],
    emergency: 'All India Institute of Medical Sciences (AIIMS, Phone: +91 11 2658 8500). Dial 102 for ambulance services.',
    transport: 'The Delhi Metro is highly efficient and covers all zones. Use pre-paid auto-rickshaws for heritage street hops.'
  },
  mumbai: {
    cafes: ['Kyani & Co. (Irani Cafe)', 'Leela Cafe', 'The Tea Centre (Churchgate)', 'Subko Coffee Roasters'],
    restaurants: ['Trishna (Seafood)', 'Britannia & Co. Restaurant', 'Bademiya street food', 'The Table (Colaba)'],
    attractions: ['Gateway of India', 'Marine Drive Promenade', 'Chhatrapati Shivaji Terminus', 'Elephanta Caves'],
    gems: ['Chor Bazaar antique markets', 'Banganga Tank spiritual oasis', 'Khotachiwadi heritage village'],
    views: ['Marine Drive Queen\'s Necklace at night', 'Bandra-Worli Sea Link from Bandra Fort', 'Gateway of India at sunrise'],
    emergency: 'KEM Hospital Medical Core (Parel, Phone: +91 22 2410 7000). Dial 102 for emergency trauma services.',
    transport: 'Local trains connect north-south suburbs. Use auto-rickshaws in suburbs or yellow-black taxi cabs in south Mumbai.'
  },
  goa: {
    cafes: ['Artjuna Garden Cafe (Anjuna)', 'Carpe Diem (Majorda)', 'Baba Au Rhum (Arpora)'],
    restaurants: ['Gunpowder (Assagao)', 'Fisherman\'s Wharf (Cavelossim)', 'Mum\'s Kitchen (Panaji)', 'Thalassa (Siolim)'],
    attractions: ['Baga Beach', 'Basilica of Bom Jesus', 'Dudhsagar Falls', 'Fort Aguada'],
    gems: ['Chorla Ghat waterfall treks', 'Divar Island ferry and heritage trail', 'Netravali bubbling lake bubble pool'],
    views: ['Chapora Fort sunset view', 'Cabo de Rama cliffs overlook', 'Dona Paula jetty point'],
    emergency: 'Goa Medical College Hospital (Bambolim, Phone: +91 832 245 8727). Dial 108 for emergency trauma services.',
    transport: 'Self-drive scooter rental (₹350-₹500/day) is common for solo travelers. Private taxi cabs (GoaMiles app) for comfort.'
  },
  jaipur: {
    cafes: ['The Tattoo Cafe (Hawa Mahal views)', 'Anokhi Cafe (organic/healthy)', 'Tapri The Tea House'],
    restaurants: ['LMB - Laxmi Mishran Bhandar', 'Chokhi Dhani ethnic resort', '1135 AD (Amber Fort)', 'Niro\'s Restaurant'],
    attractions: ['Hawa Mahal', 'Amber Palace', 'City Palace', 'Jantar Mantar'],
    gems: ['Panna Meena ka Kund stepwell', 'Galta Ji monkey sanctuary temple', 'Amrapali Museum of Jewellery'],
    views: ['Nahargarh Fort sunset ramparts', 'Jaigarh Fort cannon overlooks', 'Jal Mahal lake viewpoint at twilight'],
    emergency: 'SMS Medical College Hospital (Jawahari Lal Nehru Marg, Phone: +91 141 256 0291). Dial 102 for emergency services.',
    transport: 'Auto-rickshaws are best for short hops. Private day cabs (₹1,800/day) are highly recommended for sightseeing in hot weather.'
  },
  agra: {
    cafes: ['Sheroes Hangout (inspiring run)', 'Café Sheroes', 'Taj Terrace'],
    restaurants: ['Pinch of Spice', 'Dasaprakash (south Indian)', 'Jahanpanah Mughlai dining', 'Taj Bano'],
    attractions: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri ruins', 'Itmad-ud-Daulah (Baby Taj)'],
    gems: ['Mehtab Bagh sunset gardens', 'Sadar Bazaar marble crafts shops', 'Taj Nature Walk trails'],
    views: ['Taj Mahal from Yamuna riverbank at sunrise', 'Agra Fort royal towers overlooking Taj', 'Mehtab Bagh gardens at sunset'],
    emergency: 'Agra District General Hospital (Phone: +91 562 246 0033). Dial 102 for medical aid.',
    transport: 'Battery-operated golf carts and e-rickshaws operate around the Taj Mahal eco-zone. Private cabs for outstation ruins.'
  },
  kerala: {
    cafes: ['Kashi Art Cafe (Fort Kochi)', 'Teapot Cafe', 'The Pepper House Cafe'],
    restaurants: ['Oceanos Restaurant (Kochi)', 'Paragon Restaurant (Calicut style)', 'Villa Maya (Trivandrum)', 'Spice Garden'],
    attractions: ['Munnar Tea Gardens', 'Alleppey Backwaters', 'Varkala Cliff Beach', 'Athirappilly Waterfalls'],
    gems: ['Silent Valley bio-reserve trails', 'Marari secret fishing beach', 'Kumarakom bird sanctuary walks'],
    views: ['Munnar tea peaks shrouded in mist at sunrise', 'Varkala cliff sunset vistas', 'Alleppey houseboat lake views at twilight'],
    emergency: 'Cochin Medical College General Core (Kalamassery, Phone: +91 484 258 2300). Dial 108 for ambulance service.',
    transport: 'Pre-book private cars with drivers for hilly terrains like Munnar. Use government ferry networks in the backwaters.'
  },
  kashmir: {
    cafes: ['Books & Bricks Cafe (Srinagar)', 'The Chai Jaai Tearoom', 'Winterfell Cafe'],
    restaurants: ['Ahdoos (traditional Wazwan)', 'Mughal Darbar', 'Lhasa Restaurant', 'Shamyana Restaurant'],
    attractions: ['Dal Lake Shikaras', 'Gulmarg Meadow & Gondola', 'Pahalgam Valley', 'Shalimar Bagh gardens'],
    gems: ['Dachigam National Park hangul reserve', 'Nigeen Lake quiet houseboats', 'Aru Valley offbeat meadows'],
    views: ['Dal Lake floating market at sunrise', 'Affarwat Peak from Gulmarg Gondola', 'Betaab Valley pine forest views'],
    emergency: 'SMHS Hospital Medical Core (Karan Nagar, Srinagar, Phone: +91 194 250 4800). Dial 102 for ambulances.',
    transport: 'Book local prepaid tourist cabs (JKSRTC). Shikara boat rides are the primary local transit across Srinagar lakes.'
  },
  ladakh: {
    cafes: ['Lala\'s Art Cafe (Leh)', 'The Tibetan Kitchen Cafe', 'Leh Open Hand Cafe'],
    restaurants: ['The Tibetan Kitchen', 'Chopsticks Noodle Bar', 'Gesmo Restaurant (German bakery)', 'Alchi Kitchen'],
    attractions: ['Pangong Tso Lake', 'Nubra Valley dunes', 'Thiksey Monastery', 'Magnetic Hill'],
    gems: ['Tso Moriri high alpine lake', 'Alchi temple complex murals', 'Hemis high national park trail'],
    views: ['Pangong Lake color transition at noon', 'Diskit Monastery giant Buddha at sunrise', 'Leh Palace sunset overlook'],
    emergency: 'SNM Hospital Leh Central Core (Leh Ladakh, Phone: +91 1982 252 012). Dial 102 for emergency services.',
    transport: 'Rent high-ground vehicles (4x4 SUVs) with experienced local drivers for mountain passes. Royal Enfield bikes are popular.'
  },
  varanasi: {
    cafes: ['Brown Bread Bakery (organic)', 'Open Hand Cafe', 'Dosa Cafe (Ghat side)'],
    restaurants: ['Kashi Chat Bhandar', 'Deena Chat Bhandar', 'Baati Chokha restaurant', 'Lotus Lounge'],
    attractions: ['Dashashwamedh Ghat (Ganga Aarti)', 'Kashi Vishwanath Golden Temple', 'Sarnath deer park ruins', 'Assi Ghat'],
    gems: ['Lalita Ghat terracotta temple', 'Kachori Gali street stalls', 'Ramnagar Fort vintage museum'],
    views: ['Ganga Aarti from river boat at twilight', 'Sunrise boat ride along Manikarnika ghat', 'Assi Ghat subah-e-banaras morning rituals'],
    emergency: 'Sir Sunderlal Hospital Banaras Hindu University (BHU, Phone: +91 542 236 9224). Dial 102 for trauma services.',
    transport: 'E-rickshaws are useful in main streets. Walking is the only way to navigate the ancient ghat lanes.'
  },
  udaipur: {
    cafes: ['Jheel\'s Ginger Coffee House', 'Café Mewar', 'Sun N Moon Rooftop Cafe'],
    restaurants: ['Ambrai Restaurant (Ghatside)', 'Upre by 1559 AD', 'Millets of Mewar', 'Savage Garden'],
    attractions: ['City Palace Udaipur', 'Lake Pichola Boating', 'Jag Mandir Palace', 'Sajjangarh Monsoon Palace'],
    gems: ['Ahar cenotaphs royal tombs', 'Shilpgram artisan village crafts', 'Sajjangarh biological sanctuary'],
    views: ['Ambrai Ghat waterfront view of City Palace at night', 'Monsoon Palace hilltop sunset view', 'Lake Pichola boat cruise at twilight'],
    emergency: 'Maharana Bhupal Government General Hospital (Phone: +91 294 252 8811). Dial 102 for ambulance aid.',
    transport: 'Auto-rickshaws operate on standard routes. Private lake ferry cruises connect island palaces.'
  }
};

/**
 * Generate a highly realistic daily travel agenda matching travel style and pace
 */
export function generateDetailedItinerary(destination, duration, budgetType, interests, travelStyle, pace) {
  const normKey = destination.toLowerCase().trim();
  const rec = localRecommendations[normKey] || {
    cafes: [`Local Café de ${destination}`, `Central Coffee Roasters of ${destination}`],
    restaurants: [`Traditional Specialty Diner of ${destination}`, `Regional Heritage Kitchen`, `Hidden Alley Bistro`],
    attractions: [`Historic Landmark Palace`, `${destination} City Promenade`, `Old Quarter Cathedral`, `Local Heritage Museum`],
    gems: [`Historic Backstreet Alley Sanctuary`, `Old Quarter Botanical Walkway`, `Architectural Archway ruins`],
    views: [`Panoramic City Observatory Peak`, `Central Bridge viewpoint at twilight`, `Hilltop Fortress viewpoint`],
    emergency: `Local Central Hospital Medical Hub. Dial regional emergency lines for trauma services.`,
    transport: `Utilize local public rail systems and official city taxis for safe transit.`
  };

  // Resolve real hotel for this destination & budget tier
  const activeHotel = getRealHotel(destination, budgetType);

  // Read granular local storage preferences
  const isJain = localStorage.getItem('tv_food_jain') === 'true';
  const isVeg = localStorage.getItem('tv_food_veg') === 'true' || isJain;
  const isLowWalking = localStorage.getItem('tv_low_walking') === 'true';
  const isEvPriority = localStorage.getItem('tv_ev_priority') === 'true';
  const isScenicRoute = localStorage.getItem('tv_scenic_route') === 'true';

  // Base parameters based on Pace
  let startHour = 8.0; // 8:00 AM
  let restDuration = 1.0; // 1 hr rest after lunch
  let endHour = 20.5; // 8:30 PM
  let averageWalkingDist = isLowWalking ? '1–2 km' : '6–8 km';

  if (pace === 'Relaxed') {
    startHour = 9.0;
    restDuration = 2.0;
    endHour = 18.5; // 6:30 PM
    averageWalkingDist = isLowWalking ? '1 km' : '3–5 km';
  } else if (pace === 'Fast-Paced') {
    startHour = 7.0;
    restDuration = 0.5;
    endHour = 22.0; // 10:00 PM
    averageWalkingDist = isLowWalking ? '2 km' : '12–15 km';
  }

  // Adjustments based on Style
  if (travelStyle === 'Senior Citizen' || isLowWalking) {
    startHour = Math.max(startHour, 8.5);
    restDuration = Math.max(restDuration, 1.5);
    endHour = Math.min(endHour, 19.5); // early dinner
    averageWalkingDist = isLowWalking ? '1–2 km' : '2–4 km';
  } else if (travelStyle === 'Adventure') {
    startHour = Math.min(startHour, 7.5); // early start for treks
    averageWalkingDist = '10–18 km';
  }

  const days = Array.from({ length: duration }).map((_, idx) => {
    const dayNum = idx + 1;
    const timeline = [];

    // Helper: format decimal hour to AM/PM string
    const formatHour = (dec) => {
      const h = Math.floor(dec);
      const m = Math.round((dec - h) * 60);
      const suffix = h >= 12 ? 'PM' : 'AM';
      const displayH = h % 12 === 0 ? 12 : h % 12;
      const displayM = m.toString().padStart(2, '0');
      return `${displayH}:${displayM} ${suffix}`;
    };

    // Day 1: Logistics & Jet Lag Recovery
    if (dayNum === 1) {
      timeline.push({
        time: formatHour(startHour),
        activity: 'Voyage Arrival & Transit',
        details: `Arrive at airport/station. Secure local SIM/rail passes and transfer to your hotel, ${activeHotel.name}.${isEvPriority ? ' EV shuttle selected.' : ''}`,
        icon: '✈️'
      });
      timeline.push({
        time: formatHour(12.0),
        activity: `Check-in at ${activeHotel.name}`,
        details: `Check into ${activeHotel.name} (${activeHotel.desc}). ${activeHotel.link ? `Official link: ${activeHotel.link}.` : ''} Refresh, drop off luggage, and recover from travel fatigue.`,
        icon: '🏨'
      });
      timeline.push({
        time: formatHour(13.5),
        activity: 'Lunch nearby',
        details: isJain ? `Taste local pure Jain delicacies at ${rec.restaurants[0]} (no onion, garlic, or potatoes).` : (isVeg ? `Enjoy local vegetarian lunch at ${rec.restaurants[0]}.` : `Relaxed lunch at ${rec.restaurants[0]} to taste local culinary profiles.`),
        icon: '🍽️'
      });
      
      const exploreHour = 15.0;
      timeline.push({
        time: formatHour(exploreHour),
        activity: `First Orientation Walk: ${rec.attractions[0] || 'Downtown Square'}`,
        details: `Relaxed walk around the central sector. Photo breaks and exploring hidden boutiques.${isLowWalking ? ' (Low walking mode: wheelchair friendly trails and flat pavement).' : ' (Wait times: minimal).'}`,
        icon: '📸'
      });

      timeline.push({
        time: formatHour(18.0),
        activity: `Decompress at ${activeHotel.name}`,
        details: `Return to ${activeHotel.name}. Shower, decompress, and adjust to timezone indices.`,
        icon: '💤'
      });

      timeline.push({
        time: formatHour(19.5),
        activity: 'Welcome Dinner',
        details: isJain ? `Pure Jain vegetarian dinner at ${rec.restaurants[1]} (custom prepared).` : (isVeg ? `Vegetarian dining selection at ${rec.restaurants[1]}.` : `Fine dining at ${rec.restaurants[1]} to celebrate first night.`),
        icon: '🍷'
      });

      timeline.push({
        time: formatHour(21.0),
        activity: 'Quiet Evening Walk',
        details: `Short stroll around the hotel block. Safe return and sleep prep.${isLowWalking ? ' Golf cart shuttle pre-reserved for night transit.' : ''}`,
        icon: '🌙'
      });
    } else {
      // Standard days
      let currentHour = startHour;

      // Wake-up and Breakfast
      timeline.push({
        time: formatHour(currentHour),
        activity: `Wake up at ${activeHotel.name}`,
        details: travelStyle === 'Adventure' ? 'Morning gears check & stretching.' : `Rise and refresh. Enjoy the premium amenities at ${activeHotel.name}.`,
        icon: '🌅'
      });
      currentHour += 0.75;

      timeline.push({
        time: formatHour(currentHour),
        activity: 'Breakfast local briefing',
        details: isJain ? `Jain breakfast at ${rec.cafes[idx % rec.cafes.length]} (herbal teas and flatbreads).` : `Breakfast at ${rec.cafes[idx % rec.cafes.length]}. Order local specialties and review daily transit routes.`,
        icon: '☕'
      });
      currentHour += 1.0;

      // Morning Attraction
      timeline.push({
        time: formatHour(currentHour),
        activity: `Morning Main Attraction: ${rec.attractions[idx % rec.attractions.length]}`,
        details: `Arrive early to beat queues. Queue wait time: ~15-30 mins. Focus on major highlights.${isLowWalking ? ' (Low walking: golf-cart rental station near entry gate).' : ' (Estimated walking: 1.5km).'}`,
        icon: '🏛️'
      });
      currentHour += (pace === 'Fast-Paced' ? 2.0 : 2.5); // time at sight

      // Mid-day coffee/snack break
      if (pace !== 'Fast-Paced') {
        timeline.push({
          time: formatHour(currentHour),
          activity: 'Mid-day Hydration & Cafe Rest',
          details: `Enjoy a light tea/coffee break at ${rec.cafes[(idx + 1) % rec.cafes.length]}. Upload photography logs.`,
          icon: '🍵'
        });
        currentHour += 0.5;
      }

      // Lunch
      timeline.push({
        time: formatHour(currentHour),
        activity: 'Lunch break',
        details: isJain ? `Pure Jain lunch recipes at ${rec.restaurants[(idx + 2) % rec.restaurants.length]}.` : (isVeg ? `Vegetarian meal at ${rec.restaurants[(idx + 2) % rec.restaurants.length]}.` : `Taste regional delicacies at ${rec.restaurants[(idx + 2) % rec.restaurants.length]}. High comfort seating.`),
        icon: '🍜'
      });
      currentHour += 1.0;

      // Post-lunch Rest block (Fatigue preventer!)
      if (restDuration > 0) {
        timeline.push({
          time: formatHour(currentHour),
          activity: 'Mid-day Rest Interval',
          details: travelStyle === 'Senior Citizen' || travelStyle === 'Family' || isLowWalking
            ? `Return to ${activeHotel.name} or relax in air-conditioned park lounge to prevent travel fatigue.`
            : 'Find a shady viewpoint spot or local library, review coordinates, and rehydrate.',
          icon: '🌴'
        });
        currentHour += restDuration;
      }

      // Afternoon Attraction / Hidden Gem
      timeline.push({
        time: formatHour(currentHour),
        activity: `Afternoon Exploration: ${rec.gems[idx % rec.gems.length]}`,
        details: `Discover this local hidden gem. Less crowded, highly scenic. Ideal for photography.${isLowWalking ? ' (Low walking: shuttle drop-off directly at gate).' : ''}`,
        icon: '💎'
      });
      currentHour += 2.0;

      // Late afternoon viewpoint / sunset
      timeline.push({
        time: formatHour(currentHour),
        activity: `Sunset Spectacle: ${rec.views[idx % rec.views.length]}`,
        details: `Position yourself at the best coordinates for golden hour views and photographs.${isLowWalking ? ' Accessible elevator/ramp view platform pre-marked.' : ''}`,
        icon: '🌇'
      });
      currentHour += 1.0;

      // Evening decompression
      timeline.push({
        time: formatHour(currentHour),
        activity: `Lodging Rest at ${activeHotel.name}`,
        details: `Return to ${activeHotel.name}. Shower, change attire, and decompress from day walk logs.`,
        icon: '🛀'
      });
      currentHour += 1.25;

      // Dinner
      timeline.push({
        time: formatHour(currentHour),
        activity: 'Dinner Session',
        details: isJain ? `Custom Jain dinner at ${rec.restaurants[(idx + 3) % rec.restaurants.length]}.` : (isVeg ? `Pure vegetarian menu items at ${rec.restaurants[(idx + 3) % rec.restaurants.length]}.` : `Dine at ${rec.restaurants[(idx + 3) % rec.restaurants.length]}. Traditional recipes.`),
        icon: '🍲'
      });
      currentHour += 1.25;

      // Night experience if matching pace
      if (currentHour < endHour) {
        timeline.push({
          time: formatHour(currentHour),
          activity: travelStyle === 'Adventure' ? 'Stargazing / night hike briefing' : travelStyle === 'Backpacker' || interests.includes('Nightlife') ? 'Social tavern crawl & nightlife coordinates' : 'Local evening stroll & desserts',
          details: 'Decompressing evening experience matching travel style preference indices.',
          icon: '🌌'
        });
      }
    }

    return {
      day: dayNum,
      title: dayNum === 1 ? 'Arrival & Orientation Dossier' : `Sector Mapping - Day ${dayNum}`,
      timeline
    };
  });

  // Apply modifiers to advice
  let finalTransport = rec.transport;
  if (isEvPriority) {
    finalTransport += ' [EV Priority: charging stations mapped at tourist parking].';
  }
  if (isScenicRoute) {
    finalTransport += ' [Scenic Route: follow coastal/mountain bypass loops for maximum photogenic vistas].';
  }

  return {
    days,
    averageWalkingDist,
    emergencyServices: rec.emergency,
    transportationAdvice: finalTransport
  };
}
