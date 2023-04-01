import { achievements } from "@/data/site/home/Achievements";
export default function Achievements() {
  return (
    <section
      className="
    flex flex-col mx-auto bg-purple-50 rounded-lg mt-16 w-11/12
    md:flex-row md:w-full md:mt-24 "
    >
      {achievements.map((e, i) => (
        <div
          key={i}
          className="
          flex flex-row p-8 space-x-6 w-full items-center justify-center"
        >
          <div className="bg-white text-purple-800 rounded-lg p-6">
            <e.icon size={32}></e.icon>
          </div>
          <div className="flex flex-col items-left justify-center space-y-3">
            <h3
              className="
            text-purple-800 font-bold text-4xl font-purple-800 text-left 
            lg:text-left"
            >
              {e.count}
            </h3>
            <p
              className="
            text-gray-500 text-md uppercase text-left w-full"
            >
              {e.title}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
