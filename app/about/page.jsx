"use client";

import Arrow from "@/public/icons/Arrow";
import Mail from "@/public/icons/Mail";
import { motion } from "framer-motion";
import React from "react";

const page = () => {
  //className="grid grid-cols-3 grid-rows-4 gap-4"
  return (
    <div className="flex h-full w-full justify-center items-center pt-8 text-lg">
      <section id="about" className="grid md:grid-cols-3 grid-rows-4 gap-4">
        <div className="about-box col-span-1 md:col-span-2">
          <div className="flex flex-col gap-2">
            <div className="text-xl">
              <h2>Hello!</h2>
            </div>

            <div className="text-secondaryText">
              <p>
                I'm <span>Noah Rodriguez</span>, a passionate developer focusing
                on <span>full stack</span> applications. I have over{" "}
                <span>four years</span> of experience developing and maintaining
                user-facing applicaitons.
              </p>
            </div>
          </div>
        </div>
        <div className="about-box md:row-span-2 cursor-pointer">
          {/* TODO MODAL */}
          <div className="relative">
            <div className="w-6 h-6 absolute top-0 right-0">
              <Arrow />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center h-full gap-2">
            <div>
              <h2 className="text-xl text-primaryText">
                Professional Experience
              </h2>
            </div>

            <div className="text-secondaryText text-lg">
              <p>Solutions Engineer @ Valparaiso University</p>
              <p className="text-sm">2020 - present</p>
            </div>

            <div>
              {/* <ul className="list-disc p-4">
                <li>
                  I work in a LAMP stack daily. I am experienced with the front
                  and back end of applications.
                </li>
                <li>
                  I work with MySQL and MySQL CLI to manage our databases.
                </li>
                <li>
                  I developed, maintained, and shipped production-ready code for
                  web applications.
                </li>
                <li>
                  I meet with staff and faculty to discuss new features and give
                  guidance on a technical level
                </li>
              </ul> */}
            </div>
          </div>
        </div>
        <div className="about-box bg-cyan-500/50 text-xl">
          <div className="flex flex-col justify-center items-center text-center h-full">
            <h2>Freelance & Full Stack Developer</h2>
          </div>
        </div>
        <div className="about-box md:row-span-2">
          <div className="flex flex-col justify-evenly items-center gap-2 h-full">
            <div className="rounded-full border border-stone-800/90 w-16 h-16">
              <img src="" />
            </div>

            <div className="text-xl">
              <h2>Noah Rodriguez</h2>
            </div>
          </div>
        </div>
        <div className="about-box md:row-span-2">5</div>
        <div className="about-box bg-cyan-500/50 group">
          <a href="mailto:noaherodriguez18@gmail.com">
            <div className="relative">
              <motion.div className="w-6 h-6 absolute top-0 right-0">
                <Arrow />
              </motion.div>
            </div>

            <div className="flex flex-col justify-center items-center h-full">
              <div className="w-10 h-10">
                <Mail />
              </div>

              <div>
                <h2 className="text-xl">Contact Me</h2>
              </div>
            </div>
          </a>
        </div>
        <div className="about-box md:col-span-2">
          <div className="flex flex-col gap-2">
            <div className="text-xl">
              <h2>Education</h2>
            </div>

            <div className="text-secondaryText">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus perferendis fugit debitis labore corporis vitae
                suscipit quam iure incidunt quas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
