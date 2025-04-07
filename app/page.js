import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-52">
        <Projects />
        <Skills />
      </div>
    </>
  );
}
