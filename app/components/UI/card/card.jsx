import Socials from "../socials/socials";

export default function Card({ cardData }) {
  return (
    <>
      <div className="w-80 h-96 rounded-xl">
        <div className="w-full h-44 bg-[#DFDFDF] flex justify-center items-center rounded-t-xl  ">
          <div className="w-36 h-24 bg-blue-800"></div>
        </div>
        <div className="w-full h-52 py-4 px-4 bg-white rounded-b-xl flex flex-col gap-y-3 justify-center items-center">
          <div className="w-full text-center font-bold">
            {cardData.cardTitle}
          </div>
          <div className="w-full text-center text-xs">
            {cardData.cardParagraph}
          </div>
          <div className="w-48 h-fit p-2 text-center text-sm bg-[#C1B494] text-[#2F3A4C] rounded-md hover:cursor-pointer">
            {cardData.cardWebsite}
          </div>
          <div className="w-full flex flex-row items-center gap-x-2 text-xs font-bold">
            Contact {cardData.cardName} : <Socials />
          </div>
        </div>
      </div>
    </>
  );
}
