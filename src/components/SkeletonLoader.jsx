import React from 'react';

export const DestinationSkeleton = () => {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm flex flex-col h-full">
      <div className="w-full h-52 shimmer" />
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

export const FlightSkeleton = () => {
  return (
    <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
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

export const WeatherSkeleton = () => {
  return (
    <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 shadow-sm flex flex-col gap-6">
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
