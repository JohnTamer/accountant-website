import Image from "next/image";
import humanOffice from "/public/humanOffice.png";
export default function Quote() {
  return (
    <>
      <div className="w-full  bg-[#1B2735] grid grid-cols-1 py-4 lg:py-8  px-12 md:px-0 md:pl-36   h-fit">
        <div className=" grid grid-cols-1 justify-center md:grid-cols-10 ">
          <div className="col-span-3 xl:col-span-2 border-8 w-10/12 sm:w-8/12 md:w-full h-80 md:h-fit     border-[#C1B494] bg-[#1B2735]">
            <Image
              src={humanOffice}
              alt="human office"
              className="w-full h-full relative z-10 -ml-5 -mt-6 mb-5 "
            />
          </div>
          <div className="col-span-9 xl:col-span-8 h-[90%] lg:h-[80%] bg-[#C1B494] text-[#2F3A4C] lg:mt-[2%] text-md lg:text-3xl font-medium px-4 py-8 md:px-16   grid  text-center  items-center">
            Blending my roles as a Certified Public Accountant, educator, and
            author, I intertwine financial acumen with a deep-seated commitment
            to positive societal impact.
          </div>
        </div>
      </div>
    </>
  );
}
