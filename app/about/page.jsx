import React from "react";

const page = () => {
  return (
    <div className="flex h-lvh w-full justify-center items-center">
      <section className="grid grid-cols-3 grid-rows-4 gap-4">
        <div className="about-box col-span-2">
          <div className="flex flex-col p-4 gap-2">
            <div>
              <h2>Hello!</h2>
            </div>

            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus perferendis fugit debitis labore corporis vitae
                suscipit quam iure incidunt quas.
              </p>
            </div>
          </div>
        </div>
        <div className="about-box row-span-2">2</div>
        <div className="about-box">
          <div className="flex flex-col justify-center items-center text-center h-full">
            <h2>Freelance & Full Stack Developer</h2>
          </div>
        </div>
        <div className="about-box row-span-2">
          <div className="flex flex-col justify-evenly items-center p-4 gap-2 h-full">
            <div className="rounded-full border border-stone-800/90 w-16 h-16">
              <img src="" />
            </div>

            <div>
              <p>Noah Rodriguez</p>
            </div>
          </div>
        </div>
        <div className="about-box row-span-2">5</div>
        <div className="about-box">6</div>
        <div className="about-box col-span-2">
          <div className="flex flex-col p-4 gap-2">
            <div>
              <h2>Education</h2>
            </div>

            <div>
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
