import CourseCard from "./CourseCard";


const Courses = async () => {
  const data = await fetch("https://skill-sphere-server.onrender.com/courses");
  const courses = await data.json();
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
      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-9/10 mx-auto px-2">
        {
            topCourses.map((course, idx)=> <CourseCard key={idx} course={course} />)
        }
      </div>
    </div>
  );
};

export default Courses;
