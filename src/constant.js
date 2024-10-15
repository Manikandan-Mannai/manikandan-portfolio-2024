import Xanadu from "./assets/images/xanadu.jpeg";
import NetoAI from "./assets/images/NetoAI.svg";
import Fiverr from "./assets/images/fiverr.jpg";

import Genesis from "./assets/images/Genesis.png";
import KLLIFESPACE from "./assets/images/K&L.png";
import Taxi from "./assets/images/Taxi.png";
import Tesla from "./assets/images/Tesla.png";

import KLbackground from "./assets/images/KLbackground.jpg";
import Genesisbackground from "./assets/images/Genesisbackground.jpg";
import Taxibackground from "./assets/images/Taxibackground.jpg";
import Teslabackground from "./assets/images/Teslabackground.jpg";

import {
  FaLaptop,
  FaPaintBrush,
  FaMobileAlt,
  FaDatabase,
  FaSearch,
  FaLock,
  FaBullhorn,
  FaCloud,
} from "react-icons/fa";

// EXPERIENCES
export const experiences = [
  {
    id: 0,
    img: NetoAI,
    role: "SDE-1 (React Developer)",
    company: "NetoAI",
    url: "https://netoai.org",
    date: "July 2024 - Present",
  },
  {
    id: 1,
    img: Xanadu,
    role: "Fullstack Engineer Intern",
    company: "Xanadu Realty Pvt. Ltd.",
    url: "https://www.xanadu.in/",
    date: "Jan 2023 - June 2023",
  },
  {
    id: 2,
    img: Fiverr,
    role: "Freelancer",
    company: "Fiverr",
    url: "https://www.fiverr.com/manikandan2k2",
    date: "June 2022 - Present",
  },
];

// PROJECTS
export const projectsRow1 = [
  {
    id: 0,
    title: "GENESIS",
    image: Genesis,
    tags: ["Event Registration", "Firebase", "Google Sheet"],
    background: Genesisbackground,
    github: "https://github.com/Manikandan-Mannai/Genesis-Registration",
    webapp: "https://genesis-bd1h.onrender.com/",
  },
  {
    id: 1,
    title: "K&L Life SPace",
    image: KLLIFESPACE,
    background: KLbackground,
    tags: ["Real Estate", "Landing Page"],
    github: "https://github.com/Manikandan-Mannai/kllifespace",
    webapp: "https://kllifespaces.com",
  },
];

// PROJECTS
export const projectsRow2 = [
  {
    id: 0,
    title: "Taxi Booking",
    image: Taxi,
    tags: ["Full Stack", "SMTP", "PWA"],
    background: Taxibackground,
    github: "https://github.com/Manikandan-Mannai/Genesis-Registration",
    webapp: "https://genesis-bd1h.onrender.com/",
  },
  {
    id: 1,
    title: "Tesla",
    image: Tesla,
    background: Teslabackground,
    tags: ["Parallax", "Landing Page"],
    github: "https://github.com/Manikandan-Mannai/kllifespace",
    webapp: "https://kllifespaces.com",
  },
];

// Services
export const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Build fast, responsive & SEO-friendly websites tailored to your brand and goals.",
    icon: FaLaptop,
    color: "#4CAF50", // Example color for the icon
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Create intuitive, visually appealing designs that engage users & drive conversions.",
    icon: FaPaintBrush,
    color: "#2196F3",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description:
      "Design and develop mobile applications for iOS and Android platforms.",
    icon: FaMobileAlt,
    color: "#FF9800",
  },
  {
    id: 4,
    title: "Database Management",
    description:
      "Ensure your data is stored securely and efficiently with our database management services.",
    icon: FaDatabase,
    color: "#9C27B0",
  },
  {
    id: 5,
    title: "SEO Optimization",
    description:
      "Enhance your website's visibility on search engines to attract more visitors.",
    icon: FaSearch,
    color: "#F44336",
  },
 
  {
    id: 7,
    title: "Digital Marketing",
    description:
      "Grow your brand's online presence through effective digital marketing strategies.",
    icon: FaBullhorn,
    color: "#FFEB3B",
  },
 
];
