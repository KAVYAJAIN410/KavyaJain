"use client";
import { useState, useRef } from "react";
// import Navbar from "../sections/Navbar";
import Image from "next/image";
import Link from "next/link";
// import SocialMenu from "../components/SocialMenu";
import BackgroundProps from "./components/BackgroundProps";
// import Filter from "../components/Filter";
// import Filter2 from "../components/Filter2";
import { motion } from "framer-motion";
import Filter from "./components/Filter";
import Filter2 from "./components/FilterSecondary";
import SocialMenu from "./components/SocialMenu";
import Navbar from "./components/Navbar";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);
  const constraintsRef = useRef(null);
  return (
    <div className="w-full h-screen overflow-hidden">
      <Filter />
      <Filter2 />
      <div className="hero-container h-full w-full" ref={constraintsRef}>
        <div
          className={`main-content text-4xl md:text-7xl w-full h-full text-transparent flex flex-col justify-center items-center  ${
            menuOpen
              ? "translate-y-[-50%] scale-[95%]  blur-sm pointer-events-none"
              : "-translate-y-16 md:translate-y-0 scale-100 blur-0 pointer-events-auto"
          }
          ${
            socialOpen ? "" : ""
          } transition-all duration-[750ms] ease-inc font-coolvetica tracking-widest text-center relative  scale-[80%] md:scale-100`}
          style={{ fontFamily: "coolvetica" }}
        >
          Welcome to my Digital World
          <br />
          <div className="sub relative top-6">
            I&apos;m <br className="md:hidden" /> Kavya Jain
            <span className="no-outline w-full md:w-fit text-primary absolute right-[3px] md:right-[5px] bottom-[3px]">
              Kavya Jain
            </span>
          </div>
          <div className="sub-heading no-outline text-tertiary text-lg md:text-xl tracking-widest mb-16 font-montserrat font-medium relative top-12">
           I’m a full-stack AI/ML engineer.
          </div>
          {/* Social / Portfolio Links */}
<div className="flex space-x-6 md:space-x-8 justify-center items-center mt-2 relative top-12">
  <motion.a
    href="https://github.com/KAVYAJAIN410"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2 }}
    transition={{ duration: 0.2 }}
  >
    <Image
      src="/github.png"
      alt="GitHub"
      width={50}
      height={50}
      className="cursor-pointer"
    />
  </motion.a>

  <motion.a
    href="https://www.linkedin.com/in/kavya-jain-75698328a/"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2 }}
    transition={{ duration: 0.2 }}
  >
    <Image
      src="/lk.svg"
      alt="LinkedIn"
      width={80}
      height={80}
      className="cursor-pointer"
    />
  </motion.a>

  <motion.a
    href="https://drive.google.com/file/d/1hc73J9pQDKHivyliCErgwnzrXsPc2CLl/view"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2 }}
    transition={{ duration: 0.2 }}
  >
    <Image
      src="/rm.png"
      alt="Resume"
      width={50}
      height={50}
      className="cursor-pointer"
    />
  </motion.a>
</div>
          
          {/* <div className="links flex w-[70%] md:w-[40%] lg:w-[30%] justify-between">
            <motion.div
              className="project"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="../About"
                className="remove-def flex flex-col justify-center items-center "
              >
                <Image
                  src="/images/arrow.png"
                  width={80}
                  height={80}
                  alt="arrow"
                ></Image>
                <p className="no-outline text-xs md:text-sm text-tertiary tracking-widest font-montserrat">
                  ABOUT ME
                </p>
              </Link>
            </motion.div>
            <motion.div
              className="About "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="#"
                className="remove-def flex flex-col justify-center items-center "
                onClick={() => setSocialOpen(!socialOpen)}
              >
                <Image
                  src="/images/arrow.png"
                  width={80}
                  height={80}
                  alt="arrow"
                  className="rotate-180"
                ></Image>
                <p className="no-outline text-xs md:text-sm text-[#aeaeae] tracking-widest font-montserrat">
                  CONNECT WITH ME
                </p>
              </Link>
            </motion.div>
          </div> */}
          <div className="w-[150%] md:w-[60%] aspect-square md:aspect-[500/333] rounded-full  absolute -top-[60%] md:-top-[70%] bg-[#c98d7650] left-[50%] -translate-x-1/2">
            <SocialMenu />
          </div>
        </div>
        <BackgroundProps />
        <Navbar toggleMenu={setMenuOpen} refcontent={constraintsRef} />

        {/* <BackgroundProps />
        <SocialMenu socialOpen={socialOpen} />
        <Navbar toggleMenu={setMenuOpen} refcontent={constraintsRef} /> */}
      </div>
    </div>
  );
}
