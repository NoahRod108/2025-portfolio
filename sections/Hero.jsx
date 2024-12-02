import React from "react";

const Hero = () => {
  return (
    <div>
      <section
        id="hero"
        className="flex flex-col flex-nowrap h-svh justify-center max-w-[1300px] w-full"
      >
        <div className="flex items-end gap-[135px] h-min w-full">
          <div className="flex flex-col justify-start">
            <h1 className="leading-[.8em]">Noah</h1>
          </div>
          <div>
            <p className="text-[1.2rem] max-w-[450px]">
              Web Developer with over 3 years of experience working on
              full-stack web applications
            </p>
          </div>
        </div>
        <div className="flex gap-4 justify-end">
          <div>
            <h1 className="justify-end">Rodriguez</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
