"use client";

import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import { projects } from "@/constants";
import Github from "@/public/icons/Github";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  return (
    <div>
      <div className="pb-6">
        <h2 className="text-4xl">Projects</h2>
      </div>

      <section id="projects" className="grid grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <div key={project.name} className="project-container">
            <div>
              <Image
                src={project.img}
                alt="projectImg"
                className="project-img"
              />
            </div>
            <div className="flex flex-col gap-2 mt-2 mb-4">
              <h3 className="font-bold text-2xl">Get Home</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam error molestiae et laudantium nulla voluptatum sequi
                fuga enim suscipit quisquam!
              </p>
            </div>
            <div id="project-icons" className="flex gap-2 items-center">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 bg-black/70 hover:bg-black/50 border border-transparent rounded"
              >
                <Github />
                <span className="pl-2">Visit</span>
              </a>

              <a
                href="#"
                className="inline-flex items-center px-4 py-2 bg-transparent hover:bg-white/10 border border-white/10 rounded"
              >
                <Github />
                <span className="pl-2">Source</span>
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
