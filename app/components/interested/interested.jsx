import Card from "../UI/card/card";
import accountackLogo from "/public/accountack.webp";
import tcpLogo from "/public/tcp.webp";
const CARDS = [
  {
    id: 1,
    cardName: "Accountack",
    cardTitle: "If you have questions about accounting, tax, or finance",
    cardParagraph:
      "Accountack is here to help! Book a FREE consultation or visit our website!",
    cardWebsite: "www.Accountack.com",
    cardImage: accountackLogo,
    imageHeight: "h-36",
  },
  {
    id: 2,
    cardName: "MenaTCP",
    cardTitle: "If you're a student interested in our academy",
    cardParagraph:
      "MenaTCP Education Academy is here for you! Visit our website or book a FREE consultation!",
    cardWebsite: "www.MenaTCP.com",
    cardImage: tcpLogo,
    imageHeight: "h-44",
  },
];
export default function Interested() {
  return (
    <>
      <div
        id="interested"
        className="w-full h-fit px-12 lg:px-36 3xl:px-96  py-12 bg-[#2F3A4C] grid grid-cols-1 xl:grid-cols-10 align-middle justify-items-center xl:gap-x-5    gap-y-5"
      >
        {/* {CARDS?.map((card) => ( */}
        <div className="col-span-5 w-full grid justify-center  ">
          {" "}
          <Card cardData={CARDS[0]} />
        </div>
        <div className="col-span-5 w-full grid justify-center  ">
          {" "}
          <Card cardData={CARDS[1]} />
        </div>
        {/* ))} */}
      </div>
    </>
  );
}
