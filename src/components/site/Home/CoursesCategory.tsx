import Link from "next/link";
import { coursesCategory } from "@/data/site/home/CoursesCategory";
import SectionTitle from "./SectionTitle";
import { link } from "fs";

export default function CoursesCategory({
  title,
  description,
  href,
  linkDescription,
}: any) {
  return (
    <section className="flex flex-col justify-center mt-24">
      <SectionTitle
        title={title}
        description={description}
        href={href}
        linkDescription={linkDescription}
      ></SectionTitle>
      <div className="grid grid-cols-3 gap-8 mt-12">
        {coursesCategory.map((e, i) => (
          <div
            className="flex flex-row items-center justify-start space-x-6 bg-white rounded-lg p-6 shadow-sm"
            key={i}
          >
            <div className={`rounded-lg p-6 ${e.class}`}>
              <e.icon size={46}></e.icon>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold leading-10 text-md font-purple-800 text-left md:text-lg w-1/2">
                {e.title}
              </h3>
              <p className="text-gray-400 text-md uppercase text-left text-xs">
                {e.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
