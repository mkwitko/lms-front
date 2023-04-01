import Link from "next/link";
import { coursesCategory } from "@/data/site/home/CoursesCategory";
import SectionTitle from "./SectionTitle";

export default function CoursesCategory({
  title,
  description,
  href,
  linkDescription,
}: any) {
  return (
    <section className="flex flex-col justify-center mt-16 md:mt-24">
      <SectionTitle
        title={title}
        description={description}
        href={href}
        linkDescription={linkDescription}
      ></SectionTitle>
      <div
        className="grid grid-cols-1 gap-8 mt-12
      md:grid-cols-2
      xl:grid-cols-3"
      >
        {coursesCategory.map((e, i) => (
          <div
            className="flex flex-row items-center justify-start space-x-6 bg-white rounded-lg p-6 shadow-sm
            sm:w-2/3 sm:mx-auto
            md:w-full"
            key={i}
          >
            <div className={`rounded-lg p-6 ${e.class}`}>
              <e.icon size={46}></e.icon>
            </div>
            <div className="space-y-2">
              <h3
                className="font-bold text-lg font-purple-800 text-left w-5/6
              md:text-lg md:leading-6 md:w-2/3"
              >
                {e.title}
              </h3>
              <p
                className="text-gray-400 text-sm uppercase text-left 
              md:text-xs"
              >
                {e.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
