import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';

export const DestinationCard = ({
  title,
  subtitle,
  description,
  image,
  price,
  weather,
  tags = [],
  onClick,
  className = ''
}) => {
  return (
    <div
      onClick={onClick}
      className={`group relative h-[420px] rounded-3xl overflow-hidden border border-[#B9854F]/30 bg-[#24170F] shadow-xl hover:border-[#D4A66A] transition-all duration-500 hover:shadow-2xl hover:shadow-[#8B5E34]/20 cursor-pointer ${className}`}
    >
      {/* Photography */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-90 contrast-105"
      />

      {/* Dark Sandstone Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1B120C] via-[#1B120C]/40 to-transparent group-hover:via-[#1B120C]/60 transition-colors duration-500" />

      {/* Top Badges */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
        <div className="flex gap-1.5 flex-wrap">
          {tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full bg-[#1B120C]/80 backdrop-blur-md border border-[#B9854F]/30 text-[#E8CFA8]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="w-8 h-8 rounded-full bg-[#24170F]/80 backdrop-blur-md border border-[#D4A66A]/40 flex items-center justify-center text-[#D4A66A] group-hover:bg-[#D4A66A] group-hover:text-[#1B120C] transition-all">
          <ArrowUpRight size={16} />
        </div>
      </div>

      {/* Bottom Content Panel */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end transform group-hover:-translate-y-1 transition-transform duration-500">
        <span className="text-xs uppercase tracking-[0.2em] text-[#D4A66A] font-medium mb-1">
          {subtitle}
        </span>
        <h3 className="font-serif-heritage text-2xl font-bold text-[#F5E7CF] mb-1 tracking-wide">
          {title}
        </h3>
        {description && (
          <p className="text-xs text-[#E8CFA8]/80 font-light leading-relaxed mb-3 line-clamp-2">
            {description}
          </p>
        )}

        <div className="pt-3 border-t border-[#B9854F]/30 flex items-center justify-between text-[11px] font-mono text-[#D4A66A]">
          {weather ? (
            <span className="flex items-center gap-1">
              <MapPin size={12} />
              <span>{weather}</span>
            </span>
          ) : price ? (
            <span className="text-[#F5E7CF] font-bold">From {price}</span>
          ) : (
            <span className="text-[#E8CFA8]/60">Explore Circuit</span>
          )}

          <span className="uppercase tracking-widest text-[#F5E7CF] group-hover:text-[#D4A66A] transition-colors">
            Explore →
          </span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
