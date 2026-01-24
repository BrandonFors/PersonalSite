import React, { useState } from "react";
import SkillsWidget from "./SkillsWidget";

const sections = [
  // proficiency is not used for now
  {
    title: "Programming Languages",
    skillList: [
      { name: "C/C++", proficiency: "green" },
      { name: "Python", proficiency: "green" },
      { name: "JavaScript", proficiency: "green" },
      { name: "Java", proficiency: "green" },
      { name: "HTML/CSS", proficiency: "green" },
      { name: "SQL", proficiency: "green" },
    ],
  },
  {
    title: "Hardware",
    skillList: [
      { name: "Circuit Analysis", proficiency: "green" },
      { name: "Breadboarding", proficiency: "green" },
      { name: "PCB Design", proficiency: "green" },
      { name: "Spectrum Analyzers", proficiency: "green" },
      { name: "Oscilloscopes", proficiency: "green" },
      { name: "Soldering", proficiency: "green" },
    ],
  },
  {
    title: "Frameworks/Libraries",
    skillList: [
      { name: "Pytorch", proficiency: "green" },
      { name: "Sci-Kit Learn", proficiency: "green" },
      { name: "React", proficiency: "green" },
      { name: "Flask", proficiency: "green" },
      { name: "Node.js", proficiency: "green" },
      { name: "Express", proficiency: "green" },
      { name: "Tailwind", proficiency: "green" },
    ],
  },
  {
    title: "Tools",
    skillList: [
      { name: "VS Code", proficiency: "green" },
      { name: "Git", proficiency: "green" },
      { name: "Linux", proficiency: "green"},
      { name: "KiCad", proficiency: "green" },
      { name: "Excel", proficiency: "green" },
      { name: "Vim", proficiency: "green" },
      { name: "Hugging Face", proficiency: "green" },
      { name: "Canva", proficiency: "green" },
      { name: "PostgreSQL", proficiency: "green" },
      { name: "MongoDB", proficiency: "green" },
    ],
  },
];
function Skills() {
  return (
    <div className="flex flex-1 flex-col gap-6">
      <h2 className="text-4xl font-bold">Skills</h2>

      {sections.map((section, index) => {
        return <SkillsWidget key={index} section={section}></SkillsWidget>;
      })}
    </div>
  );
}
export default Skills;
