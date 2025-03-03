import React from "react";
import reactC from "../../public/reactC.png";
import web from "../../public/web.png";
import sqlC from "../../public/sqlC.png";
import NPTELC from "../../public/NPTELC.png";

const Certification = () => {
  const certifications = [
    {
      id: 1,
      image: reactC,
      link: "https://drive.google.com/file/d/12d7Mu9FAnMMbI3pKqlrHulg5S0MF3PYg/view?usp=drive_link",
    },
    {
      id: 2,
      image: web,
      link: "https://drive.google.com/file/d/1j4-1fDKgPRwNFEL0CvLHHZdk4OpfI73_/view?usp=drive_link",
    },
    {
      id: 3,
      image: sqlC,
      link: "https://drive.google.com/your-certificate-link",
    },
    {
      id: 4,
      image: NPTELC,
      link: "https://drive.google.com/file/d/1PwBUKGXqW-53fzEcs_a4pFMOWTLwYa_0/view?usp=sharing",
    },
  ];

  return (
    <div id="Certification" className="max-w-screen-xl  mx-auto px-2 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">My Certifications</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {certifications.map(({ id, image, link }) => (
          <div
            key={id}
            className="bg-white shadow-lg rounded-lg  w-full flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt="Certification"
                className="w-80 h-52 object-cover rounded-md mb-3"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;

