import Image from "next/image";
import Link from "next/link";
import logo from "./../../../assets/site/logo-social.png";
import { menu } from "./../../../data/site/home/Menu";

export default function NavBar() {
  return (
    <nav className="relative p-6">
      <div className="flex items-center justify-between">
        <div>
          <Image className="w-32" src={logo} alt="Logo"></Image>
        </div>
        <div className="hidden md:flex space-x-12 items-center">
          {menu.map((each, index) => (
            <Link
              className=" hover:text-purple-600"
              href={each.link}
              key={index}
            >
              {each.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-row ">
          <Link
            href="/login"
            className="hidden md:block p-3 px-6 pt-2 text-purple-800 rounded-full baseline hover:text-purple-600"
          >
            Sign in
          </Link>
          <Link
            href="/register"
            className="hidden md:block pt-2 px-6 text-white bg-purple-800 rounded-lg hover:bg-purple-600"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
