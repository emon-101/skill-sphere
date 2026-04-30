import { getInstructors } from "@/lib/data";
import InstructorCard from "./InstructorCard";

const Instructors = async () => {
  const instructors = await getInstructors();
  console.log(instructors);
  return (
    <div className="my-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-[#161439]">
            Our Instructors
          </h2>
          <p className="text-gray-500 mt-3">
            Learn from experienced professionals who guide you step by step.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
