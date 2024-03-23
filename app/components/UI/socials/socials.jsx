"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { openNewTabHandler } from "@/app/utils/openNewTabHandler";

export default function Socials({ width, height, gapX, white }) {
  return (
    <>
      <div className={`flex flex-row justify-center ${gapX} items-center`}>
        <div
          className={`${width} ${height} hover:cursor-pointer rounded-md flex justify-center items-center ${
            white ? `bg-[#EEE8D9]` : `bg-[#C1B494]`
          }  `}
          onClick={() => openNewTabHandler("https://www.linkedin.com/")}
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="text-md lg:text-2xl"
          />
        </div>
        <div
          className={`${width} ${height} hover:cursor-pointer rounded-md flex justify-center items-center ${
            white ? `bg-[#EEE8D9]` : `bg-[#C1B494]`
          }  `}
          onClick={() => openNewTabHandler("https://www.linkedin.com/")}
        >
          <FontAwesomeIcon icon={faYoutube} className="text-md lg:text-2xl" />
        </div>
        <div
          className={`${width} ${height} hover:cursor-pointer rounded-md flex justify-center items-center ${
            white ? `bg-[#EEE8D9]` : `bg-[#C1B494]`
          }  `}
          onClick={() => openNewTabHandler("https://www.youtube.com/")}
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="text-md lg:text-2xl"
          />
        </div>
        <div
          className={`${width} ${height} hover:cursor-pointer rounded-md flex justify-center items-center ${
            white ? `bg-[#EEE8D9]` : `bg-[#C1B494]`
          }  `}
          onClick={() => openNewTabHandler("https://www.youtube.com/")}
        >
          <FontAwesomeIcon icon={faYoutube} className="text-md lg:text-2xl" />
        </div>
      </div>
    </>
  );
}
