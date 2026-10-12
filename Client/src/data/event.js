import weddingImg from "../assets/Event/wedding.webp";
import holud from "../assets/event/holud.webp";
import birthday from "../assets/event/birthday.webp";
import puja from "../assets/event/puja.webp";
import corporate from "../assets/event/corporate.webp";

export const events = [
  {
    name: "Wedding",
    image: weddingImg,
    icon: "💍",
    desc: "Stage, makeup, photography, music and venue.",
    price: 80000,
    hot: true,
  },
  {
    name: "Holud",
    image: holud,
    icon: "🌼",
    desc: "Marigold stage, mehendi, holud trays and music.",
    price: 35000,
    hot: true,
  },
  {
    name: "Birthday",
    image: birthday,
    icon: "🎂",
    desc: "Themes, cake, games, magician and music.",
    price: 15000,
    hot: true,
  },
  {
    name: "Puja",
    image: puja,
    icon: "🪔",
    desc: "Purohit, puja items, dhaki, pandal and bhog.",
    price: 25000,
  },
  {
    name: "Corporate",
    image: corporate,
    icon: "💼",
    desc: "Branded stage, host, AV, streaming and venue.",
    price: 40000,
  },
];
