import React from "react";
import { home } from "@/public/images";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="w-[1480px] min-h-full">
      <section className="grid grid-cols-5 grid-rows-6 gap-2">
        <div className="col-span-3 row-span-3 bg-blue-300">
          <a href="" target="_blank">
            <Image
              src={home}
              alt="projectImg"
              className="w-full h-full object-cover object-center"
            />
          </a>
        </div>
        <div className="col-span-2 row-span-2 bg-blue-300">project2</div>
        <div className="col-span-2 row-span-2 bg-blue-300">project3</div>
        <div className="col-span-3 row-span-3 bg-blue-300">project4</div>
        <div className="col-span-2 row-span-2 bg-blue-300">project5</div>
      </section>
    </div>
  );
};

export default Projects;
