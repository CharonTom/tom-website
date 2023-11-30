import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { NavigationOptions } from "swiper/types/modules/navigation";
import classNames from "classnames";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import PortfolioCards from "../components/PortfolioCards";
import PortfolioButtonsCard from "../components/PortfolioButtonsCard";

import { useTranslateForData } from "../utils/project-datas";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext, useState } from "react";
import translate from "../utils/translate";

enum ProjectCategory {
  IntegrationWeb = "integration",
  FrontEnd = "front-end",
  SEO = "SEO",
  BackEnd = "back-end",
  FullStack = "full-stack",
}

const categoryButtons = [
  { label: "Front-end", category: ProjectCategory.FrontEnd },
  {
    label: "Integration",
    category: ProjectCategory.IntegrationWeb,
  },
  { label: "SEO", category: ProjectCategory.SEO },
  { label: "Back-End", category: ProjectCategory.BackEnd },
  { label: "Full-Stack", category: ProjectCategory.FullStack },
];

function Portfolio() {
  const { language } = useContext(LanguageContext);
  const projects = useTranslateForData();

  const [selectedCategory, setSelectedCategory] = useState(
    ProjectCategory.FrontEnd
  );

  const handleCategorySelect = (category: ProjectCategory) => {
    setSelectedCategory(category);
  };

  const filteredProjects = projects.filter((project) =>
    selectedCategory === ProjectCategory.FrontEnd
      ? project.categories.includes(ProjectCategory.FrontEnd)
      : project.categories.includes(selectedCategory)
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
            {categoryButtons.map((button) => (
              <button
                key={button.category}
                className={classNames("btn", {
                  active: selectedCategory === button.category,
                })}
                onClick={() => handleCategorySelect(button.category)}
              >
                {button.label}
              </button>
            ))}
          </div>

          {/* Affichage des projets*/}

          <div className="containers">
            <Swiper
              effect={"coverflow"}
              //  grabCursor={true}
              centeredSlides={true}
              // loop={true}
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
                  <PortfolioCards
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
