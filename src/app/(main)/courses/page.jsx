import CourseCard from "@/components/extra/CourseCard";
import { getCourses } from "@/lib/data";


const CoursesPage = async() => {
    const courses = await getCourses();
    return (
        <div className="lg:w-9/10 mx-auto px-2 mb-20">
            <h2 className="text-[#161439] font-bold text-3xl text-center my-10">All Courses</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    courses.map((course, idx) => <CourseCard key={idx} course={course} />)
                }
            </div>
        </div>
    );
};

export default CoursesPage;