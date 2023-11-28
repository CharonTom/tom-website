import translate from "../utils/translate";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

interface Techno {
  logo: string;
  alt: string;
}

function ProjetCard({
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
       bg-portfolio-cards transition-all p-3
        flex flex-col gap-y-4 group "
      //   data-aos="fade-left"
      // data-aos-once="true"
    >
      <h3 className="">{titre}</h3>
      <div className="mx-auto transition-all duration-500 group-hover:scale-105">
        <img className=" object-cover" src={img} alt="projet" />
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
                className="w-14 bg-white rounded-full border-2 border-primary"
                src={techno.logo}
                alt={techno.alt}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="backdrop-blur-sm absolute p-6 bg-filter-portfolio w-full h-full left-0  rounded-lg flex flex-col justify-center items-center -bottom-[calc(100%+100px)] group-hover:bottom-0 transition-all duration-700">
        <p className="p-4 rounded-xl text-[14px] text-black text-center">
          {description}
        </p>

        <div className="flex flex-col items-center justify-center">
          {button}
        </div>
      </div>
    </div>
  );
}

export default ProjetCard;
