import Image from "next/image";
import Socials from "../UI/socials/socials";
import lightLogo from "/public/lightLogo.webp";
export default function Footer() {
  return (
    <>
      <div className="w-full flex flex-col gap-y-8 md:gap-y-2 px-12 md:px-36 py-12 md:py-20 bg-[#1B2735]">
        <div className="w-full flex flex-col items-center justify-center h-fit md:h-44 md:py-10   ">
          <p className="text-2xl md:text-6xl font-bold text-white ">
            Subscribe Now
          </p>
          <p className="text-white text-md mt-3">
            Stay up to date with our latest news.
          </p>
          <div className="w-full flex items-center justify-center gap-x-5 mt-10 ">
            <input
              className="w-96  bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-4  focus:outline-none focus:bg-white "
              type="email"
              placeholder="Your email address"
            />
            <button className="w-48 h-[40px] p-2 text-center font-bold text-md bg-[#C1B494] text-[#2F3A4C] rounded-md  hover:cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-full h-fit md:h-44 flex flex-col md:flex-row justify-center items-center gap-x-20  ">
          <div className="w-24 h-20">
            <Image src={lightLogo} alt="logo" className="w-full h-full" />
          </div>
          <div>
            <ul>
              <li className="text-[#C1B494] text-2xl font-bold">Quick Links</li>
              <li className="mt-3  text-white text-md ">About me</li>
              <li className="text-md  text-white">
                Intelligent Strategies Book
              </li>
              <li className="text-md  text-white">Subscribe</li>
            </ul>
          </div>
          <div>
            <ul className="text-md  text-white mt-10 ">
              <li className="w-full">Visit Accountack Website</li>
              <li>Visit MenaTCP Website</li>
            </ul>
          </div>
        </div>
        <div className="w-full flex justify-center ">
          {" "}
          <hr className="h-[1px] text-white w-11/12" />
        </div>

        <div className="flex w-full flex-col md:flex-row items-center gap-y-5 md:mt-5 md:justify-between">
          <div className="text-md text-white">
            © Copyright 2022, All Rights Reserved by Innovation Scope
          </div>
          <div>
            <Socials width="w-8" height="h-8" gapX="gap-x-5" white="true" />
          </div>
        </div>
      </div>
    </>
  );
}
