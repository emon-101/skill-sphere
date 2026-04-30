import Link from "next/link";
import CourseCard from "./CourseCard";
import { GoArrowRight } from "react-icons/go";
import { getCourses } from "@/lib/data";

const Courses = async () => {
  const courses = await getCourses();
  const topCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
  return (
    <div className="my-20">
      {/* top content */}
      <div className="flex flex-col justify-center gap-2 items-center">
        <div className="badge badge-soft badge-primary">🔥 Popular Courses</div>
        <h2 className="text-3xl font-semibold text-[#161439]">
          Top Courses We Have
        </h2>
        <p className="text-[#6D6C80] lg:w-1/4 text-center">
          Join thousands of learners and gain in-demand skills with our expertly
          crafted, hands-on courses.
        </p>
      </div>
      {/* Card section */}
      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-9/10 mx-auto px-2">
        {topCourses.map((course, idx) => (
          <CourseCard key={idx} course={course} />
        ))}
      </div>
      {/* All Courses */}
      <div className="flex justify-center items-center my-6">
        <Link href={"/courses"}>
          <button className="group relative rounded-full px-6 py-2 bg-[#5751E1] text-white font-semibold flex items-center gap-2 overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer">
            <span className="relative z-10 flex items-center gap-2">
              Show All Courses
              <GoArrowRight className="transition-all duration-300 group-hover:translate-x-2" />
            </span>

            {/* animated gradient shine */}
            <span className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-700"></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Courses;
