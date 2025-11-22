import { useState } from "react";
import Filter2 from "./FilterSecondary";
import ImageBanner from "./ImageBanner";
import ButtonTech from "./ButtonTech";
import Image from "next/image";
import Curtains from "./Curtains";
import BackButton from "./BackButton";
import ProjectData from "../project/Project";
import ButtonOutline from "../components/ButtonOutline";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import GalleryBox from "./GalleryBox";
interface ProjectProps {
  children?: any;
  projectOpen: boolean;
  setProjectOpen: any;
  openProjectId: Number;
}

const ProjectPopup: React.FC<ProjectProps> = ({
  projectOpen,
  setProjectOpen,
  openProjectId,
}) => {
  const openData = ProjectData.find((prodata) => prodata.id === openProjectId);

  return (
    <div
      className={`absolute top-0 left-0 w-[100vw] h-[100vh] overflow-hidden z-[500] ${
        projectOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <Curtains projectOpen={projectOpen}></Curtains>
      <div
        className={`main-content-project w-[100vw] h-[100vh] overflow-x-hidden bg-black overflow-y-scroll p-2 md:p-8 ${
          projectOpen
            ? "translate-y-[0%] opacity-100 pointer-events-auto "
            : "translate-y-[100%] opacity-0 pointer-events-none"
        } transition-all duration-500 delay-500 ease`}
      >
        {" "}
        <ImageBanner
          projectOpen={projectOpen}
          title={openData?.title}
          img={openData?.bannerImg}
        ></ImageBanner>
        <div className="Header-wrapper w-[100%] h-[50vh] mt-8">
          <div className="head-content w-full flex flex-col lg:flex-row justify-between gap-4">
            <div className="backBtn w-[100%] lg:w-[20%] scale-75 md:scale-100 -my-6 md:my-0">
              <BackButton setProjectOpen={setProjectOpen} />
            </div>
            <div className="description w-[100%]  lg:w-[50%]">
              <h2 className="text-primary text-lg md:text-2xl font-montserrat">
                Description
              </h2>
              <p className="text-tertiary font-montserrat text-sm md:text-base text-justify w-[100%] lg:w-[80%]">
                {openData?.description}
              </p>
              {/* <h2 className="text-primary text-lg md:text-2xl font-montserrat mt-4">
                View Project: 
                <img className="h-8 " src="data:image/png;base64,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"></img>
              </h2>
               */}
            </div>
            <div className="techstack w-[100%] lg:w-[25%]">
              <h2 className="text-primary text-lg md:text-2xl font-montserrat">
                Technologies Used
              </h2>
              <div className="ButtonMenu w-full flex flex-wrap gap-4">
                {openData?.tech.map((tech, i) => (
                  <ButtonTech key={i} text={tech} />
                ))}
              </div>
            </div>
            
          </div>
          
          {/* <div className="button-container w-[100%] md:w-[50%] flex m-auto justify-center gap-8 mt-8 mb-8 md:mb-0">
            {openData && openData?.gitlink.length > 0 && (
              <Link href={openData ? openData.gitlink : ""}>
                <ButtonOutline arrowdir="right">Github</ButtonOutline>
              </Link>
            )}
            {openData && openData?.demolink.length > 0 && (
              <Link href={openData ? openData.demolink : ""}>
                <ButtonOutline arrowdir="right">Demo</ButtonOutline>
              </Link>
            )}
          </div> */}
          {/* <div className="scroll-down md:flex justify-center scale-50 items-center mt-4 hidden ">
            <div className="text-arrow  text-2xl text-tertiary font-medium">
              S C R O L L
            </div>
            <Image
              src="/images/arrow-w.png"
              width={100}
              height={100}
              alt="arrow"
              className="brightness-75"
            />
          </div> */}
        </div>
        {/* <GalleryBox
          images={openData ? openData.imgBanners : ["a.jpg"]}
          title={openData?.title || "forkthis"}
        /> */}
        {/* {openData?.imgBanners.map((img, i) => (
          <div key={i}>
            <div className="white w-[100%]  mb-6 flex justify-center items-center">
              <div className="text text-black font-coolvetica text-4xl">
                <Image
                  src={`/images/${openData.title.toLocaleLowerCase()}/${img}`}
                  height={1080}
                  width={1920}
                  className="w-full h-full"
                  alt="projectImg"
                ></Image>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};
export default ProjectPopup;
