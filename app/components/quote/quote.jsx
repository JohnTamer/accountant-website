import Image from "next/image";
import humanOffice from "/public/humanOffice.png";
export default function Quote() {
  return (
    <>
      <div className="w-full  bg-[#1B2735]  px-12 md:px-0 md:pl-36 h-[35rem] md:h-80">
        <div className="w-12/12 h-80   flex flex-col items-center md:items-start  gap-y-10   md:flex-row ">
          <div className="w-10/12 md:w-3/12 h-72 relative flex ">
            <Image
              src={humanOffice}
              alt="human office"
              className="w-9/12 h-full relative z-10"
            />
            <div className="w-9/12 h-full border-8 border-[#C1B494] ml-8 mt-8 absolute     "></div>
          </div>
          <div className="flex w-9/12 h-full   items-center">
            {" "}
            <div className="w-12/12 relative bg-[#C1B494] flex justify-center items-center  md:w-full h-[14rem] py-4 px-4 md:py-12 md:px-24">
              <p className="font-bold text-[#2F3A4C]">
                Blending my roles as a Certified Public Accountant, educator,
                and author, I intertwine financial acumen with a deep-seated
                commitment to positive societal impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
