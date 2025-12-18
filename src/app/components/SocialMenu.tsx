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
 <></>
  );
};
export default SocialMenu;
