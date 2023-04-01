import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse mt-24 md:flex-row">
      <div className="flex flex-col space-y-12 md:w-1/2">
        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
          Getting <span className="text-purple-800">Quality</span> Education Is
          Now More <span className="text-purple-800">Easy</span>
        </h1>
        <p>
          Provides you with the latest online learning system and material{" "}
          <br />
          that help your knowleadge growing.
        </p>
        <div className="flex flex-row space-x-8">
          <Link
            className="p-3 pt-2 px-6 text-white bg-purple-800 rounded-lg hover:bg-purple-600"
            href="/register"
          >
            Get Started
          </Link>
          <Link
            className="p-3 pt-2 px-6 text-purple-800 rounded-lg hover:bg-gray-100"
            href="/register"
          >
            Get Free Trial
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        {/* <Image src={image} alt="Hero Section Image"></Image> */}
      </div>
    </section>
  );
}
