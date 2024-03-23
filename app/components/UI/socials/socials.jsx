"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faYoutube,
  faInstagram,
  faTiktok,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { openNewTabHandler } from "@/app/utils/openNewTabHandler";

export default function Socials({ width, height, gapX, white, socials }) {
  return (
    <>
      <div className={`flex flex-row justify-center ${gapX} items-center`}>
        <div
          className={`${width} ${height} hover:cursor-pointer rounded-md flex justify-center items-center ${
            white ? `bg-[#EEE8D9]` : `bg-[#C1B494]`
          }  `}
          onClick={() =>
            openNewTabHandler("https://www.youtube.com/@menahemaia")
          }
        >
          <FontAwesomeIcon icon={faYoutube} className="text-md lg:text-2xl" />
        </div>
        <div
          className={`${width} ${height} hover:cursor-pointer rounded-md flex justify-center items-center ${
            white ? `bg-[#EEE8D9]` : `bg-[#C1B494]`
          }  `}
          onClick={() =>
            openNewTabHandler(
              ` ${
                socials
                  ? `${socials.instagram}`
                  : "https://www.instagram.com/mena.hemaia"
              } `
            )
          }
        >
          <FontAwesomeIcon icon={faInstagram} className="text-md lg:text-2xl" />
        </div>
        <div
          className={`${width} ${height} hover:cursor-pointer rounded-md flex justify-center items-center ${
            white ? `bg-[#EEE8D9]` : `bg-[#C1B494]`
          }  `}
          onClick={() =>
            openNewTabHandler(
              ` ${
                socials
                  ? `${socials.instagram}`
                  : "https://www.linkedin.com/in/mena-hemaia-503a8383/"
              } `
            )
          }
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
          onClick={() =>
            openNewTabHandler(
              ` ${
                socials
                  ? `${socials.facebook}`
                  : "https://www.tiktok.com/@menahemaia"
              } `
            )
          }
        >
          <FontAwesomeIcon
            icon={socials ? faFacebook : faTiktok}
            className="text-md lg:text-2xl"
          />
        </div>
      </div>
    </>
  );
}
