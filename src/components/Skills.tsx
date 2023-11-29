"use client";

import SkillCards from "../components/SkillCards";
import logoReact from "../assets/logos/react.webp";
import logoNext from "../assets/logos/next-js.webp";
import logoSass from "../assets/logos/sass.webp";
import logoJS from "../assets/logos/js.webp";
import logoTS from "../assets/logos/ts.webp";
import logoTailwind from "../assets/logos/tailwindCSS.webp";
import logoBootstrap from "../assets/logos/bootstrap.webp";
import logoNodeJS from "../assets/logos/nodejs.webp";
import logoMongo from "../assets/logos/mongoDB.webp";
import logoMySQL from "../assets/logos/mySQL.webp";
import logoPostman from "../assets/logos/postman.webp";
import logoExpress from "../assets/logos/expressJS.webp";
import logoGraphQL from "../assets/logos/graphql.webp";
import translate from "../utils/translate";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

const skillsData = [
  { name: "JavaScript", logo: logoJS },
  { name: "TypeScript", logo: logoTS },
  { name: "React", logo: logoReact },
  { name: "Next", logo: logoNext },
  { name: "Sass", logo: logoSass },
  { name: "Bootstrap", logo: logoBootstrap },
  { name: "TailwindCSS", logo: logoTailwind },
  { name: "Node.js", logo: logoNodeJS },
  { name: "Express.js", logo: logoExpress },
  { name: "GraphQL", logo: logoGraphQL },
  { name: "MySQL", logo: logoMySQL },
  { name: "MongoDB", logo: logoMongo },
  { name: "Postman", logo: logoPostman },
];

function Skills() {
  const { language } = useContext(LanguageContext);

  return (
    <section className="section" id="skills">
      <div className="mx-auto gradient-top w-full">
        <h2>{translate[language as keyof typeof translate].skills}</h2>
        <div className="sm:bg-workBg gradient-bottom bg-cover p-6 overflow-hidden relative">
          <div
            style={{ transform: "translate3d(0,0,0)" }}
            className="blur-[100px] bg-tertiary rounded-full absolute top-[70%] left-[-10%] w-[20%] h-[20%]"
          ></div>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col bg-glass-effect p-4 gap-y-5 rounded-lg ">
              <h3 className="">Front-End</h3>
              <div className="flex flex-wrap justify-center items-start gap-2.5 lg:gap-5">
                {skillsData.slice(0, 7).map((skill, index) => (
                  <SkillCards
                    key={index}
                    name={skill.name}
                    logo={skill.logo}
                    index={index}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col bg-glass-effect p-4 gap-y-5 rounded-lg ">
              <h3 className="">Back-End</h3>
              <div className="flex flex-wrap justify-center items-start gap-2.5 lg:gap-5">
                {skillsData.slice(7).map((skill, index) => (
                  <SkillCards
                    key={index}
                    name={skill.name}
                    logo={skill.logo}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
