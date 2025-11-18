import React, { useState } from "react";

function ExperienceWidget(props) {
  const { name, imgLink, date, description} = props.item;
  return (
    <div className="flex flex-col md:flex-row gap-3 items-start p-3 border rounded-xl shadow-lg">
      <img src={`${imgLink}`} className="max-h-36 rounded-xl" />
      <div className="flex flex-col gap-1 items-start">
        <h2 className="text-xl">{name}</h2>
        <h2 className="text-base font-light	">{date}</h2>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
}
export default ExperienceWidget;
