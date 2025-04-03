import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <div className="px-[40px] w-auto items-center flex flex-col min-h-lvh gap-52">
      <div className="container">
        <Hero />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}
