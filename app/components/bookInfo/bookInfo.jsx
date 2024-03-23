"use client";
import Image from "next/image";
import amazonLogo from "/public/amazonLogo.png";
import firstBook from "/public/firstBook.jpg";
import book from "/public/book.webp";
import { openNewTabHandler } from "@/app/utils/openNewTabHandler";
export default function BookInfo() {
  return (
    <>
      <div
        id="book"
        className="w-full px-12 md:px-36 py-8 md:py-16 bg-[#1B2735] grid grid-cols-1 md:grid-cols-3 lg:gap-x-20"
      >
        <div className="col-span-2  h-96 py-12 grid items-center justify-center  text-white">
          <p className="font-bold text-2xl lg:text-5xl ">
            Intelligent Strategies: The path to tax free living
          </p>
          <p className="text-md lg:text-xl ">
            Get Your Copy of my book for financial freedom and smart tax-saving
            strategies! Available on the Amazon store now!
          </p>
          <div className="w-[187px] h-[58.38px]">
            <Image
              onClick={() =>
                openNewTabHandler(
                  "https://www.amazon.com/Intelligent-Strategies-path-free-living/dp/B0CM4DVYBW"
                )
              }
              src={amazonLogo}
              alt="amazon logo"
              className="w-full h-full object-fill hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="relative col-span-1  flex justify-center">
          <Image
            onClick={() =>
              openNewTabHandler(
                "https://www.amazon.com/Intelligent-Strategies-path-free-living/dp/B0CM4DVYBW"
              )
            }
            src={book}
            alt="first book"
            className="w-full h-full object-fill relative z-10 hover:cursor-pointer"
          />
          {/* <Image
            src={secondBook}
            alt="second book"
            className="w-56 h-72 md:w-[262px] md:h-80 mt-6 md:mt-10 md:ml-36 ml-24 object-fill absolute "
          /> */}
        </div>
      </div>
    </>
  );
}
