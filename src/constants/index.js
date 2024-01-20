import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  pricewise,
  react,
  sass,
  snapgram,
  tailwindcss,
  typescript,
  angular,
  nest,
  adonis,
  postgresql,
  doublevpartners,
  peaku,
  italino,
  vue,
  hospital,
  airbnb,
  tesla,
  gym,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: angular,
    name: "Angular",
    type: "Frontend",
  },
  {
    imageUrl: vue,
    name: "Vue.js",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: nest,
    name: "Nest.js",
    type: "Backend",
  },
  {
    imageUrl: adonis,
    name: "Adonis",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: postgresql,
    name: "PostgreSQL",
    type: "Database",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
];

export const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Peaku",
    icon: peaku,
    iconBg: "#accbe1",
    date: "Feb 2023 - Jun 2023",
    points: [
      "Developing and maintaining web applications using Vue.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Italino",
    icon: italino,
    iconBg: "#fbc3bc",
    date: "Jan 2023 - Aug 2022",
    points: [
      "Developing and maintaining web applications using React.js and Express.js.",
      "Web application for sales management, inventory control and administrative dashboard for the commercial sector company Italino",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Double V Partners - Alcaldia de Medellín",
    icon: doublevpartners,
    iconBg: "#b7e4c7",
    date: "Aug 2023 - Dec 2023",
    points: [
      "Developing and maintaining web applications using Angular and Adonis.js.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Double V Partners - Farmatodo",
    icon: doublevpartners,
    iconBg: "#a2d2ff",
    date: "Jan 2024 - Present",
    points: [
      "Developing and maintaining web applications using Angular and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/juansanguinoo",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/juandavid-sanguino/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "E-Commerce App",
    description:
      "Designed and executed a comprehensive e-commerce platform, incorporating payment methods, an efficient shopping cart, and various features that enhance the user experience, ultimately maximizing the project's value.",
    link: "https://github.com/juansanguinoo/Ecommerce-Djackets",
  },
  {
    iconUrl: gym,
    theme: "btn-back-green",
    name: "FitHub Connect",
    description:
      "Developed a gym management system, facilitating efficient tracking of entries and exits, athlete management, membership control, and day-to-day monitoring of gym operations.",
    link: "https://github.com/edsanol/Fithub-frontend",
  },
  {
    iconUrl: hospital,
    theme: "btn-back-blue",
    name: "Hospital Management App",
    description:
      "Designed and implemented a comprehensive hospital management system encompassing key functionalities such as patient management, doctor administration, appointment scheduling, and more.",
    link: "https://github.com/juansanguinoo/hospital-app-frontend",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-yellow",
    name: "Social Media App",
    description:
      "Constructed a fully-featured social media application that empowers users to effortlessly share photos and connect with friends within a user-friendly social environment.",
    link: "https://github.com/juansanguinoo/SocialMedia-app",
  },
  {
    iconUrl: tesla,
    theme: "btn-back-black",
    name: "Tesla E-Commerce Clone",
    description:
      "Developed a Tesla e-commerce clone, incorporating its premier features and functionalities to provide a seamless and sophisticated online shopping experience.",
    link: "https://github.com/juansanguinoo/teslo-shop",
  },
  {
    iconUrl: airbnb,
    theme: "btn-back-pink",
    name: "Airbnb Clone",
    description:
      "Designed and developed an Airbnb replica featuring global accommodation search and booking capabilities. Implemented innovative enhancements to elevate user experience and deliver added value for hosts.",
    link: "https://github.com/juansanguinoo/Airbnb-MVP",
  },
];
