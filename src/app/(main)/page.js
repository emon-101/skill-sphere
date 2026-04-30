import Courses from "@/components/extra/Courses";
import Instructors from "@/components/extra/Instructors";
import Learning from "@/components/extra/Learning";
import Banner from "@/components/shared/Banner";


export default function Home() {
  return (
    <div>
      <Banner />
      <Courses />
      <Learning />
      <Instructors />
    </div>
  );
}
