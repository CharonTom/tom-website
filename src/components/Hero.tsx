import { useState, useRef, useContext, useEffect } from "react";
import { RefObject } from "react";
import { TypeAnimation } from "react-type-animation";
import Me from "../assets/img/photo-de-profil.png";
import CV from "../assets/CV2023.pdf";
import translate from "../utils/translate";
import { LanguageContext } from "../contexts/LanguageContext";
import { motion } from "framer-motion";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const refContent: RefObject<HTMLDivElement> = useRef(null);
  const { language } = useContext(LanguageContext);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Changer la clé animationKey pour forcer le composant de la librairie à se mettre à jour.
    setAnimationKey((prevKey) => prevKey + 1);
  }, [language]);

  return (
    <section
      className="section dark:text-white text-secondary relative"
      id="hero"
    >
      <div
        style={{ transform: "translate3d(0,0,0)" }}
        className="blur-[100px] bg-primary rounded-full absolute top-[70%] left-[-10%] w-[20%] h-[20%]"
      ></div>
      <div
        style={{ transform: "translate3d(0,0,0)" }}
        className="blur-[100px] bg-tertiary rounded-full absolute top-[30%] right-[15%] w-[25%] h-[50%]"
      ></div>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-x-20 gap-y-5">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* text hi */}
            <div className="text-center lg:text-left mb-5 relative">
              <p className="font-semibold">
                {" "}
                {translate[language as keyof typeof translate].Hi}
              </p>
              <h1>
                {translate[language as keyof typeof translate].MyName}
                <span className="text-primary">Tom</span>
              </h1>
              <div className="font-semibold">
                <span className="mr-2">
                  {" "}
                  {translate[language as keyof typeof translate].Iam}
                </span>
                <TypeAnimation
                  key={animationKey}
                  sequence={[
                    translate[language as keyof typeof translate].dev1,
                    2000,
                    translate[language as keyof typeof translate].dev2,
                    2000,
                    translate[language as keyof typeof translate].dev3,
                    2000,
                  ]}
                  speed={20}
                  className="text-primary"
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>
            </div>
            {/* buttons part */}
            <div className="flex mx-auto lg:mx-0 max-w-max ">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="btn"
              >
                {translate[language as keyof typeof translate].aboutButton}
              </button>
              <a
                className="second-btn"
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
              >
                {translate[language as keyof typeof translate].cvButton}
              </a>
            </div>
            {/* speech */}
            <div
              ref={refContent}
              style={
                isOpen
                  ? {
                      height: refContent.current?.scrollHeight + "px",
                    }
                  : {
                      height: "0px",
                      opacity: "0",
                    }
              }
              className="transition-all duration-1000 ease-in-out overflow-hidden"
            >
              <p
                className="text-[14px] text-center p-3 w-[340px] border-2
            border-primaryVariant rounded-xl mx-auto lg:mx-0 m-4"
              >
                {translate[language as keyof typeof translate].speech}
              </p>
            </div>
          </motion.div>
          <motion.div
            className="box overflow-hidden z-10 h-[300px] lg:h-[400px] w-[300px]  lg:w-[400px] flex justify-center items-end mx-auto lg:mx-0"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img className="w-full" src={Me} alt="tom charon" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
