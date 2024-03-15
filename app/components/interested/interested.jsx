import Card from "../UI/card/card";

const CARDS = [
  {
    id: 1,
    cardName: "Accountack",
    cardTitle: "If you have questions about accounting, tax, or finance",
    cardParagraph:
      "Accountack is here to help! Book a FREE consultation or visit our website!",
    cardWebsite: "www.Accountack.com",
  },
  {
    id: 2,
    cardName: "MenaTCP",
    cardTitle: "If you're a student interested in our academy",
    cardParagraph:
      "MenaTCP Education Academy is here for you! Visit our website or book a FREE consultation!",
    cardWebsite: "www.MenaTCP.com",
  },
];
export default function Interested() {
  return (
    <>
      <div className="w-full h-fit md:px-24 lg:px-36 py-12 bg-[#2F3A4C] grid grid-cols-1 md:grid-cols-2 justify-items-center gap-y-5">
        {CARDS?.map((card) => (
          <Card key={card.id} cardData={card} />
        ))}
      </div>
    </>
  );
}
