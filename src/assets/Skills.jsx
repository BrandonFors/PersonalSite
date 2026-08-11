import React, { useState } from "react";
import SkillsWidget from "./SkillsWidget";

const sections = [
  // proficiency is not used for now
  {
    title: "Programming Languages",
    skillList: [
      { name: "C/C++", proficiency: "green" },
      { name: "Python", proficiency: "green" },
      { name: "Java", proficiency: "green" },
    ],
  },
  {
    title: "Embedded Software/Firmware",
    skillList: [
      { name: "FreeRTOS", proficiency: "green" },
      { name: "Yocto Project", proficiency: "green" },
      { name: "Linux Driver Development", proficiency: "green"},
      { name: "CMake", proficiency: "green" },
      { name: "GPIO", proficiency: "green" },
      { name: "SPI", proficiency: "green" },
      { name: "I2C", proficiency: "green" },
      { name: "UART", proficiency: "green" },
      { name: "PWM", proficiency: "green" },
      { name: "Kconfig", proficiency: "green" },
    ],
  },
  {
    title: "Hardware",
    skillList: [
      { name: "ESP32", proficiency: "green"},
      { name: "STM32", proficiency: "green"},
      { name: "RP2040", proficiency: "green"},
      { name: "Circuit Analysis", proficiency: "green" },
      { name: "Breadboarding", proficiency: "green" },
      { name: "PCB Design", proficiency: "green" },
      { name: "KiCad", proficiency: "green" },
      { name: "Spectrum Analyzers", proficiency: "green" },
      { name: "Oscilloscopes", proficiency: "green" },
      { name: "Soldering", proficiency: "green" },
    ],
  },
  {
    title: "General Tools",
    skillList: [
      { name: "VS Code", proficiency: "green" },
      { name: "Git", proficiency: "green" },
      { name: "Linux", proficiency: "green"},
      { name: "Shell Scripting", proficiency: "green" },
      { name: "GitHub Actions", proficiency: "green" },
      { name: "Docker", proficiency: "green" },
      { name: "Vim", proficiency: "green" },
      { name: "Taskfile", proficiency: "green" },
      { name: "Excel", proficiency: "green" },
    ],
  },
  {
    title: "AI/ML",
    skillList: [
      { name: "Pytorch", proficiency: "green" },
      { name: "Scikit-Learn", proficiency: "green" },
      { name: "Hugging Face", proficiency: "green" },
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
