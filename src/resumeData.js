import { nanoid } from "nanoid";
import icta from "./assets/pictures/ictalogo.jpg";
import connected from "./assets/pictures/connected2023.png";
import kasneb from "./assets/pictures/kasneb.svg";
// export default [
//   {
//     name: "Tony Ndereva Maluki",},
//     projects: {
//       id: nanoid(),
//       projectName: "ICT Authority",
//       projectImage: icta,
//       projectDescription:
//         "A sub branch of an ERP system from KwikBasket Solutions Nairobi Kenya that helps internal teams improve their work output. Most of he systems that have been developed here are utility apps.Kwikbasket solutions is an agrucltural firm that consists of a team of passionate agriculture enthusiasts and techies committed to changing farmers lives by improving their access to fair markets and providing high quality fresh produce to our customers",
//     }
//   },
// ];
export default [
  {
    name: "Tony Ndereva maluki",
    projects: {
      id: nanoid(),
      projectName: "ICT Authority",
      projectImage: icta,
      projectDescription:
        "The Information and Communication Technology (ICT) Authority is a State Corporation under the Ministry of Information Communication and Technology in Kenya. I was part of a 2-men team which designed, developed and implemented the new official website",
      projectLink: "https://icta.go.ke",
    },
  },

  {
    projects: {
      id: nanoid(),
      projectName: "Connected KENYA",
      projectImage: connected,
      projectDescription:
        " The Connected Kenya Summit is a an ICT thought leadership gathering that brings together over 1,000 regional and global ICT industry thought leaders, key policy makers, high profile Industry champions and executives, financiers and ICT innovators, for a series of high-level discussions geared towards nurturing innovative ideas, investments and partnerships that spur the realization of Kenya’s development agenda leveraging on technology.",
      projectLink: "https://connected.go.ke",
    },
  },
  {
    projects: {
      id: nanoid(),
      projectName: "Connected KENYA",
      projectImage: icta,
      projectDescription:
        "A sub branch of an ERP system from KwikBasket Solutions Nairobi Kenya that helps internal teams improve their work output. Most of he systems that have been developed here are utility apps.Kwikbasket solutions is an agrucltural firm that consists of a team of passionate agriculture enthusiasts and techies committed to changing farmers lives by improving their access to fair markets and providing high quality fresh produce to our customers",
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
];
