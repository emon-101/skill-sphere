import Courses from "@/components/extra/Courses";
import Instructors from "@/components/extra/Instructors";
import Learning from "@/components/extra/Learning";
import TrendingCourses from "@/components/extra/TrendingCourses";
import Banner from "@/components/shared/Banner";

export const metadata = {
  title: "Skill Sphere | Homepage",
  description: "A modern online learing web application",
};


export default function Home() {
  return (
    <div>
      <Banner />
      <Courses />
      <Learning />
      <Instructors />
      <TrendingCourses />
    </div>
  );
}
