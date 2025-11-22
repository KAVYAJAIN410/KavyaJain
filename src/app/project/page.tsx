"use client";
import Filter from "../components/Filter";
import Filter2 from "../components/FilterSecondary";
import Navbar from "../components/Navbar";
import ProjectTable from "../components/ProjectTable";
import ProjectOverlay from "../components/ProjectOverlay";
import ProjectPopup from "../components/ProjectPopup";
import ProjectCard from "../components/ProjectCard";
import BackgroundProps from "../components/BackgroundProps";
import { useState, useRef } from "react";
import Image from "next/image";

export default function Project() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [openProjectId, setOpenProjectId] = useState(-1);
  const constraintsRef = useRef(null);
  return (
    <>
      <div className="container z-[-10]">
        <BackgroundProps />
      </div>
      <Filter />
      <Filter2 />
      <div
        className="w-[100vw] h-[100vh] overflow-hidden flex justify-center items-center"
        ref={constraintsRef}
      >
        <div
          className={`project-content  transition-all duration-[750ms] ease-inc  ${
            menuOpen
              ? "translate-y-[-50%] scale-[95%]  blur-sm pointer-events-none"
              : " md:translate-y-0 scale-100 blur-0 pointer-events-auto"
          } w-[100%] h-[100%] md:h-[100%] p-4`}
        >
          {/* <div className=" heading text-secondary text-[max(5vw,3rem)] font-coolvetica tracking-wider">
            Projects
          </div> */}
          {/* <div className="line bg-primary w-[70%] h-[2px] mb-6"></div> */}
          <ProjectTable
            setProjectOpen={setProjectOpen}
            setOpenProjectId={setOpenProjectId}
          />
        </div>
      </div>
      {/* <ProjectOverlay
        projectOpen={projectOpen}
        setProjectOpen={setProjectOpen}
        openProjectId={openProjectId}
      /> */}
      <ProjectPopup
        projectOpen={projectOpen}
        setProjectOpen={setProjectOpen}
        openProjectId={openProjectId}
      ></ProjectPopup>
      <Navbar toggleMenu={setMenuOpen} refcontent={constraintsRef} />
    </>
  );
}
