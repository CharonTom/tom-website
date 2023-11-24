"use client";

import ProjetCard from "../components/PortfolioCards";
import PortfolioButtonsCard from "../components/PortfolioButtonsCard";
import { useTranslateForData } from "../utils/project-datas";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext, useState } from "react";
import translate from "../utils/translate";

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAllProjects, setShowAllProjects] = useState(false);

  const { language } = useContext(LanguageContext);
  const projects = useTranslateForData();

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  // Filtrer les projets en fonction de la catégorie sélectionnée
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedCategory)
        );

  const displayedProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  const shouldShowToggle = filteredProjects.length > 3;

  return (
    <section id="portfolio" className="section overflow-hidden  relative">
      <div
        style={{ transform: "translate3d(0,0,0)" }}
        className="blur-[100px] bg-primary rounded-full absolute top-[230px] left-[10px] w-[180px] h-[240px]"
      ></div>
      <div
        style={{ transform: "translate3d(0,0,0)" }}
        className="blur-[100px] bg-tertiary rounded-full absolute top-[250px] right-[180px] w-[280px] h-[280px]"
      ></div>
      <div className="container mx-auto">
        <h2 className="">
          {translate[language as keyof typeof translate].portfolio}
        </h2>

        {/* Boutons de filtrage */}

        <div className="flex flex-wrap justify-center space-x-4 mb-8">
          <button
            className={`btn ${selectedCategory === "all" ? "active" : ""}`}
            onClick={() => handleCategorySelect("all")}
          >
            {translate[language as keyof typeof translate].filterButton1}
          </button>

          <button
            className={`btn ${
              selectedCategory === "intégration web" ? "active" : ""
            }`}
            onClick={() => handleCategorySelect("intégration web")}
          >
            {translate[language as keyof typeof translate].filterButton2}
          </button>
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
            className={`btn ${selectedCategory === "back-end" ? "active" : ""}`}
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

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm-grid-cols-1 gap-10">
          {displayedProjects.map((project) => (
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
          ))}
        </div>

        {/* Bouton "Voir plus/Voir moins" */}

        {shouldShowToggle && (
          <div className="text-center flex justify-center mt-6">
            <button className="btn" onClick={toggleShowAllProjects}>
              {showAllProjects
                ? `${
                    translate[language as keyof typeof translate].showLessButton
                  }`
                : `${
                    translate[language as keyof typeof translate].showMoreButton
                  }`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
