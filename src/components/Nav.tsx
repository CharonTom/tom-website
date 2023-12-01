import profilLogo from "../assets/logos/profil.webp";
import skillLogo from "../assets/logos/skill.webp";
import portfolioLogo from "../assets/logos/portfolio.webp";
import contactLogo from "../assets/logos/contact.webp";
import linkedinLogo from "../assets/logos/linkedin.webp";
import githubLogo from "../assets/logos/github.webp";
import externeLogo from "../assets/logos/external-link.webp";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Nav() {
  return (
    <nav className="fixed bottom-4 lg:bottom-5 z-10 mx-auto left-1/2 transform -translate-x-1/2">
      <motion.ul
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
        className="border-2 dark:border-gray border-primary rounded-full dark:bg-navbar bg-light-navbar
        flex justify-around items-center h-[70px] w-full max-w-[430px] mx-auto"
      >
        <li className="mx-2 lg:mx-4 w-[40px] transition duration-500 ease-in-out cursor-pointer hover:scale-125">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            activeClass="active"
            duration={500}
          >
            <div className="border-2 border-gray rounded-full">
              <img
                src={profilLogo}
                alt="link's logo"
                className="h-full rounded-full w-[40px] h-[40px]"
              />
            </div>
          </Link>
        </li>
        <li className="mx-2 lg:mx-4 w-[40px] transition duration-500 ease-in-out cursor-pointer hover:scale-125">
          <Link
            to="skills"
            spy={true}
            smooth={true}
            activeClass="active"
            duration={500}
            offset={25}
          >
            <div className="border-2 border-gray rounded-full">
              <img
                src={skillLogo}
                alt="link's logo"
                className="h-full rounded-full w-[40px] h-[40px]"
              />
            </div>
          </Link>
        </li>
        <li className="mx-2 lg:mx-4 w-[40px] transition duration-500 ease-in-out cursor-pointer hover:scale-125">
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            activeClass="active"
            duration={500}
            offset={25}
          >
            <div className="border-2 border-gray rounded-full">
              <img
                src={portfolioLogo}
                alt="link's logo"
                className="h-full rounded-full w-[40px] h-[40px]"
              />
            </div>
          </Link>
        </li>
        <li className="mx-2 lg:mx-4 w-[40px] transition duration-500 ease-in-out cursor-pointer hover:scale-125">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            activeClass="active"
            duration={500}
            offset={25}
          >
            <div className="border-2 border-gray rounded-full">
              <img
                src={contactLogo}
                alt="link's logo"
                className="h-full rounded-full w-[40px] h-[40px]"
              />
            </div>
          </Link>
        </li>
        <li className="relative w-[40px] mx-2 lg:mx-4 border-2 border-gray rounded-full hover:scale-125 transition duration-500 ease-in-out relative cursor-pointer">
          <a
            href="https://github.com/CharonTom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-full rounded-full w-[40px] h-[40px]"
              src={githubLogo}
              alt="external link pictogram"
            />
            <img
              className="absolute -bottom-[5px] -right-[5px] w-[18px] h-[18px]"
              src={externeLogo}
              alt="external arrow"
            />
          </a>
        </li>
        <li className="relative w-[40px] mx-2 lg:mx-4 border-2 border-gray rounded-full hover:scale-125 transition duration-500 ease-in-out relative cursor-pointer">
          <a
            href="https://www.linkedin.com/in/tom-charon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-full rounded-full w-[40px] h-[40px]"
              src={linkedinLogo}
              alt="external link pictogram"
            />
            <img
              className="absolute -bottom-[5px] -right-[5px] w-[18px] h-[18px]"
              src={externeLogo}
              alt="external arrow"
            />
          </a>
        </li>
      </motion.ul>
    </nav>
  );
}

export default Nav;
