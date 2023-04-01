import { achievements } from "@/data/site/home/Achievements";
export default function Achievements() {
  return (
    <section className="flex flex-row items-center justify-between bg-purple-50 rounded-lg mt-24">
      {achievements.map((e, i) => (
        <div
          key={i}
          className="flex flex-row items-center justify-center p-8 space-x-6"
        >
          <div className="bg-white text-purple-800 rounded-lg p-6">
            <e.icon size={32}></e.icon>
          </div>
          <div className="flex flex-col items-left justify-center space-y-3">
            <h3 className="text-purple-800 font-bold text-3xl font-purple-800 text-left md:text-4xl">
              {e.count}
            </h3>
            <p className="font-grey-200 text-md uppercase text-center">
              {e.title}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
