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
    <section className="flex flex-col justify-center mt-24">
      <SectionTitle
        title={title}
        description={description}
        href={href}
        linkDescription={linkDescription}
      ></SectionTitle>
      <div className="grid grid-cols-3 gap-4 mt-12">
        {popularCourses.map((e, i) => (
          <div
            key={i}
            className="flex flex-col p-4 space-y-4 rounded-lg bg-white"
          >
            <div className="mx-auto">
              <Image
                className="w-[90vw] h-[25vh] object-cover rounded-lg"
                src={e.image}
                alt={e.title}
                width={240}
                height={0}
              ></Image>
            </div>
            <div className="flex flex-col space-y-2 justify-between">
              <div className="bg-purple-100 text-purple-400 w-1/5 p-2 rounded-lg text-[0.6em] text-left">
                {e.category}
              </div>
              <h3 className="font-bold text-md text-left w-2/3">{e.title}</h3>
              <div className="pt-6 flex flex-row items-center justify-between">
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
