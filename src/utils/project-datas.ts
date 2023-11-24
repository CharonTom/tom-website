import logoReact from "../assets/logos/react.webp";
import logoHTML from "../assets/logos/html.webp";
import logoCSS from "../assets/logos/css.webp";
import logoBootstrap from "../assets/logos/bootstrap.webp";
import logoJS from "../assets/logos/js.webp";
import logoTS from "../assets/logos/ts.webp";
import logoSass from "../assets/logos/sass.webp";
import logoTailwind from "../assets/logos/tailwindCSS.webp";
import logoNodeJS from "../assets/logos/nodejs.webp";
import logoMongo from "../assets/logos/mongoDB.webp";
import logoGraphQL from "../assets/logos/graphql.webp";
import logoExpress from "../assets/logos/expressJS.webp";
import logoMySQL from "../assets/logos/mySQL.webp";
import logoNext from "../assets/logos/next-js.webp";

import imageKanap from "../assets/img/kanap.png";
import imageOMF from "../assets/img/omf.png";
import imagePiiquante from "../assets/img/piiquante.png";
import imageKasa from "../assets/img/kasa.png";
import imagePanthere from "../assets/img/panthere.png";
import imageMyWebsite from "../assets/img/my-website.png";
import imageAuth from "../assets/img/auth.png";
import imageBooki from "../assets/img/booki.png";
import imagePromptopia from "../assets/img/promptopia.png";
import imageTask from "../assets/img/task.png";
import imageEcommerce from "../assets/img/ecommerce.png";

import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

import translate from "./translate";

export function useTranslateForData() {
  const { language } = useContext(LanguageContext);

  const projects = [
    {
      id: 1,
      categories: ["intégration web", "front-end"],
      img: imageOMF,
      titre: "OhMyFood!",
      description: translate[language as keyof typeof translate].proj1,
      technos: [
        { logo: logoHTML, alt: "HTML" },
        { logo: logoCSS, alt: "CSS" },
        { logo: logoSass, alt: "Sass" },
      ],
      buttons: [
        {
          text: translate[language as keyof typeof translate].seeCodeButton,
          link: "https://github.com/CharonTom/OhMyFood",
        },
        {
          text: translate[language as keyof typeof translate]
            .presentationButton,
          link: "https://github.com/CharonTom/OhMyFood/blob/main/README.md",
        },
        {
          text: translate[language as keyof typeof translate]
            .visitWebsiteButton,
          link: "https://charontom.github.io/OhMyFood/",
        },
      ],
    },
    {
      id: 2,
      categories: ["front-end"],
      img: imageKanap,
      titre: "Kanap",
      description: translate[language as keyof typeof translate].proj2,
      technos: [
        { logo: logoHTML, alt: "HTML" },
        { logo: logoCSS, alt: "CSS" },
        { logo: logoJS, alt: "JavaScript" },
      ],
      buttons: [
        {
          text: translate[language as keyof typeof translate].seeCodeButton,
          link: "https://github.com/CharonTom/Kanap",
        },
        {
          text: translate[language as keyof typeof translate]
            .presentationButton,
          link: "https://github.com/CharonTom/Kanap/blob/main/README.md",
        },
        {
          text: translate[language as keyof typeof translate]
            .visitWebsiteButton,
          link: "https://charontom.github.io/Kanap/",
        },
      ],
    },
    {
      id: 3,
      categories: ["front-end", "intégration web"],
      img: imageKasa,
      titre: "Kasa",
      description: translate[language as keyof typeof translate].proj3,
      technos: [
        { logo: logoHTML, alt: "HTML" },
        { logo: logoCSS, alt: "CSS" },
        { logo: logoJS, alt: "JavaScript" },
        { logo: logoReact, alt: "React" },
        { logo: logoSass, alt: "Sass" },
      ],
      buttons: [
        {
          text: translate[language as keyof typeof translate].seeCodeButton,
          link: "https://github.com/CharonTom/Kasa",
        },
        {
          text: translate[language as keyof typeof translate]
            .presentationButton,
          link: "https://github.com/CharonTom/Kasa/blob/main/README.md",
        },
        {
          text: translate[language as keyof typeof translate]
            .visitWebsiteButton,
          link: "https://charontom.github.io/Kasa/",
        },
      ],
    },
    {
      id: 4,
      categories: ["back-end"],
      img: imagePiiquante,
      titre: "Hot Takes",
      description: translate[language as keyof typeof translate].proj4,
      technos: [
        { logo: logoNodeJS, alt: "NodeJS" },
        { logo: logoExpress, alt: "Express" },
        { logo: logoMongo, alt: "MongoDB" },
      ],
      buttons: [
        {
          text: translate[language as keyof typeof translate].seeCodeButton,
          link: "https://github.com/CharonTom/Piiquante",
        },
        {
          text: translate[language as keyof typeof translate]
            .presentationButton,
          link: "https://github.com/CharonTom/Piiquante/blob/main/README.md",
        },
      ],
    },
    {
      id: 5,
      categories: ["SEO", "front-end"],
      img: imagePanthere,
      titre: "La Panthere",
      description: translate[language as keyof typeof translate].proj5,
      technos: [
        { logo: logoHTML, alt: "HTML" },
        { logo: logoBootstrap, alt: "Bootstrap" },
      ],
      buttons: [
        {
          text: translate[language as keyof typeof translate].seeCodeButton,
          link: "https://github.com/CharonTom/ProjetSEO",
        },
        {
          text: translate[language as keyof typeof translate]
            .presentationButton,
          link: "https://github.com/CharonTom/ProjetSEO/blob/main/README.md",
        },
        {
          text: translate[language as keyof typeof translate]
            .visitWebsiteButton,
          link: "https://charontom.github.io/ProjetSEO/",
        },
      ],
    },
    {
      id: 6,
      categories: ["front-end"],
      img: imageMyWebsite,
      titre: "My Website",
      description: translate[language as keyof typeof translate].proj6,
      technos: [
        { logo: logoHTML, alt: "HTML" },
        { logo: logoCSS, alt: "CSS" },
        { logo: logoJS, alt: "JavaScript" },
        { logo: logoTailwind, alt: "Tailwind CSS" },
        { logo: logoReact, alt: "React" },
      ],
      buttons: [
        {
          text: translate[language as keyof typeof translate].seeCodeButton,
          link: "https://github.com/CharonTom/my-website",
        },
      ],
    },
    {
      id: 7,
      categories: ["front-end", "intégration web"],
      img: imageBooki,
      titre: "Booki",
      description: translate[language as keyof typeof translate].proj7,
      technos: [
        { logo: logoHTML, alt: "HTML" },
        { logo: logoCSS, alt: "CSS" },
      ],
      buttons: [
        {
          text: translate[language as keyof typeof translate].seeCodeButton,
          link: "https://github.com/CharonTom/Booki",
        },
        {
          text: translate[language as keyof typeof translate]
            .presentationButton,
          link: "https://github.com/CharonTom/Booki/blob/main/README.md",
        },
        {
          text: translate[language as keyof typeof translate]
            .visitWebsiteButton,
          link: "https://charontom.github.io/Booki/",
        },
      ],
    },
    {
      id: 8,
      categories: ["front-end", "full-stack", "back-end"],
      img: imageTask,
      titre: "Task Manager",
      description: translate[language as keyof typeof translate].proj12,
      technos: [
        { logo: logoReact, alt: "React" },
        { logo: logoTS, alt: "TypeScript" },
        { logo: logoTailwind, alt: "TailwindCSS" },
        { logo: logoNodeJS, alt: "Node" },
        { logo: logoGraphQL, alt: "GraphQL" },
        { logo: logoMongo, alt: "MongoDB" },
      ],
      buttons: [
        {
          text: translate[language as keyof typeof translate].seeCodeButton,
          link: "https://github.com/CharonTom/JLO-Task-Manager-Front-end",
        },
        {
          text: translate[language as keyof typeof translate]
            .presentationButton,
          link: "https://github.com/CharonTom/JLO-Task-Manager-Front-end/blob/main/README.md",
        },
        {
          text: translate[language as keyof typeof translate]
            .visitWebsiteButton,
          link: "https://ubiquitous-meringue-e3582c.netlify.app/",
        },
      ],
    },
    {
      id: 9,
      categories: ["front-end", "full-stack", "back-end"],
      img: imageAuth,
      titre: "Login Portal (MongoDB)",
      description: translate[language as keyof typeof translate].proj8,
      technos: [
        { logo: logoReact, alt: "React" },
        { logo: logoSass, alt: "Sass" },
        { logo: logoNodeJS, alt: "Node" },
        { logo: logoExpress, alt: "Express" },
        { logo: logoMongo, alt: "MongoDB" },
      ],
      buttons: [
        {
          text: translate[language as keyof typeof translate].seeCodeButton,
          link: "https://github.com/CharonTom/Login-System-React-Node-Express-MongoDB",
        },
        {
          text: translate[language as keyof typeof translate]
            .presentationButton,
          link: "https://github.com/CharonTom/Login-System-React-Node-Express-MongoDB/blob/main/README.md",
        },
      ],
    },
    {
      id: 10,
      categories: ["front-end", "full-stack", "back-end"],
      img: imageAuth,
      titre: "Login Portal (MySQL)",
      description: translate[language as keyof typeof translate].proj9,
      technos: [
        { logo: logoReact, alt: "React" },
        { logo: logoSass, alt: "Sass" },
        { logo: logoNodeJS, alt: "Node" },
        { logo: logoExpress, alt: "Express" },
        { logo: logoMySQL, alt: "MySQL" },
      ],
      buttons: [
        {
          text: translate[language as keyof typeof translate].seeCodeButton,
          link: "https://github.com/CharonTom/Login-System-React-Node-Express-MySQL",
        },
        {
          text: translate[language as keyof typeof translate]
            .presentationButton,
          link: "https://github.com/CharonTom/Login-System-React-Node-Express-MySQL/blob/main/README.md",
        },
      ],
    },
    {
      id: 11,
      categories: ["front-end", "full-stack", "back-end"],
      img: imagePromptopia,
      titre: "Promptopia",
      description: translate[language as keyof typeof translate].proj10,
      technos: [
        { logo: logoReact, alt: "React" },
        { logo: logoTailwind, alt: "TailwindCSS" },
        { logo: logoNext, alt: "Next.js" },
        { logo: logoMongo, alt: "MongoDB" },
      ],
      buttons: [
        {
          text: translate[language as keyof typeof translate].seeCodeButton,
          link: "https://github.com/CharonTom/Promptopia",
        },
        {
          text: translate[language as keyof typeof translate]
            .presentationButton,
          link: "https://github.com/CharonTom/Promptopia/blob/main/README.md",
        },
        {
          text: translate[language as keyof typeof translate]
            .visitWebsiteButton,
          link: "https://promptopia-charontom.vercel.app",
        },
      ],
    },
    {
      id: 12,
      categories: ["front-end"],
      img: imageEcommerce,
      titre: "E-commerce website",
      description: translate[language as keyof typeof translate].proj11,
      technos: [
        { logo: logoReact, alt: "React" },
        { logo: logoTailwind, alt: "TailwindCSS" },
      ],
      buttons: [
        {
          text: translate[language as keyof typeof translate].seeCodeButton,
          link: "https://github.com/CharonTom/React-Tailwind-E-commerce",
        },
        {
          text: translate[language as keyof typeof translate]
            .presentationButton,
          link: "https://github.com/CharonTom/React-Tailwind-E-commerce/blob/main/README.md",
        },
        {
          text: translate[language as keyof typeof translate]
            .visitWebsiteButton,
          link: "https://charontom.github.io/React-Tailwind-E-commerce/",
        },
      ],
    },
  ];

  return projects;
}
