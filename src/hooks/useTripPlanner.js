import { useState, useCallback } from 'react';
import { useApp } from '../context/AppContext';
import { generateDetailedItinerary } from '../utils/itineraryEngine';
import { getDestinationImage } from '../data/imageRegistry';

export const useTripPlanner = () => {
  const { saveItinerary, awardXp, showToast, customPhotos } = useApp();
  const [plannerForm, setPlannerForm] = useState({
    destination: 'Goa',
    duration: 5,
    budget: 45000,
    travelers: 'Couple',
    travelStyle: 'Balanced',
    pace: 'Moderate',
    interests: ['Beach', 'Food', 'Culture']
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentItinerary, setCurrentItinerary] = useState(null);

  const updateFormField = useCallback((key, value) => {
    setPlannerForm(prev => ({ ...prev, [key]: value }));
  }, []);

  const generateTrip = useCallback(async (customPrompt = null) => {
    setIsGenerating(true);
    try {
      // Simulate quantum AI calculation delay
      await new Promise(resolve => setTimeout(resolve, 900));

      const input = customPrompt ? {
        destination: customPrompt.destination || plannerForm.destination,
        days: customPrompt.days || plannerForm.duration,
        budget: customPrompt.budget || plannerForm.budget,
        style: customPrompt.style || plannerForm.travelStyle
      } : {
        destination: plannerForm.destination,
        days: plannerForm.duration,
        budget: plannerForm.budget,
        style: plannerForm.travelStyle
      };

      const result = generateDetailedItinerary(input.destination, input.days, 'midrange', ['Culture', 'Food'], input.style, 'moderate');
      
      // Ensure image is resolved from registry
      const destId = `dest-${input.destination.toLowerCase().replace(/\s+/g, '')}`;
      result.image = getDestinationImage(destId, customPhotos);
      result.id = `itinerary-${Date.now()}`;

      setCurrentItinerary(result);
      awardXp(250, `Compiled Travel Itinerary for ${result.destination}`);
      showToast(`AI Journey generated for ${result.destination}! +250 XP`, 'success');
      return result;
    } catch (err) {
      showToast('Error generating itinerary. Please retry.', 'error');
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  }, [plannerForm, customPhotos, awardXp, showToast]);

  const saveCurrentItinerary = useCallback(() => {
    if (!currentItinerary) return;
    saveItinerary(currentItinerary);
    awardXp(300, `Saved Trip Dossier to Travelverse Matrix`);
    showToast(`Journey saved to your active Dossier! +300 XP`, 'success');
  }, [currentItinerary, saveItinerary, awardXp, showToast]);

  const updateItineraryDay = useCallback((dayIndex, updatedDay) => {
    if (!currentItinerary) return;
    setCurrentItinerary(prev => {
      const updatedDays = [...prev.days];
      updatedDays[dayIndex] = updatedDay;
      return { ...prev, days: updatedDays };
    });
  }, [currentItinerary]);

  return {
    plannerForm,
    updateFormField,
    isGenerating,
    currentItinerary,
    setCurrentItinerary,
    generateTrip,
    saveCurrentItinerary,
    updateItineraryDay
  };
};

export default useTripPlanner;
