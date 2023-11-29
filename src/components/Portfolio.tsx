import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { NavigationOptions } from "swiper/types/modules/navigation";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ProjetCard from "../components/PortfolioCards";
import PortfolioButtonsCard from "../components/PortfolioButtonsCard";

import { useTranslateForData } from "../utils/project-datas";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext, useState } from "react";
import translate from "../utils/translate";

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { language } = useContext(LanguageContext);
  const projects = useTranslateForData();

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    console.log(setSelectedCategory(category));
  };

  // Filtrer les projets en fonction de la catégorie sélectionnée
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedCategory)
        );

  return (
    <>
      <section id="portfolio" className="section overflow-hidden relative">
        <div
          style={{ transform: "translate3d(0,0,0)" }}
          className="blur-[100px] bg-primary rounded-full absolute top-[230px] left-[10px] w-[180px] h-[240px]"
        ></div>
        <div
          style={{ transform: "translate3d(0,0,0)" }}
          className="blur-[100px] bg-tertiary rounded-full absolute top-[250px] right-[180px] w-[280px] h-[280px]"
        ></div>
        <div className="container mx-auto">
          <h2>{translate[language as keyof typeof translate].portfolio}</h2>

          {/* Boutons de filtrage */}

          <div className="flex flex-wrap justify-center space-x-4 mb-5">
            <button
              className={`btn ${selectedCategory === "all" ? "active" : ""}`}
              onClick={() => handleCategorySelect("all")}
            >
              {translate[language as keyof typeof translate].filterButton1}
            </button>

            {/* <button
              className={`btn ${
                selectedCategory === "intégration web" ? "active" : ""
              }`}
              onClick={() => handleCategorySelect("intégration web")}
            >
              {translate[language as keyof typeof translate].filterButton2}
            </button> */}
            <button
              className={`btn ${
                selectedCategory === "front-end" ? "active" : ""
              }`}
              onClick={() => handleCategorySelect("front-end")}
            >
              Front-End
            </button>
            <button
              className={`btn ${selectedCategory === "SEO" ? "active" : ""}`}
              onClick={() => handleCategorySelect("SEO")}
            >
              SEO
            </button>
            <button
              className={`btn ${
                selectedCategory === "back-end" ? "active" : ""
              }`}
              onClick={() => handleCategorySelect("back-end")}
            >
              Back-End
            </button>
            <button
              className={`btn ${
                selectedCategory === "full-stack" ? "active" : ""
              }`}
              onClick={() => handleCategorySelect("full-stack")}
            >
              Full-Stack
            </button>
          </div>

          {/* Affichage des projets*/}

          <div className="containers">
            <Swiper
              effect={"coverflow"}
              //  grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 150,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={
                {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                  clickable: true,
                } as NavigationOptions
              }
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_containers"
            >
              {filteredProjects.map((project) => (
                <SwiperSlide key={project.id}>
                  <ProjetCard
                    key={project.id}
                    titre={project.titre}
                    img={project.img}
                    description={project.description}
                    technos={project.technos}
                    button={project.buttons.map((btn, index) => (
                      <PortfolioButtonsCard
                        key={index}
                        text={btn.text}
                        link={btn.link}
                      />
                    ))}
                  />
                </SwiperSlide>
              ))}

              <FaAngleLeft className="swiper-button-prev bg-secondary text-white w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] rounded-full p-2 transition-all duration-300 hover:text-primary" />
              <FaAngleRight className="swiper-button-next bg-secondary text-white w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] rounded-full p-2 transition-all duration-300 hover:text-primary" />
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
      </section>
      <section></section>
    </>
  );
}

export default Portfolio;
