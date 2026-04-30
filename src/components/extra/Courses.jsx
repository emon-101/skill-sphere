import Link from "next/link";
import CourseCard from "./CourseCard";
import { GoArrowRight } from "react-icons/go";
import { getCourses } from "@/lib/data";


const Courses = async () => {
  const courses = await getCourses();
  const topCourses = [...courses].sort((a,b)=> b.rating - a.rating).slice(0, 3);
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
        {
            topCourses.map((course, idx)=> <CourseCard key={idx} course={course} />)
        }
      </div>
      {/* All Courses */}
      <div className="flex justify-center items-center my-6">
        <Link href={'/courses'}>
            <button className="rounded-full px-4 py-1 bg-[#5751E1] text-white flex gap-1 items-center font-semibold">Show All Courses <GoArrowRight /></button>
        </Link>
      </div>
    </div>
  );
};

export default Courses;
