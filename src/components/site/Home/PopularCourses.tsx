import { popularCourses } from "@/data/site/home/PopularCourses";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { BsPersonCircle, BsStarFill, BsCurrencyDollar } from "react-icons/bs";

export default function PopularCourses({
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
        {popularCourses.map((e, i) => (
          <div
            className="flex flex-col bg-white rounded-lg p-4 shadow-sm w-11/12 mx-auto
            sm:w-2/3
            xl:flex-row md:p-6 md:w-full md:space-x-6"
            key={i}
          >
            <div className="mx-auto">
              <Image
                className="object-cover w-[100vw] h-[20vh] rounded-lg
                xl:h-[25vh]"
                src={e.image}
                alt={e.title}
                width={240}
                height={0}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABgUlEQVQ4jY2SvUoDURSGn3O7C4uLg4ODg"
              ></Image>
            </div>
            <div
              className="flex flex-col space-y-2 justify-between py-4
            md:justify-between"
            >
              <div
                className="
              bg-purple-100 text-purple-600 p-2 rounded-lg text-[0.6em] text-center w-1/3 self-center
              md:w-1/5 md:text-left"
              >
                {e.category}
              </div>
              <h3
                className="font-bold text-lg text-center w-full
              md:w-2/3 md:text-md md:text-left"
              >
                {e.title}
              </h3>
              <div className="pt-6 flex flex-row items-center justify-between w-11/12 mx-auto">
                <div className="flex flex-row space-x-2 items-center">
                  <div className="bg-blue-200 text-blue-800 p-[0.35rem] rounded-lg">
                    <BsPersonCircle size={12}></BsPersonCircle>
                  </div>
                  <p className="text-gray-400 text-sm">{e.rating}</p>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <div className="bg-yellow-200 text-yellow-800 p-[0.35rem] rounded-lg">
                    <BsStarFill size={12}></BsStarFill>
                  </div>
                  <p className="text-gray-400 text-sm">{e.totalRating}</p>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <div className="bg-red-200 text-red-800 p-[0.35rem] rounded-lg">
                    <BsCurrencyDollar size={12}></BsCurrencyDollar>
                  </div>
                  <p className="text-gray-400 text-sm">{e.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
