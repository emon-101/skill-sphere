import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdStarRate } from "react-icons/md";

const CourseCard = ({ course }) => {
  const { id, title, instructor, rating, description, image } = course;
  return (
    <div>
      <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
        {/* Gradient Background */}
        <div className="absolute h-full w-full inset-0 bg-linear-to-br from-indigo-100 via-white to-purple-100 opacity-80 group-hover:opacity-100 transition"></div>

        <div className="relative bg-white/70 backdrop-blur-md h-full flex flex-col">
          {/* Image */}
          <figure className="overflow-hidden">
            <Image
              src={image}
              alt={title}
              height={500}
              width={500}
              className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </figure>

          {/* Content */}
          <div className="p-5 flex flex-col grow">
            {/* Title */}
            <h2 className="text-lg font-bold text-[#161439] mb-1">{title}</h2>

            {/* Description */}
            <p className="text-[#6D6C80] text-sm line-clamp-2">{description}</p>

            {/* Instructor */}
            <div className="flex gap-2 mt-3 text-sm">
              <span className="font-semibold text-[#161439]">Instructor:</span>
              <span className="text-[#6D6C80]">{instructor}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2 text-sm">
              <span className="font-semibold text-[#161439]">Rating:</span>
              <span className="text-amber-400 flex items-center">
                <MdStarRate />
              </span>
              <span className="text-[#6D6C80]">{rating}</span>
            </div>

            {/* Spacer */}
            <div className="grow"></div>

            {/* Button */}
            <Link href={`/course/${id}`} className="mt-4">
              <button className="w-full py-2 rounded-lg bg-indigo-600 text-white font-medium transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg cursor-pointer">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
