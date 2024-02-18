import skillLogo from "../assets/logos/skill.webp";
import portfolioLogo from "../assets/logos/portfolio.webp";
import linkedinLogo from "../assets/logos/linkedin.webp";
import githubLogo from "../assets/logos/github.webp";
import externeLogo from "../assets/logos/external-link.webp";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { GrTechnology } from "react-icons/gr";

import { BsChatSquareText, BsBriefcase, BsGear } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

function Nav() {
  return (
    <nav className="fixed bottom-4 lg:bottom-5 z-20 mx-auto left-1/2 transform -translate-x-1/2">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
        className="text-black text-3xl border-2 dark:border-gray border-primary rounded-full dark:bg-navbar bg-light-navbar
        flex justify-around items-center h-[70px] max-w-[430px] mx-auto"
      >
        <Link
          className="mx-3 lg:mx-5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
          to="hero"
          spy={true}
          smooth={true}
          activeClass="active"
          duration={500}
        >
          <BiUser />
        </Link>
        <Link
          className="mx-3 lg:mx-5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
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
          className="mx-3 lg:mx-5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
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
          className="mx-3 lg:mx-5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
          to="contact"
          spy={true}
          smooth={true}
          activeClass="active"
          duration={500}
          offset={25}
        >
          <BsChatSquareText />
        </Link>
        <div className="relative w-[36px] mx-2 lg:mx-4 rounded-full hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
          <a
            href="https://github.com/CharonTom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-full rounded-full w-[36px] h-[36px]"
              src={githubLogo}
              alt="external link pictogram"
            />
            <img
              className="absolute -bottom-[5px] -right-[5px] w-[18px] h-[18px]"
              src={externeLogo}
              alt="external arrow"
            />
          </a>
        </div>
        <div className="relative w-[36px] mx-2 lg:mx-4 rounded-full hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
          <a
            href="https://www.linkedin.com/in/tom-charon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-full rounded-full w-[36px] h-[36px]"
              src={linkedinLogo}
              alt="external link pictogram"
            />
            <img
              className="absolute -bottom-[5px] -right-[5px] w-[18px] h-[18px]"
              src={externeLogo}
              alt="external arrow"
            />
          </a>
        </div>
      </motion.div>
    </nav>
  );
}

export default Nav;
