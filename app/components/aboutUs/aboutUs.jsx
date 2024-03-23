import Socials from "../UI/socials/socials";

export default function AboutUs() {
  return (
    <>
      <div
        id="about"
        className="w-full bg-[#1B2735] h-fit p-12 lg:p-36  grid grid-cols-1"
      >
        <div className="relative   flex  items-end     ">
          <p className="absolute  font-bold text-8xl text-white text-opacity-30	">
            About
          </p>
          <p className="relative ml-8 mb-1 text-white text-5xl font-bold ">
            About me
          </p>
        </div>
        <div className="w-full    mt-5 grid  grid-cols-1 md:grid-cols-4 divide-x-4    ">
          <div className="col-span-3 p-4 text-white">
            <p className="lg:text-xl">
              I am motivated by my passion for education and teaching on people
              and tools for resource technology, financial and financial
              strategies, and inclusive finance
            </p>{" "}
            <p className="mt-3 lg:mt-5 lg:text-xl">
              Thanks to artificial intelligence and digital development, I
              decided to integrate artificial intelligence to clarify complex
              accounting models. I use social media, interactive tutorials, and
              insightful posts to guide audiences on a transformational journey
              toward financial prosperity.
            </p>
          </div>
          <div className=" text-center flex flex-col justify-between text-xl font-bold text-white p-4">
            Join me on this exciting financial journey guided by my wealth of
            experience!
            <div className="">
              <Socials width="w-10" height="h-10" gapX="gap-x-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
