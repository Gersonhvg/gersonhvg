import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
} from "react-icons/si";

import dcm from "../assets/images/dcm.jpg";
import vq from "../assets/images/vq.png";
import playphp from "../assets/images/playphp.png"; 

export const projects = [
  {
    id: 1,
    title: "FinTrack",
    category: "Full Stack",
    description:
      "Plataforma para gestionar finanzas personales, presupuestos e inversiones.",
    image: dcm,
    href: "https://linkedin.com/in/gersonhvg",
    technologies: [
      SiNextdotjs,
      SiJavascript,
      SiTypescript,
      SiMongodb,
    ],
  },
  {
    id: 2,
    title: "Travelia",
    category: "Frontend",
    description:
      "Landing page moderna para agencia de viajes con animaciones suaves y diseño responsive.",
    image: vq,
    href: "https://linkedin.com/in/gersonhvg",
    technologies: [
      SiReact,
      SiJavascript,
      SiTypescript,
    ],
  },
  {
    id: 3,
    title: "DevHub API",
    category: "Backend",
    description:
      "API REST para comunidad de desarrolladores con autenticación, roles y documentación.",
    image: playphp,
    href: "https://linkedin.com/in/gersonhvg",
    technologies: [
      SiNodedotjs,
      SiTypescript,
      SiPostgresql,
      SiMongodb,
    ],
  },
];