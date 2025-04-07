"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/constants";
import Github from "@/public/icons/Github";
import Live from "@/public/icons/Live";

const Projects = () => {
  return (
    <>
      <section id="projects" className="grid grid-cols-1 gap-4 content-center">
        <div className="pb-6">
          <h2 className="text-4xl">Projects</h2>
        </div>
        {projects.map((project, i) => (
          <div
            key={project.name}
            className="flex flex-col justify-center items-center"
          >
            <motion.div
              className="project-box group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1.2 } }}
              viewport={{ amount: 0.5, once: true }}
            >
              <div>
                <Image
                  src={project.img}
                  alt="projectImg"
                  className="project-img group-hover:grayscale-0"
                />
              </div>
              <div className="flex flex-col gap-2 mt-4 mb-4">
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
                  {project.tags.map((tag, i) => (
                    <span
                      className="bg-stone-800/10 border border-stone-800/90 px-1 py-1 rounded text-cyan-500 group-hover:text-primaryText group-hover:bg-stone-800/90"
                      key={i}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Projects;
