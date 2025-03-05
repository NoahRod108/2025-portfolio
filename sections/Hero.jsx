"use client";

import React from "react";
import { easeOut, motion } from "framer-motion";
import Github from "@/public/icons/Github";
import Linkedin from "@/public/icons/linkedin";
import Resume from "@/public/icons/Resume";

const Hero = () => {
  return (
    <div className="flex flex-col flex-nowrap h-svh justify-center max-w-[1300px] w-full">
      <section id="hero">
        <motion.div
          animate={{
            opacity: [0, 100],
          }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="flex items-end justify-center gap-8 h-min w-full"
        >
          <div>
            <h1 className="leading-[.8em]">Noah</h1>
          </div>

          <motion.div
            animate={{
              opacity: [0, 100],
            }}
            transition={{ duration: 2, delay: 1, ease: "easeOut" }}
          >
            <p className="text-[1.2rem] max-w-[450px]">
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
          className="flex pl-32 justify-center leading-[192px]"
        >
          <h1>Rodriguez</h1>
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
            <button>
              <Github />
            </button>
          </a>
          <a href="#">
            <button>
              <Linkedin />
            </button>
          </a>
          <a href="#">
            <button>
              <Resume />
            </button>
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
