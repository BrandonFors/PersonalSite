import React, { useState } from "react";
import ProjectWidget from "./ProjectWidget";
function Projects() {
  const webProjects = [
    {
      name: "KeeperApp",
      imgLink: "./project-pics/KeeperAppGraphic.png",
      tools: ["React", "Node.js", "Express", "PostgreSQL"],
    },
    {
      name: "TriviaApp",
      imgLink: "./project-pics/TriviaAppGraphic.png",
      tools: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      name: "PersonalSite",
      imgLink: "./project-pics/PersonalSiteGraphic.png",
      tools: ["React", "Tailwind"],
    },
  ];
  const embeddedProjects = [
    {
      name: "DeskAssist",
      imgLink: "",
      tools: ["C", "FreeRTOS", "ESP-IDF" , "ESP32"],
    },
    {
      name: "Magnetorquer Wrapper",
      imgLink: "",
      tools: ["Arduino C", "Arduino IDE", "Bare Metal"],
    },
  ];

  const aiProjects = [
    {
      name: "Plant Disease Detection",
      imgLink: "",
      tools: ["Python", "Pytorch", "Hugging Face" , "TensorBoard"],
    },
  ];
  return (
    <div className="flex items-center flex-col gap-6">
      <h2 className="text-4xl font-bold">Embedded Systems Projects</h2>
      <h3>Click For Details</h3>
      <div className="flex flex-row flex-wrap gap-6 justify-center h-auto">
        {embeddedProjects.map((project, index) => {
          return <ProjectWidget key={index} project={project}></ProjectWidget>;
        })}
      </div>
      <h2 className="text-4xl font-bold">Computer Vision/AI Projects</h2>
      <h3>Click For Details</h3>
      <div className="flex flex-row flex-wrap gap-6 justify-center h-auto">
        {aiProjects.map((project, index) => {
          return <ProjectWidget key={index} project={project}></ProjectWidget>;
        })}
      </div>
      <h2 className="text-4xl font-bold">Web Projects</h2>
      <h3>Click For Details</h3>
      <div className="flex flex-row flex-wrap gap-6 justify-center h-auto">
        {webProjects.map((project, index) => {
          return <ProjectWidget key={index} project={project}></ProjectWidget>;
        })}
      </div>
    </div>
  );
}
export default Projects;
