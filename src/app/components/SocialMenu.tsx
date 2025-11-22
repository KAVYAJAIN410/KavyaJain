import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
interface SocialProps {
  socialOpen: boolean;
}
const variants = {
  openSocialMenu: {
    top: 6,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closeSocialMenu: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const variantsli = {
  openSocialMenu: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: 50 },
    },
  },
  closeSocialMenu: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const SocialMenu: React.FC = () => {
  return (
    <div
      className={` scale-75 md:scale-100 w-[90%] lg:w-[60%] h-16  absolute left-[50%] translate-x-[-50%] z-[1000] flex justify-evenly items-center bottom-12 md:bottom-2`}
    >
      <Link
        href="https://github.com/Keshav-Aneja"
        className="hover:scale-125 transition-all duration-200 ease"
      >
        <li style={{ listStyleType: "none" }}>
          <Image
            src="/images/github.png"
            alt=""
            width={25}
            height={25}
            className="w-8 aspect-square"
          ></Image>
        </li>
      </Link>
      <Link
        href="https://twitter.com/Keshav__Aneja"
        className="hover:scale-125 transition-all duration-200 ease"
      >
        <li style={{ listStyleType: "none" }}>
          <div className="content bg-white w-fit h-fit rounded-full">
            <Image
              src="/images/twitter-logo.png"
              alt=""
              width={25}
              height={25}
              className="w-8 aspect-square"
            ></Image>
          </div>
        </li>
      </Link>
      <Link
        href="https://www.linkedin.com/in/keshav-aneja/"
        className="hover:scale-125 transition-all duration-200 ease"
      >
        <li style={{ listStyleType: "none" }}>
          <Image
            src="/images/linkedin.png"
            alt=""
            width={25}
            height={25}
            className="w-8 aspect-square"
          ></Image>
        </li>
      </Link>
      <Link
        href="https://www.instagram.com/k.aneja09/"
        className="hover:scale-125 transition-all duration-200 ease"
      >
        <li style={{ listStyleType: "none" }}>
          <Image
            src="/images/instagram-logo.png"
            alt=""
            width={25}
            height={25}
            className="w-8 aspect-square"
          ></Image>
        </li>
      </Link>
    </div>
  );
};
export default SocialMenu;
