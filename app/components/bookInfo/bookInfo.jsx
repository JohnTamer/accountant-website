import Image from "next/image";
import amazonLogo from "/public/amazonLogo.png";
import firstBook from "/public/firstBook.jpg";
import secondBook from "/public/secondBook.jpg";
export default function BookInfo() {
  return (
    <>
      <div className="w-full px-12 md:px-36 py-16 bg-[#1B2735] grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2 h-96 py-12 grid items-center justify-around   text-white">
          <p className="font-bold text-2xl md:text-4xl">
            Intelligent Strategies: The path to tax free living
          </p>
          <p className="text-md md:text-lg">
            Get Your Copy of my book for financial freedom and smart tax-saving
            strategies! Available on the Amazon store now!
          </p>
          <div className="w-24 h-12">
            <Image
              src={amazonLogo}
              alt="amazon logo"
              className="w-full h-full object-fill"
            />
          </div>
        </div>
        <div className="relative  flex justify-center">
          <Image
            src={firstBook}
            alt="first book"
            className="w-64 h-80 md:w-76 md:h-96 object-fill relative z-10"
          />
          <Image
            src={secondBook}
            alt="second book"
            className="w-56 h-72 md:w-[262px] md:h-80 mt-6 md:mt-10 md:ml-36 ml-24 object-fill absolute "
          />
        </div>
      </div>
    </>
  );
}
