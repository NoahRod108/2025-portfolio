import Github from "@/public/icons/Github";
import Html from "@/public/icons/Html";
import Motion from "@/public/icons/Motion";
import Tailwind from "@/public/icons/Tailwind";
import NextIcon from "@/public/icons/NextIcon";
import { home, post } from "@/public/images";
import CssIcon from "@/public/icons/CssIcon";
import ReactIcon from "@/public/icons/ReactIcon";
import Javascript from "@/public/icons/Javascript";
import Php from "@/public/icons/Php";
import Mysql from "@/public/icons/Mysql";
import Mongo from "@/public/icons/Mongo";

export const projects = [
  {
    name: "Get Home",
    desc: "A simple home rental website. Create an account to list your home and view more homes listed by other users.",
    img: home,
    liveLink: "https://get-home-chi.vercel.app/",
    githubLink: "https://github.com/NoahRod108/get-home",
    tags: ["Next.js", "Tailwind", "MongoDB", "NextAuth", "Cloudinary"],
  },
  {
    name: "My Post",
    desc: "This is a project to learn Next.js and practice new technologies. I plan to come back and continue to expand on the project.",
    img: post,
    liveLink: "https://next-js-tutorial-nine-xi.vercel.app/",
    githubLink: "https://github.com/NoahRod108/next-js-tutorial",
    tags: ["Next.js", "Tailwind", "MongoDB", "NextAuth"],
  },
  {
    name: "",
    desc: "placeholder",
    img: home,
    liveLink: "#",
    githubLink: "#",
    tags: ["", ""],
  },
];

export const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/#projects",
    name: "Projects",
  },
  {
    path: "/about",
    name: "About",
  },
];

export const skillItems = [
  {
    image: <Html />,
    name: "HTML",
  },
  {
    image: <CssIcon />,
    name: "CSS",
  },
  {
    image: <Javascript />,
    name: "JavaScript",
  },
  {
    image: <Php />,
    name: "PHP",
  },
  {
    image: <Mysql />,
    name: "MySQL",
  },
  {
    image: <Mongo />,
    name: "MongoDB",
  },
  {
    image: <ReactIcon />,
    name: "React.js",
  },
  {
    image: <NextIcon />,
    name: "Next.js",
  },
  {
    image: <Tailwind />,
    name: "Tailwind",
  },
  {
    image: <Motion />,
    name: "Motion",
  },
];
