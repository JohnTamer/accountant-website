import Image from "next/image";
import lightLogo from "/public/lightLogo.webp";
import Link from "next/link";
export default function Aside({ toggleHeaderHandler, opacity }) {
  return (
    <div
      className="w-[95vw] h-[100vh] absolute z-30"
      onClick={toggleHeaderHandler}
    >
      <aside
        className={`bg-[#1B2735] w-72  md:w-80 h-[30rem] md:h-[44rem] absolute z-20 flex flex-col px-4 md:px-8 py-12 items-center ${
          opacity ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
        <div className="w-full text-white -mt-8 " onClick={toggleHeaderHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 hover:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="text-[#C1B494] w-24 h-16">
          {" "}
          <Image src={lightLogo} alt="logo" className="w-full h-full" />{" "}
        </div>
        <hr className="w-56 h-[1px] mt-4 bg-[#C1B494] border-0 " />
        <ul className="mt-12 flex flex-col text-md text-white gap-3">
          <Link
            onClick={toggleHeaderHandler}
            href="/#about"
            className="hover:cursor-pointer hover:text-[#C1B494]"
          >
            About Mena Hemaia
          </Link>
          <li
            onClick={toggleHeaderHandler}
            className="hover:cursor-pointer hover:text-[#C1B494]"
          >
            Watch Video
          </li>
          <Link
            onClick={toggleHeaderHandler}
            href="/#book"
            className="hover:cursor-pointer hover:text-[#C1B494]"
          >
            Intelligent Strategies Book
          </Link>
          <Link
            onClick={toggleHeaderHandler}
            href="/#interested"
            className="hover:cursor-pointer hover:text-[#C1B494]"
          >
            Accountack
          </Link>
          <Link
            onClick={toggleHeaderHandler}
            href="/#interested"
            className="hover:cursor-pointer hover:text-[#C1B494]"
          >
            MenaTCP
          </Link>
        </ul>
      </aside>
    </div>
  );
}
