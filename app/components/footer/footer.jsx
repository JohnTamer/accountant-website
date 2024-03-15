import Socials from "../UI/socials/socials";

export default function Footer() {
  return (
    <>
      <div className="w-full flex flex-col gap-y-8 md:gap-y-2 px-12 md:px-36 py-12 bg-[#1B2735]">
        <div className="w-full flex flex-col items-center h-fit md:h-36  ">
          <p className="text-4xl font-bold text-white">Subscribe Now</p>
          <p className="text-white text-xs mt-3">
            Stay up to date with our latest news.
          </p>
          <div className="w-full flex items-center justify-center gap-x-5 mt-3 ">
            <input
              className="w-96  bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-2 px-4  focus:outline-none focus:bg-white "
              type="email"
              placeholder="Your email address"
            />
            <button className="w-48 h-fit p-2 text-center text-sm bg-[#C1B494] text-[#2F3A4C] rounded-md hover:cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-full h-fit md:h-36 flex flex-col md:flex-row justify-center gap-x-20  ">
          <div>LOGO</div>
          <div>
            <ul>
              <li className="text-[#C1B494] font-bold">Quick Links</li>
              <li className="mt-3 text-sm text-white">About me</li>
              <li className="text-sm text-white">
                Intelligent Strategies Book
              </li>
              <li className="text-sm text-white">Subscribe</li>
            </ul>
          </div>
          <div>
            <ul className="text-sm text-white mt-10 ">
              <li className="w-full">Visit Accountack Website</li>
              <li>Visit MenaTCP Website</li>
            </ul>
          </div>
        </div>
        <hr className="h-[1px] text-white w-full" />
        <div className="flex w-full flex-col md:flex-row items-center gap-y-5 md:justify-between">
          <div className="text-xs text-white">
            © Copyright 2022, All Rights Reserved by Innovation Scope
          </div>
          <div>
            <Socials />
          </div>
        </div>
      </div>
    </>
  );
}
