import React from "react";

const CourseLoading = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-64 bg-gray-300 rounded-xl"></div>

      {/* Title */}
      <div className="h-8 bg-gray-300 rounded w-3/4 mt-6"></div>

      {/* Instructor + Info */}
      <div className="flex gap-4 mt-4">
        <div className="h-4 w-32 bg-gray-300 rounded"></div>
        <div className="h-4 w-24 bg-gray-300 rounded"></div>
        <div className="h-4 w-20 bg-gray-300 rounded"></div>
      </div>

      {/* Description */}
      <div className="space-y-3 mt-6">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-4/6"></div>
      </div>

      {/* Curriculum Title */}
      <div className="h-6 bg-gray-300 rounded w-1/3 mt-8"></div>

      {/* Curriculum List */}
      <div className="space-y-3 mt-4">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-4/6"></div>
        <div className="h-4 bg-gray-300 rounded w-3/6"></div>
      </div>
    </div>
  );
};

export default CourseLoading;
