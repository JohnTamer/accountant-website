"use client";
import "./hero.css";
import Image from "next/image";
import heroBackground from "/public/bg.jpg";
import mobileBackground from "/public/mobileBg.webp";
import accountantPicture from "/public/person.webp";
import shade from "/public/shade.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import VideoModal from "../videoModal/videoModal";
import { useState } from "react";

export default function Hero() {
  const [isVisible, setIsvisible] = useState(false);
  const [productImage, setProductImage] = useState();
  const openModalHandler = (productImage) => {
    setIsvisible(true);
    setProductImage(productImage);
  };

  return (
    <>
      <VideoModal
        isVisible={isVisible}
        setIsvisible={setIsvisible}
        productImage={productImage}
      />
      <div className="relative w-full">
        <div className="absolute w-full h-[30rem] md:h-[42rem] 	">
          <Image
            src={heroBackground}
            alt="hero image"
            className="w-full h-full object-fill hidden lg:block"
          />

          <Image
            src={mobileBackground}
            alt="hero image"
            className="w-full h-full object-fill block lg:hidden"
          />
        </div>
        <div className="relative    w-full h-[30rem] md:h-[42rem] grid   grid-cols-1 md:grid-cols-3 px-4 py-16 md:py-0 md:px-12 lg:px-36    ">
          <div className="flex flex-col   w-full h-full  justify-end md:justify-center md:px-12 lg:px-16 col-span-3 lg:col-span-2  ">
            <div className="flex  w-full items-center  ">
              {" "}
              <span className="text-[#C1B494] font-extrabold text-xl md:text-5xl">
                Mena Hemaia{" "}
              </span>
              <span className="md:text-2xl font-bold text-white ml-2 mt-1  md:mt-3 ">
                {" "}
                (CPA - CIA)
              </span>
            </div>

            <p className="text-white text-lg font-semibold mt-2 ">
              Finance, tax and accounting Expert, CEO of Accountack, <br />
              MenaTCP, Audit Committee Member <br /> I am licensed as a CPA and
              CIA.
            </p>

            <div className="w-full ">
              <div
                onClick={openModalHandler}
                className="w-10 h-10 md:w-[90px] md:h-[90px]  bg-gray-400 text-white rounded-full mt-5 flex justify-center items-center hover:bg-[#C1B494] hover:bg-opacity-40 hover:text-[#C1B494] hover:cursor-pointer "
              >
                <FontAwesomeIcon
                  icon={faPlay}
                  className="text-xl ml-1 md:text-5xl text-center md:ml-2"
                />
              </div>
            </div>
          </div>
          <div>
            {" "}
            <Image
              src={accountantPicture}
              alt="hero image"
              className="w-96 h-fit object-fill absolute bottom-0 z-20 hidden lg:block"
            />
          </div>
        </div>
        <div>
          <Image
            src={shade}
            alt="hero image"
            className="w-fit h-fit object-fill absolute -bottom-1  z-20 hidden lg:block"
          />
        </div>
      </div>
    </>
  );
}
