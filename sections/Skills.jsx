import React from "react";
import { skillItems } from "@/constants";

const Skills = () => {
  return (
    <div>
      <div className="pb-6">
        <h2 className="text-4xl">Skills</h2>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
        {skillItems.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col gap-2 justify-center items-center skills-container"
          >
            <div className="w-5 h-5">{skill.image}</div>
            <div className="hidden xs:inline">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
