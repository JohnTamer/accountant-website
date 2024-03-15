"use client";

import { useState } from "react";
import Aside from "../UI/aside/aside";

export default function Header() {
  const [asideToggle, setAsideToggle] = useState(false);
  const toggleHeaderHandler = () => {
    setAsideToggle(!asideToggle);
  };
  return (
    <>
      <div className="h-20 absolute z-20  px-4   md:px-24 flex items-end">
        <div className="hover:cursor-pointer " onClick={toggleHeaderHandler}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12 mb-5 md:mb-0 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
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
