import { nanoid } from "nanoid";
import icta from "./assets/pictures/ictalogo.jpg";
import connected from "./assets/pictures/connected2023.png";
import kasneb from "./assets/pictures/kasneb.png"
import ybk from './assets/pictures/ybk.jpeg'

export default [
  {
    projects: {
      id: nanoid(),
      projectName: "ICT Authority",
      projectImage: icta,
      projectDescription:
        "The Information and Communication Technology (ICT) Authority is a State Corporation under the Ministry of Information Communication and Technology in Kenya. I was part of a 2-men team which designed, developed and implemented the new official website from client to the server side features of the system.",
      projectLink: "https://icta.go.ke",
    },
  },

  {
    projects: {
      id: nanoid(),
      projectName: "Connected KENYA",
      projectImage: connected,
      projectDescription:
        " The Connected Kenya Summit is a an ICT thought leadership gathering that brings together over 1,000 regional and global ICT industry thought leaders, key policy makers, high profile Industry champions and executives, financiers and ICT innovators, for a series of high-level discussions geared towards nurturing innovative ideas, investments and partnerships that spur the realization of Kenya’s development agenda leveraging on technology. I was part of a 2-man team which i was specifically mandated to design and implement the application's database.",
      projectLink: "https://connected.go.ke",
    },
  },

  {
    projects: {
      id: nanoid(),
      projectName: "KASNEB ONLINE WEB PORTAL",
      projectImage: kasneb,
      projectDescription:
        "This is an online web portal that let students the school's resources such as grades, and school fees invoices. I was mandated in the quality assurance and analysis for this system.",
      projectLink: "https://online.kasneb.or.ke",
    },
  },
  {
    projects: {
      id: nanoid(),
      projectName: "YBK Ltd",
      projectImage: ybk,
      projectDescription:
        "YBK is a premium Gift Shop that deals with designing personalized Gifts ,Branding and printing co-operatw merchandise. I developed the main catalogue site that showcases different services offered and their prices. ",
    },
  },
];
