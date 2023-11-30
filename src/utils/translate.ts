const translate = {
  EN: {
    // ------------------- Hero Part ------------------------

    headerText: "Web Developer",
    Hi: "Hi !",
    MyName: "My name is ",
    Iam: "I'am a",
    dev1: "Web Developer",
    dev2: "Web integrator",
    dev3: "React Developer",
    speech: `Passionate about web development,
     I aspire to leverage my skills and motivation to work for a company that is hiring a web developer.
    With a deep dive into the React.js and Node.js ecosystem,
    I have specialized in designing and adapting websites and web applications.`,
    cvButton: "Download my resume",
    aboutButton: "About me",

    // ------------------- Skills Part ------------------------

    skills: "My Skills",
    // ------------------- Portfolio Part ------------------------

    portfolio: "My Works",
    usedTechnos: "The stack :",
    visitWebsiteButton: "Live",
    presentationButton: "Presentation",
    seeCodeButton: "Code",
    filterButton1: "All",
    filterButton2: "Web Integration",
    showMoreButton: "Show more",
    showLessButton: "Show less",
    proj1:
      "I made this website prototype by integrating the mockups designed by a UI figma's designer. The project was developed in HTML, CSS and Sass while keeping a mobile-first approach. The graphics and the animations were made without JavaScript",
    proj2:
      "I Unified the Back and Front of an e-commerce website by integrating the elements of the API into the various web pages in JavaScript. The user must be able to view all the products, add one or several items in a basket, modify or delete the basket and make an order.",
    proj3:
      "Kasa is a property rental web application. This project is entirely developed on React and all the management of events is done without librarys. The mockups to be integrated were created by a UI designer with the Figma design tool.",
    proj4:
      "Hot Takes is a review web application specializing in sauces. The goal was to build a secure REST API that complies with the OWASP rules. The application allows users to post and modify sauces with also a like and dislike functionality.",
    proj5:
      "This website had SEO issues. I analyzed this and improved it to reduce loading time and to apply a good SEO and accessibility practices. An optimization report was carried out to indicate the pre and post results optimization.",
    proj6:
      "This is of course my Portfolio, the site you are on. It was entirely designed with React and its libraries. I also used the TailwindCSS's Framework and EmailJS to redirect messages to my mailbox.",
    proj7:
      "This is the first work which marked my retraining. I learned the basics of web development by doing the integration of this mockup in HTML and CSS. This is a page for an online accommodation booking site. The mockup was made on Figma by a UI designer",
    proj8:
      "Create a login portal with React, Node.js, Express and MongoDB. It is a full-stack project in which a user can register and login. The application is secure according to the rules of the OWASP.",
    proj9:
      "Create a login portal with React, Node.js, Express and MySQL. This is the same project as the previous one, but this time I used MySQL to store the user's data in a relational database.",
    proj10:
      "Promptopia is a Full-stack application developed entirely on Next.js. It allows users to publish and share their favorite ChatGPT prompts.",
    proj11:
      "A small e-commerce application developed with React and TailwindCSS. The aim of this exercise was to learn to master shopping cart management using JSX and context API. I also used Fake Store API which is an API intended for e-commerce site prototypes.",
    proj12:
      "I made this Full-stack app with GraphQL for the back and React for the front. It's a task manager that allows users to create, delete, edit and sort tasks into groups.",
    // ------------------- Contact Part ------------------------

    contact: "Let's talk !",
    phone: "Phone",
    sendButton: "Send",
    nameInput: "Name",
    errorName1:
      "The name must be between 1 and 20 characters. No special characters or numbers.",
    errorName2: "Name is required",
    errorEmail1: "The adress has an incorrect format.",
    errorEmail2: "Email is required",
    errorForm1: "The message must have between 1 and 400 characters",
    errorForm2: "Message is required",
    messageSend: "Message send !",
  },
  FR: {
    // ------------------- Hero Part ------------------------

    headerText: "Développeur Web",
    Hi: "Bonjour !",
    MyName: "Je m'appelle ",
    Iam: "Je suis",
    dev1: "Développeur Web",
    dev2: "Intégrateur Web",
    dev3: "Développeur React",
    speech: `Passionné par le développement web, j’ambitionne de mettre mes compétences
    et ma motivation au service d’une entreprise qui recrute un développeur web.
    Grâce à un parcours approfondi sur l’écosystème React.js et Node.js, je me suis
    spécialisé dans la conception et l’adaptation de sites et d’applications web.`,
    cvButton: "Télécharger mon CV",
    aboutButton: "À propos de moi",
    // ------------------- Skills Part ------------------------

    skills: "Mes Compétences",
    // ------------------- Portfolio Part ------------------------

    portfolio: "Mon Portfolio",
    usedTechnos: "Technos utilisées",
    proj1:
      "J'ai créé un prototype de site web en intégrant les maquettes Figma conçues par un designer UI. Le projet a été développé en HTML/CSS et SASS tout en gardant une approche mobile-first. Les contraintes graphiques et d'animations ont été faites sans JavaScript",
    proj2:
      "J'ai unifié le Back-End et le Front-End d'un site web e-commerce en intégrant les éléments de l'API dans les différentes pages web en JavaScript. L'utilisateur peut visualiser l'ensemble des produits, ajouter un ou plusieurs articles dans un panier, modifier ou supprimer son panier et passer sa commande.",
    proj3:
      "Kasa est une application web de location immobilière. Ce projet est entièrement développer avec React est la gestion des évenements est faite sans librairie. Les maquettes à intégrer ont été réalisées par un designer UI depuis l'outil de design Figma.",
    proj4:
      "Hot Takes est une application web d'avis critiques spécialisé dans les sauces. Le but était de construire une API REST sécurisée qui respecte les règles de l'OWASP. L'application permet aux utilisateurs de poster et modifier des sauces avec également une fonction like et dislike.",
    proj5:
      "Ce site web avait des problèmes de référencement. Il a été analysé et amélioré pour réduire son temps de chargement et appliquer les bonnes pratiques du SEO et d'accessibilité. Un rapport d'optimisation a été réalisé pour indiquer les résultats pré et post optimisation.",
    proj6:
      "Il s'agit bien sûr de mon Portfolio, le site sur lequel vous vous trouvez. Il a été entièrement conçu avec React et ses librairies. J'ai également utilisé le Framework CSS TailwindCSS et EmailJS pour la redirection des messages sur ma boite mail.",
    proj7:
      "Ceci est le premier travail qui a marqué le début de ma reconversion. J'ai appris les bases du développement web en faisant cette intégration de maquette en HTML et CSS. Il s'agit d'une page pour un site de réservation de logement en ligne. La maquette a été réalisée sur Figma par un designer UI",
    proj8:
      "Réalisation d'un portail d'authentification avec React, Node.js, Express et MongoDB. C'est un projet full-stack dans laquelle un utilisateur peut s'enregistrer et se connecter. L'application est sécurisée selon les règles de l'OWASP.",
    proj9:
      "Réalisation d'un portail d'authentification avec React, Node.js, Express et MySQL. Il s'agit du même projet que le précédent, mais cette fois-ci, j'ai utilisé MySQL pour stocker les données des utilisateurs dans une base de données relationelle.",
    proj10:
      "Promptopia est une application Full-stack entièrement développée sur Next.js. Elle donne à ses utilisateurs la possibilité de publier et de partager leurs prompts ChatGPT préférés.",
    proj11:
      "Une petite application e-commerce développée avec React et TailwindCSS. L'objectif de cet exercice était d'apprendre à maîtriser la gestion de panier en utilisant le JSX offert par React et l'utilisation de context API. J'ai également utilisé Fake Store API qui est une API destinée aux prototypes de site e-commerce.",
    proj12:
      "J'ai réalisé cette application Full-stack from scratch avec GraphQL pour le Back et React pour le Front. Il s'agit d'un gestionnaire de tâche qui permet aux utilisateurs de créer, supprimer, modifier et de classer les tâches par groupes.",
    filterButton1: "Tous ",
    filterButton2: "Intégration web",
    showMoreButton: "Voir plus",
    showLessButton: "Voir moins",
    visitWebsiteButton: "Visiter",
    presentationButton: "Présentation",
    seeCodeButton: "Code",
    // ------------------- Contact Part ------------------------

    contact: "Contactez moi",
    phone: "Téléphone",
    messageSend: "Message envoyé !",
    nameInput: "Nom",
    errorName1:
      "Le nom doit faire entre 1 et 20 lettres sans chiffres ni symboles",
    errorName2: "Un nom est obligatoire",
    errorEmail1: "Le format de l'adresse est incorrecte.",
    errorEmail2: "Un email est obligatoire",
    errorForm1: "Le message peut contenir entre 1 et 400 lettres",
    errorForm2: "Un message est obligatoire",
    sendButton: "Envoyer",
  },
};
export default translate;
