import { getCourseDetails } from "@/lib/data";
import Image from "next/image";
import { IoIosTime } from "react-icons/io";
import { MdPlaylistAddCheckCircle, MdStarRate } from "react-icons/md";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;
  const courseDetails = await getCourseDetails(id);
  const {
    title,
    instructor,
    duration,
    rating,
    level,
    image,
    category,
    full_details,
    curriculum,
  } = courseDetails;
  return (
    <div className="lg:w-1/2 mx-auto my-20 px-2">
      <h2 className="text-3xl lg:text-5xl font-bold text-[#161439] mb-4 text-center">Details Course Curriculum</h2>
      <div className="bg-base-100 shadow-sm rounded-xl">
        <figure className="rounded-xl">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="p-4 w-full rounded-3xl"
          />
        </figure>
        <div className="flex flex-col gap-3 m-4">
          <h2 className="card-title text-[#161439] font-bold">{title}</h2>
          <p className="text-[#6D6C80] font-semibold">{full_details}</p>
          {/* duation */}
          <div className="flex gap-1 items-center text-[#B2BBCC] font-semibold">
            <IoIosTime />
            <span>{duration}</span>
          </div>
          {/* badges */}
          <div className="flex gap-2">
            <div className="badge badge-soft badge-success">{level}</div>
            <div className="badge badge-soft badge-success">{category}</div>
          </div>
          {/* Instructor */}
          <div className="">
            <p className="text-[#6D6C80] font-semibold">
              <span className="text-[#161439]">Instructor:</span> {instructor}
            </p>
          </div>
          {/* Ratings */}
          <div className="">
            <p className="text-[#6D6C80] font-medium flex gap-1 items-center">
              <span>Ratings: </span>
              <span className="text-amber-300">
                <MdStarRate />
              </span>
              {rating}
            </p>
          </div>
          <div className="divider"></div>
          {/* Course Curriculum */}
          <div className="mb-4">
            <p className="font-bold text-[#161439] mb-2">Course Curriculum</p>
            <ul>
              {
                curriculum.map((li, idx)=> <li key={idx} className="text-[#6D6C80] font-medium flex gap-1 items-center"><MdPlaylistAddCheckCircle /> {li}</li>)
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
