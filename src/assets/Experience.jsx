import React, { useState } from "react";
import ExperienceWidget from "./ExperienceWidget";

function Experience() {
  const experienceList = [
    {
      name: "Notre Dame Undergraduate Research Assistant: Sandwich Lab",
      date: "Jan 2025 - Dec 2025",
      imgLink: "./experience-pics/saNDwichLogo.png",
      description: "Undergraduate research relating to AI applications in HCI."
    },
    {
      name: "Notre Dame Undergraduate Research Assistant: Howard Lab",
      date: "Jan 2026 - Present",
      imgLink: "./experience-pics/notreDameLogo.png",
      description: "Undergraduate research developing firmware for the 'ChemBand' project. We are creating a wearable embedded system that specializes in airborne chemical detection."
    },
  ];
  return (
    <div className="flex items-center flex-col gap-6">
      <h2 className="text-4xl font-bold">Experience</h2>
      <div className="flex flex-col gap-6 justify-center w-auto">
        {experienceList.map((item, index) => {
          return <ExperienceWidget key={index} item={item}></ExperienceWidget>;
        })}
      </div>
    </div>
  );
}
export default Experience;
