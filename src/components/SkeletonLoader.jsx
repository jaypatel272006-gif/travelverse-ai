import React from 'react';

// Destination Card Skeleton matching Aspect Ratio and Card heights
export const DestinationSkeleton = () => {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm flex flex-col h-full animate-pulse">
      <div className="w-full aspect-[16/10] shimmer" />
      <div className="p-5 flex-1 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className="h-4 w-24 shimmer rounded-full" />
          <div className="h-4 w-12 shimmer rounded" />
        </div>
        <div className="h-6 w-3/4 shimmer rounded" />
        <div className="h-4 w-full shimmer rounded" />
        <div className="h-4 w-5/6 shimmer rounded" />
        <div className="mt-auto pt-4 flex justify-between items-center border-t border-slate-100 dark:border-slate-800">
          <div className="h-5 w-20 shimmer rounded" />
          <div className="h-8 w-24 shimmer rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export const CardGridSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <DestinationSkeleton key={i} />
      ))}
    </div>
  );
};

// Flight Tracker Skeleton
export const FlightSkeleton = () => {
  return (
    <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6 animate-pulse">
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="w-12 h-12 rounded-full shimmer" />
        <div className="flex flex-col gap-2">
          <div className="h-5 w-32 shimmer rounded" />
          <div className="h-3 w-20 shimmer rounded" />
        </div>
      </div>
      <div className="flex justify-between items-center w-full md:w-3/5 gap-4">
        <div className="flex flex-col items-center gap-2">
          <div className="h-5 w-16 shimmer rounded" />
          <div className="h-3 w-10 shimmer rounded" />
        </div>
        <div className="flex-1 flex flex-col items-center gap-1">
          <div className="h-3 w-20 shimmer rounded" />
          <div className="w-full h-1.5 shimmer rounded-full" />
          <div className="h-3 w-16 shimmer rounded" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-5 w-16 shimmer rounded" />
          <div className="h-3 w-10 shimmer rounded" />
        </div>
      </div>
      <div className="flex items-center justify-between md:flex-col gap-4 w-full md:w-auto md:border-l border-slate-100 dark:border-slate-800 md:pl-6">
        <div className="flex flex-col gap-1 md:items-end">
          <div className="h-6 w-24 shimmer rounded" />
          <div className="h-3 w-16 shimmer rounded" />
        </div>
        <div className="h-10 w-28 shimmer rounded-xl" />
      </div>
    </div>
  );
};

export const FlightListSkeleton = ({ count = 4 }) => {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <FlightSkeleton key={i} />
      ))}
    </div>
  );
};

// Weather Advisor Skeleton
export const WeatherSkeleton = () => {
  return (
    <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 shadow-sm flex flex-col gap-6 animate-pulse">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <div className="h-8 w-48 shimmer rounded" />
          <div className="h-4 w-32 shimmer rounded" />
        </div>
        <div className="w-16 h-16 rounded-full shimmer" />
      </div>
      <div className="flex items-baseline gap-4">
        <div className="h-16 w-24 shimmer rounded-2xl" />
        <div className="h-5 w-36 shimmer rounded" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-2 items-center">
            <div className="h-4 w-16 shimmer rounded" />
            <div className="h-6 w-12 shimmer rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

// Homepage skeleton
export const HomepageSkeleton = () => (
  <div className="w-full flex flex-col gap-10 animate-pulse text-left">
    <div className="w-full h-[450px] rounded-3xl shimmer relative flex flex-col justify-center items-center px-6">
      <div className="h-6 w-48 shimmer rounded-full mb-3" />
      <div className="h-10 w-80 shimmer rounded-xl mb-6" />
      <div className="w-full max-w-4xl p-5 rounded-2xl bg-white/10 dark:bg-slate-950/20 backdrop-blur-md border border-slate-200/20 flex flex-col gap-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-10 shimmer rounded-lg" />
          ))}
        </div>
        <div className="h-12 w-full shimmer rounded-xl" />
      </div>
    </div>
    <div className="flex gap-3 overflow-x-auto pb-2">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-10 w-24 shimmer rounded-xl shrink-0" />
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <DestinationSkeleton key={i} />
      ))}
    </div>
  </div>
);

// Destination details skeleton
export const DestinationDetailsSkeleton = () => (
  <div className="w-full flex flex-col gap-8 animate-pulse text-left">
    <div className="w-full h-[380px] rounded-3xl shimmer relative" />
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 flex flex-col gap-4">
        <div className="h-8 w-1/2 shimmer rounded" />
        <div className="flex gap-2">
          <div className="h-5 w-20 shimmer rounded-full" />
          <div className="h-5 w-24 shimmer rounded-full" />
        </div>
        <div className="h-4 w-full shimmer rounded" />
        <div className="h-4 w-5/6 shimmer rounded" />
        <div className="flex flex-col gap-4 mt-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex gap-4">
              <div className="w-8 h-8 rounded-full shimmer flex-shrink-0" />
              <div className="flex-1 flex flex-col gap-2">
                <div className="h-5 w-1/3 shimmer rounded" />
                <div className="h-4 w-full shimmer rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-80 flex flex-col gap-6">
        <div className="h-64 rounded-2xl shimmer" />
        <div className="h-24 rounded-2xl shimmer" />
      </div>
    </div>
  </div>
);

// Dashboard user profile and stats skeleton
export const DashboardSkeleton = () => (
  <div className="w-full flex flex-col gap-8 animate-pulse text-left">
    <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-4">
      <div className="w-16 h-16 rounded-full shimmer" />
      <div className="flex flex-col gap-2">
        <div className="h-6 w-32 shimmer rounded" />
        <div className="h-4 w-40 shimmer rounded" />
      </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col gap-2 items-center">
          <div className="h-8 w-12 shimmer rounded" />
          <div className="h-4 w-20 shimmer rounded" />
        </div>
      ))}
    </div>
    <div className="flex flex-col gap-4">
      <div className="h-6 w-48 shimmer rounded" />
      {[...Array(3)].map((_, i) => (
        <div key={i} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex justify-between">
          <div className="h-4 w-64 shimmer rounded" />
          <div className="h-4 w-16 shimmer rounded" />
        </div>
      ))}
    </div>
  </div>
);

// Hotels list grid skeleton
export const HotelsSkeleton = () => (
  <div className="w-full flex flex-col gap-6 animate-pulse text-left">
    <div className="flex justify-between items-center">
      <div className="h-8 w-48 shimmer rounded" />
      <div className="h-10 w-32 shimmer rounded-lg" />
    </div>
    <div className="flex gap-3 overflow-x-auto pb-2">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-9 w-24 shimmer rounded-full shrink-0" />
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col">
          <div className="w-full h-48 shimmer" />
          <div className="p-4 flex flex-col gap-3">
            <div className="h-5 w-2/3 shimmer rounded" />
            <div className="h-4 w-full shimmer rounded" />
            <div className="flex justify-between items-center pt-2">
              <div className="h-5 w-16 shimmer rounded" />
              <div className="h-8 w-24 shimmer rounded-lg" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Restaurants & cuisine explorer skeleton
export const RestaurantsSkeleton = () => (
  <div className="w-full flex flex-col gap-6 animate-pulse text-left">
    <div className="h-8 w-64 shimmer rounded" />
    <div className="flex gap-2">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-8 w-20 shimmer rounded-full" />
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex gap-4">
          <div className="w-24 h-24 rounded-lg shimmer shrink-0" />
          <div className="flex-1 flex flex-col gap-2">
            <div className="h-5 w-1/2 shimmer rounded" />
            <div className="h-4 w-full shimmer rounded" />
            <div className="h-4 w-12 shimmer rounded-full" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Religious/Spiritual destinations loading skeleton
export const ReligiousSkeleton = () => (
  <div className="w-full flex flex-col gap-6 animate-pulse text-left">
    <div className="h-8 w-60 shimmer rounded" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col">
          <div className="w-full h-44 shimmer" />
          <div className="p-4 flex flex-col gap-3">
            <div className="h-5 w-3/4 shimmer rounded" />
            <div className="h-4 w-full shimmer rounded" />
            <div className="h-6 w-20 shimmer rounded-full mt-2" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Road Trips maps and statistics skeleton
export const RoadTripSkeleton = () => (
  <div className="w-full flex flex-col gap-6 animate-pulse text-left">
    <div className="h-8 w-48 shimmer rounded" />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 h-[450px] rounded-2xl shimmer" />
      <div className="flex flex-col gap-4">
        <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col gap-2">
          <div className="h-4 w-24 shimmer rounded" />
          <div className="h-8 w-16 shimmer rounded" />
        </div>
        <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col gap-2">
          <div className="h-4 w-32 shimmer rounded" />
          <div className="h-6 w-full shimmer rounded" />
        </div>
      </div>
    </div>
  </div>
);

// Itinerary Builder day logs skeleton
export const ItineraryBuilderSkeleton = () => (
  <div className="w-full flex flex-col gap-6 animate-pulse text-left">
    <div className="h-8 w-56 shimmer rounded" />
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-1 flex flex-col gap-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-10 shimmer rounded-lg" />
        ))}
      </div>
      <div className="md:col-span-3 flex flex-col gap-4">
        <div className="h-6 w-32 shimmer rounded" />
        {[...Array(3)].map((_, i) => (
          <div key={i} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <div className="h-5 w-1/4 shimmer rounded" />
            <div className="h-4 w-full shimmer rounded" />
          </div>
        ))}
      </div>
    </div>
  </div>
);
