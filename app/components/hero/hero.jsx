import Image from "next/image";
import heroBackground from "/public/background.png";
import accountantPicture from "/public/human.png";
import Header from "../header/header";
export default function Hero() {
  return (
    <>
      <div className="relative w-full    ">
        <div className="absolute w-full h-[30rem] md:h-[36rem] backdrop-blur-md 	">
          <Image
            src={heroBackground}
            alt="hero image"
            className="w-full h-full object-scale-up"
          />
        </div>
        <div className="relative  w-full h-[30rem] md:h-[36rem] backdrop-blur-[1.5px] grid   grid-cols-1 md:grid-cols-2 px-4 py-16 md:py-0 md:px-36   ">
          <div className="flex flex-col w-full items-center justify-center ">
            <div className="flex  w-full items-center  ">
              {" "}
              <p className="text-[#C1B494] font-extrabold text-xl md:text-4xl">
                Mena Hemaia{" "}
              </p>
              <p className="text-md text-white ml-2 mt-2"> (CPA - CIA)</p>
            </div>

            <p className="text-white text-sm mt-2">
              Finance, tax and accounting Expert, CEO of Accountack, Founder of
              MenaTCP, Audit Committee Member I am licensed as a CPA and CIA.
            </p>

            <div className="w-full ">
              <div className="w-10 h-10 md:w-20 md:h-20  bg-gray-400 rounded-full mt-5 flex justify-center items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center items-center ">
            <div className=" w-full h-56 md:h-96">
              {" "}
              <Image
                src={accountantPicture}
                alt="accountant picture"
                className="w-full h-full object-contain  "
              />
            </div>
          </div>
        </div>
        <div className="w-full h-36 -mt-36  bg-gradient-to-t from-[#1b2735] to-[#1b273500] relative"></div>
      </div>
    </>
  );
}
