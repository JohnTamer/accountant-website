"use client";

import { useState } from "react";
import logo from "/public/logo.webp";
import Aside from "../UI/aside/aside";
import Image from "next/image";

export default function Header() {
  const [asideToggle, setAsideToggle] = useState(false);
  const toggleHeaderHandler = () => {
    setAsideToggle(!asideToggle);
  };
  return (
    <>
      <div className="h-20 absolute z-20  px-4 py-20    md:px-24 flex items-center gap-x-4 md:gap-x-8">
        <div className="hover:cursor-pointer " onClick={toggleHeaderHandler}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 md:w-[65px] md:h-20 mb-5 md:mb-0 font-bold "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="w-10 h-10 md:w-20 md:h-16 mb-5 md:mb-0">
          <Image src={logo} alt="logo" className="w-full h-full" />
        </div>
      </div>
      {asideToggle ? (
        <>
          <Aside
            toggleHeaderHandler={toggleHeaderHandler}
            opacity={asideToggle}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
