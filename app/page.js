import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <div className="px-[40px] w-auto items-center flex flex-col min-h-lvh gap-[200px]">
      <Hero />
      <Projects />
    </div>
  );
}
