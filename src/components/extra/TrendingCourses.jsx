import React from "react";
import CourseCard from "./CourseCard";
import { getCourses } from "@/lib/data";
import Link from "next/link";

const TrendingCourses = async () => {
  const courses = await getCourses();
  return (
    <div>
      <section className="py-14 bg-linear-to-r from-indigo-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-3">
              Trending Courses
            </div>

            <h2 className="text-3xl font-semibold text-[#161439]">
              Most Popular Learning Paths
            </h2>

            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Explore the courses that students love the most. Learn in-demand
              skills and boost your career with our top-rated programs.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
            {courses.slice(3, 6).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* Optional CTA */}
          <div className="text-center mt-10">
            <button className="px-6 py-2 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition cursor-pointer">
              <Link href={"/courses"}>View All Courses</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrendingCourses;
