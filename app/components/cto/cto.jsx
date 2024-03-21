import Image from "next/image";
import topJournal from "/public/topJournal.webp";
import bottomJournal from "/public/bottomJournal.webp";
import newTimesLogo from "/public/timesLogo.webp";
export default function Cto() {
  return (
    <>
      <div className="w-full h-fit   grid grid-cols-1 relative bg-[#1B2735]">
        <div className=" md:h-[16rem]">
          {" "}
          <Image
            src={topJournal}
            alt="journal"
            className="w-full h-full object-fill relative"
          />
        </div>
        <div className="text-white  text-sm w-12/12 md:w-12/12 flex flex-col justify-between items-center gap-y-3  py-6  ">
          <div className="w-[352px]">
            <Image src={newTimesLogo} alt="New Times Logo" />
          </div>
          <div className="w-11/12 md:w-7/12  text-center text-md  ">
            <span className="text-[#C1B494] font-extrabold text-lg md:text-5xl ">
              Mena Hemaia
            </span>{" "}
            <span className="text-lg lg:text-4xl font-bold">
              the king of the tax, finance, and accounting realm
            </span>
          </div>
          <p className="underline text-lg md:text-2xl">Read Article</p>
        </div>
        <div className=" md:h-[16rem]">
          {" "}
          <Image
            src={bottomJournal}
            alt="journal"
            className="w-full h-full object-fill relative"
          />
        </div>
      </div>
    </>
  );
}
