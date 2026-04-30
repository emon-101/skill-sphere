import Image from "next/image";
import heroImg from "@/assets/heroImg.svg";
import { GoArrowRight } from "react-icons/go";

const Banner = () => {
  return (
    <div className="bg-[#E1DAF1] mb-10 py-20 ">
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
            <button className="group relative rounded-full px-6 py-2 bg-[#5751E1] text-white font-semibold flex items-center gap-2 overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer">
              <span className="relative z-10 flex items-center gap-2">
                Start free trial
                <GoArrowRight className="transition-all duration-300 group-hover:translate-x-2" />
              </span>

              {/* animated gradient shine */}
              <span className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-700"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
