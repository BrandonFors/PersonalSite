import React, { useState } from "react";
import ExperienceWidget from "./ExperienceWidget";

function Experience() {
  const experienceList = [
    {
      name: "Notre Dame Undergraduate Research Assistant: Sandwich Lab",
      date: "Jan 2025-Present",
      imgLink: "./experience-pics/saNDwichLogo.png",
      description: "Undergraduate research relating to AI applications in HCI."
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
