import Achievements from "@/components/site/Home/Achievements";
import CoursesCategory from "@/components/site/Home/CoursesCategory";
import HeroSection from "@/components/site/Home/HeroSection";
import NavBar from "@/components/site/Home/NavBar";
import PopularCourses from "@/components/site/Home/PopularCourses";
import SectionTitle from "@/components/site/Home/SectionTitle";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <div className="container mx-auto">
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        <Achievements></Achievements>
        <div className="mx-8">
          <CoursesCategory
            title="Explore courses by category"
            description="Browse top class courses by browsing our category which will be more easy for you."
            href="/"
            linkDescription="All category"
          ></CoursesCategory>
          <PopularCourses
            title="Popular courses for you"
            description="Get the best course with the best price with world-class tutors."
            href="/"
            linkDescription="All courses"
          ></PopularCourses>
        </div>
      </div>
    </main>
  );
}
