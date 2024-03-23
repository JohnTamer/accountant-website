"use client";
export default function VideoModal({ isVisible, productImage, setIsvisible }) {
  const closeModalHandler = () => {
    setIsvisible(false);
  };
  if (!isVisible) return null;
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md z-50 flex flex-col justify-center items-center p-4 "
        onClick={closeModalHandler}
      >
        <div className="place-self-end  hover:cursor-pointer">
          <p
            className="text-5xl mr-2 mb-2 text-white"
            onClick={closeModalHandler}
          >
            x
          </p>
        </div>
        <div className="w-full md:w-[50vw] h-96 md:h-[38rem] rounded-xl bg-white ">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/v07gXY6ESEo?si=uXcOgPdMugvp4g2d"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
