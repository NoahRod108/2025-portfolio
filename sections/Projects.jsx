"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/constants";
import Github from "@/public/icons/Github";
import Live from "@/public/icons/Live";

const Projects = () => {
  return (
    <div>
      <div className="pb-6">
        <h2 className="text-4xl">Projects</h2>
      </div>

      <section id="projects" className="grid grid-cols-1 gap-4">
        {projects.map((project) => (
          <motion.div
            key={project.name}
            className="project-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.2 } }}
            viewport={{ amount: 0.5, once: true }}
          >
            <div>
              <Image
                src={project.img}
                alt="projectImg"
                className="project-img"
              />
            </div>
            <div className="flex flex-col gap-2 mt-2 mb-4">
              <h3 className="font-bold text-2xl">{project.name}</h3>
              <p className="text-secondaryText">{project.desc}</p>
            </div>
            <div
              id="project-icons"
              className="flex flex-col items-center gap-3 md:flex-row md:justify-between"
            >
              <div className="flex gap-2">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 bg-white text-black hover:bg-white/80 border border-transparent rounded"
                >
                  <Live />
                  <span className="pl-2">Visit</span>
                </a>

                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 bg-black/70 hover:bg-black/50 border border-stone-800/90 rounded"
                >
                  <Github />
                  <span className="pl-2">Source</span>
                </a>
              </div>

              <div className="flex gap-2 flex-wrap items-center justify-center">
                {project.tags.map((tag) => (
                  <span className="bg-white/20 px-1 py-1 rounded" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
