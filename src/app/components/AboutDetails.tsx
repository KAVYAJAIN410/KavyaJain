"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import ButtonOutline from "../components/ButtonOutline";
import ProgressCircular from "./ProgressCircular";
import ButtonPrime from "./ButtonPrime";
import SkillButton from "./SkillButton";
import ExperienceCard from "./ExperienceCard";
import data from "../about/SkillPage.json";
import Image from "next/image";
export default function AboutDetails() {
  return (
    <>
      <div className="content-container w-full h-[90vh] overflow-y-scroll z-[600]">
        <div className="heading text-secondary  text-[max(5vw,3rem)] font-coolvetica self-start">
          About Me
        </div>
        <div className="line w-[80%] h-[2px] bg-primary"></div>
        <div className="whitebox w-full border-0 border-white mb-4 py-8 flex justify-between">
          <div className="about-description font-montserrat w-full lg:w-[60%] text-xs  md:text-base text-justify  md:leading-8 tracking-wide">
            <Image
              src="/images/pfp.jpg"
              alt="profile"
              width={430}
              height={700}
              className="lg:hidden w-[40%] h-auto rounded-[10px] rounded-bl-[50px] float-right ml-2 md:ml-4"
            />
           I am Kavya Jain, a 3rd-year Information Technology student at VIT Vellore with a strong passion for Artificial Intelligence, Machine Learning, and Software Engineering. I enjoy building intelligent, scalable solutions and constantly exploring new technologies in AI-driven systems, full-stack development, and cloud computing. With a deep interest in understanding how complex systems work—from networking to advanced algorithms—I aim to innovate, learn continuously, and develop impactful projects that bridge theory with real-world application.
            <br />
            <br />
            <a
              href="https://drive.google.com/file/d/1hc73J9pQDKHivyliCErgwnzrXsPc2CLl/view?usp=drive_link"
              target="_blank"
            >
              <ButtonOutline>Resume</ButtonOutline>
            </a>
          </div>

          <Image
            src="/images/pfp.jpg"
            alt="profile"
            width={430}
            height={700}
            className="big-img w-[0%] lg:w-[30%] h-auto rounded-[20px] rounded-bl-[150px]"
          />
        </div>
        <div className="heading text-secondary  text-[max(5vw,3rem)] font-coolvetica self-start">
          Skills
        </div>
        <div className="line w-[80%] h-[2px] bg-primary"></div>

        <div className="whitebox w-full h-max lg:h-[60vh] mb-4 py-8">
          <div className="skill-container w-full md:h-full md:items-start flex flex-wrap justify-center gap-2 md:gap-6">
            {data.map((item, i) => (
              <SkillButton
                skill={item.skill}
                color={item.color}
                img={`/images/${item.img}`}
                key={i}
                index={i}
              />
            ))}
          </div>
        </div>
        <div className="heading text-secondary  text-[max(5vw,3rem)] font-coolvetica self-start">
          Experience
        </div>
        <div className="line w-[80%] h-[2px] bg-primary"></div>
       
          <ExperienceCard
            duration={"(JUNE 2025 - AUGUST 2025)"}
            position={"Systems & Automation Intern"}
            company={"Nereus Technologies, Bangalore, India"}
            role={
             "I engineered a scalable session booking platform capable of handling high user concurrency, implementing conflict-free slot allocation, Razorpay payment integration, and 100% reliable webhook-based status tracking, all supported by a custom internal testing and reporting dashboard. I automated end-to-end operational workflows using n8n, streamlining email, WhatsApp, and AI-driven agent interactions, resulting in 40% faster user communication and fully automated post-session reporting."
            }
            tech={[
              "ReactJS",
              "NEXT.JS",
              "Tailwind CSS",
              "Javascript",
              "TypeScript",
              "Redis",
              "n8n",
              "Razorpay",
              "AWS S3",
              "RAG"
            ]}
          />{" "}
           <div className="whitebox w-full h-[80vh] md:h-[60vh] mb-4 py-8">
          <ExperienceCard
            duration={"(NOVEMBER 2023-AUGUST 2024)"}
            position={"Ground Station Engineer"}
            company={"Team Sammard, VIT VELLORE"}
            role={
              "I developed an Electron.js desktop application to receive and process real-time CanSat telemetry via XBEE, reliably handling over 20 sensor data points per second with 99% mission uptime. The system integrated Python-based modules for real-time plotting, data logging, and analytics, providing mission-critical insights and ensuring compliance with aerospace telemetry standards, ultimately improving the accuracy and responsiveness of the ground-station interface during CanSat missions."
            }
            tech={[
              "XBEE",
              "ElectronJS",
              "Numpy",
              "Pandas",
              "Deep Learning",
              "OpenCV",
            ]}
          />
          <ExperienceCard
            duration={"JULY 2024 - AUGUST 2025"}
            position={"Projects Lead"}
            company={"RoboVITics"}
            role={
              "I directed multiple projects at RoboVITics, VIT, applying Software Development Life Cycle (SDLC) methodologies to guide teams through structured development, review, and deployment processes. I also led hackathons, technical sessions, and web development workshops, enabling hands-on learning and collaboration among members. Through these initiatives, I helped mentor and impact over 200 students, contributing to a stronger technical culture within the club and driving innovation across robotics, software, and emerging technologies."
            }
            tech={[
              
            ]}
          />
          <ExperienceCard
            duration={"JULY 2024 - PRESENT"}
            position={"Tech Executive"}
            company={"Ecell"}
            role={
              "I anchored E-Summit’25’s flagship event, E-Talk, addressing an audience of over 1000 attendees, including the VIT Chancellor, startup founders, and well-known internet personalities. As part of Futurepreneurs, I also contributed to building a real-time asset bidding platform for a business simulation event, implementing dynamic pricing, live data handling, and high user concurrency, which gave me hands-on experience in designing and managing high-performance systems."
            }
            tech={[
              
            ]}
          />
        </div>
      </div>
    </>
  );
}
