import React, { useState } from "react";
import ProjectWidget from "./ProjectWidget";
function Projects() {
  const webProjects = [
    {
      name: "KeeperApp",
      imgLink: "./project-pics/KeeperAppGraphic.png",
      youtubeLink: "",
      gitLink: "https://github.com/BrandonFors/KeeperApp",
      tools: ["React", "Node.js", "Express", "PostgreSQL"],
      description: "This web application allows the user to enter and keep sticky notes on a webpage. " +
      "When the user is logged in, notes are stored using PostgreSQL and accessed/edited using basic CRUD operations and the user id. ",
    },
    {
      name: "TriviaApp",
      imgLink: "./project-pics/TriviaAppGraphic.png",
      youtubeLink: "",
      gitLink: "https://github.com/BrandonFors/TriviaApp",
      tools: ["React", "Node.js", "Express", "MongoDB"],
      description: "This site provides the user with trivia questions through various user selections which eventually lead to "+
      "questions being fetched from a trivia API. If the user chooses to log in, score data is stored using MongoDB. "
    },
    {
      name: "PersonalSite",
      imgLink: "./project-pics/PersonalSiteGraphic.png",
      youtubeLink: "",
      gitLink: "https://github.com/BrandonFors/PersonalSite",
      tools: ["React", "Tailwind"],
      description: "This site was created with React and styled using Tailwind. ",
    },
  ];
  const embeddedProjects = [
    {
      name: "DeskAssist",
      imgLink: "./project-pics/DeskAssist.JPG",
      youtubeLink: "https://youtu.be/a20OJwDagEw",
      gitLink: "https://github.com/BrandonFors/DeskAssist",
      tools: ["C", "FreeRTOS", "ESP-IDF" , "ESP32"],
      description: "DeskAssist was designed to automate desk comfort with a configurable fan/vent system and lamp. " +
      "It has an OLED screen UI on which the user can toggle actuators on/off, turn auto mode on/off, and adjust actuator power. " +
      "This project's firmware was built with EDP-IDF and FreeRTOS for the ESP32 DevKit C. " + 
      "The device also has built in WiFi to get the current time and temperature for South Bend, Indiana. "
    },
    {
      name: "Magnetorquer Wrapper",
      imgLink: "./project-pics/MagnetorquerWrapper.jpg",
      youtubeLink: "https://youtu.be/l4Wngb5zKtM",
      gitLink: "https://github.com/ND-IrishSat/MagnetorquerWrapper",
      tools: ["C++", "Arduino IDE", "Bare Metal"],
      description: "The Magnetorquer Wrapper was made to automate magnetorquer wrapping for IrishSAT's ThinSat team who were constructing a small satellite system. " +
      "The software was written on the Arduino IDE for an Arduino UNO to control two stepper motors using two DRV8825 boards. " + 
      "The two brief demos below show the device wrapping the body of the ThinSat and a magnetorquer. "
    },
  ];

  const aiProjects = [
    {
      name: "Plant Disease Detection",
      imgLink: "./project-pics/PlantDiseaseModel.png",
      youtubeLink: "https://huggingface.co/spaces/BrandonFors/PlantDiseaseDetection",
      gitLink: "https://github.com/BrandonFors/PlantDiseaseModelExperimentNotebooks",
      tools: ["Python", "Pytorch", "Hugging Face" , "TensorBoard"],
      description: "I chose to do this project after learning about pytorch and wanting to apply my knowledge to CV in some way. "+
      "This computer vision model is was trained using pytorch and the hugging face datasets library. " + 
      "The dataset is a precleaned set of various diseases on differnt types of leaves. " + 
      "There is a current demo up on my Hugging Face account. "
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
