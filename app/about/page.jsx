"use client";

import Arrow from "@/public/icons/Arrow";
import Expand from "@/public/icons/Expand";
import Mail from "@/public/icons/Mail";
import Modal from "@/components/Modal";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Coffee from "@/public/icons/Coffee";
import Image from "next/image";
import { me } from "@/public/images";

const page = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const closed = () => setModalOpen(false);
  const opened = () => setModalOpen(true);

  return (
    <div className="flex justify-center items-center pt-8 text-lg">
      <section
        id="about"
        className="grid md:grid-cols-3 grid-rows-4 gap-4 h-full"
      >
        <motion.div
          className="about-box col-span-1 md:col-span-2"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.9, delay: 0.2 },
          }}
        >
          <div className="flex flex-col gap-2">
            <div className="text-xl">
              <h2>Hello!</h2>
            </div>

            <div className="text-secondaryText">
              <p>
                I'm <span>Noah Rodriguez</span>, a passionate developer focusing
                on <span>full-stack</span> applications. I have over{" "}
                <span>four years</span> of experience developing and maintaining
                user-facing applicaitons.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.a
          href="https://noahrod108.github.io/digitalResume/assets/noah_rodriguez_resume_2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="about-box md:row-span-2 cursor-pointer group"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.9, delay: 0.2 },
          }}
          whileTap={{ scale: 0.8 }}
          whileHover="hover"
        >
          <motion.div className="relative">
            <div className="w-6 h-6 absolute top-0 right-0">
              <Arrow />
            </div>
          </motion.div>
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
          </div>
        </motion.a>
        <motion.div
          className="about-box bg-cyan-500/50 text-xl"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.9, delay: 0.2 },
          }}
        >
          <div className="flex flex-col justify-center items-center text-center h-full">
            <h2>Freelance & Full Stack Developer</h2>
          </div>
        </motion.div>
        <motion.div
          className="about-box md:row-span-2"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.9, delay: 0.2 },
          }}
        >
          <motion.div
            className="flex flex-col justify-evenly items-center gap-2 h-full"
            whileHover={{ scale: 1.1 }}
          >
            <div>
              <Image
                src={me}
                alt="me"
                className="rounded-full border border-stone-800/90 w-52 h-52"
              />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="about-box md:row-span-2"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.9, delay: 0.2 },
          }}
        >
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-[8rem] h-[8rem]">
              <Coffee />
            </div>

            <div className="text-secondaryText">
              <p>
                In my free time you can find me playing tabletop and virtual
                games. I also like to travel and work on my hobbies.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="about-box bg-cyan-500/50 group"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.9, delay: 0.2 },
          }}
          whileHover="hover"
        >
          <a href="mailto:noaherodriguez18@gmail.com">
            <div className="relative">
              <div className="w-6 h-6 absolute top-0 right-0">
                <Arrow />
              </div>
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
        </motion.div>
        <motion.div
          className="about-box md:col-span-2"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.9, delay: 0.2 },
          }}
        >
          <div className="flex flex-col gap-2">
            <div className="text-xl text-secondaryText">
              <h2>Education</h2>
            </div>

            <div className="flex justify-between">
              <div className="text-xl">
                <h2>Purdue university Northwest</h2>
              </div>
              <div>
                <p className="text-secondaryText">2020 - Present</p>
              </div>
            </div>

            <div className="text-secondaryText">
              <p>Bachelor of Science in Computer Information Technology</p>
            </div>
          </div>
        </motion.div>
        {/* Modal */}
        {/* <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => null}
        >
          {modalOpen && <Modal modalOpen={modalOpen} handleClose={closed} />}
        </AnimatePresence> */}
      </section>
    </div>
  );
};

export default page;
