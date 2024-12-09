"use client";

import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import { projects } from "@/constants";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  return (
    <div className="w-[1480px] min-h-full">
      <div className="pb-6">
        <h2 className="section-title">Projects</h2>
      </div>

      <section id="projects" className="grid grid-cols-5 grid-rows-6 gap-4">
        {projects.map((project, index) => (
          <div key={project.name}>
            <Image
              src={project.img}
              alt="projectImg"
              className="project-img"
              animate={{
                y: ["-100vh", 0],
              }}
              transition={{ duration: 1.2, delay: index, ease: "easeOut" }}
              onClick={() => (modalOpen ? closeModal() : openModal())}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
