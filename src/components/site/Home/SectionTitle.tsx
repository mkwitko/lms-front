import Link from "next/link";

export default function SectionTitle({
  title,
  description,
  href,
  linkDescription,
}: any) {
  return (
    <div>
      <h3 className="text-left text-4xl font-bold">{title}</h3>
      <div className="flex flex-row justify-between items-center">
        <p className="text-sm text-gray-400">{description}</p>
        <Link
          className="text-purple-800 text-lg bg-white rounded-lg border border-purple-200 p-4 px-6 baseline"
          href={href}
        >
          {linkDescription}
        </Link>
      </div>
    </div>
  );
}
