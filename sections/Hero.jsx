"use client";

import React from "react";
import { easeOut, motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col flex-nowrap h-svh justify-center max-w-[1300px] w-full">
      <section id="hero">
        <div className="flex items-end gap-[128px] h-min w-full">
          <motion.div
            animate={{
              opacity: [0, 100],
            }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="flex flex-col justify-start"
          >
            <h1 className="leading-[.8em]">Noah</h1>
          </motion.div>
          <motion.div
            animate={{
              opacity: [0, 100],
            }}
            transition={{ duration: 2, delay: 1, ease: "easeOut" }}
            className="flex flex-col justify-start"
          >
            <p className="text-[1.2rem] max-w-[450px]">
              Web Developer with over 3 years of experience working on
              full-stack web applications
            </p>
          </motion.div>
        </div>
        <motion.div
          animate={{
            opacity: [0, 100],
          }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="flex justify-end"
        >
          <h1 className="justify-end">Rodriguez</h1>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
