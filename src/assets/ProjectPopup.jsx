import React from "react";

function ProjectPopup(props) {

  const handleCloseClick = (event) => {
    event.stopPropagation();
    props.exitPopup();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
        <button onClick={handleCloseClick} className="absolute top-2 right-2">
          <img src="./icons/close.svg" className="w-8 h-8" />
        </button>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">{props.name}</h2>
          <p className="text-gray-600">{props.description}</p>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <a
            href={`${props.youtubeLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
           <img src="./icons/youtube.svg" className="w-10 h-10"/>
          </a>
          <a
            href={`${props.gitLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./icons/github.svg" className="w-10 h-10" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectPopup;
