import Image from "next/image";
import React from "react";

const CourseCard = ({ course }) => {
  console.log(course);
  const { title, instructor, rating, image } = course;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm w-full h-full">
        <figure>
          <Image src={image} alt={title} height={500} width={500} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
