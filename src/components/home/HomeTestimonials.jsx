import React from 'react';

export const HomeTestimonials = ({
  testimonials,
  activeTestimonial,
  setActiveTestimonial
}) => {
  return (
    <section className="flex flex-col gap-10 text-center max-w-3xl mx-auto">
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400 font-mono">Testimonials</span>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-850 dark:text-white mt-1 tracking-wide">
          What Our Explorers Say
        </h2>
      </div>

      <div className="relative min-h-[260px] sm:min-h-[220px] mt-4 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 shadow-xl flex flex-col justify-between items-center text-center card-premium-hover">
        <div className="flex flex-col items-center gap-4">
          <img
            src={testimonials[activeTestimonial].avatar}
            alt={testimonials[activeTestimonial].name}
            className="w-16 h-16 rounded-full object-cover border-2 border-teal-500 shadow-md animate-[pulse_3s_infinite]"
          />
          
          {/* Star Ratings */}
          <div className="flex gap-0.5 text-amber-400 text-xs">
            {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-slate-655 dark:text-slate-350 italic leading-relaxed max-w-xl font-semibold">
            "{testimonials[activeTestimonial].comment}"
          </p>
        </div>

        <div className="mt-4 flex flex-col items-center gap-1.5">
          <span className="px-2 py-0.5 text-[8px] font-bold font-mono uppercase bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 rounded-full flex items-center gap-1 self-center">
            ✓ Verified Traveler Review
          </span>
          <span className="text-xs font-bold text-slate-800 dark:text-white font-mono">
            {testimonials[activeTestimonial].name}
          </span>
          <div className="flex items-center gap-1.5 text-[9px] text-slate-455 font-bold uppercase tracking-wider font-mono">
            <span>{testimonials[activeTestimonial].role}</span>
            <span>•</span>
            <span className="text-teal-655 dark:text-teal-400">
              Visited {testimonials[activeTestimonial].destination} {testimonials[activeTestimonial].country}
            </span>
          </div>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="flex justify-center gap-2 mt-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTestimonial(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              activeTestimonial === index 
                ? 'bg-teal-500 w-6' 
                : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-500'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
