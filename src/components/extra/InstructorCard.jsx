import Image from "next/image";
import React from "react";

const InstructorCard = ({ instructor }) => {
  const { name, title, experience, students, courses, rating, bio, image } =
    instructor;
  return (
    <div>
      <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group cursor-pointer">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-indigo-100 via-white to-purple-100 opacity-80 group-hover:opacity-100 transition"></div>

        {/* Content */}
        <div className="relative p-6">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src={image}
              alt={name}
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
              height={200}
              width={200}
            />
          </div>

          {/* Info */}
          <div className="text-center mt-4">
            <h3 className="text-lg font-semibold text-[#161439]">{name}</h3>
            <p className="text-sm text-gray-600">{title}</p>
          </div>

          {/* Stats */}
          <div className="flex justify-between text-sm text-gray-600 mt-4">
            <span>⭐ {rating}</span>
            <span>🎓 {courses}</span>
            <span>👨‍🎓 {students}</span>
          </div>

          {/* Experience */}
          <p className="text-sm text-gray-500 mt-2 text-center">
            {experience} experience
          </p>

          {/* Bio */}
          <p className="text-sm text-gray-600 mt-4 text-center line-clamp-3">
            {bio}
          </p>

          {/* Button */}
          <button className="mt-5 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition cursor-pointer">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
