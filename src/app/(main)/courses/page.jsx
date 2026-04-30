import CourseCard from "@/components/extra/CourseCard";
import { getCourses } from "@/lib/data";

const CoursesPage = async ({ searchParams }) => {
  const courses = await getCourses();
  const params = await searchParams;
  const searchQuery = params.q || "";

  const filteredCourses = searchQuery
    ? courses.filter((course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : courses;
  return (
    <div className="lg:w-9/10 mx-auto px-2 mb-20">
      <h2 className="text-[#161439] font-bold text-3xl text-center my-10">
        All Courses
      </h2>
      <div className="my-6">
        <form className="flex gap-2 justify-end">
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              name="q"
              defaultValue={searchQuery}
              placeholder="Search courses..."
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
      {filteredCourses.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, idx) => (
            <CourseCard key={idx} course={course} />
          ))}
        </div>
      ) : (
        <p className="col-span-full text-center text-gray-500 mt-8">
          No courses found matching {searchQuery}
        </p>
      )}
    </div>
  );
};

export default CoursesPage;
