"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillItems } from "@/constants";

const Skills = () => {
  return (
    <div className="w-full">
      <div className="pb-6">
        <h2 className="text-4xl">Skills</h2>
      </div>
      <section
        id="skills"
        className="grid grid-cols-2 sm:grid-cols-5 gap-3 min-w-full"
      >
        {skillItems.map((skill) => (
          <motion.div
            key={skill.name}
            className={`flex flex-col gap-2 justify-center items-center skills-box group`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.2 } }}
            viewport={{ amount: 0.5, once: true }}
          >
            <div className="w-6 h-6 transition ease-in-out group-hover:translate-y-[-4px] group-hover:scale-110 duration-500 grayscale group-hover:grayscale-0">
              {skill.image}
            </div>
            <div className="hidden xs:inline text-secondaryText group-hover:text-primaryText">
              {skill.name}
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Skills;
