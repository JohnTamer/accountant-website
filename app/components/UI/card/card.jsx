"use client";
import Image from "next/image";
import Socials from "../socials/socials";
import { openNewTabHandler } from "@/app/utils/openNewTabHandler";

export default function Card({ cardData }) {
  return (
    <>
      <div className=" w-[355px] md:w-[488px] h-fit rounded-xl">
        <div className="w-full h-64 py-12 bg-[#DFDFDF] flex justify-center items-center rounded-t-xl  ">
          <div className={`w-48 ${cardData.imageHeight} `}>
            <Image
              src={cardData.cardImage}
              alt="accountack"
              className="w-full h-full object-fill"
            />
          </div>
        </div>
        <div className="w-full h-62 py-4   bg-white rounded-b-xl flex flex-col gap-y-3 justify-center items-center">
          <div className="w-full text-center font-bold lg:text-lg px-4 lg:px-24 text-[#2F3A4C]">
            {cardData.cardTitle}
          </div>
          <div className="w-full text-center text-md font-medium px-4 lg:px-16 text-[#1B2735]">
            {cardData.cardParagraph}
          </div>
          <div
            onClick={() =>
              openNewTabHandler(`https://www.${cardData.cardName}.com/`)
            }
            className="w-56 h-fit p-2 text-center text-md font-semibold bg-[#C1B494] text-[#2F3A4C] rounded-md hover:cursor-pointer"
          >
            {cardData.cardWebsite}
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-x-4 gap-y-2 text-sm md:text-md font-bold px-3 lg:px-12 text-[#2F3A4C]  ">
            Contact {cardData.cardName} :{" "}
            <Socials width="w-8" height="h-8" gapX="gap-x-4" white="true" />
          </div>
        </div>
      </div>
    </>
  );
}
