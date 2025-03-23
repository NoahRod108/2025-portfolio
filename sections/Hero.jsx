"use client";

import React from "react";
import { easeOut, motion } from "framer-motion";
import Github from "@/public/icons/Github";
import Linkedin from "@/public/icons/Linkedin";
import Resume from "@/public/icons/Resume";
import StarParticles from "@/components/StarParticles";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center h-lvh">
      <section id="hero">
        <StarParticles id="tsparticles" />
        <motion.div
          animate={{
            opacity: [0, 100],
          }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="flex gap-4 sm:gap-8 items-center sm:items-end"
        >
          <h1 className="text-6xl md:text-[10rem]">Noah</h1>

          <motion.div
            animate={{
              opacity: [0, 100],
            }}
            transition={{ duration: 2, delay: 1, ease: "easeOut" }}
          >
            <p className="text-secondaryText max-w-[250px] hidden sm:inline-block sm:max-w-[450px] sm:text-lg md:text-xl">
              Web Developer with over 3 years of experience working on
              full-stack web applications
            </p>
          </motion.div>

          {/* Mobile only */}
          <motion.div className="sm:hidden">
            <p className="text-3xl wave">👋</p>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{
            opacity: [0, 100],
          }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="flex lg:pl-32 sm:justify-center leading-[192px]"
        >
          <h1 className="md:text-[10rem] text-6xl">Rodriguez</h1>
        </motion.div>

        <motion.div
          id="hero-icons"
          animate={{
            opacity: [0, 100],
          }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="flex justify-center items-center gap-8 pt-8"
        >
          <a href="#">
            <Github />
          </a>
          <a href="#">
            <Linkedin />
          </a>
          <a href="#">
            <Resume />
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
