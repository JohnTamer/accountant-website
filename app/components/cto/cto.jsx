import Image from "next/image";
import journal from "/public/journal.png";
export default function Cto() {
  return (
    <>
      <div className="w-full h-[20rem] md:h-[26rem] lg:h-[30rem] p-12 md:px-36 flex justify-center items-center relative bg-[#1B2735]">
        <div className="text-white text-sm w-12/12 md:w-10/12 flex flex-col justify-between items-center gap-y-3  py-6 z-20 mt-10 ">
          <p className="text-md md:text-2xl">New York Weekly</p>
          <div className="w-full  text-center text-md md:text-2xl ">
            <span className="text-[#C1B494] font-extrabold ">Mena Hemaia</span>{" "}
            the king of the tax, finance, and accounting realm
          </div>
          <p className="underline">Read Article</p>
        </div>

        <Image
          src={journal}
          alt="journal"
          className="w-full h-full object-scale-up absolute"
        />
      </div>
    </>
  );
}
