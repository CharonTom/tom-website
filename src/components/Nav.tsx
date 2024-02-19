import linkedinLogo from "../assets/logos/linkedin.webp";
import githubLogo from "../assets/logos/github.webp";
import externeLogo from "../assets/logos/external-link.webp";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { FiUser } from "react-icons/fi";
import { BsChatSquareText, BsBriefcase, BsGear } from "react-icons/bs";

function Nav() {
  return (
    <nav className="fixed bottom-4 lg:bottom-6 z-20 mx-auto left-1/2 transform -translate-x-1/2">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
        className="text-secondary text-[26px] border-2 dark:border-gray border-primary rounded-full dark:bg-navbar bg-light-navbar
        flex justify-around items-center h-[70px] max-w-[420px] mx-auto lg:px-3"
      >
        <Link
          className=" transition duration-150 ease-in-out mx-2 w-[42px] h-[42px] flex items-center justify-center cursor-pointer rounded-full hover:bg-secondary hover:text-primary"
          to="hero"
          spy={true}
          smooth={true}
          activeClass="active"
          duration={500}
        >
          <FiUser className="user" />
        </Link>
        <Link
          className=" transition duration-150 ease-in-out mx-2 w-[42px] h-[42px] flex items-center justify-center cursor-pointer rounded-full hover:bg-secondary hover:text-primary"
          to="skills"
          spy={true}
          smooth={true}
          activeClass="active"
          duration={500}
          offset={25}
        >
          <BsGear />
        </Link>
        <Link
          className=" transition duration-150 ease-in-out mx-2 w-[42px] h-[42px] flex items-center justify-center cursor-pointer rounded-full hover:bg-secondary hover:text-primary"
          to="portfolio"
          spy={true}
          smooth={true}
          activeClass="active"
          duration={500}
          offset={25}
        >
          <BsBriefcase />
        </Link>
        <Link
          className=" transition duration-150 ease-in-out mx-2 w-[42px] h-[42px] flex items-center justify-center cursor-pointer rounded-full hover:bg-secondary hover:text-primary"
          to="contact"
          spy={true}
          smooth={true}
          activeClass="active"
          duration={500}
          offset={25}
        >
          <BsChatSquareText />
        </Link>

        <a
          href="https://github.com/CharonTom"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative w-[40px] mx-2 lg:mx-4 rounded-full hover:scale-110 transition duration-200 ease-in-out"
        >
          <img
            className="h-full rounded-full w-[40px] h-[40px]"
            src={githubLogo}
            alt="external link pictogram"
          />
          <img
            className="absolute -bottom-[5px] -right-[5px] w-[15px] h-[15px]"
            src={externeLogo}
            alt="external arrow"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/tom-charon/"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative w-[40px] mx-2 lg:mx-4 rounded-full hover:scale-110 transition duration-200 ease-in-out"
        >
          <img
            className="h-full rounded-full w-[40px] h-[40px]"
            src={linkedinLogo}
            alt="external link pictogram"
          />
          <img
            className="absolute -bottom-[5px] -right-[5px] w-[15px] h-[15px]"
            src={externeLogo}
            alt="external arrow"
          />
        </a>
      </motion.div>
    </nav>
  );
}

export default Nav;
