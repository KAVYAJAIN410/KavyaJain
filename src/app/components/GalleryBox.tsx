import React, { useState } from "react";
import Image from "next/image";

interface ImageData {
  src: string;
  caption?: string;
}
interface Props {
  currentImage?: string;
  currentIndex?: number;
  images: string[];
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}

const GalleryBox = ({
  currentImage,
  currentIndex = 0,
  images,
  setOpen,
  title,
}: Props) => {
  const [imageIndex, setImageIndex] = useState(currentIndex);
  if (currentIndex === -1) {
    return null;
  }
  return (
    <div className=" w-full  md:min-h-screen bg-[rgba(0,0,0,0.3)] text-white z-[1000]  backdrop-blur-sm flex justify-between flex-col md:flex-row">
      {setOpen && (
        <div
          className="text-white text-xl absolute top-4 right-4 p-4 bg-black flex items-center justify-center aspect-square w-12 h-12 cursor-pointer rounded-lg"
          onClick={() => setOpen(false)}
        >
          X
        </div>
      )}
      <div
        className="group md:min-h-screen h-full w-[15%]  items-center justify-end hover:bg-[rgba(0,0,0,0.1)] hidden md:flex transition-all duration-100 cursor-pointer"
        onClick={() => {
          if (imageIndex > 0) {
            setImageIndex(imageIndex - 1);
          }
          if (imageIndex === 0) {
            setImageIndex(images.length - 1);
          }
        }}
      >
        <Image
          src="/images/arrow-w.png"
          width={100}
          height={100}
          alt="arrow"
          className="w-8 h-auto md:w-20 text-[rgba(0,0,0,0.6)] group-active:scale-90 transition-all duration-100 ease-linear rotate-90 "
        />
      </div>
      <div className="w-full md:hidden flex justify-between">
        <div
          className="group md:min-h-screen h-full w-[15%] flex items-center justify-end hover:bg-[rgba(0,0,0,0.1)] transition-all duration-100 cursor-pointer"
          onClick={() => {
            if (imageIndex > 0) {
              setImageIndex(imageIndex - 1);
            }
            if (imageIndex === 0) {
              setImageIndex(images.length - 1);
            }
          }}
        >
          <Image
            src="/images/arrow-w.png"
            width={100}
            height={100}
            alt="arrow"
            className="w-8 h-auto md:w-20 text-[rgba(0,0,0,0.6)] group-active:scale-90 transition-all duration-100 ease-linear rotate-90 "
          />
        </div>
        <div
          className="group md:hidden md:min-h-screen h-full w-[15%] flex items-center justify-start  transition-all duration-100 cursor-pointer "
          onClick={() => {
            if (imageIndex < images.length - 1) {
              setImageIndex(imageIndex + 1);
            }
            if (imageIndex === images.length - 1) {
              setImageIndex(0);
            }
          }}
        >
          <Image
            src="/images/arrow-w.png"
            width={100}
            height={100}
            alt="arrow"
            className="w-8 h-auto md:w-20 text-[rgba(0,0,0,0.6)] group-active:scale-90 transition-all duration-100 ease-linear -rotate-90 "
          />
        </div>
      </div>
      <div className=" md:min-h-screen md:h-full w-full md:w-[70%] flex flex-col items-center justify-center">
        <div className=" w-[100%] p-4 aspect-[1920/1080] md:max-h-[70vh]">
          <Image
            src={`/images/${title.toLocaleLowerCase()}/${
              images[imageIndex] ? images[imageIndex] : "corest.png"
            }`}
            className="md:h-full w-auto aspect-auto mx-auto"
            alt={"image"}
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div
        className="group hidden md:flex md:min-h-screen h-full w-[15%]  items-center justify-start  transition-all duration-100 cursor-pointer "
        onClick={() => {
          if (imageIndex < images.length - 1) {
            setImageIndex(imageIndex + 1);
          }
          if (imageIndex === images.length - 1) {
            setImageIndex(0);
          }
        }}
      >
        <Image
          src="/images/arrow-w.png"
          width={100}
          height={100}
          alt="arrow"
          className="w-8 h-auto md:w-20 text-[rgba(0,0,0,0.6)] group-active:scale-90 transition-all duration-100 ease-linear -rotate-90 "
        />
      </div>
    </div>
  );
};

export default GalleryBox;
