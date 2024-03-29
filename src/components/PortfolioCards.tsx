import translate from "../utils/translate";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

interface Techno {
  logo: string;
  alt: string;
}

function PortfolioCards({
  titre,
  img,
  description,
  technos,
  button,
}: {
  titre: string;
  img: string;
  description: string;
  technos: Techno[];
  button: React.ReactNode;
}) {
  const { language } = useContext(LanguageContext);

  return (
    <div
      className="rounded-xl relative overflow-hidden
       bg-glass-effect transition-all p-3
        flex flex-col gap-y-4 group"
    >
      <h3 className="">{titre}</h3>
      <div className="mx-auto transition-all duration-500 group-hover:scale-105">
        <img className="object-cover w-full h-full" src={img} alt="projet" />
      </div>
      <div className="relative flex flex-col gap-y-4 ">
        <div className="">
          <h4 className="">
            {translate[language as keyof typeof translate].usedTechnos}
          </h4>
          <div className="flex justify-around">
            {technos.map((techno, index) => (
              <img
                key={index}
                className="lg:w-14 md:w-12 w-10 h-10 lg:h-14 md:h-12 bg-white rounded-full border-[1px] border-white"
                src={techno.logo}
                alt={techno.alt}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="backdrop-blur-sm absolute lg:p-6 md:p-4 p-2 bg-filter-portfolio-card w-full h-full left-0 rounded-lg flex flex-col justify-around items-center -bottom-[calc(100%+100px)] group-hover:bottom-0 transition-all duration-700">
        <p className="p-4 rounded-xl text-[14px] lg:text-[16px] md:text-[16px] text-black text-center">
          {description}
        </p>
        {/* -bottom-[calc(100%+100px)] group-hover:bottom-0 */}
        <div className="flex items-center justify-center">{button}</div>
      </div>
    </div>
  );
}

export default PortfolioCards;
