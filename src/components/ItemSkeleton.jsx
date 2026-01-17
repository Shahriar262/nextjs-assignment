"use client";

export default function ItemSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-lg animate-pulse overflow-hidden">
      <div className="w-full h-48 md:h-56 lg:h-60 bg-gray-300" />
      <div className="p-4 flex flex-col gap-2">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="mt-3 h-5 bg-gray-300 rounded w-1/4"></div>
      </div>
    </div>
  );
}
