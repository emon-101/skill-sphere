import Image from "next/image";
import React from "react";
import { MdStarRate } from "react-icons/md";

const CourseCard = ({ course }) => {
  const { title, instructor, rating, description, image } = course;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm w-full h-full">
        <figure>
          <Image
            src={image}
            alt={title}
            height={500}
            width={500}
            className="h-72 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#161439] font-bold">{title}</h2>
          <p className="text-[#6D6C80]">{description}</p>
          <div className="flex gap-2">
            <h2 className="text-[#161439] font-bold">Instructor : </h2>
            <p className="text-[#6D6C80] font-medium">{instructor}</p>
          </div>
          <div className="divider"></div>
          <div className="flex gap-2">
            <p className="text-[#161439] font-bold">Ratings : </p>
            <p className="text-[#6D6C80] font-medium flex gap-1 items-center">
              <span className="text-amber-300">
                <MdStarRate />
              </span>{" "}
              {rating}
            </p>
          </div>
          <div className="card-actions justify-end mt-2">
            <button className="btn btn-primary w-full">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
