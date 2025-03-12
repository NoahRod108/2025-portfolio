"use client";

import React from "react";
import { easeOut, motion } from "framer-motion";
import Github from "@/public/icons/Github";
import Linkedin from "@/public/icons/linkedin";
import Resume from "@/public/icons/Resume";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center w-full h-lvh">
      <section id="hero">
        <motion.div
          animate={{
            opacity: [0, 100],
          }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="flex items-end justify-center gap-8"
        >
          <h1 className="md:text-[10rem] text-5xl">Noah</h1>

          <motion.div
            animate={{
              opacity: [0, 100],
            }}
            transition={{ duration: 2, delay: 1, ease: "easeOut" }}
          >
            <p className="text-sm max-w-[450px]">
              Web Developer with over 3 years of experience working on
              full-stack web applications
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{
            opacity: [0, 100],
          }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="flex md:pl-32 justify-center leading-[192px]"
        >
          <h1 className="md:text-[10rem] text-5xl">Rodriguez</h1>
        </motion.div>

        <motion.div
          id="hero-icons"
          animate={{
            opacity: [0, 100],
          }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="flex justify-center items-center gap-8 pt-8"
        >
          <a href="#" className="border-cyan-500">
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
