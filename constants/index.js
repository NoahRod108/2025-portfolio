import Github from "@/public/icons/Github";
import { home } from "@/public/images";

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
    img: home,
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
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/about",
    name: "About",
  },
];

export const skillItems = [
  {
    image: <Github />,
    name: "HTML",
  },
  {
    image: <Github />,
    name: "CSS",
  },
  {
    image: <Github />,
    name: "JavaScript",
  },
  {
    image: <Github />,
    name: "PHP",
  },
  {
    image: <Github />,
    name: "MySQL",
  },
  {
    image: <Github />,
    name: "MongoDB",
  },
  {
    image: <Github />,
    name: "React.js",
  },
  {
    image: <Github />,
    name: "Next.js",
  },
  {
    image: <Github />,
    name: "Tailwind",
  },
  {
    image: <Github />,
    name: "Motion",
  },
];
