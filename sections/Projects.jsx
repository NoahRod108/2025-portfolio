"use client";

import React, { useState } from "react";
import Modal from "@/components/Modal";
import { AnimatePresence } from "motion/react";
import { home } from "@/public/images";
import Image from "next/image";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  return (
    <div className="w-[1480px] min-h-full">
      <div className="pb-6">
        <h2 className="section-title">Projects</h2>
      </div>

      <section id="projects" className="grid grid-cols-5 grid-rows-6 gap-2">
        <div className="col-span-3 row-span-3">
          <Image
            src={home}
            alt="projectImg"
            className="project-img"
            onClick={() => (modalOpen ? closeModal() : openModal())}
          />
        </div>
        <div className="col-span-2 row-span-2 border border-white">
          project2
        </div>
        <div className="col-span-2 row-span-2 border border-white">
          project3
        </div>
        <div className="col-span-3 row-span-3 border border-white">
          project4
        </div>
        <div className="col-span-2 row-span-2 border border-white">
          project5
        </div>

        <AnimatePresence>
          {modalOpen && (
            <Modal modalOpen={modalOpen} handleClose={closeModal} />
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Projects;
