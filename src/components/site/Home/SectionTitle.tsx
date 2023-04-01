import Link from "next/link";

export default function SectionTitle({
  title,
  description,
  href,
  linkDescription,
}: any) {
  return (
    <div>
      <h3
        className="
      text-center text-3xl font-bold
      md:text-4xl md:text-left"
      >
        {title}
      </h3>
      <div
        className="
      flex flex-col justify-between items-center mt-4 
      md:flex-row md:items-center md:mt-0"
      >
        <p
          className="
        text-center text-sm text-gray-400 w-2/3
        md:text-left"
        >
          {description}
        </p>
        <Link
          className="
          text-purple-800 text-md bg-white rounded-lg border border-purple-200 p-4 baseline mt-4 text-center w-2/3
          md:mt-0 md:w-auto md:text-lg"
          href={href}
        >
          {linkDescription}
        </Link>
      </div>
    </div>
  );
}
