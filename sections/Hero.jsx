"use client";

import React, { useEffect, useState } from "react";
import { easeOut, motion } from "framer-motion";
import Github from "@/public/icons/Github";
import Linkedin from "@/public/icons/Linkedin";
import Resume from "@/public/icons/Resume";

const Hero = () => {
  const [underline, setUnderline] = useState(false);

  return (
    <div className="flex flex-col justify-center h-lvh">
      <section id="hero" className="text-primaryText">
        <motion.div
          animate={{
            opacity: [0, 100],
          }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="flex gap-4 justify-center sm:gap-8 items-center sm:items-end"
        >
          <h1 className="text-6xl md:text-[10rem]">Noah</h1>

          <motion.div
            animate={{
              opacity: [0, 100],
            }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          >
            <p className="text-secondaryText max-w-[250px] hidden sm:inline-block sm:max-w-[450px] sm:text-lg md:text-xl">
              Web Developer with over 4 years of experience working on
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
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="flex lg:pl-32 sm:justify-center leading-[192px]"
        >
          <h1 className="md:text-[10rem] text-6xl">Rodriguez</h1>
        </motion.div>

        <motion.div
          id="hero-icons"
          animate={{
            opacity: [0, 100],
          }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="flex justify-center items-center gap-8 pt-8"
        >
          <a href="https://github.com/NoahRod108">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/noah-rodriguez-8121041aa/">
            <Linkedin />
          </a>
          <a href="https://noahrod108.github.io/digitalResume/assets/noah_rodriguez_resume_2025.pdf">
            <Resume />
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
