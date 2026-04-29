import Image from "next/image";
import heroImg from "@/assets/heroImg.svg";
import { GoArrowRight } from "react-icons/go";

const Banner = () => {
  return (
    <div className="bg-[#E1DAF1] my-10 py-20 ">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src={heroImg}
            width={500}
            height={500}
            alt="student"
            className=""
          ></Image>
          <div>
            <h1 className="text-3xl lg:text-5xl font-semibold mb-2">
              Never Stop{" "}
              <span className="font-bold text-[#161439]">Learning</span>
            </h1>
            <h1 className="text-3xl lg:text-5xl font-semibold">
              Life <span className="font-bold text-[#161439]">Never Stop</span>{" "}
              Teaching
            </h1>
            <p className="py-6 text-[#6D6C80] lg:w-2/3">
              Every teaching and learning journey is unique Following We&#39;ll
              help guide your way.
            </p>
            <button className="rounded-full px-4 py-1 bg-[#5751E1] text-white flex gap-1 items-center font-semibold">Start free trial <GoArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
