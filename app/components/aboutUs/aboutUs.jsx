import Socials from "../UI/socials/socials";

export default function AboutUs() {
  return (
    <>
      <div className="w-full bg-[#1B2735] h-fit p-12 md:p-36 grid grif-cols-1">
        <div className="relative   flex  items-end      ">
          <p className="absolute  font-bold text-6xl text-white text-opacity-30	">
            About
          </p>
          <p className="relative ml-[14px]  text-white text-3xl font-bold ">
            About me
          </p>
        </div>
        <div className="w-full    mt-5 grid  grid-cols-1 md:grid-cols-4 divide-x-2    ">
          <div className="col-span-3 p-4 text-white">
            <p>
              I am motivated by my passion for education and teaching on people
              and tools for resource technology, financial and financial
              strategies, and inclusive finance
            </p>{" "}
            <p className="mt-3 md:mt-5">
              Thanks to artificial intelligence and digital development, I
              decided to integrate artificial intelligence to clarify complex
              accounting models. I use social media, interactive tutorials, and
              insightful posts to guide audiences on a transformational journey
              toward financial prosperity.
            </p>
          </div>
          <div className=" text-center font-bold text-white p-4">
            Join me on this exciting financial journey guided by my wealth of
            experience!
            <div className="mt-3">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
